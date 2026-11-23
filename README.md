# socialmeadiposting — the content-repo template

A reusable operating manual for building short-form video channels that **stop
the scroll in the first 0.8 seconds** and then keep the promise.

This repo is not a channel. It is the **format** every channel repo is built
from. Clone it, fill the fill-in files for one project, and you have a complete
production system: strategy, prompts, captions, tracking and QA.

**Stack:** words and prompts only — no video or audio in git. Written for
AI video generation (Omni ≤10 s/clip, Veo ≤8 s/clip) and edited in CapCut /
After Effects / Canva.

---

## Quick start — new project in four steps

```bash
# 1. Create the project repo from this template (GitHub UI: "Use this template")
git clone https://github.com/<you>/<new-project>.git
cd <new-project>

# 2. Fill the four project files
#    00_DNA.md         competitor audit + format spec
#    01_PILLARS.md     pillars + standing instruction (mix ratio)
#    02_BRAND_SKIN.md  design this project's own skin (method + examples)
#    06_SOP.md         your production + publishing rhythm

# 3. Scaffold posts
node tools/new-post.js "The Empty Chair" --pillar "The hidden story" --interrupt 5

# 4. Validate before you render
node tools/validate-posts.js 03_POST_BANK.md
```

If you prefer a clean copy without git history:

```bash
git clone <this-repo> my-project && cd my-project && rm -rf .git && git init
```

---

## Document map

| File | Governs | Status in a new project |
|---|---|---|
| `README.md` | This manual: what lives where, the workflow | Done — read it |
| `AGENTS.md` | Instructions for any AI assistant working in the repo | Done — read it |
| `_SHARED/interrupt-taxonomy.md` | The 12 categories, 58 techniques, prompts, negatives | **Do not edit** |
| `_SHARED/prompt-formula.md` | Six-part prompt skeleton, clip limits, integrity rules | **Do not edit** |
| `_SHARED/hook-architecture.md` | Hook timing, formulas, rotation, proof loop | **Do not edit** |
| `_SHARED/post-anatomy.md` | The canonical post block the tools parse | **Do not edit** |
| `_SHARED/intro-outro.md` | How to build the intro and outro once and reuse them | **Do not edit** |
| `00_DNA.md` | Competitor audit, gap map, format spec, guardrails | **Fill in** |
| `01_PILLARS.md` | Pillars, standing instruction, topic queue | **Fill in** |
| `02_BRAND_SKIN.md` | Skin design method + five worked examples (unique per project) | **Fill in** |
| `03_POST_BANK.md` | Every post: hook, prompt table, caption, comments, CTA | Build it |
| `04_CAPTIONS.md` | Platform captions, hashtag tiers, pinned comments | Fill in |
| `05_PROOF_TRACKER.md` | Views, holds, follows, shares per post | Log weekly |
| `06_SOP.md` | Production and publishing checklist | Fill in |
| `examples/` | Three finished posts from real projects | Reference only |
| `tools/` | `new-post.js`, `validate-posts.js` | Run them |

**`_SHARED/` is the engine.** Copy it into every project and keep it identical.
When the engine improves, update it everywhere — never fork it per project.

---

## The workflow

### Stage 0 — Setup (once per project)

1. Fill `00_DNA.md` — who is winning, what they miss, what you will do instead.
2. Fill `01_PILLARS.md` — 3–8 pillars, one standing instruction (the mix ratio
   the data supports), a topic queue of 30+ ideas.
3. Fill `02_BRAND_SKIN.md` — design this project's own skin: one archetype,
   then its palette, type, five fingerprints, motion grammar, voice, handles,
   bios, avatar and banner specs. Every project gets a different skin.
4. **Build the intro and outro once**, following `_SHARED/intro-outro.md`:
   0.5–1.5 s intro, 1.5–3 s outro, one audio logo, exported and saved as a
   reusable template. Every post reuses them unchanged.
