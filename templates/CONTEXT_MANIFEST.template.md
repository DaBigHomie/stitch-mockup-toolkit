# Context Manifest — {{BRAND_NAME}}

**Repo**: {{REPO_NAME}}
**Branch**: {{BRANCH}}
**Generated**: {{DATE}}
**Session Goal**: {{ONE_SENTENCE_GOAL}}

> Purpose: this file is the **single artifact a new agent reads** to resume work.
> It must stay under ~120 lines so it fits in a small context window. If it grows
> beyond that, archive the old one with a date suffix and start fresh.

---

## 1. Completed Work
| File / Function | Change Type | Status | Notes |
|---|---|---|---|

## 2. Pending Logic Hurdles
| Hurdle | Severity | Blocking? | Context |
|---|---|---|---|

## 3. Architectural Decisions
| Decision | Rationale | Alternatives Considered |
|---|---|---|

## 4. Next Steps
| # | Task | Priority | Complexity | Dependencies |
|---|---|---|---|---|

## 5. User Intention
> {{NORTH_STAR_QUOTE}}

## 6. Reference Links
- Strategy: `docs/01-STRATEGY.md`
- Brand config: `brand.config.json`
- Prompt template: `templates/PROMPT-TEMPLATE.md`
- Convert script: `scripts/convert-prompts.mts`
- Working example: `examples/pullupatl/`

## 7. Agent Quickstart
- Read **only** this manifest + `docs/01-STRATEGY.md` (~150 lines total).
- Do **not** read `examples/pullupatl/prompts/*.md` (~4500 lines) unless explicitly diffing.
- HTML mockups in `examples/pullupatl/html/` are reference artifacts; open one at a time only when converting that specific screen.
