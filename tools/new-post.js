#!/usr/bin/env node
/**
 * new-post.js — scaffold a post block and append it to the post bank.
 *
 * Usage:
 *   node tools/new-post.js "Title" --pillar "Pillar" --interrupt 7 \
 *     [--model Veo] [--style story|social] [--clips 6] [--clip-len 8] \
 *     [--file 03_POST_BANK.md]
 *
 * Exit codes: 0 success, 1 bad input.
 */

const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const config = JSON.parse(fs.readFileSync(path.join(__dirname, "config.json"), "utf8"));

const CATEGORY_NAMES = {
  1: "Gravity & Physics",
  2: "Scale & Proportion",
  3: "Time Manipulation",
  4: "Glitch & Corruption",
  5: "Material & Texture",
  6: "Mirror & Symmetry",
  7: "Impossible Objects",
  8: "Body & Anatomy",
  9: "Camera & Perspective",
  10: "Emotion & Expectation",
  11: "Light & Color",
  12: "Typography & Text",
};

function die(message) {
  console.error("ERROR: " + message);
  process.exit(1);
}

function parseArgs(argv) {
  const out = { _: [] };
  for (let i = 0; i < argv.length; i++) {
    const token = argv[i];
    if (token.startsWith("--")) {
      const key = token.slice(2);
      const next = argv[i + 1];
      if (next === undefined || next.startsWith("--")) {
        out[key] = true;
      } else {
        out[key] = next;
        i++;
      }
    } else {
      out._.push(token);
    }
  }
  return out;
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function formatTime(totalSeconds) {
  const m = Math.floor(totalSeconds / 60);
  const s = totalSeconds % 60;
  return `${m}:${String(s).padStart(2, "0")}`;
}

function nextPostNumber(content) {
  const lines = content.split(/\r?\n/);
  let inFence = false;
  const numbers = [];
  for (const line of lines) {
    if (/^\s*```/.test(line)) {
      inFence = !inFence;
      continue;
    }
    if (inFence) continue;
    const match = line.match(/^##\s+POST\s+(\d+)/i);
    if (match) numbers.push(parseInt(match[1], 10));
  }
  return numbers.length === 0 ? 1 : Math.max(...numbers) + 1;
}

function main() {
  const args = parseArgs(process.argv.slice(2));
  const title = args._[0];
  if (!title) die('missing title. Usage: node tools/new-post.js "Title" --pillar "X" --interrupt 7');

  const pillar = args.pillar;
  if (!pillar || pillar === true) die("missing --pillar");

  const interruptRaw = parseInt(args.interrupt, 10);
  if (!Number.isInteger(interruptRaw) || interruptRaw < 1 || interruptRaw > 12) {
    die("--interrupt must be a number 1-12");
  }
  const interrupt = `${String(interruptRaw).padStart(2, "0")} — ${CATEGORY_NAMES[interruptRaw]}`;

  const model = args.model || config.defaultModel || "Veo";
  const maxClip = config.maxClipSeconds[model] ?? config.maxClipSeconds.default;
  const style = args.style === "social" ? "social" : "story";

  let clipCount = args.clips ? parseInt(args.clips, 10) : style === "social" ? 4 : 6;
  if (!Number.isInteger(clipCount) || clipCount < 2 || clipCount > 12) {
    die("--clips must be an integer 2-12");
  }

  let clipLen = args["clip-len"] ? parseFloat(args["clip-len"]) : style === "social" ? 6 : 8;
  if (!Number.isFinite(clipLen) || clipLen <= 0) die("--clip-len must be a positive number");
  if (clipLen > maxClip) {
    console.warn(`WARN: ${clipLen}s exceeds ${model} max of ${maxClip}s — clamped to ${maxClip}s.`);
    clipLen = maxClip;
  }

  const file = path.resolve(ROOT, args.file || "03_POST_BANK.md");
  if (!fs.existsSync(file)) die(`file not found: ${file}`);

  const content = fs.readFileSync(file, "utf8");
  const number = nextPostNumber(content);
  const numberPadded = String(number).padStart(2, "0");

  const rows = [];
  for (let i = 0; i < clipCount; i++) {
    const start = i * clipLen;
    const end = start + clipLen;
    const job =
      style === "social"
        ? ["GRAB", "LABEL", "TEACH", "PROOF", "CTA", "CTA 2", "EXTRA", "EXTRA"][i] || "EXTRA"
        : ["HOOK", "SETUP", "TURN", "TURN 2", "PAYOFF", "CLOSE", "EXTRA", "EXTRA"][i] || "EXTRA";
    rows.push(
      `| ${i + 1} | ${formatTime(start)}–${formatTime(end)} | ${clipLen}s | ` +
        `[${job} — 9:16 vertical, locked camera. Subject: ... Effect (verb + direction): ... ` +
        `Environment and light: ... Style and palette: ... NEGATIVE: ...] | ` +
        `— | — |`
    );
  }

  const total = clipCount * clipLen;

  const block = [
    "",
    `## POST ${numberPadded} — "${title}"`,
    `**Pillar:** ${pillar}`,
    `**Interrupt:** ${interrupt}`,
    `**Psychographic:** [who this is for, in one line]`,
    `**Hook:** "[the first spoken line]"`,
    `**Length:** ${total}s`,
    `**Model:** ${model}`,
    "",
    "**Clips:**",
    "",
    "| # | Time | Dur | Visual | Overlay | Narration |",
    "|---|------|-----|--------|---------|-----------|",
    ...rows,
    "",
    "**Post Text:** [caption body — first line is the hook]",
    "",
    "**Comments:**",
    "1. [specific, answerable question]",
    "2. [specific, answerable question]",
    "3. [specific, answerable question]",
    "",
    "**CTA:** [one line, one destination]",
    "",
  ].join("\n");

  fs.writeFileSync(file, content.replace(/\s*$/, "\n") + block, "utf8");

  console.log(`Created POST ${numberPadded} — "${title}"`);
  console.log(`  file:      ${path.relative(ROOT, file)}`);
  console.log(`  pillar:    ${pillar}`);
  console.log(`  interrupt: ${interrupt}`);
  console.log(`  style:     ${style} (${clipCount} clips × ${clipLen}s = ${total}s)`);
  console.log(`  model:     ${model} (max ${maxClip}s/clip)`);
  console.log("");
  console.log("Next: fill every [bracket], then run:");
  console.log(`  node tools/validate-posts.js ${path.relative(ROOT, file)}`);
}

main();
