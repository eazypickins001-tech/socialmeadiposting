# The INTERRUPT Taxonomy — 12 Categories of Scroll Interrupters

> **The engine.** This file is identical in every project built from this template.
> Do not edit per project. Project-specific choices live in `02_BRAND_SKIN.md`.

A named system of visual pattern interrupts for short-form video, written for AI
video generation (Veo, Kling, Seedance, Runway, Pika, Luma, Hailuo, Omni, Sora).

**Why naming matters:** an unnamed effect is a trick you can only copy. A named
effect is a *decision you can make on purpose*, week after week, and teach to
anyone else. Every technique below has a name. Use the names.

---

## PART 0 — The psychology (why any of this works)

Every scroll interrupter does one of three things to the brain inside the first
0.8 seconds:

1. **Reality violation** — the brain detects "that shouldn't be possible" and
   stops to resolve the error. (Impossible physics, impossible objects, material
   swaps, broken anatomy.)
2. **Signal salience** — something is so visually loud, novel or emotionally
   charged that it overrides the autopilot scroll. (Glitch, extreme contrast,
   neon, a face in distress, sudden silence.)
3. **Open loop / incomplete information** — the brain is handed a puzzle it
   cannot close. (A door opening onto nothing, a mask cracking, an interrupted
   motion.)

All three hijack the same mechanism:

```
INTERRUPT   0.0–0.8s   the impossible first frame
IDENTITY    0.8–1.5s   why this is about the viewer
OPEN LOOP   1.5–3.0s   the question that has to be answered
PAYOFF      3s+        the answer, delivered
CTA         final      one line, one destination
```

**The interrupt is only the first frame.** It buys you three seconds. The hook
architecture has to earn the rest. See `hook-architecture.md`.

**The 50 ms rule:** the brain checks "does this match what I expect?" in about
50 milliseconds. When it does not match, the brain cannot move on until it
resolves the error. That forced pause *is* the scroll-stop. It is not magic, and
it is not vibes — it is an unhandled exception in perception.

---

## PART 1 — The 12 categories

| # | Category | Core interrupt | Best for |
|---|---|---|---|
| 1 | Gravity & Physics | Float, fall, reverse gravity, zero-G, ground opens | High-impact openers |
| 2 | Scale & Proportion | Giant object, shrink/grow, extreme zoom, miniature | Curiosity and wonder |
| 3 | Time Manipulation | Freeze, reverse, slow-mo, time-lapse, perfect loop | Satisfying and hypnotic |
| 4 | Glitch & Corruption | Glitch, pixel dissolve, VHS, melt, data-mosh | Edgy, tech, "broken record" |
| 5 | Material & Texture | Sand/water/smoke body, paper, 3D→2D, glass, particles, clay | Aesthetic and artful |
| 6 | Mirror & Symmetry | Infinite mirror, reflection mismatch, kaleidoscope, split | Uncanny and trippy |
| 7 | Impossible Objects | Portal, out-of-place object, Escher space, living objects | Story and wonder |
| 8 | Body & Anatomy | Extra limbs, head swap, elastic body, detached parts | Comedy and uncanny |
| 9 | Camera & Perspective | Whip-pan, Dutch angle, forced perspective, dolly zoom, fourth wall, POV reveal | Energy and intimacy |
| 10 | Emotion & Expectation | Bait and switch, mask crack, unexpected reaction, silence | Relatable and emotional |
| 11 | Light & Color | Selective colour, neon, light leak, inversion, silhouette | Mood and drama |
| 12 | Typography & Text | Kinetic slam, shatter, text-in-world, counting, morph | Mute-proof hooks |

Every prompt below follows the **six-part formula** in `prompt-formula.md`.
Read that first. Bracketed `[words]` are variables — replace them.

---

## CATEGORY 1 — GRAVITY & PHYSICS BREAKS

The brain's most primal expectation is that things fall down. Breaking gravity is
the fastest possible reality violation.

