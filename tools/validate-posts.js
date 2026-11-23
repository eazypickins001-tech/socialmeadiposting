#!/usr/bin/env node
/**
 * validate-posts.js — strict pre-render check for post banks.
 *
 * Usage:
 *   node tools/validate-posts.js 03_POST_BANK.md
 *   node tools/validate-posts.js examples/*.md
 *
 * Exit codes: 0 = pass, 1 = at least one failure.
 *
 * Rules are documented in README.md and _SHARED/post-anatomy.md.
 */

const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const config = JSON.parse(fs.readFileSync(path.join(__dirname, "config.json"), "utf8"));

const HEADER = /^##\s+POST\s+(\d+)\s*[—–-]\s*"?(.*?)"?\s*$/i;
const FIELD = /^\*\*(Pillar|Interrupt|Psychographic|Hook|Length|Model|Post Text|CTA):\*\*\s*(.*)$/i;
const COMMENT = /^\s*(\d+)\.\s+(.*)$/;
const TIME = /(\d+):(\d{2})\s*[–—\-]\s*(\d+):(\d{2})/;
const DUR = /(\d+(?:\.\d+)?)\s*s/i;
const INTERRUPT = /^(\d{1,2})\s*[—–\-]\s*(.+)$/;

function readArgs() {
  const args = process.argv.slice(2).filter((a) => !a.startsWith("--"));
  const files = args.length > 0 ? args : ["03_POST_BANK.md"];
  return files.map((f) => (path.isAbsolute(f) ? f : path.resolve(process.cwd(), f)));
}

