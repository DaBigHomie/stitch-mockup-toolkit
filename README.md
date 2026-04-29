# Stitch Mockup Toolkit

A **portable, brand-agnostic** workflow for converting Google Stitch AI mockups
into React / React-Native components inside a Feature-Sliced-Design monorepo.

Extracted and genericized from the PullUpATL implementation in
`atl-table-booking-app`. Drop this folder into any repo, fill in
`brand.config.json`, and you have a working mockup-to-code pipeline.

## Why this exists (the 30x token-savings angle)

Loading the full PullUpATL prompt manifest into an agent burns ~4,500 lines of
context every session. This toolkit uses a **layered context strategy**:

| Layer | File(s) | Lines | When the agent reads it |
|---|---|---|---|
| 1. Resume state | `CONTEXT_MANIFEST.md` | ~80 | **Every** session start |
| 2. Strategy | `docs/01-STRATEGY.md` | ~70 | First session, then on demand |
| 3. Brand values | `brand.config.json` | ~30 | When generating prompts |
| 4. Template | `templates/PROMPT-TEMPLATE.md` | ~50 | When generating prompts |
| 5. Bulk prompts | `examples/<brand>/prompts/*.md` | 2000+ | **Never** — stream one screen at a time |
| 6. HTML mockups | `examples/<brand>/html/*.html` | 200-700 each | **Only** when converting that screen |

Net effect: a fresh agent gets full project context in ~230 lines instead of
~4,700. ≈ **20-30× reduction** in cold-start tokens.

## Layout

```
stitch-mockup-toolkit/
├── README.md                          ← you are here
├── brand.config.example.json          ← copy → brand.config.json
├── docs/
│   └── 01-STRATEGY.md                 ← the 13-block prompting strategy
├── scripts/
│   └── convert-prompts.mts            ← markdown prompts → tier TS files
├── templates/
│   ├── PROMPT-TEMPLATE.md             ← skeleton for one screen prompt
│   ├── CONTEXT_MANIFEST.template.md   ← skeleton for the resume artifact
│   └── brand.config.schema.json       ← JSON-Schema for brand.config.json
└── examples/
    └── pullupatl/                     ← reference implementation
        ├── prompts/                   ← MANIFEST.md + PROMPTS-V2.md
        ├── html/                      ← 32 generated HTML mockups
        └── context-manifest/          ← real-world CONTEXT_MANIFEST sample
```

The 12 MB of source mockup PNGs were intentionally **not** copied. If you need
them, they live at:
`atl-table-booking-app/atb-stitch-mockups/atb - mockup images/`

## Quickstart for a new brand

1. `cp brand.config.example.json brand.config.json` and fill in your tokens.
2. Copy `templates/PROMPT-TEMPLATE.md` per screen → fill placeholders.
3. Collect the screens into a single `prompts/PROMPTS.md` (see PullUpATL example).
4. Run: `pnpm tsx scripts/convert-prompts.mts ./out`.
5. Generate mockups via Google Stitch using the prompts.
6. Per converted screen, append a row to `## 1. Completed Work` in
   `CONTEXT_MANIFEST.md`. **Keep the manifest under ~120 lines.**

## Quickstart for a resuming agent

1. Read `CONTEXT_MANIFEST.md`.
2. Read `docs/01-STRATEGY.md` only if the manifest references a block you
   don't recognize.
3. Open exactly **one** HTML in `examples/<brand>/html/` — the one you are
   converting right now.
4. Do not bulk-read `examples/<brand>/prompts/*.md`.
