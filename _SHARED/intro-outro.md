# Intro & Outro — build once per project, reuse forever

> **The engine.** Universal method. What the intro and outro *contain* comes from
> the project's skin (`02_BRAND_SKIN.md`); how they are built, timed and exported
> does not change.

---

## 1. What they are for

**The intro is not a logo animation.** It is the first pattern interrupt. It has
one job: buy the first two seconds. If it plays like branding, it is already
costing you viewers.

**The outro is not a credits roll.** It has two jobs: close the loop you opened,
and make the next action obvious (follow, save, watch the long-form, reply).

**Both are built once and reused on every post.** Their repetition is what turns
a feed of videos into a recognisable channel.

What they are **not**:

- not a place to say "hey guys" or "welcome back"
- not a subscribe reminder every post
- not a five-second animated logo
- not different on every upload

---

## 2. The non-negotiables

| Rule | Value |
|---|---|
| Short-form intro length | **0.5–1.5 s**. Hard cap 2 s |
| Short-form outro length | **1.5–3 s** |
| Long-form cold open | **15–45 s** of content before any branding |
| Long-form title card | **3–8 s** |
| Must work muted | Text and motif carry it; audio is a bonus |
| Same every post | Same frames, same sound, same timing |
| Built once | Exported as reusable files + a saved template |
| One audio logo | The same cue at the same moment, forever |
| No trending audio | It dates the channel and weakens the visual |

**The trade:** every second of intro is a second before the hook. On short-form,
a 5-second intro is a 5-second retention hole. Earn attention first, brand
second.

---

## 3. Short-form intro (9:16) — anatomy

The intro should *be* a smaller version of the post's structure: interrupt →
identity → open loop.

| Beat | Time | On screen | Audio |
|---|---|---|---|
| 1. Cut in | 0.00–0.15 s | black or the first frame of the motif | silence |
| 2. Signal hit | 0.15–0.45 s | motif flashes / colour-bar flash / lens open — one bold move | one whoosh or impact hit |
| 3. Identity frame | 0.45–0.90 s | wordmark or 1–3 word label in the skin's display type | short tonal sting |
| 4. Snap out | 0.90–1.20 s | hard cut to Clip 1 of the post | cut to the bed |

**Three elements maximum.** Motif + wordmark + a texture/flash. If you need a
fourth, you are animating too much.

**The last frame of the intro must hard-cut into Clip 1.** No fade, no dissolve.
A hard cut reads as "the signal snapped to the footage" and keeps the energy.

### Build it in CapCut (no designer required)

1. New project: **1080×1920, 30 fps**.
2. Import the project's motif asset (PNG/SVG exported at 2×), the wordmark PNG,
   and one texture (static, grain, light leak, paper — whatever the skin uses).
3. Place the motif on a black background for 0.3 s. Add a **scale 105→100%** or
   **opacity 0→100→0** keyframe so it hits rather than fades.
4. Add the wordmark for 0.4 s, centred, with a 2-frame **scale pop**
   (110→100%) timed to the audio hit.
5. Add the texture on top at 30–50% opacity for 0.15 s around the hit.
6. Add the sound: one whoosh/impact at 0.15 s, one short sting at 0.45 s.
7. Trim the total to **≤1.5 s**. If it is longer, cut beats, not frames.
8. Export as its own file (see §7) and **save the project as a template**:
   `intro-template-9x16`.

### Build it in After Effects (optional, for a sharper look)

1. Comp: **1080×1920, 30 fps, 1.5 s**.
2. Build the motif as a precomp with an expression-driven pop
   (`scale` 100 → 110 over 2 frames → 100).
3. Wordmark precomp, track tight, one weight.
4. Add the texture with `Screen` or `Multiply` blend.
5. Audio: the whoosh and sting on the timeline, matched to frames.
6. Pre-render to ProRes 4444 for a clean master, then H.264 for use.
7. Save as an `.aep` template with the motif and wordmark as replaceable layers.

---

## 4. Short-form outro (9:16) — anatomy

| Beat | Time | On screen | Audio |
|---|---|---|---|
| 1. Resolve | 0.0–0.4 s | last content frame holds | bed continues |
| 2. End card | 0.4–1.6 s | motif + wordmark + **one** CTA line | sting, then bed fades |
| 3. Hold / loop | 1.6–2.4 s | hold, or cut back to frame 1 for a loop | silence or tail |

**One CTA only.** "Follow for the next one." "Free guide, link in bio." "Send
this to someone." Never three.

**The CTA line is also spoken** in the final clip. The overlay and the narration
say the same thing.

**Optional loop:** if the post can loop (same first and last frame), cut back to
the intro's first frame. Loops are the cheapest rewatch you will ever get.

**Do not** put the URL in the video. Put it in the caption or bio. URLs in video
go unread and unclicked.

---

## 5. Long-form intro and outro (16:9)

### Intro

