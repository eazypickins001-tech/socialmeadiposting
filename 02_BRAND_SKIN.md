# 02 — BRAND SKIN

> **Every project gets its own skin. This file is the method, not the look.**
>
> The shared engine (hook architecture, 12 categories, prompt formula, post
> format) is identical in every repo. The **skin** is the part that must never be
> identical. Two projects built from this template should be recognisable as
> different brands in a blind scroll test.

Design the skin before post 1. Fill §3 for the project, then write posts.

---

## 0. The one law: be the opposite of the feed

Do not design a look you like. Design the look that is **missing from the feed**
the audience is already scrolling.

The default AI-creator aesthetic (neon gradients, purple/orange, chromatic
aberration, glossy 3D, generic "futuristic") is now the *expected* look — the
brain files it as scroll-past. The content that survives looks **different and
high-effort**.

So the process is:

1. Look at 5–10 feeds in the niche and write down what everything looks like.
2. Name the "expected" look in one sentence.
3. Choose an archetype that is its opposite.
4. Build every device from that archetype.

**Different is the interrupt.** A skin that looks like the category is invisible
before the video even starts.

---

## 1. The invariants (what every skin must define)

These are **types of device**, not specific devices. Every project fills them
with its own design.

| # | Device type | What it does | You choose |
|---|---|---|---|
| 1 | **Signature motif** | One recurring visual object or gesture the feed recognises instantly | a floating object, a lens flare, a torn page, a specimen pin |
| 2 | **Frame furniture** | One persistent overlay in the same corner on every post | REC + timecode, coordinates, a file number, a lab label |
| 3 | **Transition** | One repeatable cut device bridging shots | 4 frames of static, a white flash, a paper wipe, a shutter blink |
| 4 | **Label system** | How the category / episode / series label looks | chyron, specimen tag, file path, stamp |
| 5 | **Intro + sign-off** | A fixed 0.5–1 s opening beat and a fixed closing frame | bars + test card, a lens opening, a boot sequence |
| 6 | **Caption system** | Type, position, highlight rule — must work muted | bottom-third word-by-word, centred uppercase, side rail |

Plus three anchors that are not "devices" but are just as binding:

- **One palette** — 4–5 colours with a written ratio rule.
- **One voice** — fixed model, fixed settings, never changed mid-channel.
- **One sound signature** — intro hit, bed level, the "interrupt" cue, outro tone.

If a skin does not define all nine, it is not a skin yet — it is a moodboard.

---

## 2. Design process

### Step 1 — Read the feed
List the 5 most common visual choices in the niche. Write the "expected look"
in one sentence. This sentence is your enemy.

### Step 2 — Pick an archetype that is its opposite

| Archetype | Looks like | Interrupts by being | Best for |
|---|---|---|---|
| **Hijacked broadcast** | Analog TV, colour bars, test cards, static | Warm, analog, low-tech | Media / internet / impossible things |
| **The specimen** | Clinical white, thin rules, crosshairs, labels | Unnervingly clean and precise | Science, biology, anatomy, medicine |
| **The error dialog** | Deadpan OS error, mono type, one button | Absurdly plain and funny | Tech, AI, productivity, satire |
| **The lens** | Macro photography, teal/cyan, depth of field | Optical and intimate | Nature, discovery, "see differently" |
| **Field notes** | Paper, ink, stamps, handwriting, dossier | Handmade and archival | History, investigation, true stories |
| **Warm human** | Natural light, skin tones, documentary stills | Human and gentle | Causes, education, community, service |
| **The ledger** | Numbers, columns, receipts, red ink | Cold and precise about money | Business, finance, economics |
| **The night shift** | Low light, single source, silhouette | Quiet and cinematic | Mystery, crime, late-night stories |

Pick one. Do not blend two — blended archetypes read as "no decision".

### Step 3 — Palette
Derive it from the subject, not from taste. Then write a **ratio rule**:

```
__% [background] · __% [accent] · __% [neutral/text]
Accent is an accent — never a background, never the whole frame.
```

Record hex codes for: background, accent, shadow, text, and one optional
secondary that is allowed **only** for a specific subject type (e.g. amber for
money). Test the palette at 40 px and on a phone in daylight.

### Step 4 — Type
Three roles, three fonts, no more:

| Role | Job |
|---|---|
| Display | headlines, on-screen slams, thumbnail text |
| Body | captions, longer text |
| Mono / technical | labels, numbers, timestamps, "receipts" |

### Step 5 — Name five fingerprints
Fill §3 rows 1–5 with *specific* devices. Name them. Named devices get reused;
unnamed ones drift.

### Step 6 — Write the motion grammar
A fixed table of beats, in seconds. Every post runs it. This is what makes the
catalogue feel like one channel.

