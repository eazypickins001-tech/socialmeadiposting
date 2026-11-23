# 02 — BRAND SKIN

> **The default skin for every repo built from this template is
> "THE HIJACKED BROADCAST."** It is specified fully below. A project may replace
> the palette and fonts with its own (§9) — but keep the six structural devices.
> They are what make the feed recognisable.

**The core principle: one voice, one look, one signature, repeated forever.**
A content farm varies everything. A brand repeats deliberately.

---

## 1. The concept

The channel is a **hijacked broadcast**. It presents itself as a TV signal that
keeps getting interrupted by impossible footage. Every video opens like a
broadcast being cut into. Every surreal visual is framed as "footage" from a
station that shouldn't exist.

**Why it works:**

1. It is the literal meaning of the name — a signal interruption.
2. It is the aesthetic opposite of a feed full of cold neon and glossy 3D.
3. The intro **is** a pattern interrupt, so the brand demonstrates the product
   in the first half-second.
4. It is infinitely expandable: test cards, colour bars, tracking tears, REC
   overlays, lower-thirds, dead air, sign-on/sign-off.
5. It is legible at 40 px.
6. It cannot be mistaken for AI slop because it is deliberately analog and warm.

---

## 2. Palette — "Test Card"

| Role | Hex | Notes |
|---|---|---|
| CRT black | `#0B0B0C` | Default background. Off-black, never pure #000. |
| Bone / phosphor | `#EFE9DC` | Warm off-white "screen glow". Never pure white. |
| Signal | `#FF3B00` | The interrupt colour. Red-orange, urgent, warm. |
| Test yellow | `#FFC400` | Bars + warnings. |
| Signal green | `#1FA97A` | Bars + "live" states. |
| Broadcast blue | `#2D6CDF` | Bars + cool contrast. |

**Rule:** the core look is **black + bone + signal**. The full six-bar palette
appears **only** as the colour-bar device. This keeps it disciplined, not neon.

**Paste-into-prompt palette clause:**

```
colour palette: CRT black #0B0B0C background, bone #EFE9DC highlights, single
signal red-orange #FF3B00 accent element, warm phosphor glow, muted analog,
never neon or purple.
```

---

## 3. Type

| Use | Font (free) | Notes |
|---|---|---|
| Headlines / impact | **Archivo Black** or **Anton** | Heavy, condensed, utilitarian |
| Labels / timecode / chyron | **IBM Plex Mono** or **Space Mono** | The "technical readout" voice |
| Body (rare) | **Archivo** | Clean grotesque |

---

## 4. The six signature devices (the fingerprints)

Every asset carries at least one. They are what the feed recognises before it
reads the handle.

1. **THE BARS** — a six-colour vertical bar strip (bone, yellow, signal, green,
   blue, black). Intro flash, divider, lower-third edge, footer strip.
2. **THE TEAR** — a ragged horizontal tracking-error band slicing across images
   and the wordmark. The interrupt made physical.
3. **THE TEST CARD** — circular broadcast test pattern (crosshair + bars +
   countdown). The intro frame and the avatar.
4. **REC ● + TIMECODE** — persistent `● REC 00:00:00:00` in mono type, same
   corner, every post.
5. **STATIC / SNOW** — the transition. Any cut can be bridged by 4 frames of
   static.
6. **THE CHYRON** — a news-style lower-third for the category label:
   `CATEGORY 01 — GRAVITY & PHYSICS`.

---

## 5. Motion grammar (this is the scroll-stopper)

| Beat | Time | On screen |
|---|---|---|
| Signal hit | 0.0–0.5 s | Black → bars flash → static burst + one percussive hit |
| Test card | 0.5–1.0 s | Test card + `PLEASE STAND BY` in mono |
| The footage | 1.0 s+ | Snap to the impossible visual, framed with `● REC` + timecode |
| Chyron | 2–4 s | Lower-third: `CATEGORY 0X — NAME` |
| Teach | 4–12 s | Caption text — Archivo Black, bone, one signal keyword |
| Tear | any cut | A tracking tear wipes between shots |
| Sign-off | last 1 s | Brand line + logo + CTA |

