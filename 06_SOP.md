# 06 — SOP (standard operating procedure)

> Fill the toolchain and rhythm once per project. The stages themselves do not
> change — they are the template.

---

## 1. Toolchain

| Job | Tool | Notes |
|---|---|---|
| Video generation | Omni / Veo / Kling | 4–8 s clips; locked camera |
| Stills (props, textures, inserts) | Flux / Midjourney / Ideogram | Edit a near-miss over regenerating |
| Editing + text + captions | CapCut | All text is built here, never generated |
| Intro & outro | CapCut / After Effects | Built once per project; see `_SHARED/intro-outro.md` |
| Data, maps, numbers | After Effects / CapCut | Never AI-generate figures |
| Voice | ElevenLabs (locked settings) | One voice per project |
| Archive / real footage | Licensed stock / public domain | Never AI |
| Storage | Project Drive folder | Mirror of git-tracked files only |
| Repo | GitHub | Source of truth for words and prompts |

**Rule:** video, audio and footage never enter git. If a file is over ~5 MB it
does not belong in the repo.

---

## 2. Weekly rhythm

| Day | Work |
|---|---|
| Mon | Pick topics; check rotation; write hooks |
| Tue | Write clip tables and prompts for the week |
| Wed | Generate AI clips (batch by category/technique) |
| Thu | Edit, add text, build proof frames, voice |
| Fri | Publish the strongest post; schedule the rest |
| Sat | Community: reply, pin, collect comments for next week |
| Sun | Log numbers; weekly review; update the queue |

Adjust to the cadence in `00_DNA.md`, but keep **one** publishing day and
**one** review day.

---

## 3. Per-post pipeline

```
1 PLAN      topic → pillar → category (differs from last post) → hook
2 SCRIPT    clip table, one irreversible action per clip
3 PROMPT    six parts + negatives, continuity clause, palette clause
4 VALIDATE  node tools/validate-posts.js 03_POST_BANK.md
5 GENERATE  AI clips first; proof clips are real screenshots
6 EDIT      text, chyron, REC/timecode, tears, sound design
7 ASSEMBLE  wrap with the project's intro and outro (built once, never re-made)
8 CAPTION   platform captions + hashtags + pinned comment
9 PUBLISH   publish, pin immediately, reply
10 LOG      row in 05_PROOF_TRACKER.md at 24h / 7d / 30d
```

---

## 4. Quality gates (all must pass before render)

**Script gate**

- [ ] Hook is the interrupt, inside 0.8 s
- [ ] One idea only
- [ ] Payoff delivered before the CTA
- [ ] Category differs from the previous post
- [ ] Pillar respects the standing instruction

**Prompt gate**

- [ ] Six parts present, in order
- [ ] Effect stated as verb + direction
- [ ] Camera locked or motion explicitly resolved
- [ ] Negative prompt on every clip
- [ ] Continuity clause on every returning character
- [ ] No text requested from the model
- [ ] Clip within the model limit

**Integrity gate**

- [ ] Proof is real
- [ ] No AI standing in for archive or evidence
- [ ] No fabricated documents
- [ ] No identifiable person in a negative context
- [ ] Sources ready for every claim that matters

**Packaging gate**

- [ ] Intro is the project's own, ≤1.5 s, hard-cut into Clip 1
- [ ] Outro is the project's own, 1.5–3 s, one CTA, no seam from the last clip
- [ ] Intro and outro are the same files used on every other post
- [ ] Audio logo lands on the same frame as every other post
- [ ] Published runtime (content + intro + outro) is still inside the target
- [ ] Avatar-style motifs and captions read at 40 px and on mute

**Publish gate**

- [ ] Caption's first line is the hook
- [ ] 8–12 hashtags across three tiers
- [ ] Pinned comment ready
- [ ] Logged in the tracker

---

## 5. Batch production (the efficiency rule)

Batch by **technique**, not by post:

1. Generate every "floating object" clip in one session.
2. Generate every "paper collage" clip in one session.
3. Then assemble per post.

This keeps the model's look consistent across the catalogue and cuts generation
time roughly in half.

---

## 6. Failure handling

| Failure | Fix |
|---|---|
| Camera drift | Add `locked camera, no zoom pan tilt or rotation`; move the effect to the subject |
| Text garbled in generation | Remove all text from the prompt; build it in the editor |
| Subject too small in frame | State scale explicitly: "filling the frame", "occupying the lower two-thirds" |
| Character changes between clips | Paste the continuity clause verbatim, every clip |
| Effect looks decorative | Re-read the selection matrix; the category must mean something |
| Post underperforms | Check 3s hold first. Low hold = hook. High hold + low completion = payoff |

---

## 7. Repo hygiene

- Commit posts as they are written; the episode/post number in the message.
- Never hand-edit generated files.
- Update the standing instruction in the same commit as the evidence.
- When a rule conflicts with a newer decision, update the manual in the same
  commit — never leave the repo self-contradictory.