| Technique | Mechanism | Best for |
|---|---|---|
| 1.1 The Float | Subject hovers mid-air, no support | Product, object, single subject |
| 1.2 The Fall | Subject falls through frame, exits bottom | Openers that need motion |
| 1.3 Reverse Gravity | Rain, hair, objects rise instead of fall | Dreamlike, surreal |
| 1.4 Zero-G | Everything in frame floats | Rooms, interiors, groups |
| 1.5 The Ground Opens | Floor opens; subject falls backward into it | Destabilising reveals |

**1.1 — The Float**
```
A [object/person] floats in mid-air, gently bobbing and rotating slowly, no
visible support, against [clean/blurred background]. Subtle weightless drift,
soft realistic lighting with a shadow cast below showing it is suspended.
Locked camera, no zoom pan tilt or rotation, 9:16 vertical.
```
*Negative:* `strings, wires, visible hand, visible support, falling, resting on a surface, ground contact, camera drift, text, watermark`

**1.2 — The Fall**
```
A [character] enters from the top of the frame and falls straight down through
the centre until exiting at the bottom. While falling, arms and legs move in
continuous natural motion. Static [background]. Locked camera, no zoom pan tilt
or rotation, 9:16 vertical.
```
*Negative:* `frozen limbs, rigid pose, standing, walking, floating upright, floor, ground, portal, extra limbs, distorted anatomy`

**1.3 — Reverse Gravity**
```
Reverse gravity: [liquid/rain/objects/hair] rises upward instead of falling,
physically lit, dreamlike. The subject [moves normally] while gravity is
inverted around them. Locked camera, 9:16 vertical.
```
*Negative:* `normal falling, downward motion, gravity, realistic physics, camera drift`

**1.4 — Zero-G**
```
Zero-gravity scene: [a person and surrounding objects] float weightlessly,
drifting slowly and colliding softly, hair and fabric suspended, inside
[a room/environment]. Soft volumetric light, dust motes floating. Locked
camera, 9:16 vertical.
```
*Negative:* `gravity, objects resting on surfaces, falling, grounded, normal physics`

**1.5 — The Ground Opens**
```
Static frame: a [character] steps backward as a [dark hole/portal] opens in the
ground behind them and they fall backward into it, feet last. Camera position
stays fixed, no zoom or pan. The hole glows faintly at its edges. 9:16 vertical.
```
*Negative:* `walking forward, staying on ground, hole closing, camera movement, jumping, levitating`

---

## CATEGORY 2 — SCALE & PROPORTION DISTORTION

| Technique | Mechanism | Best for |
|---|---|---|
| 2.1 Giant Object / Tiny Subject | Impossible size mismatch in one frame | Instant "wrong" read |
| 2.2 Shrink / Grow | Continuous size change in-shot | Metamorphosis, growth |
| 2.3 Extreme Zoom | Macro to cosmic in one move | Scale journeys |
| 2.4 Miniature World | Real scene as a toy model | Familiar-made-strange |

**2.1 — Giant Object / Tiny Subject**
```
A [tiny person] stands next to a [gigantic ordinary object], extreme scale
contrast, photorealistic, soft lighting, shallow depth of field. Locked
camera, 9:16 vertical.
```
*Negative:* `normal scale, proportional objects, flat, miniature without context`

**2.2 — Shrink / Grow**
```
A [person/object] continuously [shrinks/grows] in real time while the
background stays constant, creating an impossible scale shift. Smooth, gradual,
physically lit. Locked camera, 9:16 vertical.
```
*Negative:* `static size, sudden jumps, camera zoom (the change must be on the subject, not the camera)`

**2.3 — Extreme Zoom**
```
An impossible continuous zoom: start at [a tiny detail] and pull back
continuously through [increasingly large scales] until reaching [a cosmic
scale]. Seamless, no cuts, smooth motion. 9:16 vertical.
```
*Negative:* `jump cuts, jerky zoom, static framing, breaks in continuity`

