# Context Manifest

**Repo**: atl-table-booking-app
**Branch**: feat/stitch-mockup-optimization
**Generated**: 2026-04-22 10:15
**Session Goal**: Optimize 30x Design Manifest with 13-block Stitch strategy and resolve PR concerns.

---

## 1. Completed Work

| File / Function | Change Type | Status | Notes |
|----------------|-------------|--------|-------|
| `docs/prompts/stitch_mockups_prompts/STITCH-PROMPTING-STRATEGY.md` | created | ✅ done | Established 13-block prompting architecture for high-fidelity conversion. Includes "Aspirational FSD" disclaimer. |
| `docs/prompts/stitch_mockups_prompts/PullUpATL — 30x Design Agent Google Stitch Prompt Manifest.md` | modified | ✅ done | Fully optimized all 30 Agents (Tiers 1-8) with domain context, layout specs, and FSD component targets. (modified in prior commits; not in this PR's diff) |
| `.gitignore` | modified | ✅ done | Blocked `builds/` directory to prevent large file push failures. |

### Recent Commits
- `c2612d2` — feat(prompts): optimize 30x Design Manifest with 13-block Stitch strategy (Clean re-creation)
- `e1e6830` — feat: update PullUpATL prompt manifest to v2.0 (#75) (Base main branch state)

---

## 2. Pending Logic Hurdles

| Hurdle | Severity | Blocking? | Context |
|--------|----------|-----------|---------|
| FSD Migration | P1 | No | `apps/mobile/src` still uses flat structure; conversion agents must migrate to `features/entities/shared` as mockups move to code. |

---

## 3. Architectural Decisions

| Decision | Rationale | Alternatives Considered |
|----------|-----------|------------------------|
| 13-Block Prompting | Ensures AI mockups include precise CSS tokens and component paths for conversion. | Single paragraph prompting — rejected for "AI drift." |
| Aspirational FSD | Aligns Design Manifest with target architecture in `docs/11-30X-FULL-STACK-DOCUMENT.md` while acknowledging current repo state. | Flat structure prompting — rejected as it blocks planned architecture. |

---

## 4. Next Steps

| # | Task | Priority | Estimated Complexity | Dependencies |
|---|------|----------|---------------------|--------------|
| 1 | Generate mockups via Google Stitch | P1 | Medium | Blocked by PR #77 merge. |
| 2 | Convert mockups to React/Tailwind | P1 | High | Depends on Stitch output. |

---

## 5. User Intention

> To establish a robust, consistency-focused prompting strategy for the Google Stitch MCP that ensures mockups are generated with enough detail and structural accuracy to be surgically converted into React/Tailwind code within an FSD architecture.

---

## 6. Reference Links

### Instruction Files
- [copilot-instructions.md](../../../.github/copilot-instructions.md)
- [AGENTS.md](../../../AGENTS.md)
- [Instructions dir](../../../.github/instructions/)

### Active Documentation
- [Prompt Manifest](../../../docs/prompts/stitch_mockups_prompts/PullUpATL%20—%2030x%20Design%20Agent%20Google%20Stitch%20Prompt%20Manifest.md)
- [Stitch Strategy](../../../docs/prompts/stitch_mockups_prompts/STITCH-PROMPTING-STRATEGY.md)

---

## 7. Agent Quickstart

### Current Working State
- **Build**: ✅ Passing
- **Lint**: ✅ Clean
- **Tests**: ✅ All pass
- **Uncommitted changes**: No (accidental system files purged)