| Beat | Time | On screen |
|---|---|---|
| Signal / open | 0.0–0.5 s | |
| Identity frame | 0.5–1.0 s | |
| The footage | 1.0 s+ | |
| Label | 2–4 s | |
| Teach | 4–12 s | |
| Transition | any cut | |
| Sign-off | last 1 s | |

### Step 6b — Design the intro and outro

The intro and outro are the skin's most repeated asset, so design them here, not
per post. The **method, timings, build steps and export settings** are in
`_SHARED/intro-outro.md`; this section decides only what they *look and sound
like* for this project.

Every skin must answer:

| Question | Your answer |
|---|---|
| What is the 0.5–1.5 s open? (the skin's version of a signal hit) | |
| What appears in the identity frame — motif, wordmark, or label? | |
| What is the audio logo, and on which frame does it land? | |
| What is the one CTA line on the end card? | |
| Does the post loop back to frame 1, or cut clean? | |

Rules that do not flex: intro **≤ 1.5 s** (hard cap 2 s), outro **1.5–3 s**, one
CTA, hard cut into Clip 1, no seam into the outro, and the same intro and outro
on every post until you deliberately change them for the whole channel.

### Step 7 — Voice, sound, human anchor
- One voice, fixed settings, calm and deliberate unless the archetype says
  otherwise. Name the voice internally.
- Sound: intro hit, ambient bed level, one recurring "interrupt" cue, outro tone.
  Avoid trending audio — it dates the channel.
- Human anchor: a named persona writing in first person, a consistent sign-off,
  replies to every comment for the first 90 days, and at least one visible proof
  of human judgment per post.

### Step 8 — Test
- Avatar legible at 40 px.
- Frame legible on mute.
- Two posts side by side look like one brand.
- One post next to a competitor looks like a different species.

---

## 3. Skin brief (fill this in per project)

```markdown
SKIN BRIEF — [Project]

Archetype:            [one of §2, or a named original]
The expected look in this niche:   [one sentence]
Our opposite:         [one sentence]

Palette
  background:  #______
  accent:      #______
  shadow:      #______
  text:        #______
  secondary:   #______  (allowed only for: __________)
  ratio rule:  __ / __ / __

Type
  display:     __________
  body:        __________
  mono:        __________

Fingerprints
  1 signature motif:    __________
  2 frame furniture:    __________
  3 transition:         __________
  4 label system:       __________
  5 caption rule:       __________
  6 intro / sign-off:   __________

Intro (see _SHARED/intro-outro.md)
  0.00–0.15 s:   __________
  0.15–0.45 s:   __________
  0.45–0.90 s:   __________
  0.90–1.20 s:   __________
  audio logo:    __________ at ______ s

Outro
  end card:      __________
  CTA line:      __________
  loop or cut:   __________

Motion grammar:   [table or link to §6 below]
Sound signature:  intro ______ / bed ______ LUFS / cue ______ / outro ______
Voice:            model ______ settings ______ character ______
Sign-off line:    __________
Handles:          __________
```

---

## 4. Worked examples

Five real directions. Use them as references for *range*, not as presets. If a
project's brief reads like a copy of one of these, it is not unique yet.

### A. The hijacked broadcast
A TV signal that keeps getting interrupted by impossible footage. Warm, analog,
1970s–80s public broadcast. The opposite of a feed full of cold neon.

- **Palette:** CRT black `#0B0B0C`, bone `#EFE9DC`, signal red-orange `#FF3B00`,
  test yellow `#FFC400`, signal green `#1FA97A`, broadcast blue `#2D6CDF`.
  Core look is black + bone + signal; the full six-bar set appears only as the
  colour-bar device.
- **Type:** Archivo Black / Anton (display), Archivo (body), IBM Plex Mono or
  Space Mono (labels and timecode).
- **Fingerprints:** the six-colour bars · the ragged tracking tear · the test
  card · `● REC` + timecode · 4 frames of static · the chyron
  `CATEGORY 0X — NAME`.
- **Motion:** black → bars flash → static burst (0–0.5 s) → test card with
  `PLEASE STAND BY` (0.5–1 s) → footage framed with REC (1 s+) → chyron (2–4 s)
  → captions (4–12 s) → tear on cuts → sign-off with the brand line.
- **Voice:** calm, deliberate, slightly low. "Engineered, not loud."
- **Motif:** the floating / gravity-broken object.

### B. The specimen
Clinical, scientific, unnervingly clean among noisy feeds. Suspiciously precise.

- **Palette:** paper white `#F7F7F5`, ink `#14171A`, specimen grey `#9AA3A8`,
  one diagnostic red `#C8102E`. Ratio: 80% white · 10% grey · 10% ink/red.
- **Type:** a precise grotesque (Inter Tight), a serif for captions (Source
  Serif), mono for measurements (JetBrains Mono).
- **Fingerprints:** crosshair overlay · `FIG. 0X` labels · ruled measurement
  lines · a pinned specimen dot · a corner scale bar.
- **Motion:** white flash (0–0.3 s) → crosshair snaps in (0.3–0.8 s) →
  specimen in frame with `FIG. 1` (0.8 s+) → measurement lines draw on →
  result card → sign-off stamp.
- **Voice:** flat, factual, quietly astonished. No hype.
- **Motif:** the thing the eye should never see, held still and measured.

### C. The error dialog
The brand as an operating-system failure. Deadpan, dead-simple, funny.

- **Palette:** system grey `#D4D0C8`, window white `#FFFFFF`, alert red
  `#D40000`, link blue `#0000EE`. Ratio: 70% grey/white · 20% ink · 10% red.
- **Type:** system monospace throughout (Consolas / JetBrains Mono), one weight.
- **Fingerprints:** a window chrome frame · `[ OK ]` button · a progress bar ·
  a cursor blink · an error code.
- **Motion:** dialog pops (0–0.4 s) → message types itself → `[ OK ]` pulses →
  the "error" plays as footage → result → dialog closes.
- **Voice:** deadpan, unimpressed, slightly bureaucratic.
- **Motif:** a pattern the system cannot resolve.

### D. The lens (science / nature)
Optical, intimate, macro. "See life differently."

- **Palette:** bio teal `#0A9B8C`, lens cyan `#00D4FF`, dark slate `#1A2A3A`,
  white `#FFFFFF`. Ratio: 60% slate/near-black · 25% teal · 10% cyan · 5% white.
- **Type:** Poppins Bold (display), Inter (body), mono for figures.
- **Fingerprints:** a lens-iris wipe · a focus-pull transition · `×40` / `×400`
  magnification chips · a scale ruler · a circular vignette.
- **Motion:** iris opens (0–0.5 s) → magnification chip (0.5–1 s) → macro
  footage (1 s+) → focus pull to the reveal → scale closure → sign-off.
- **Voice:** hushed, close, fascinated. Second person.
- **Motif:** the invisible world made visible.

### E. Warm human (cause / education / service)
Documentary stills, natural light, gentle and specific. Never NGO-generic.

- **Palette:** warm sand `#F2E8DC`, deep brown `#3B2A20`, terracotta
  `#C4643B`, soft green `#6B7F5E`. Ratio: 65% sand · 20% brown · 10% terracotta
  · 5% green.
- **Type:** a warm humanist sans (Fraunces for display, Inter for body), no mono.
- **Fingerprints:** a slow light-leak transition · a handwritten-style
  lower-third · a single recurring prop (a chair, a door, a bag) · a soft
  vignette · a held final frame.
- **Motion:** breath of light (0–0.6 s) → the object alone (0.6–1.2 s) →
  the human situation (1.2 s+) → the turn → held close → sign-off on a question.
- **Voice:** conversational, emotionally precise, unhurried.
- **Motif:** the ordinary object that carries the story.

---

## 5. Universal asset specs

These do not change with the skin. They are platform facts.

### Handles and bios

| Platform | Handle | Display name | Bio limit |
|---|---|---|---|
| TikTok | | | 80 |
| YouTube | | | 1000 |
| Instagram | | | 150 |
| Facebook Page | | | 255 |
| X | | | 160 |
| Threads / Bluesky / Pinterest | | | vary |

**Bio template**
```
[BRAND LINE — the skin's signature phrase].
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

**Avatar rule:** design inside the centre 80% circle — every platform crops
avatars round. Test at 40 px. If the signature motif does not read, simplify the
mark, not the motif.

---

## 6. Consistency checklist

- [ ] One archetype, stated in one sentence
- [ ] Palette with hex codes and a written ratio rule
- [ ] Three type roles, no more
- [ ] Five named fingerprints
- [ ] A fixed motion grammar table
- [ ] One voice, fixed settings, named internally
- [ ] One sound signature
- [ ] A named human persona and a fixed sign-off
- [ ] Caption system that works muted
- [ ] Avatar legible at 40 px
- [ ] Two posts side by side read as one brand
- [ ] One post next to a competitor reads as a different species

If you change any of these, change them deliberately across the whole channel —
never on one post.

---

## 7. Anti-patterns

- Copying the default AI look: neon gradients, purple/orange, chromatic
  aberration, glossy 3D, generic "futuristic" HUDs.
- Copying the category's clichés: shocked faces and red arrows for drama,
  stethoscopes for medicine, graduation caps for education.
- Blending two archetypes.
- More than five colours, or a palette with no ratio.
- A motif that cannot be rendered at 40 px.
- A skin that only exists in the thumbnail and disappears in the video.
- Changing the skin mid-channel because one post underperformed. Change the
  post, not the brand — unless the data says the brand is the problem, then
  change it deliberately across everything at once.