**2.4 — Miniature World**
```
Tilt-shift miniature effect: [a real scene] rendered as a tiny hyper-detailed
toy model. Shallow depth of field, exaggerated saturation, diorama look.
Locked camera, 9:16 vertical.
```
*Negative:* `normal depth of field, realistic scale, full-size realism`

---

## CATEGORY 3 — TIME MANIPULATION

| Technique | Mechanism | Best for |
|---|---|---|
| 3.1 Time Freeze | World frozen, one element moves | Instant open loop |
| 3.2 Time Reversal | Recognisable process runs backward | Disorientation |
| 3.3 Hyper Slow-Mo | Fast event slowed to reveal detail | Novelty, "never seen" |
| 3.4 Time-Lapse Rush | Slow process compressed | Privileged knowledge |
| 3.5 Perfect Loop | Seamless infinite motion | Rewatch bait |

**3.1 — Time Freeze**
```
Time-freeze: the entire scene is frozen — [water droplets suspended, people
mid-motion, objects floating] — except a single [hand/person/object] moving
normally through the frozen world. Sharp contrast between motion and
stillness. Locked camera, 9:16 vertical.
```
*Negative:* `everything moving, nothing frozen, blurry motion, normal time`

**3.2 — Time Reversal**
```
Reverse-time: [a recognisable process] plays in reverse — [the flower folds
back into a bud, water flows upward into the glass]. Smooth, physically
realistic lighting, no sign of it being played backward. Locked camera, 9:16.
```
*Negative:* `normal forward motion, obvious rewind artifacts, jerky reversal`

**3.3 — Hyper Slow-Mo**
```
Ultra slow-motion: [a fast event] at extreme slow motion, every droplet and
fragment crisp and detailed. High-speed-camera aesthetic, sharp focus,
dramatic lighting. Locked camera, 9:16 vertical.
```
*Negative:* `normal speed, motion blur, low detail, unclear subject`

**3.4 — Time-Lapse Rush**
```
Time-lapse: [a slow natural process] compressed into a few seconds, smooth
continuous growth and changing light. Seamless, no jumps. Locked camera, 9:16.
```
*Negative:* `jump cuts, static growth, same lighting throughout, broken continuity`

**3.5 — Perfect Loop**
```
Seamless infinite loop: [a continuous motion] that loops perfectly with no
visible start or end. First and last frame identical. Locked camera, 9:16.
```
*Negative:* `visible loop seam, changing position between loops, breaks in motion`

---

## CATEGORY 4 — GLITCH & DIGITAL CORRUPTION

| Technique | Mechanism | Best for |
|---|---|---|
| 4.1 Glitch / Scanline | Image tears, RGB split, recovers | "Is my phone broken?" |
| 4.2 Pixel Dissolve | Matter becomes pixels, reassembles | Tech, data, magic trick |
| 4.3 VHS / Screen Tear | Degraded analog tape look | Retro against clean feeds |
| 4.4 Liquify / Melt | Solid becomes liquid | Clean reality violation |
| 4.5 Data-Mosh | Motion smears into blocks | Corrupted-file energy |

**4.1 — Glitch / Scanline**
```
Digital glitch: [a subject/action] becomes corrupted by RGB split, scanlines
and pixel displacement, as if the signal is breaking down, then momentarily
recovers. Locked camera, 9:16 vertical.
```
*Negative:* `clean image, no distortion, smooth motion, static glitch throughout`

**4.2 — Pixel Dissolve**
```
Pixel-dissolve: a [person/object] disintegrates into glowing pixels that drift
apart, then reassembles back into solid form. Smooth transition, futuristic
clean aesthetic. Locked camera, 9:16 vertical.
```
*Negative:* `hard cut, no transition, disappearing without particles, smoke instead of pixels`

**4.3 — VHS / Screen Tear**
```
VHS aesthetic: [a subject/action] shot as degraded analog video — horizontal
tracking errors, colour bleed, scanlines, grain, occasional signal loss. Warm
retro colour cast. Locked camera, 9:16 vertical.
```
*Negative:* `clean digital, modern clarity, no grain, stable image`

