# {{BRAND_NAME}} — Stitch Prompt Template

Use this 13-block skeleton for every screen prompt. See `docs/01-STRATEGY.md` for block definitions.

### PROMPT {{AGENT_ID}} — {{SCREEN_NAME}}
```
[Block 0 — Agent Context]
You are the {{AGENT_ROLE}} for {{BRAND_NAME}}.

[Block 1 — Brand Preamble]
{{BRAND_NAME}} | {{DEMOGRAPHIC}} | Platform: {{PLATFORM}}

[Block 2 — Subject]
{{SCREEN_DESCRIPTION}}

[Block 3 — Scene]
{{USER_JOURNEY_CONTEXT}}

[Block 3b — Target Personas]
{{PERSONAS}}

[Block 3c — Layout Spec]
{{GRID_GAPS_SECTIONS}}

[Block 3d — Responsive Context]
Viewport: {{VIEWPORT}}

[Block 3e — Component Target]
File: {{COMPONENT_TARGET_PATH}}

[Block 4 — Brand Colors]
Primary:    {{COLOR_PRIMARY_NAME}}    → {{COLOR_PRIMARY_REF}}
Secondary:  {{COLOR_SECONDARY_NAME}}  → {{COLOR_SECONDARY_REF}}
Accent:     {{COLOR_ACCENT_NAME}}     → {{COLOR_ACCENT_REF}}
Background: {{COLOR_BACKGROUND_NAME}} → {{COLOR_BACKGROUND_REF}}
Text:       {{COLOR_TEXT_NAME}}       → {{COLOR_TEXT_REF}}
(Never hardcode hex; use the named refs from {{BRAND_TOKENS_PATH}}.)

[Block 4b — Design Tokens]
Spacing base: {{SPACING}} | Radius LG: {{RADIUS_LG}} | Radius XL: {{RADIUS_XL}} | Shadow: {{SHADOW}}

[Block 4c — Variant Directive]
{{VARIANT_NOTES}}

[Block 5 — Style Directives]
Modern iOS/Android standards. Pixel-perfect. Native-feeling motion.

[Block 6 — Negative Prompts]
Avoid: stock-photo gradients, generic Material chrome, Comic Sans / system fonts, lorem ipsum.

[Block 7 — Background/Frame]
Present in {{DEVICE_FRAME}} on {{SURFACE_BACKDROP}}.
```