5. Fill `04_CAPTIONS.md` — caption templates and the hashtag tiers.
6. Fill `06_SOP.md` — your weekly rhythm and toolchain.
7. Configure the validator: `tools/config.json` (max clip length, expected
   comment count, mix ratio).

### Stage 1 — Topic → post

1. Pull the next topic from `01_PILLARS.md`, respecting the standing instruction.
2. Choose the INTERRUPT category from the **content** using the selection matrix
   in `_SHARED/interrupt-taxonomy.md` Part 3.
3. Check the category is not the same as the previous two posts.
4. Scaffold with `node tools/new-post.js ...` (or paste the block from
   `_SHARED/post-anatomy.md`).

### Stage 2 — Write the clips

1. Write the hook first. It is the interrupt, not the setup.
2. Build the clip table: one irreversible action per clip.
3. Write every `Visual` cell with the six-part formula + negative prompt.
4. Paste the character continuity clause on every returning character.
5. Write the payoff clip before the CTA clip. Never tease what you will not pay.

### Stage 3 — Generate

1. Generate AI clips first; assemble second.
2. Wrap the assembled clips with the project's intro and outro. They are built
   once in Stage 0 and never re-designed per post.
3. Build text, numbers, labels and proof frames **in the editor**, never in the
   model.
4. Use the 4-pass rule: composition → lighting → palette → final.
5. Prefer editing a near-miss over regenerating.

### Stage 4 — Captions and publish

1. Apply `04_CAPTIONS.md` templates; the first caption line is the hook.
2. Stagger posts; the strongest one goes out first.
3. Log the post in `05_PROOF_TRACKER.md`.
4. Reply to every comment for the first 90 days, as a human.

### Stage 5 — Learn

1. Update `05_PROOF_TRACKER.md` at 24 h, 7 d and 30 d.
2. When the data contradicts a pillar assumption, update the **standing
   instruction** in `01_PILLARS.md` with the evidence and the date.
3. Fold hook learnings back into the project notes — and, if the lesson is
   general, into `_SHARED/hook-architecture.md` here.

---

## Tools

```bash
node tools/new-post.js "Title" --pillar "Pillar" --interrupt 7 [--model Veo] [--clips 6] [--file 03_POST_BANK.md]
```
Appends a scaffolded post block with the correct clip table and timing.

```bash
node tools/validate-posts.js 03_POST_BANK.md [more.md ...]
```
Checks, per post:

- required fields present and parseable
- every clip duration within the model limit (`Omni` 10 s / `Veo` 8 s)
- the first clip starts at `0:00` (the interrupt must open the video)
- times are contiguous (no gaps, no overlaps)
- finished length matches `**Length:**`
- `Interrupt` is a valid `01–12` category
- no two consecutive posts share an INTERRUPT category
- exactly three comments
- CTA present
- (optional) pillar mix against `tools/config.json`

Exit code 0 = pass, 1 = failures. It is deliberately strict: a failing validator
means the post is not ready to render.

---

## Guardrails — non-negotiable

**Integrity**

1. **Proof is real.** Never AI-generate an analytics screenshot, review,
   certificate or client result.
2. **Archive is real.** AI never stands in for a historical photograph or real
   event.
3. **No fabricated documents.** Records stay illegible or are licensed real.
4. **Absence over depiction.** No identifiable person in a negative context, no
   violence, no bodies.
5. **Sources for claims.** Anything that matters gets a source in the caption.

**Craft**

6. No "hey guys", no logo intros, no "in this video we will".
7. Never shorter than the promise in the title.
8. One idea per post. One CTA per post.
9. Never two consecutive posts in the same INTERRUPT category.
10. Text is never generated by the model.

---

## What does not live here

- Video, audio, project files, stock footage — excluded by `.gitignore`
- Project-specific strategy — that lives in `00_DNA.md` in the **project** repo,
  not in this template
- Secrets, API keys, customer data — never

If a file is bigger than ~5 MB, it does not belong in a content repo.