**4.4 — Liquify / Melt**
```
Liquify: [a subject/object] melts and drips downward like [water/paint/honey],
warping while keeping recognisable features. Surreal, glossy liquid lighting.
Locked camera, 9:16 vertical.
```
*Negative:* `solid form, rigid, no distortion, frozen, dry texture`

**4.5 — Data-Mosh**
```
Data-mosh: when [the subject moves], blocks of the image smear, lag and
distort, corrupted-compression aesthetic, as if the file is failing. Saturated
colours, digital artifacts. Locked camera, 9:16 vertical.
```
*Negative:* `clean motion, no artifacts, stable pixels, smooth footage`

---

## CATEGORY 5 — MATERIAL & TEXTURE SWAPS

| Technique | Mechanism | Best for |
|---|---|---|
| 5.1 Sand / Water / Smoke Body | Human form in an impossible material | Strong metaphor |
| 5.2 Paper Collage | Analog cutout, zine texture | Anti-slop, handmade |
| 5.3 3D-to-2D Flatten | Solid collapses into flat shape | Clean "how?" moment |
| 5.4 Glass / Ice / Crystal | Translucent, refracting subject | Expensive-looking |
| 5.5 Particle Dissolve | Bursts into leaves, dust, sparkles | Satisfying, shareable |
| 5.6 Claymation | Plasticine, fingerprints, stop-motion | Tactile, cuts through gloss |

**5.1 — Sand / Water / Smoke Body**
```
A [person] is made of / dissolves into [flowing sand / clear water / drifting
smoke / liquid metal]. The material behaves realistically while the human
silhouette stays recognisable. Dramatic lighting, 9:16 vertical.
```
*Negative:* `solid flesh, rigid material, no particle motion, static texture`

**5.2 — Paper Collage**
```
Mixed-media paper collage: a [subject] is a full-colour cutout with a thin
uneven white paper border, moving with subtle natural motion over a static
collage background of torn paper and photocopy textures. Analog zine
imperfections, soft shadows between layers, locked camera, 9:16 vertical.
```
*Negative:* `CGI, glossy 3D, clean vector, realistic person, no paper texture, text, watermark`

**5.3 — 3D-to-2D Flatten**
```
A [3D subject] smoothly flattens into a [2D flat illustration / paper cutout /
silhouette], then unfolds back to 3D. Seamless transition, the 2D and 3D
versions match perfectly. Locked camera, 9:16 vertical.
```
*Negative:* `hard cut, mismatched forms, no transition, both states identical`

**5.4 — Glass / Ice / Crystal**
```
A [subject] made of [clear glass / ice / crystal], translucent, refracting
light with internal reflections. Slowly rotates or performs a small motion.
Clean studio lighting, 9:16 vertical.
```
*Negative:* `opaque, solid, no refraction, dull material, no light interaction`

**5.5 — Particle Dissolve**
```
A [subject/object] bursts into [thousands of leaves / petals / glowing dust]
that scatter and swirl, then converge back into the solid form. Smooth,
cinematic, warm lighting, 9:16 vertical.
```
*Negative:* `hard cut, smoke instead of particles, no reassembly, disappearing permanently`

**5.6 — Claymation**
```
Claymation: [a subject and scene] rendered as plasticine clay with visible
fingerprints and imperfect handmade texture, moving in subtle stop-motion.
Warm soft lighting, charming imperfections, 9:16 vertical.
```
*Negative:* `smooth CGI, realistic skin, clean vector, no texture, fluid 60fps motion`

---

## CATEGORY 6 — MIRROR & SYMMETRY

| Technique | Mechanism | Best for |
|---|---|---|
| 6.1 Infinite Mirror | Recursion receding into distance | Disorientation |
| 6.2 Reflection Mismatch | Reflection acts independently | Deep uncanny |
| 6.3 Kaleidoscope | Radial mirrored symmetry | Hypnotic, loud |
| 6.4 Split-Screen Impossible | Two halves that cannot co-exist | "Wait, what?" |

