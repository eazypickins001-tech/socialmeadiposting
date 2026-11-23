# The Prompt Formula — how to write prompts that actually render

> **The engine.** Identical in every project. Do not edit per project.

---

## 1. The six-part skeleton

Every prompt in every project follows this order. Use it every time.

```
1. CAMERA & FRAME     locked camera / slow push-in / whip-pan / dolly zoom,
                      9:16 vertical, no unwanted motion
2. SUBJECT & ACTION   who or what, and exactly what they are doing
3. EFFECT / MECHANISM the named interrupt, stated as a PHYSICAL BEHAVIOUR
                      (how it flows, falls, refracts, breaks)
4. ENVIRONMENT & LIGHT background, light source, direction, mood, texture
5. STYLE & PALETTE    photoreal / archival / paper collage / claymation / VHS,
                      plus the project palette clause
6. NEGATIVE PROMPT    the failure modes to exclude
```

**The single most important rule:** state the interrupt as a **verb + direction**,
never an abstract adjective.

| Bad (vibe) | Good (physics) |
|---|---|
| "surreal water" | "the water flows upward into the glass" |
| "digital glitch look" | "horizontal scanlines tear across the frame, RGB splits, then it snaps back sharp" |
| "epic scale" | "a strawberry the size of a house, with a person standing at its base" |
| "dreamy floating" | "the object hovers 30 cm above the table, bobbing slowly, its shadow fixed on the surface below" |

AI video models respond to verbs and physics. They ignore vibes.

---

## 2. Clip limits and budgeting

| Model | Max per generation | This template uses |
|---|---|---|
| Google Omni | 10 s | 4–8 s clips |
| Veo | 8 s | 4–8 s clips |
| Kling / Runway / Pika / Luma | 5–10 s depending on model | 4–8 s clips |

**Runtime budgets**

| Finished length | Clips | Timing |
|---|---|---|
| 22–35 s (social post) | 4–6 | 4–6 s each |
| 40–60 s (story post) | 6–8 | 6–8 s each |
| 60–90 s (deep dive) | 8–12 | 6–8 s each |

Rule of thumb: **6 clips × 8 s = 48 s**, the most common shape for a story post.

Every clip is a separate generation. Never ask for a 30-second clip.

---

## 3. Locked camera

Every prompt includes one of:

```
locked camera, no zoom, no pan, no tilt, no rotation
```

The #1 AI failure in every category is **camera drift** — the model moving the
camera to fake the effect. If the effect is a whip-pan or dolly zoom, that is the
one case where camera motion is the point, and you still specify where it ends:
`lands locked`.

---

## 4. Sensory anchors

Narrative is not enough. Each visual line should carry at least two sensory
anchors so the model has something physical to render:

- **Light:** direction and quality — "golden backlight from the left", "hard
  single-source rim light", "flat overcast daylight".
- **Texture:** "dewy skin", "cracked dry soil", "wet translucent membrane",
  "torn paper with fibrous edges".
- **Camera:** height and distance — "macro, 5 cm from the surface", "eye-level
  medium shot", "top-down overhead".
- **Motion:** speed and direction — "slow drift", "violent snap", "continuous
  acceleration".

Example (weak → strong):

```
WEAK:   A mosquito bites skin.
STRONG: Hyper-macro, 5 cm from the surface: a mosquito leg touches down on
        skin rendered like cracked desert terrain, golden backlight raking from
        the left, the needle-tip catching light like a blade. Locked camera.
```

---

## 5. Character continuity

Any returning character gets a fixed continuity clause, repeated verbatim in
every clip they appear in:

```
[Name/role]: African [girl/boy/woman/man], [age range] years old,
[complexion], [hairstyle], wearing [wardrobe], in [setting].
```

Example:

```
Amara: African girl, 14–16, deep brown complexion, hair in two short braids,
wearing a navy school uniform with a white collar, in a bright rural classroom.
```

Never re-describe a character from memory between clips — paste the clause.

---

## 6. Text policy

