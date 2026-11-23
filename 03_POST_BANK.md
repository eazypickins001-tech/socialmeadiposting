# 03 — POST BANK

Every post lives here, in publication order. One block per post, in the exact
format defined in `_SHARED/post-anatomy.md`. Chapter order = posting order.

Workflow:

```bash
node tools/new-post.js "Working Title" --pillar "Pillar" --interrupt 7 --clips 6
node tools/validate-posts.js 03_POST_BANK.md
```

Never split a post across files. The post is the single production record.

**`Length:` is the content runtime only.** Every published post adds the
project's intro (≤1.5 s) and outro (1.5–3 s) on top — see
`_SHARED/intro-outro.md`.

---

## Status key

| Mark | Meaning |
|---|---|
| *(no mark)* | drafted |
| `[SCRIPTED]` | narration and clips locked |
| `[RENDERED]` | all clips generated, awaiting edit |
| `[PUBLISHED YYYY-MM-DD]` | live — log it in `05_PROOF_TRACKER.md` |

---

## The block (reference)

```markdown
## POST 01 — "Title Of The Post"
**Pillar:** [pillar name]
**Interrupt:** [01–12] — [category name]
**Psychographic:** [who this is for, in one line]
**Hook:** "[the first spoken line]"
**Length:** [NN]s
**Model:** [Omni|Veo]

**Clips:**

| # | Time | Dur | Visual | Overlay | Narration |
|---|------|-----|--------|---------|-----------|
| 1 | 0:00–0:06 | 6s | [full six-part prompt + negative] | [text or —] | [line] |

**Post Text:** [caption body]

**Comments:**
1. [question]
2. [question]
3. [question]

**CTA:** [one line, one destination]
```

---

<!-- Posts start below. Add new posts at the bottom of the file. -->