**6.1 — Infinite Mirror**
```
Infinite mirror recursion: [a subject stands between two mirrors / holds a
mirror facing itself], creating an infinitely repeating reflection receding
into the distance, each copy slightly smaller. Cinematic lighting, 9:16.
```
*Negative:* `single reflection, no recursion, flat mirror, no depth`

**6.2 — Reflection Mismatch**
```
A [subject] looks into a mirror and their reflection [blinks slowly / smiles
wider / looks away / moves independently] while the subject stays still.
Subtle, uncanny, realistic lighting, 9:16 vertical.
```
*Negative:* `reflection matching subject, no mismatch, cartoonish, exaggerated`

**6.3 — Kaleidoscope**
```
Kaleidoscope: [a subject/pattern] multiplied into radial mirrored symmetry,
rotating slowly, a hypnotic repeating mandala. Vibrant colours, clean
geometric precision, 9:16 vertical.
```
*Negative:* `asymmetric, single image, no mirroring, flat, static`

**6.4 — Split-Screen Impossible**
```
Split-screen impossible: the top half of the frame shows [one scene] and the
bottom half shows [a completely different scene], joined at a clean horizontal
seam so they appear to be one impossible continuous image. Locked camera, 9:16.
```
*Negative:* `mismatched seam, broken join, two separate videos, no continuity`

---

## CATEGORY 7 — IMPOSSIBLE OBJECTS & SURREAL SPACE

| Technique | Mechanism | Best for |
|---|---|---|
| 7.1 The Door / Portal | Opening reveals a scene that cannot exist there | Strongest open loop |
| 7.2 Object Out of Place | Normal object in impossible context | Instant absurdity |
| 7.3 Impossible Architecture | Escher geometry | Spatial paradox |
| 7.4 Living Objects | Objects with faces/eyes/react | Charm, CPG, food |

**7.1 — The Door / Portal**
```
A [door/window/portal] opens to reveal [an impossible scene] that cannot exist
in its location. The subject [walks through / looks through]. Seamless,
cinematic lighting on both sides, 9:16 vertical.
```
*Negative:* `empty doorway, black void, no revealed scene, broken seam`

**7.2 — Object Out of Place**
```
A [huge ordinary object] appears in [a place it cannot belong], fully
photorealistic and lit consistently with the scene. Locked camera, 9:16.
```
*Negative:* `object blending in, believable placement, no contrast, flat lighting`

**7.3 — Impossible Architecture**
```
Impossible architecture: [a staircase / room] in the style of M.C. Escher,
where [stairs loop back onto themselves / gravity points in two directions].
Surreal, geometrically precise, clean lighting, 9:16 vertical.
```
*Negative:* `normal architecture, possible geometry, flat, no paradox`

**7.4 — Living Objects**
```
A [normal object] comes alive with [a simple expressive face / subtle
animation], reacting to [something off-screen]. Charming, minimal,
personality-driven, photorealistic, 9:16 vertical.
```
*Negative:* `inanimate, static object, no expression, horror, overly detailed face`

---

## CATEGORY 8 — BODY & ANATOMY DISTORTION

| Technique | Mechanism | Best for |
|---|---|---|
| 8.1 Duplicated Limbs | Extra hands/arms doing tasks | Uncanny, capability |
| 8.2 Head / Body Swap | Face on the wrong body | Immediate mismatch |
| 8.3 Elastic Body | Rubber physics | Cartoon energy |
| 8.4 Detached Parts | Hand/head/eye acts alone | Primal uncanny |

**8.1 — Duplicated Limbs**
```
A [person] has [extra hands / extra arms] emerging smoothly from the body,
each moving independently and naturally, all performing [tasks] at once.
Realistic anatomy and lighting. Locked camera, 9:16 vertical.
```
*Negative:* `missing limbs, floating limbs, distorted anatomy, wrong number of fingers`

**8.2 — Head / Body Swap**
```
Body-swap: [a face] appears on [a completely different body / an animal / an
object], moving and reacting naturally. Seamless, photorealistic, consistent
lighting, 9:16 vertical.
```
*Negative:* `mismatched seam, floating head, wrong proportions, visible compositing`

