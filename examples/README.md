# Examples — three posts, three different skins

These files are **format references, not presets.** Each comes from a different
project with a different brand skin, and that is the point: the shared engine is
identical, the skin is not.

| File | Project type | Skin archetype | Post style |
|---|---|---|---|
| `interrupt-post02.md` | Media / internet / impossible things | Hijacked broadcast | Social (4 clips, 22 s) |
| `biolens-mosquito.md` | Science / biology | The lens | Scene (4 clips, 32 s) |
| `saintnaomis-day01.md` | Cause / education | Warm human | Story (6 clips, 48 s) |

**Do not copy a skin into a new project.** Design a new one with the method in
`02_BRAND_SKIN.md` §2, and fill the brief in §3.

What these examples *do* demonstrate, and what you should copy:

- the exact post block and field names (`_SHARED/post-anatomy.md`)
- clip tables with contiguous timing and durations inside the model limit
- visuals written as verb + direction, with sensory anchors and a negative prompt
- on-screen text marked as editor-built, never model-generated
- real screenshots reserved for proof
- three answerable comments and one CTA

Validate any of them with:

```bash
node tools/validate-posts.js examples/biolens-mosquito.md
```
