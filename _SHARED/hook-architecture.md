# Hook Architecture — the first three seconds, and everything after

> **The engine.** Identical in every project. Project pillars live in `01_PILLARS.md`.

---

## 1. The three triggers

Every hook activates at least one. Strong hooks activate one **cleanly**; mixing
two usually muddles both.

| Trigger | What the brain does | Mechanisms |
|---|---|---|
| **Reality violation** | Detects an error and stops to resolve it | Impossible physics, impossible objects, material swaps, broken anatomy |
| **Signal salience** | Cannot ignore something loud, novel or emotionally charged | Glitch, extreme contrast, neon, sudden silence, a distressed face |
| **Open loop** | Must close an incomplete pattern | A door, a mask mid-crack, an interrupted action, an unanswered question |

---

## 2. The timing

```
0.0–0.8 s   INTERRUPT    the impossible first frame. No narration needed yet.
0.8–1.5 s   IDENTITY     why this is about the viewer.
1.5–3.0 s   OPEN LOOP    the question the video will answer.
3.0 s +     PAYOFF       the answer, delivered cleanly.
final       CTA          one line. one destination.
```

**Two shapes**, both valid — choose by length:

**Social post (22–35 s)** — 4 to 6 clips
```
Clip 1  GRAB     0:00–0:04   pattern-interrupt visual, often music only
Clip 2  LABEL    0:04–0:10   the category / first teaching line
Clip 3  TEACH    0:10–0:16   the mechanism
Clip 4  PROOF    0:16–0:22   the receipt (real screenshot / result)
Clip 5  CTA      0:22–0:28   one call to action
```

**Story post (40–60 s)** — 6 to 8 clips
```
Clip 1  HOOK     0:00–0:08   the interrupt + the claim
Clip 2  SETUP    0:08–0:16   the identity / stakes
Clip 3  TURN     0:16–0:24   the mechanism or the contradiction
Clip 4  TURN 2   0:24–0:32   escalate — "it gets stranger"
Clip 5  PAYOFF   0:32–0:40   deliver the promise
Clip 6  CLOSE    0:40–0:48   why it matters to the viewer + CTA
```

---

## 3. Hook formulas that work

Use these as sentence patterns. They are the grammar of the first line.

| Formula | Pattern | Example |
|---|---|---|
| **Lead with the shock** | State the impossible fact first, context later | "You've been stabbed six times right now." |
| **Second person** | Put the viewer inside it | "Your body is doing this while you read." |
| **Numeric specificity** | A real number reads as evidence | "574,688 views. One post. No ads." |
| **Superlative + contradiction** | Two ideas that cannot co-exist | "The gentle teacher who destroyed a nation." |
| **Contrarian** | Deny what the audience assumes | "You don't have a content problem." |
| **Forbidden knowledge** | Imply insider access | "What they don't teach you in biology class." |
| **Scale shift** | Make the ordinary enormous or tiny | "This happens 10,000 times while you read this." |
| **Loss aversion** | Name what is being lost | "This is costing you every video you post." |
| **Unfinished action** | Start mid-event | "She didn't drop out. Something happened." |
| **Identity trigger** | Name the viewer's role | "If you're a parent, watch this twice." |

**The first line of the caption is the hook too.** The caption and the on-screen
text must hit with the same punch — never write a caption that starts with
context while the video starts with the shock.

---

## 4. The five reactions (quality bar)

Every post should create at least one. If it creates none, it is not finished.

1. "Wait, what?"
2. "That could be me."
3. "I never thought about it that way."
4. "Is this true?"
5. "I need to send this to someone."

Reaction 5 is the growth engine. Reaction 1 is the retention engine.

---

## 5. Payoff discipline

- **The payoff must be delivered on screen.** A hook that teases and does not
  pay teaches the audience to distrust the channel. That costs more than the
  view gains.
- **Never resolve the open loop early.** Close it in the last third.
- **One idea per post.** If it needs two ideas, it is two posts.
- **Never write a title shorter than the promise the video keeps.**
- **Do not end on a clean wrap-up sentence.** End on an open image or a
  question. (Ending on a question is not the same as failing to pay off — pay
  off the promise, then open the next loop.)

---

## 6. CTA rules

- **One CTA per post.** Not two.
- **Soft and context-specific.** Match the CTA to the content: "Follow for the
  next one", "Send this to a girl who needs it", "Free guide, link in bio."
- **Do not sell in every post.** Roughly one conversion post in five.
- **Service and education content is opportunity content first, advertising
  second.**
- The CTA line is also spoken in the final clip, not only written.

---

## 7. The proof loop

The strongest engine for a faceless channel: **the content demonstrates the
system it sells.**

- Every post = **demo** (the grab) + **lesson** (the value) + **receipt** (the
  proof).
- As the channel grows, its own analytics become the case study.
- Show the process: the prompt, the negative prompt, a failed take, the choice.
  Perceived effort raises trust — low effort is what gets punished, not AI.
- **At least one visible proof of human judgment per post.**

---

## 8. Rotation rules

1. **Never two consecutive posts in the same INTERRUPT category.**
2. **Never two consecutive posts in the same pillar** unless the pillar has
   sub-types and the sub-type differs.
3. **A healthy week uses 4–5 different categories.**
4. **Keep the proof/conversion posts spaced.** Never two salesy posts back to
   back.
5. **Track it.** The category and pillar of every post are recorded in
   `03_POST_BANK.md` and checked by `tools/validate-posts.js`.

---

## 9. Standing instruction (data-driven mix)

Every project records one **standing instruction** — the ratio the analytics
have proven — and new content defaults to it until told otherwise.

Template (fill in `01_PILLARS.md`):

```
STANDING INSTRUCTION (last updated: [date])
[XX]% [pillar/subject that overperforms] / [YY]% [the other].
Evidence: [the test, the numbers, the date].
Applies to: all new posts unless explicitly overridden.
```

Example from a real project (BioLens):

```
70% Animal / 30% Human.
Evidence: controlled A/B by topic, July 2026 — animal biology outperformed
human anatomy on views and retention; not a hook-quality gap, a genuine topic
preference.
```

The point is not the number. The point is that **the ratio is a written
instruction, not a memory**, so every assistant and editor applies the same one.

---

## 10. Hook checklist

- [ ] Interrupt lands inside the first 0.8 s
- [ ] Identity line names the viewer within 1.5 s
- [ ] Open loop stated by 3 s
- [ ] Payoff delivered before the CTA
- [ ] One idea only
- [ ] Category differs from the previous post
- [ ] Pillar respects the standing instruction
- [ ] Creates at least one of the five reactions
- [ ] Works with the sound off (text carries it)
- [ ] CTA is single, soft and specific