**8.3 — Elastic Body**
```
Elastic-body: a [person] stretches, squashes and deforms like rubber, limbs
elongating and the body compressing, then snapping back to normal. Cartoon
physics, smooth motion, 9:16 vertical.
```
*Negative:* `rigid body, no deformation, realistic bone structure, no squash and stretch`

**8.4 — Detached Parts**
```
A [hand / head / eye] detaches from a [person] and [floats / moves / acts]
independently while the person remains otherwise normal. Realistic anatomy and
lighting. Locked camera, 9:16 vertical.
```
*Negative:* `blood, gore, horror, attached body part, no independence`

---

## CATEGORY 9 — CAMERA & PERSPECTIVE TRICKS

| Technique | Mechanism | Best for |
|---|---|---|
| 9.1 Whip-Pan Reveal | Fast pan lands on a surprise | Energy + reveal |
| 9.2 Dutch Angle | Tilted horizon, constant unease | Tension |
| 9.3 Forced Perspective | Angle-created optical illusion | Playful "aha" |
| 9.4 Dolly Zoom | Zoom + dolly, background stretches | Vertigo |
| 9.5 Fourth-Wall Break | Subject looks into the lens | Intimacy |
| 9.6 POV-to-Reveal | First person pulls back to reveal | Recontextualisation |

**9.1 — Whip-Pan Reveal**
```
Whip-pan reveal: the camera whips rapidly to the [left/right], motion blurring
mid-pan, and lands on [a surprising reveal], then locks. 9:16 vertical.
```
*Negative:* `slow pan, no motion blur, no reveal, jerky landing`

**9.2 — Dutch Angle**
```
Dutch angle: the entire scene is tilted [10–30 degrees] off-axis, the horizon
angled, creating subtle unease. [Subject/action continues normally]. Locked
camera after the tilt, 9:16 vertical.
```
*Negative:* `level horizon, straight camera, balanced composition, no tilt`

**9.3 — Forced Perspective**
```
Forced-perspective illusion: a [person] appears to [hold / stand on /
interact with] a [huge or tiny object] through a clever camera angle. Single
locked camera angle, 9:16 vertical.
```
*Negative:* `no illusion, mismatched scale, obvious trick, multiple angles`

**9.4 — Dolly Zoom**
```
Dolly zoom (vertigo effect): the camera [zooms in while dollying back], the
background stretching and compressing dramatically while the subject stays the
same size in frame. Cinematic, disorienting, smooth, 9:16 vertical.
```
*Negative:* `static background, no stretch, normal zoom, fixed perspective`

**9.5 — Fourth-Wall Break**
```
Fourth-wall break: mid-[action], the [subject] suddenly stops and looks
directly into the camera, [speaking / gesturing] to the viewer. Natural,
candid, 9:16 vertical.
```
*Negative:* `never looking at camera, unaware subject, breaking character unnaturally`

**9.6 — POV-to-Reveal**
```
POV-to-reveal: the scene starts in first-person POV [doing an action], then
the camera smoothly pulls back to reveal [the actual subject / unexpected
context] that changes the meaning of what was just seen. Seamless, 9:16.
```
*Negative:* `no reveal, staying in POV, hard cut, no recontextualisation`

---

## CATEGORY 10 — EMOTION & EXPECTATION SUBVERSION

| Technique | Mechanism | Best for |
|---|---|---|
| 10.1 Bait & Switch | Setup that flips to something else | Cognitive jolt |
| 10.2 Mask Crack | Composed face breaks | Emotional reversal |
| 10.3 Unexpected Reaction | Response that doesn't fit | Funny / shocking |
| 10.4 Silence / Audio Cut | Sound cuts to nothing | Salience drop |

**10.1 — Bait & Switch**
```
Bait-and-switch: the scene opens looking like [one thing], then a reveal shows
it is actually [something completely different]. The pivot is instant and
visually clear. Locked camera, 9:16 vertical.
```
*Negative:* `no pivot, predictable reveal, muddled switch, unclear contrast`