**AI models cannot render text.** Letters come out warped, misspelled or
ghosted.

1. **Never generate on-screen text with the model.** No words in the prompt.
2. Add every overlay, caption, number and category label in the editor
   (CapCut, After Effects, Canva).
3. Add `text, letters, words, subtitles, watermark` to every negative prompt.
4. Numbers and statistics are **always** built natively in the editor — a model
   rendering `$3.2bn` when the script says `$3.4bn` is not a glitch, it is a
   retraction.

---

## 7. Proof and integrity policy

Non-negotiable, for every project:

1. **Proof clips use real screenshots.** Never AI-generate an analytics result,
   a review, a certificate or a client outcome.
2. **Archive and real events are never AI-generated.** If a viewer could mistake
   a generated image for a real historical photograph, it must not be used.
3. **No fabricated documents.** Court filings, contracts, letters and records
   either stay illegible or are licensed real assets.
4. **Absence over depiction.** No real identifiable person in a negative
   context, no violence, no bodies. Use the object, the empty room, the
   document.
5. **Every factual claim that matters gets a source** in the published caption
   or description.

AI is for metaphor, atmosphere, diagrams and props — never for evidence.

---

## 8. Palette clause

Paste the project palette into every prompt that renders in the brand look:

```
colour palette: [background hex], [accent hex], [shadow hex], [text hex],
[secondary accent hex — only for X subjects]
```

Example (one project's skin — each project defines its own in
`02_BRAND_SKIN.md`):

```
colour palette: CRT black #0B0B0C background, bone #EFE9DC highlights, single
signal red-orange #FF3B00 accent element, warm phosphor glow, muted and analog,
never neon or purple.
```

---

## 9. Iteration — the 4-pass rule

Never try to fix a bad composition with lighting sentences. Passes are
sequential and you do not skip:

1. **Composition** — is the subject the right size, in the right place, doing
   the right thing? Fix this first or regenerate.
2. **Lighting** — direction, contrast, mood.
3. **Palette and texture** — hex codes, material behaviour, grain.
4. **Final** — resolution, framing, negative prompt cleanup.

**Prefer editing a near-miss over regenerating.** Build the object once, then
edit that image for later shots so it stays identical across the series.

---

## 10. Worked example (full prompt, all six parts)

**Technique:** 1.1 The Float + 5.2 Paper Collage texture.
**Project:** a "hijacked broadcast" channel about impossible things.

```
1 CAMERA:   Locked camera, no zoom pan tilt or rotation, 9:16 vertical.
2 SUBJECT:  A single red apple, full colour, cut out with a thin uneven white
            paper border, floating in mid-air.
3 EFFECT:   It hovers and rotates slowly with no visible support, bobbing
            gently, a soft realistic shadow fixed on the surface below.
4 ENVIRON:  Static torn-paper collage background, photocopy grain, faint CRT
            scanlines, warm phosphor glow from the upper left.
5 STYLE:    Mixed-media paper collage, analog zine, photoreal textures.
            Palette: CRT black #0B0B0C, bone #EFE9DC, one signal red-orange
            #FF3B00 element.
6 NEGATIVE: strings, wires, visible hand, visible support, falling, resting on
            a surface, camera drift, text, watermark, logo, neon, purple
            gradient, glossy 3D.
```

Why it works: the **float** is the interrupt, the **paper collage** is the
aesthetic hook, and **locked camera + negatives** is what makes the model
actually deliver. Three layers, each doing one job.

---

## 11. Prompt checklist before you generate

- [ ] Six parts present, in order
- [ ] Camera locked (or motion explicitly described and ended)
- [ ] Effect stated as verb + direction, not adjective
- [ ] At least two sensory anchors (light + texture or camera + motion)
- [ ] Character continuity clause pasted, if a character returns
- [ ] No text requested from the model
- [ ] Palette clause included
- [ ] Negative prompt appended
- [ ] Clip length within model limit
- [ ] Nothing in the frame fakes evidence