```
0:00–0:40   COLD OPEN — the interrupt. No logo. No greeting.
            Start mid-action with the single most impossible fact.
0:40–0:48   TITLE CARD — brand mark + the title, 3–8 s
0:48+       ACT 1
```

The title card is the only branding before the story. It appears **after** the
viewer has already decided to stay.

Never open with a logo, a montage of past videos, or "in this video we will".

### Outro

```
…–0:25   AFTERMATH — why this matters to the viewer today
0:25–0:20   SIGN-OFF — the brand line, one sentence
0:20–0:00   END SCREEN — 2 video cards + one subscribe element, inside safe margins
```

**Series loop:** the final spoken line opens the next episode in one sentence.
That is what turns a catalogue into a binge.

**YouTube end-screen rules:** elements only in the **last 20 seconds**, 16:9,
kept inside the safe margins or they are cropped on TV.

---

## 6. The audio logo

One cue, one moment, forever:

- **The cue:** a reversed hit, a sub-drop, a tape-stop, a shutter — choose one
  that matches the skin's archetype.
- **The moment:** exactly when the pattern breaks.
- **The mix:** bed at −22 to −18 LUFS; the cue peaks without clipping; the
  outro tone is the same 1 s every time.
- **Test:** play the intro with your eyes closed. If you cannot identify the
  channel in one second, the audio logo is not distinctive enough yet.

---

## 7. Assets, exports and naming

Build once, store in a `brand/` folder in the project repo (small files only —
never video masters; keep masters in Drive).

```
brand/
  intro-9x16.mp4          # 1080x1920, H.264, 8-12 Mbps
  intro-16x9.mp4          # 1920x1080, for long-form
  outro-9x16.mp4
  outro-16x9.mp4
  intro-template/         # CapCut project or .aep, with replaceable layers
  motif.png               # 2x export, transparent
  wordmark.png / .svg
  texture-loop.mp4        # 2-3 s seamless, if the skin uses one
  audio/whoosh.wav
  audio/sting.wav
  audio/outro-tone.wav
```

**Export settings (social):** H.264, 1080×1920 (or 1920×1080), 30 fps, 8–12
Mbps, AAC 192 kbps. **Masters:** ProRes 4444 or the editor's native project —
those live in Drive, not git.

**Naming:** `${project}-intro-9x16-v1.mp4`. Bump the version, never overwrite —
you will want to compare.

---

## 8. Wiring it into every post

The intro and outro are part of the post timeline, not an afterthought:

```
[INTRO 0.5-1.5s] → [CLIP 1 ... CLIP N] → [OUTRO 1.5-3s]
```

Rules:

1. The intro's last frame hard-cuts to Clip 1.
2. The outro's first frame continues from the last clip (no jump in light or
   colour).
3. The CTA overlay in the outro equals the CTA in the post block.
4. The **finished runtime** in `03_POST_BANK.md` is content only. The published
   runtime is content + intro + outro — keep the total inside the platform
   sweet spot (22–35 s social, 40–60 s story).
5. Batch-assemble: put the same intro and outro on every post in one session.

---

## 9. QC checklist before you reuse them

- [ ] Intro ≤ 1.5 s (hard cap 2 s)
- [ ] Outro ≤ 3 s
- [ ] Both legible muted, at 40 px, in daylight
- [ ] The identity frame uses the skin's display font, not a default
- [ ] Hard cut from intro to Clip 1
- [ ] No seam between the last clip and the outro
- [ ] One CTA in the outro, and it matches the post block
- [ ] Audio logo audible and identical every time
- [ ] No clipping; bed is −22 to −18 LUFS
- [ ] Exports named and versioned
- [ ] Template saved with replaceable layers

---

## 10. Testing and changing them

- **Test once, early.** Run two intro variants for a week (A: motif-first,
  B: wordmark-first). Keep the one with the better 3-second hold.
- **Then freeze it.** Variation on every post destroys recognition.
- **Change deliberately, across everything.** If the intro must change, change
  it for all posts from a cut-off date and note it in `05_PROOF_TRACKER.md`.
- **Never change it because one post underperformed.** One post is a data point,
  not a trend.

---

## 11. Failure modes

| Symptom | Cause | Fix |
|---|---|---|
| Views die at 1–2 s | Intro too long or too "branded" | Cut to ≤1.5 s; lead with the motif, not the logo |
| Viewers cannot tell the channels apart | Intro is generic | Strengthen the motif and audio logo; make the identity frame distinctive |
| Comments ask "what channel is this?" | No consistent sign-off | Fix one sign-off line and repeat it |
| Mid-video seams | Outro light/colour does not match the last clip | Grade the last clip and the outro together |
| End screen cards cropped on TV | Elements outside the safe margin | Rebuild inside the 20 s safe area |
| Every post feels like a different brand | Intro/outro changed per post | Freeze the template; batch-assemble |