**10.2 — Mask Crack**
```
The mask crack: a [person] holds a forced smile or calm expression, then the
mask visibly cracks — their face shifts to reveal [tears / exhaustion / anger]
underneath. Raw, intimate, realistic, 9:16 vertical.
```
*Negative:* `no emotional shift, static expression, cartoonish, melodramatic`

**10.3 — Unexpected Reaction**
```
Unexpected reaction: in response to [a situation], a [person] reacts in a
[completely unexpected way — deadpan calm / over-the-top joy / sudden tears].
The contrast between expectation and reaction is the hook. 9:16 vertical.
```
*Negative:* `predictable reaction, muted response, no contrast, forced acting`

**10.4 — Silence / Audio Cut**
```
Sudden silence: [a scene with normal sound and action] abruptly cuts to total
silence, leaving only [a clock ticking / a breath / a low hum]. The visual
continues but the audio vacuum is jarring. 9:16 vertical.
```
*Negative:* `continuous audio, no silence, no contrast, music filling the gap`

---

## CATEGORY 11 — LIGHT & COLOR

| Technique | Mechanism | Best for |
|---|---|---|
| 11.1 Selective Color | One thing in colour, rest desaturated | Eye-path control |
| 11.2 Neon / Dark Contrast | Dark scene, glowing focal element | Loud in a bright feed |
| 11.3 Light Leak / Flash | Burst of light as transition | Attention reset |
| 11.4 Color Inversion | Negative-film flip | Jarring shift |
| 11.5 Silhouette Reveal | Backlit outline, features hidden | Mystery |

**11.1 — Selective Color**
```
Selective colour: the entire scene is [black-and-white / desaturated] except a
single [element] that remains in vivid saturated colour. The contrast isolates
the subject. 9:16 vertical.
```
*Negative:* `full colour throughout, no isolation, muted coloured element, everything grey`

**11.2 — Neon / Dark Contrast**
```
Neon contrast: a [dark/black] environment with a single [neon-glowing /
luminescent element] as the focal point. Deep shadows, vibrant rim light, high
contrast, cinematic. Locked camera, 9:16 vertical.
```
*Negative:* `bright flat scene, no contrast, no glow, washed out, evenly lit`

**11.3 — Light Leak / Flash**
```
Light-leak transition: a burst of [warm light / lens flare / flash] floods the
frame, transitioning from [one scene] into [another]. Brief and smooth, like a
film light leak. 9:16 vertical.
```
*Negative:* `hard cut, no light, no transition, gradual fade only`

**11.4 — Color Inversion**
```
Colour inversion: [a scene] suddenly inverts — colours flip to their
photographic negatives — then snaps back to normal. Instant, total,
momentarily disorienting. Locked camera, 9:16 vertical.
```
*Negative:* `normal colours throughout, partial inversion, slow fade, no snap`

**11.5 — Silhouette Reveal**
```
Silhouette reveal: a [subject] appears as a dramatic backlit silhouette
against [bright light], features hidden in darkness, the light slowly
revealing detail. Cinematic, 9:16 vertical.
```
*Negative:* `full lighting, visible face, no backlight, no contrast`

---

## CATEGORY 12 — TYPOGRAPHY & TEXT

> **The only category that works with the volume off.** ~85% of viewers watch on
> mute. Text is never generated by the AI model — build it in the editor
> (CapCut, After Effects, Canva) so it is exactly right. See `prompt-formula.md`
> §"Text policy".

| Technique | Mechanism | Best for |
|---|---|---|
| 12.1 Kinetic Slam | Bold text hits the frame | Mute-proof hooks |
| 12.2 Shatter / Glitch Text | Word breaks apart | Message = mechanism |
| 12.3 Text-in-World | Text is a physical object | Novel, dimensional |
| 12.4 Counting / Numbers | Number counts to a reveal | Anticipation |
| 12.5 Text Morph | One word becomes another | Visual metaphor |