function splitPosts(filePath) {
  if (!fs.existsSync(filePath)) {
    return { error: `file not found: ${filePath}` };
  }
  const lines = fs.readFileSync(filePath, "utf8").split(/\r?\n/);
  const posts = [];
  let current = null;
  let inFence = false;

  for (const line of lines) {
    if (/^\s*```/.test(line)) {
      inFence = !inFence;
      continue;
    }
    if (inFence) continue;

    const header = line.match(HEADER);
    if (header) {
      if (current) posts.push(current);
      current = { number: parseInt(header[1], 10), title: header[2] || "(untitled)", lines: [] };
      continue;
    }
    if (current) current.lines.push(line);
  }
  if (current) posts.push(current);
  return { posts };
}

function parsePost(post) {
  const out = {
    number: post.number,
    title: post.title,
    fields: {},
    comments: [],
    rows: [],
    hasClipsMarker: false,
  };
  let inClips = false;

  for (const line of post.lines) {
    if (/^\*\*Clips:\*\*\s*$/i.test(line.trim())) {
      out.hasClipsMarker = true;
      inClips = true;
      continue;
    }
    if (/^\*\*/.test(line) && !/^\*\*Clips/.test(line)) {
      inClips = false;
    }

    const field = line.match(FIELD);
    if (field) {
      out.fields[field[1].toLowerCase()] = field[2].trim();
      continue;
    }

    const comment = line.match(COMMENT);
    if (comment) {
      out.comments.push(comment[2].trim());
      continue;
    }

    if (inClips && /^\s*\|/.test(line)) {
      const cells = line.split("|").slice(1, -1).map((c) => c.trim());
      if (cells.length < 6) continue;
      if (/^#?$/.test(cells[0]) && /^time$/i.test(cells[1] || "")) continue;
      if (/^[-: ]+$/.test(cells.join(""))) continue;
      out.rows.push(cells);
    }
  }
  return out;
}

function parseTimeCell(cell) {
  const m = cell.match(TIME);
  if (!m) return null;
  return {
    start: parseInt(m[1], 10) * 60 + parseInt(m[2], 10),
    end: parseInt(m[3], 10) * 60 + parseInt(m[4], 10),
  };
}

function isPlaceholder(text) {
  return !text || /\[[^\]]*\]/.test(text);
}

function validatePost(raw, state) {
  const post = parsePost(raw);
  const fail = [];
  const warn = [];
  const f = post.fields;
  const label = `POST ${String(post.number).padStart(2, "0")} — "${post.title}"`;

  for (const key of ["pillar", "interrupt", "psychographic", "hook", "length", "model"]) {
    if (!f[key]) fail.push(`missing **${key}** field`);
  }

  let category = null;
  if (f.interrupt) {
    const m = f.interrupt.match(INTERRUPT);
    if (!m) {
      fail.push(`Interrupt must be "NN — Category name" (got "${f.interrupt}")`);
    } else {
      category = parseInt(m[1], 10);
      if (category < 1 || category > 12) fail.push(`Interrupt number ${category} is outside 01–12`);
    }
  }

  if (f.model && !(config.maxClipSeconds[f.model] !== undefined)) {
    fail.push(`Model "${f.model}" not in tools/config.json maxClipSeconds`);
  }
  const maxClip =
    config.maxClipSeconds[f.model] ?? config.maxClipSeconds.default ?? 8;

  if (!post.hasClipsMarker) fail.push('missing "**Clips:**" section');
  if (post.rows.length === 0) fail.push("no clip rows parsed");

  let previousEnd = null;
  let firstStart = null;
  let totalDur = 0;

  post.rows.forEach((cells, index) => {
    const [num, timeCell, durCell, visual] = cells;
    const where = `clip ${index + 1}`;

    if (parseInt(num, 10) !== index + 1) {
      warn.push(`${where}: number column is "${num}", expected ${index + 1}`);
    }

    const range = parseTimeCell(timeCell);
    if (!range) {
      fail.push(`${where}: unparseable Time "${timeCell}" (want m:ss–m:ss)`);
    } else {
      if (index === 0) firstStart = range.start;
      if (range.end <= range.start) fail.push(`${where}: Time end is not after start`);
      if (previousEnd !== null && range.start !== previousEnd) {
        warn.push(
          `${where}: starts at ${range.start}s but previous clip ended at ${previousEnd}s`
        );
      }
      previousEnd = range.end;

      const durMatch = durCell.match(DUR);
      if (!durMatch) {
        fail.push(`${where}: unparseable Dur "${durCell}" (want Ns)`);
      } else {
        const dur = parseFloat(durMatch[1]);
        totalDur += dur;
        if (Math.abs(dur - (range.end - range.start)) > 0.5) {
          warn.push(
            `${where}: Dur ${dur}s does not match Time range (${range.end - range.start}s)`
          );
        }
        if (dur > maxClip) {
          fail.push(`${where}: ${dur}s exceeds ${f.model || "model"} max of ${maxClip}s`);
        }
      }
    }

    const generated = !/^no generation/i.test(visual || "");
    if (generated) {
      if (!/NEGATIVE:/i.test(visual || "")) warn.push(`${where}: visual has no NEGATIVE prompt`);
      if (
        !/locked camera/i.test(visual || "") &&
        !/whip|dolly|pan|zoom|push|pull|track/i.test(visual || "")
      ) {
        warn.push(`${where}: visual does not specify a locked camera`);
      }
      if (!/9:16/i.test(visual || "")) warn.push(`${where}: visual does not specify 9:16`);
    }
  });

  if (firstStart !== null && firstStart !== 0) {
    fail.push(`first clip must start at 0:00 (got ${firstStart}s)`);
  }

  const declaredLength = f.length ? (f.length.match(/(\d+(?:\.\d+)?)/) || [])[1] : null;
  if (declaredLength) {
    const tolerance = config.lengthToleranceSeconds ?? 1;
    if (Math.abs(totalDur - parseFloat(declaredLength)) > tolerance) {
      warn.push(
        `clip durations total ${totalDur}s but **Length:** says ${declaredLength}s`
      );
    }
  }

  const expectedComments = config.commentsPerPost ?? 3;
  if (post.comments.length < expectedComments) {
    fail.push(`only ${post.comments.length} comments, expected ${expectedComments}`);
  } else if (post.comments.length > expectedComments) {
    warn.push(`${post.comments.length} comments, expected ${expectedComments}`);
  }
  if (post.comments.some(isPlaceholder)) warn.push("a comment is still a placeholder");

  if (!f["post text"]) fail.push("missing **Post Text:**");
  else if (isPlaceholder(f["post text"])) warn.push("Post Text is still a placeholder");

  if (!f.cta) fail.push("missing **CTA:**");
  else if (isPlaceholder(f.cta)) warn.push("CTA is still a placeholder");

  if (f.pillar && isPlaceholder(f.pillar)) warn.push("Pillar is still a placeholder");
  if (f.psychographic && isPlaceholder(f.psychographic)) {
    warn.push("Psychographic is still a placeholder");
  }
  if (f.hook && isPlaceholder(f.hook)) warn.push("Hook is still a placeholder");

  if (state.lastCategory !== null && category !== null && category === state.lastCategory) {
    fail.push(
      `Interrupt category ${String(category).padStart(2, "0")} repeats the previous post`
    );
  }
  if (category !== null) state.lastCategory = category;

  state.pillarCounts.set(f.pillar || "(missing)", (state.pillarCounts.get(f.pillar || "(missing)") || 0) + 1);

  return { label, fail, warn };
}

function main() {
  const files = readArgs();
  const state = { lastCategory: null, pillarCounts: new Map() };
  let failures = 0;
  let warnings = 0;
  let postsChecked = 0;
  const seenNumbers = new Map();

  for (const file of files) {
    const result = splitPosts(file);
    if (result.error) {
      console.error(`FAIL  ${result.error}`);
      failures++;
      continue;
    }
    console.log(`\n== ${path.relative(process.cwd(), file) || file} ==`);
    if (result.posts.length === 0) {
      console.log("  (no posts found — nothing to validate)");
      continue;
    }

    for (const raw of result.posts) {
      postsChecked++;
      const key = `${file}#${raw.number}`;
      if (seenNumbers.has(key)) console.warn(`WARN  duplicate post number ${raw.number} in ${file}`);
      seenNumbers.set(key, true);

      const { label, fail, warn } = validatePost(raw, state);
      failures += fail.length;
      warnings += warn.length;
      if (fail.length === 0) {
        console.log(`  PASS  ${label}` + (warn.length ? `  (${warn.length} warning)` : ""));
      } else {
        console.log(`  FAIL  ${label}`);
      }
      for (const message of fail) console.log(`        FAIL  ${message}`);
      for (const message of warn) console.log(`        WARN  ${message}`);
    }
  }

  if (config.pillarMix && config.pillarMix.enabled) {
    const total = [...state.pillarCounts.values()].reduce((a, b) => a + b, 0);
    console.log("\n== pillar mix ==");
    for (const [pillar, count] of state.pillarCounts) {
      const actual = ((count / total) * 100).toFixed(0);
      const target = config.pillarMix.targets[pillar];
      const note = target === undefined ? "(no target)" : `target ${target}%`;
      console.log(`  ${pillar}: ${actual}% ${note}`);
    }
  }

  console.log(
    `\n${failures === 0 ? "PASS" : "FAIL"} — ${postsChecked} post(s), ` +
      `${failures} failure(s), ${warnings} warning(s)`
  );
  process.exit(failures === 0 ? 0 : 1);
}

main();