**The intro is not a logo animation. It is a live pattern interrupt.** It must
work with the sound off.

---

## 6. Captions and voice

**Caption style:** bottom third, animated word-by-word, bone text, **one signal
keyword highlighted per line**, Archivo Black. Maximum 3 words per line, 3
lines visible.

**Voiceover (parasocial anchor):** pick ONE voice and never change it.

- ElevenLabs or equivalent; lock the settings and reuse them every time.
- Character: calm, deliberate, slightly low. **Engineered, not loud.**
- Short sentences. One idea per sentence. A beat of silence right after the
  grab. End flat and confident.
- Name the voice internally. It is a brand asset.
- ~85% watch on mute — captions carry the message; the voice carries the brand.

**Sound design:** 0.4 s whoosh/sub-drop intro; low ambient bed at −22 to −18
LUFS; one reversed/glitch hit at the exact moment the pattern breaks (the audio
logo); the same 1 s tonal signature on every outro. **Avoid trending audio** —
it dates the channel and lets the visual do less work.

---

## 7. Human anchor (without a face)

1. **A named persona.** First person in captions, comments and DMs. Same
   sign-off every time.
2. **Reply to every comment for the first 90 days**, as a human.
3. **Process posts.** Screen recordings of prompt → generation → failed take →
   final. The illusion of effort made literal.
4. **At least one visible proof of human judgment per post.**

---

## 8. Asset specifications

### Handles / bios

| Platform | Handle | Display name | Bio limit |
|---|---|---|---|
| TikTok | | | 80 |
| YouTube | | | 1000 |
| Instagram | | | 150 |
| Facebook Page | | | 255 |
| X | | | 160 |
| Threads / Bluesky / Pinterest | | | vary |

**Short bio template**
```
[BRAND LINE].
[One line: what the channel does].
[CTA ↓]
```

### Dimensions

| Asset | Size |
|---|---|
| Video (all short-form) | 1080×1920 (9:16), H.264, ≥8 Mbps |
| Short-form cover | 1080×1920 — keep text in the top two-thirds |
| YouTube long-form thumbnail | 1280×720 |
| YouTube channel art | 2560×1440 (safe area 1546×423) |
| X / Bluesky banner | 1500×500 |
| Facebook cover | 820×312 desktop / 640×360 mobile |
| LinkedIn cover | 1128×191 |
| Avatar (master) | 512×512 — export 800 (YT), 400 (X), 320 (IG/FB), 200 (TikTok) |
| Watermark | 400×125, 40% opacity, bottom-right |

**Avatar rule:** keep the design inside the centre 80% circle — every platform
crops avatars round. Test at 40 px. If the tear and bars don't read, simplify.

---

## 9. Override — using a project's own skin

Only if the project already has a brand (an NGO, a science channel, a personal
brand). You may replace **two things**:

1. **The palette** — provide background, accent, shadow, text and one secondary
   accent as hex.
2. **The fonts** — one display font, one body font, one mono font.

Keep everything else: the six devices, the motion grammar, the caption rule,
the voice rule, the REC/timecode framing, the process posts. Those are the
mechanism. Swapping them per project breaks the template.

Record the override in this file:

```
SKIN OVERRIDE
Project: ____
Palette: bg ____ / accent ____ / shadow ____ / text ____ / secondary ____
Type: display ____ / body ____ / mono ____
Signature equivalent of THE BARS: ____
```

---

## 10. Brand checklist

- [ ] Same voice, same settings
- [ ] Same palette, same fonts
- [ ] Same intro and outro
- [ ] Same caption style and category label
- [ ] Same post structure (grab → teach → proof → CTA)
- [ ] Same posting rhythm
- [ ] Same sign-off
- [ ] At least one visible proof of human judgment per post

If you change any of these, change them deliberately across the whole channel —
never on one post.
