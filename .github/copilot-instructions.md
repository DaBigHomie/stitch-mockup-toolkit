# Copilot Instructions — stitch-mockup-toolkit

**Repository**: stitch-mockup-toolkit
**Owner**: DaBigHomie
**Type**: Reusable, brand-agnostic toolkit (templates + TypeScript scripts)
**UGWTF Alias**: `stitch-mockup-toolkit`

---

## What This Is

A drop-in toolkit that converts Google Stitch AI mockups into React /
React-Native components inside any Feature-Sliced-Design monorepo. Uses a
6-layer context strategy for ~20–30× cold-start token savings. See `AGENTS.md`
for the workflow and `README.md` for the layered context table.

---

## Standards Reference

This repo follows the DaBigHomie workspace standards. Universal rules live in
`.github/instructions/` and are synced from
[DaBigHomie/documentation-standards](https://github.com/DaBigHomie/documentation-standards)
via `scripts/push-rules.mts`.

Every agent MUST load before any work:
1. `.github/copilot-instructions.md` — this file
2. `AGENTS.md` — repo context and the 6-layer context strategy
3. `.github/instructions/*.instructions.md` — universal rules

---

## Mandatory Pre-Commit Checks

This repo has no `tsc`, lint, build, or test pipeline at the root — it is a
templates+scripts toolkit. The only quality gate is:

```bash
# Smoke-test the converter script
npx tsx scripts/convert-prompts.mts ./out
```

When changing anything inside `templates/` or `scripts/convert-prompts.mts`,
re-run the smoke test before committing.

---

## Core Rules

### Portable Paths
- NEVER `/Users/dame/...` or any hard-coded user path
- ALWAYS `~/`, `./`, `$(pwd)`, relative paths

### Branch Safety
1. Create a new branch before editing — never commit to `main` directly
2. `git branch --show-current` before every commit
3. Never delete a branch you didn't create

### Commit Format
`feat/fix/docs/chore: [description]`

Multi-line: use heredoc (`git commit -F - <<'EOF' ... EOF`).

### Templates Are the Contract
- `templates/*.md` and `templates/brand.config.schema.json` are the product —
  keep section headings and JSON keys stable.
- Breaking template structure breaks every downstream consumer's generator.
- When changing a template, document the change in `README.md` and bump any
  version note at the top of the file.

### `brand.config.json` Is Gitignored
- Only `brand.config.example.json` is committed. Real brand configs live
  outside the repo or per-consumer.
- Never commit a populated `brand.config.json`.

### Layered Context Discipline
- Never bulk-read `examples/*/prompts/*.md` — they are 2000+ lines.
- Open exactly **one** HTML mockup at a time when converting screens.
- Keep `CONTEXT_MANIFEST.md` under ~120 lines.

---

## UGWTF Pipeline

Monitored by UGWTF (alias: `stitch-mockup-toolkit`).

```bash
cd ~/management-git/ugwtf
export GITHUB_TOKEN=$(gh auth token)
node dist/index.js status stitch-mockup-toolkit --no-cache
```

---

## Instruction Files (auto-synced)

| File | Purpose |
|------|---------|
| `agent-execution-constraints.instructions.md` | Stop, scripts-over-commands, TS-only |
| `commit-quality.instructions.md` | Pre-commit gates, branch safety |
| `core-directives.instructions.md` | Automation-first, FSD, portable paths |
| `pr-review.instructions.md` | Copilot review handling, gates |
| `typescript.instructions.md` | TS conventions |
| `workflow-syntax.instructions.md` | GitHub Actions YAML rules |

To resync: `cd ~/management-git/documentation-standards && npx tsx scripts/push-rules.mts --repo stitch-mockup-toolkit`
