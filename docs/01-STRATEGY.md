# 30x Design Agent — Google Stitch Prompting Strategy (V2)

## Goal
To ensure maximum consistency, brand fidelity, and structural detail in AI-generated UI mockups, enabling surgical conversion into **React (Expo)** and **Tailwind CSS** within the **FSD (Feature-Sliced Design)** architecture.

## The 13-Block Composition
Every prompt sent to the Google Stitch MCP must follow this exact block sequence. This multi-layered context approach eliminates "AI drift" and ensures that the generated HTML/CSS has the correct tokens.

| Block | Name | Purpose |
| :--- | :--- | :--- |
| **0** | **Agent Context** | Injects domain-specific expertise (e.g., "Authentication Architect"). |
| **1** | **Brand Preamble** | Core identity, demographic, and platform context. |
| **2** | **Subject** | Clear definition of what the screen is. |
| **3** | **Scene** | Contextual user journey and rationale. |
| **3b** | **Target Personas** | Explicitly states which 30x personas this screen serves. |
| **3c** | **Layout Spec** | Structured instructions for grids, gaps, and sections. |
| **3d** | **Responsive Context** | Viewport details (e.g., Mobile-first 390x844). |
| **3e** | **Component Target** | The destination file path in the monorepo. |
| **4** | **Brand Colors** | Inject token names from `BRAND.ts` (e.g. `COLORS.primary`); never hardcode hex values. |
| **4b** | **Design Tokens** | Border radius, shadows, and spacing tokens. |
| **4c** | **Variant Directive** | Specific instructions for creative exploration vs. refinement. |
| **5** | **Style Directives** | Global UI quality rules (modern iOS/Android standards). |
| **6** | **Negative Prompts** | Strict list of design patterns and fonts to AVOID. |
| **7** | **Background/Frame** | Presentation context (e.g., "iPhone 15 Pro on dark surface"). |

---

## Brand Token Injection ({{BRAND_NAME}})

### 🎨 Colors
- **Primary ({{COLOR_PRIMARY_NAME}}):** Use `COLORS.primary` from `{{BRAND_TOKENS_PATH}}`
- **Secondary ({{COLOR_SECONDARY_NAME}}):** Use `COLORS.secondary` from `{{BRAND_TOKENS_PATH}}`
- **Accent ({{COLOR_ACCENT_NAME}}):** Use `COLORS.accent` from `{{BRAND_TOKENS_PATH}}`
- **Background ({{COLOR_BACKGROUND_NAME}}):** Use `COLORS.background` from `{{BRAND_TOKENS_PATH}}`
- **Text ({{COLOR_TEXT_NAME}}):** Use `COLORS.textPrimary` from `{{BRAND_TOKENS_PATH}}`

### 📐 Spacing & Radius
- **Base Unit:** Use `SPACING[1]` from `{{BRAND_TOKENS_PATH}}`
- **Radius LG:** Use `RADIUS.lg` from `{{BRAND_TOKENS_PATH}}` (Standard card)
- **Radius XL:** Use `RADIUS.xl` from `{{BRAND_TOKENS_PATH}}` (Container)
- **Shadow MD:** Use `SHADOWS.md` from `{{BRAND_TOKENS_PATH}}`; if CSS output is required, derive the `box-shadow` string from the token definition rather than embedding a literal value here

---

## 30x Agent Roles in Stitch
When prompting, we assume the persona of the specialized agent assigned to that layer.

- **Agents 01-05:** Brand & Entry (Tier 1)
- **Agents 06-10:** Discovery & Navigation (Tier 2)
- **Agents 11-14:** Venue Detail (Tier 3)
- **Agents 15-19:** Booking Engine (Tier 4)
- **Agents 20-22:** Social & Community (Tier 5)
- **Agents 23-25:** User Profile & Management (Tier 6)
- **Agents 26-28:** Venue Side (Admin / B2B) (Tier 7)
- **Agents 29-30:** System States & Polish (Tier 8)

---

## Conversion Readiness (Monorepo Destinations)

**Note on Architecture:** While this strategy references **FSD (Feature-Sliced Design)** layers and **Tailwind CSS**, these are currently **aspirational/migration-ready** targets. Current mobile implementation uses standard React Native StyleSheet, but conversion agents are expected to migrate components to the FSD structure (Features/Entities/Shared) during the mockup-to-code phase.

Mockups generated with this strategy include the `Component Target` block. This allows the conversion agent to immediately know:
1. Which **app surface** the component belongs to (`apps/mobile`, `apps/admin`, or `apps/web`).
2. Which **destination area** should receive the implementation (e.g., `apps/mobile/app`, `apps/mobile/src/components`, or the upcoming `features/` directory).
3. Which **brand tokens, spacing, radius, and visual hierarchy** must be preserved during implementation, regardless of the final styling system used.