**12.1 — Kinetic Slam**
```
Bold text [slams / types / pops] onto the screen in large high-contrast
lettering, timed to [a beat / an action], conveying [a short message]. The
text dominates the frame. 9:16 vertical.
```
*Negative:* `small text, slow text, low contrast, unreadable, no motion`

**12.2 — Shatter / Glitch Text**
```
Shattering text: [a word or phrase] appears on screen then [shatters like
glass / glitches / breaks apart] into fragments, mirroring [the message].
Sharp, dramatic. 9:16 vertical.
```
*Negative:* `static text, no break, soft fade, unbroken word`

**12.3 — Text-in-World**
```
Text-in-world: [a word or phrase] exists as a physical object in the scene —
the subject [leans on / walks through / interacts with] the 3D text, which
casts realistic shadows and occludes correctly. Dimensional, cinematic, 9:16.
```
*Negative:* `flat overlay, no interaction, text not integrated, no shadows`

**12.4 — Counting / Numbers Reveal**
```
Counting reveal: a [number / statistic] counts up/down rapidly on screen with
dramatic styling, revealing [a final figure], while [a subject/action] plays
behind. The number is large and readable. 9:16 vertical.
```
*Negative:* `static number, no count, unreadable, small text, no build-up`

**12.5 — Text Morph**
```
Text morph: the word [A] transforms smoothly into the word [B], letter by
letter, on screen. The transition is fluid and legible throughout. 9:16.
```
*Negative:* `hard cut between words, illegible morph, no transformation, static text`

---

## PART 2 — Universal negative prompt library

Append to any prompt to kill the most common AI failures:

```
frozen limbs, rigid pose, standing, walking normally, floating upright,
normal physics, ground contact, strings, wires, visible hands, extra limbs,
distorted anatomy, wrong number of fingers, mutated face, blurry subject,
jump cuts, broken motion, hard cuts, camera shake, camera drift, text,
watermark, logo, play button, subtitles, cartoonish (unless intended),
low quality, low detail, overexposed, underexposed, busy background,
extra people
```

**Camera drift is the #1 failure across every category.** The model "moves the
camera" to fake an effect. Always specify `locked camera, no zoom pan tilt or
rotation`.

---

## PART 3 — Category selection matrix

Pick the category from the **content**, not from taste. Match the mechanism to
what the video is actually about — a random effect is decoration and audiences
punish it.

| If the content is about… | Use first | Use second |
|---|---|---|
| A person's story, injustice, loss | 10 Emotion | 11 Light & Color |
| Money, scale, business, growth | 2 Scale | 1 Gravity |
| Systems, debt, time, process | 3 Time | 12 Typography |
| Resources, materials, products | 5 Material | 7 Impossible Objects |
| Secrets, lies, hidden records | 4 Glitch | 6 Mirror |
| Opportunity, doors, access | 7 Impossible Objects | 9 Camera |
| Identity, aspiration, self-belief | 6 Mirror | 10 Emotion |
| Capability, skill, biology, anatomy | 8 Body | 2 Scale |
| News, reveals, urgency | 12 Typography | 11 Neon |
| Humour, absurdity, charm | 7 Living Objects | 8 Body |

---

## PART 4 — Saturation rules (non-negotiable)

1. **One category per post.** The thumbnail, the first frame and the hook all
   carry the same category. Mixing two dilutes both.
2. **Never publish two consecutive posts in the same category.** Audiences adapt
   to a repeated trick within days. Rotate across at least 4 categories a week.
3. **Never reuse the same technique twice in a week** unless testing a variant.
4. **Under-use the loud ones.** Glitch and neon burn out fastest.
5. **The category must mean something.** Glitch should signal "corruption /
   lie exposed", not "cool effect". Selective colour should isolate the thing
   the video is about.
6. **Every interrupt is a promise.** If the first frame implies an answer, the
   video must deliver it. Teasing without payoff trains the audience to distrust
   the channel — that costs more than the view gains.
