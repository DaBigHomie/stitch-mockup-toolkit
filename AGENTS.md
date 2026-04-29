# AGENTS.md — stitch-mockup-toolkit

**Repository**: stitch-mockup-toolkit
**Type**: Reusable, brand-agnostic toolkit (templates + TypeScript scripts)
**UGWTF Alias**: `stitch-mockup-toolkit`

---

## Mission

Convert Google Stitch AI mockups into React / React-Native components inside any
Feature-Sliced-Design monorepo with **20–30× cold-start token savings**, using a
layered context strategy and a brand-agnostic prompt template.

Codifies four lessons extracted from the PullUpATL implementation:

1. Never load the full prompt manifest — stream one screen's HTML at a time
2. Brand tokens live in a single `brand.config.json` (JSON-Schema validated)
3. Markdown prompts → typed TS tiers via a single `convert-prompts.mts` script
4. Resume state lives in `CONTEXT_MANIFEST.md` and is capped at ~120 lines

---

## 6-Layer Context Strategy

| Layer | File(s) | Lines | When the agent reads it |
|---|---|---|---|
| 1. Resume state | `CONTEXT_MANIFEST.md` | ~80 | **Every** session start |
| 2. Strategy | `docs/01-STRATEGY.md` | ~70 | First session, then on demand |
| 3. Brand tokens | `brand.config.json` | ~30 | When generating prompts |
| 4. Template | `templates/PROMPT-TEMPLATE.md` | ~50 | When generating prompts |
| 5. Bulk prompts | `examples/<brand>/prompts/*.md` | 2000+ | **Never** — stream per screen |
| 6. HTML mockups | `examples/<brand>/html/*.html` | 200–700 | **Only** the screen being converted |

Net: ~230 lines of cold-start context vs ~4,700 unfiltered.

---

## Repo Layout

```
stitch-mockup-toolkit/
├── README.md
├── brand.config.example.json          ← copy → brand.config.json (gitignored)
├── docs/
│   └── 01-STRATEGY.md                 ← 13-block prompting strategy
├── scripts/
│   └── convert-prompts.mts            ← markdown prompts → tiered TS files
├── templates/
│   ├── PROMPT-TEMPLATE.md             ← per-screen prompt skeleton
│   ├── CONTEXT_MANIFEST.template.md   ← resume artifact skeleton
│   └── brand.config.schema.json       ← JSON-Schema for brand tokens
└── examples/pullupatl/                ← reference implementation
```

---

## Quality Gates

| Gate | Command | Notes |
|------|---------|-------|
| Script execution | `npx tsx scripts/convert-prompts.mts ./out` | Smoke test |
| Template stability | manual review | Section headings = downstream contract |
| Schema validity | manual / ajv | `templates/brand.config.schema.json` |

No `tsc`, lint, build, or test pipeline — this is a templates+scripts toolkit,
not an application. The single `package.json` script is `convert`.

---

## How Agents Should Use This Repo

- **Authoring a new brand workflow**: copy `brand.config.example.json` →
  `brand.config.json`, fill tokens, then per screen copy
  `templates/PROMPT-TEMPLATE.md` and fill placeholders.
- **Drop-in mode**: copy `templates/`, `scripts/`, and `docs/` into the
  consumer project repo (recommended for active work).
- **Reference mode**: keep this repo standalone; consumer projects point at
  `~/management-git/stitch-mockup-toolkit/` paths.
- **Resuming work**: read `CONTEXT_MANIFEST.md` first, then open exactly one
  HTML mockup — never bulk-read `prompts/*.md`.

---

## UGWTF Pipeline

```bash
cd ~/management-git/ugwtf
export GITHUB_TOKEN=$(gh auth token)
node dist/index.js status stitch-mockup-toolkit --no-cache
node dist/index.js issues stitch-mockup-toolkit --no-cache
node dist/index.js prs stitch-mockup-toolkit --no-cache
```

---

## Templates Are the Product

- `templates/*.md` and `templates/brand.config.schema.json` are the contract —
  keep section headings and JSON keys stable.
- Breaking template structure breaks every downstream consumer's generator.
- When changing a template, document the change in `README.md` and bump any
  version note at the top of the file.

---

## Key References

- `README.md` — overview, layered context table, quickstart
- `docs/01-STRATEGY.md` — 13-block prompting strategy
- `templates/PROMPT-TEMPLATE.md` — per-screen prompt skeleton
- `templates/CONTEXT_MANIFEST.template.md` — resume artifact skeleton
- `examples/pullupatl/` — worked reference implementation
- `.github/instructions/*.instructions.md` — universal workspace rules (synced)
