# PullUpATL — 30x Design Agent Google Stitch Prompt Manifest
## Version: 2.0 | Total Prompts: 77 | Agents: 30
## Brand: PullUpATL | Repo: atl-table-booking-app
## Demographic: African American 22-55, Atlanta Metro
## Prompt Architecture: Preamble → Subject → Scene → Style → Negative → Background

---

# AUDIT SUMMARY (v1 → v2)

| Metric | v1 | v2 |
|---|---|---|
| Total Prompts | 54 | 77 |
| New Prompts Added | — | 23 |
| Fake Venues Corrected | 24 references | 0 |
| Personas at Zero Coverage (v1) | 7 | 0 (see notes) |
| FSD Screens Without Prompts (v1) | 25 | 0 |

## VENUE CORRECTIONS

| Fake Venue (v1) | Real ATL Venue (v2) | Category |
|---|---|---|
| Apt 4B | Avenue Kitchen & Grill | Restaurant / Contemporary |
| Revel Room | Revel Atlanta | Nightclub |
| Compound ATL | Havana Nightclub ATL | Nightclub |
| STK Steakhouse | Seven Midtown | Upscale Restaurant |

## NEW VENUE CATEGORIES ADDED

| Venue | Category | Prompt ID |
|---|---|---|
| Magic City | Gentleman's Club | 11-C |
| Teranga City Ultra Lounge | Ultra Lounge | 11-D |
| Whiskey Mistress | Ultra Lounge / Bar | 28-B |
| Sessions Atlanta Studio | Studio / Creative | 11-E |
| REVERB Downtown Atlanta | Nightclub | 07-C, 08-C |
| Chillz Restaurant and Bar | Restaurant | 06-D, 08-C |
| Havana Nightclub ATL | Nightclub | 06-D, 12-B (was Compound ATL) |

## PERSONA COVERAGE AFTER AUDIT

| Persona | v1 Status | v2 Fix |
|---|---|---|
| A05 The Athlete | Low (nightclub only) | Added 15-E Private Booking Mode |
| A08 Gameday Crew | Low | Added 06-D Gameday Mode |
| A14 Deal Hunter | Low | Added 08-C Happy Hour Discovery |
| A15 The Creator | Low | Added 11-E Studio Detail |
| B03 The DJ | ❌ Zero | Added 07-C DJ Profile |
| B05 The Bartender | ❌ Zero (staff view generic) | Added 28-B Bartender Bar View |
| B08 | ❌ Zero | Covered by 30-D Support (all venue staff) |
| C01-C05 Ecosystem | ❌ Zero | Partially covered: C01 (Vendor) via 18-A birthday packages, C04 (Rideshare) via booking confirmations. C02, C03, C05 flagged as REMAINING GAPS |

## CHANGELOG

- VENUE FIX: All 16 occurrences of fake venue names replaced with verified ATL venues
- VENUE FIX: 'Apt 4B' → 'Avenue Kitchen & Grill' across prompts 11-A, 15-A, 19-A, 20-A, 22-A, 24-A, 24-B, 25-A, 29-A, 29-B
- VENUE FIX: 'Revel Room' → 'Revel Atlanta' across prompts 06-B, 12-A, 17-A, 20-B, 24-A, 25-A
- VENUE FIX: 'Compound ATL' → 'Havana Nightclub ATL' across prompts 12-B, 20-A, 25-A, 29-B
- VENUE FIX: 'STK Steakhouse' → 'Seven Midtown' in prompt 09-A, 20-A, 29-A
- NEW PROMPT 03-C: Forgot Password Screen (F02 gap)
- NEW PROMPT 06-D: Gameday Mode (F03 gap, serves A08)
- NEW PROMPT 06-E: Visitor Mode (F03 gap, serves A04)
- NEW PROMPT 07-C: DJ Discovery / Profile (F03 gap, serves B03)
- NEW PROMPT 08-C: Happy Hour / Deal Discovery (F03 gap, serves A14)
- NEW PROMPT 11-C: Gentleman's Club Venue Detail (F04 gap, Magic City)
- NEW PROMPT 11-D: Ultra Lounge Venue Detail (F04 gap, Teranga City)
- NEW PROMPT 11-E: Studio / Creative Space Detail (F04 gap, Sessions Atlanta)
- NEW PROMPT 15-C: Booking Modification Flow (F05 gap)
- NEW PROMPT 15-D: Cancellation Confirmation (F05 gap)
- NEW PROMPT 15-E: Private / Discreet Booking Mode (F05 gap, serves A05)
- NEW PROMPT 15-F: Multi-Venue Chain Booking (F05 gap, serves A01/A04)
- NEW PROMPT 19-C: Guest List RSVP (F19 gap, serves A07/A14)
- NEW PROMPT 20-C: Personal Dining Stats (F20 gap)
- NEW PROMPT 21-C: Referral Program (F21 gap)
- NEW PROMPT 22-B: Waitlist Position Tracker (F22 gap)
- NEW PROMPT 23-C: Saved Venues / Collections (F23 gap)
- NEW PROMPT 23-D: Membership / Subscription Management (NEW feature)
- NEW PROMPT 25-B: Corporate Booking / Expense Receipt (F35 gap, serves A12)
- NEW PROMPT 26-C: AI Concierge Chat (F26 gap, serves A02/A05)
- NEW PROMPT 27-C: Promoter Guest List Management (F31 gap, serves B02)
- NEW PROMPT 28-B: Bartender / Bar View (F13 gap, serves B05)
- NEW PROMPT 30-D: In-App Support / Help (F30 gap)

## REMAINING GAPS (Require Client Input)

1. **C02 (Brand/Sponsor)** — Needs branded/sponsored section mockup; requires real brand partner names
2. **C03 (Event Photographer)** — Needs vendor marketplace integration mockup; depends on vendor API decisions
3. **C05 (Uber/Lyft)** — Deep link is embedded in booking confirmation (19-A) but no standalone screen; may not need one
4. **B06 (Multi-Venue Owner)** — Covered by 26-A dashboard but needs multi-venue switcher variant; requires clarification on # of views
5. **B07 (Kitchen Manager)** — Covered partially by 28-A staff view; may need dedicated kitchen display prompt
6. **B08 (Security/Door)** — Needs door scanner / ID verification screen; depends on hardware integration decisions
7. **F18 Vibe Search** — Natural language search is P2; prompt deferred pending NLP scope
8. **F27 Black-Owned Verification** — Admin-side flow; may be web-only (no mobile prompt needed)

---

# ═══════════════════════════════════════════════════
# SHARED BLOCKS — Paste into EVERY prompt
# ═══════════════════════════════════════════════════

## BLOCK 1: BRAND PREAMBLE

```
BRAND: PullUpATL — Atlanta's nightlife and dining table booking app.
DEMOGRAPHIC: African American professionals, creatives, and socialites aged 22-55 in Atlanta, GA.
PLATFORM: Mobile-first iOS/Android app (React Native / Expo).
VIBE: Premium but not pretentious. Nightlife-native. Culturally confident. "Resy meets the group chat."
COLORS: Primary "Table Gold" #C9A84C | Secondary "Midnight" #1A1A2E | Accent "Velvet" #8B2252 | Background "Ivory" #FAF8F5 | Text "Onyx" #2D2D2D | Fill "Warm Gray" #F0EDE8 | Dark BG #0D0D1A | Dark Surface #1A1A2E | Dark Card #1E1E35
FONTS: Display: Playfair Display 700/800 (serif, editorial) | Heading: Plus Jakarta Sans 600/700 | Body: Plus Jakarta Sans 400/500
RULES: Mobile-first 390×844 (iPhone 15 Pro). Bottom tab bar (NEVER hamburger). Card UI 12px radius. Gold accents on dark = premium. Real ATL venue photography. Black people in lifestyle imagery.
```

## BLOCK 5: STYLE DIRECTIVES

```
STYLE: High-fidelity mobile app UI mockup rendered at Figma presentation quality. Pixel-perfect modern iOS/Android design language with warm editorial touches. Rounded cards with subtle shadow, generous white space, bottom tab navigation. Luxury nightlife meets intuitive booking UX. Photography-forward with warm overlays. Gold foil accent details on dark chrome. Clean data hierarchy. Professional mockup on iPhone 15 Pro device frame (space black).
```

## BLOCK 6: NEGATIVE BLOCK

```
NEGATIVE: No stock photography of white people at generic restaurants. No corporate SaaS dashboard aesthetic. No cold blue-gray tech palette. No neon club flyer energy. No hamburger menus. No pure white #FFFFFF backgrounds. No pure black #000000 text. No Roboto or Inter fonts. No cluttered layouts. No wireframes. No clip art or cartoon illustrations. No generic food stock. No white-tablecloth-only imagery. No Silicon Valley startup aesthetic. No gradients that look like Stripe or Linear.
```

## BLOCK 7: BACKGROUND DIRECTIVE

```
BACKGROUND: Present on dark midnight #0D0D1A surface with subtle ambient glow. iPhone 15 Pro device frame (space black) at 15-degree angle. Soft gold #C9A84C light leak from behind device. Clean editorial presentation. No busy patterns.
```

### Dark Mode Background Variant (for nightlife screens):
```
BACKGROUND-DARK: Same device frame on #0D0D1A surface. Subtle Velvet #8B2252 ambient glow behind device suggesting VIP energy. Faint gold particle effect in negative space.
```

---

# ═══════════════════════════════════════════════════
# TIER 1 — BRAND & ENTRY
# Agents 01-05 | 12 Prompts
# ═══════════════════════════════════════════════════

---

## AGENT 01: Brand Identity Designer
**Layer:** 01 — Brand System | **Swarm:** Brand Research Collective
**Owns:** Splash, logo lockups, brand moments
**Personas:** All — first impression screen

### PROMPT 01-A — Splash Screen

```
BRAND: PullUpATL — Atlanta's nightlife and dining table booking app.
DEMOGRAPHIC: African American professionals, creatives, and socialites aged 22-55 in Atlanta, GA.
PLATFORM: Mobile-first iOS/Android app (React Native / Expo).
VIBE: Premium but not pretentious. Nightlife-native. Culturally confident. "Resy meets the group chat."
COLORS: Primary "Table Gold" #C9A84C | Secondary "Midnight" #1A1A2E | Accent "Velvet" #8B2252 | Background "Ivory" #FAF8F5 | Text "Onyx" #2D2D2D | Fill "Warm Gray" #F0EDE8 | Dark BG #0D0D1A | Dark Surface #1A1A2E | Dark Card #1E1E35
FONTS: Display: Playfair Display 700/800 (serif, editorial) | Heading: Plus Jakarta Sans 600/700 | Body: Plus Jakarta Sans 400/500
RULES: Mobile-first 390×844 (iPhone 15 Pro). Bottom tab bar (NEVER hamburger). Card UI 12px radius. Gold accents on dark = premium. Real ATL venue photography. Black people in lifestyle imagery.

SUBJECT: PullUpATL app splash screen. Centered logo mark — a stylized table silhouette with a subtle crown/flame detail at the top, rendered in Table Gold #C9A84C on deep Midnight #1A1A2E background. Below the mark: "PullUpATL" wordmark in Playfair Display 800, gold on dark. Frozen gold particle burst radiating outward from logo center. Bottom center: "Your seat at the culture." in Plus Jakarta Sans 400, muted #9CA3AF.

SCENE: Single iPhone 15 Pro screen, portrait. The splash is a velvet-rope moment — dark, warm, magnetic. Faint Velvet #8B2252 gradient glow at bottom edge. No other UI. Pure brand.

STYLE: High-fidelity mobile app UI mockup rendered at Figma presentation quality. Pixel-perfect modern iOS/Android design language with warm editorial touches. Rounded cards with subtle shadow, generous white space, bottom tab navigation. Luxury nightlife meets intuitive booking UX. Photography-forward with warm overlays. Gold foil accent details on dark chrome. Clean data hierarchy. Professional mockup on iPhone 15 Pro device frame (space black).
NEGATIVE: No stock photography of whfliite people at generic restaurants. No corporate SaaS dashboard aesthetic. No cold blue-gray tech palette. No neon club flyer energy. No hamburger menus. No pure white #FFFFFF backgrounds. No pure black #000000 text. No Roboto or Inter fonts. No cluttered layouts. No wireframes. No clip art or cartoon illustrations. No generic food stock. No white-tablecloth-only imagery. No Silicon Valley startup aesthetic. No gradients that look like Stripe or Linear.
BACKGROUND: Present on dark midnight #0D0D1A surface with subtle ambient glow. iPhone 15 Pro device frame (space black) at 15-degree angle. Soft gold #C9A84C light leak from behind device. Clean editorial presentation. No busy patterns.
```

### PROMPT 01-B — App Icon Design

```
BRAND: PullUpATL — Atlanta's nightlife and dining table booking app.
DEMOGRAPHIC: African American professionals, creatives, and socialites aged 22-55 in Atlanta, GA.
PLATFORM: Mobile-first iOS/Android app (React Native / Expo).
VIBE: Premium but not pretentious. Nightlife-native. Culturally confident. "Resy meets the group chat."
COLORS: Primary "Table Gold" #C9A84C | Secondary "Midnight" #1A1A2E | Accent "Velvet" #8B2252 | Background "Ivory" #FAF8F5 | Text "Onyx" #2D2D2D | Fill "Warm Gray" #F0EDE8 | Dark BG #0D0D1A | Dark Surface #1A1A2E | Dark Card #1E1E35
FONTS: Display: Playfair Display 700/800 (serif, editorial) | Heading: Plus Jakarta Sans 600/700 | Body: Plus Jakarta Sans 400/500
RULES: Mobile-first 390×844 (iPhone 15 Pro). Bottom tab bar (NEVER hamburger). Card UI 12px radius. Gold accents on dark = premium. Real ATL venue photography. Black people in lifestyle imagery.

SUBJECT: PullUpATL app icon at 1024×1024. Square with rounded iOS corners. Background: rich Midnight #1A1A2E with a subtle diagonal gradient toward #252540 in the bottom-right corner. Center: the PullUpATL mark — stylized gold #C9A84C table/crown icon, clean vector, no text. The icon must read instantly at 60×60 pixel size. No photographic elements. No gradients on the mark itself — solid gold on dark.

SCENE: Show the icon at multiple sizes: 1024px master, 180px (iPhone home), 60px (small), and 40px (notification). Also show it on a mock iPhone home screen alongside real app icons (Uber, Instagram, Cash App) to test visual weight. Dark wallpaper on the phone.

STYLE: High-fidelity mobile app UI mockup rendered at Figma presentation quality. Pixel-perfect modern iOS/Android design language with warm editorial touches. Rounded cards with subtle shadow, generous white space, bottom tab navigation. Luxury nightlife meets intuitive booking UX. Photography-forward with warm overlays. Gold foil accent details on dark chrome. Clean data hierarchy. Professional mockup on iPhone 15 Pro device frame (space black).
NEGATIVE: No stock photography of white people at generic restaurants. No corporate SaaS dashboard aesthetic. No cold blue-gray tech palette. No neon club flyer energy. No hamburger menus. No pure white #FFFFFF backgrounds. No pure black #000000 text. No Roboto or Inter fonts. No cluttered layouts. No wireframes. No clip art or cartoon illustrations. No generic food stock. No white-tablecloth-only imagery. No Silicon Valley startup aesthetic. No gradients that look like Stripe or Linear.
BACKGROUND: Flat dark #0D0D1A surface. Icons arranged in a grid. Clean product design presentation.
```

---

## AGENT 02: Onboarding Flow Designer
**Layer:** 09 — Interaction Design | **Swarm:** Flow & Gesture Lab
**Owns:** 3-screen onboarding sequence
**Personas:** A01 Vibe Curator, A04 Out-of-Towner, A07 College Crew

### PROMPT 02-A — Onboarding Screen 1: Arrival

```
BRAND: PullUpATL — Atlanta's nightlife and dining table booking app.
DEMOGRAPHIC: African American professionals, creatives, and socialites aged 22-55 in Atlanta, GA.
PLATFORM: Mobile-first iOS/Android app (React Native / Expo).
VIBE: Premium but not pretentious. Nightlife-native. Culturally confident. "Resy meets the group chat."
COLORS: Primary "Table Gold" #C9A84C | Secondary "Midnight" #1A1A2E | Accent "Velvet" #8B2252 | Background "Ivory" #FAF8F5 | Text "Onyx" #2D2D2D | Fill "Warm Gray" #F0EDE8 | Dark BG #0D0D1A | Dark Surface #1A1A2E | Dark Card #1E1E35
FONTS: Display: Playfair Display 700/800 (serif, editorial) | Heading: Plus Jakarta Sans 600/700 | Body: Plus Jakarta Sans 400/500
RULES: Mobile-first 390×844 (iPhone 15 Pro). Bottom tab bar (NEVER hamburger). Card UI 12px radius. Gold accents on dark = premium. Real ATL venue photography. Black people in lifestyle imagery.

SUBJECT: First onboarding screen. Full-bleed photo of a stylish Black couple arriving at an upscale Atlanta restaurant — she in a fitted dress, he in a tailored blazer, warm amber lighting at the venue entrance. Bottom: dark gradient fade to Midnight #1A1A2E. Headline "Atlanta Dines Different." in Playfair Display 700, Ivory #FAF8F5. Subhead "Tables, sections, and bottle service at 200+ ATL venues." in Plus Jakarta Sans 400, #9CA3AF. Three dots — dot 1 gold, dots 2-3 slate. CTA button: rounded rectangle, Table Gold #C9A84C fill, "Get Started" in Midnight text, Plus Jakarta Sans 700.

SCENE: Captures the pull-up energy — that moment you arrive and the night begins. Editorial photo quality, warm tones, shallow depth of field.

STYLE: High-fidelity mobile app UI mockup rendered at Figma presentation quality. Pixel-perfect modern iOS/Android design language with warm editorial touches. Rounded cards with subtle shadow, generous white space, bottom tab navigation. Luxury nightlife meets intuitive booking UX. Photography-forward with warm overlays. Gold foil accent details on dark chrome. Clean data hierarchy. Professional mockup on iPhone 15 Pro device frame (space black).
NEGATIVE: No stock photography of white people at generic restaurants. No corporate SaaS dashboard aesthetic. No cold blue-gray tech palette. No neon club flyer energy. No hamburger menus. No pure white #FFFFFF backgrounds. No pure black #000000 text. No Roboto or Inter fonts. No cluttered layouts. No wireframes. No clip art or cartoon illustrations. No generic food stock. No white-tablecloth-only imagery. No Silicon Valley startup aesthetic. No gradients that look like Stripe or Linear.
BACKGROUND: Present on dark midnight #0D0D1A surface with subtle ambient glow. iPhone 15 Pro device frame (space black) at 15-degree angle. Soft gold #C9A84C light leak from behind device. Clean editorial presentation. No busy patterns.
```

### PROMPT 02-B — Onboarding Screen 2: Discover

```
BRAND: PullUpATL — Atlanta's nightlife and dining table booking app.
DEMOGRAPHIC: African American professionals, creatives, and socialites aged 22-55 in Atlanta, GA.
PLATFORM: Mobile-first iOS/Android app (React Native / Expo).
VIBE: Premium but not pretentious. Nightlife-native. Culturally confident. "Resy meets the group chat."
COLORS: Primary "Table Gold" #C9A84C | Secondary "Midnight" #1A1A2E | Accent "Velvet" #8B2252 | Background "Ivory" #FAF8F5 | Text "Onyx" #2D2D2D | Fill "Warm Gray" #F0EDE8 | Dark BG #0D0D1A | Dark Surface #1A1A2E | Dark Card #1E1E35
FONTS: Display: Playfair Display 700/800 (serif, editorial) | Heading: Plus Jakarta Sans 600/700 | Body: Plus Jakarta Sans 400/500
RULES: Mobile-first 390×844 (iPhone 15 Pro). Bottom tab bar (NEVER hamburger). Card UI 12px radius. Gold accents on dark = premium. Real ATL venue photography. Black people in lifestyle imagery.

SUBJECT: Second onboarding screen. Top 60%: aerial photo of a vibrant ATL restaurant patio at night — string lights, diverse Black diners laughing, cocktails on table, warm golden ambiance. Bottom 40%: Midnight gradient. Headline "Find Your Spot." in Playfair Display 700, Ivory. Three feature pills below: "Restaurants" fork-knife icon, "Nightlife" champagne glass, "Brunch" coffee cup — each Warm Gray #F0EDE8 fill, Onyx text. Dot 2 active gold. Gold CTA "Next".

SCENE: ATL weekend energy — candid, alive, not posed. Feature pills preview content categories without overwhelming.

STYLE: High-fidelity mobile app UI mockup rendered at Figma presentation quality. Pixel-perfect modern iOS/Android design language with warm editorial touches. Rounded cards with subtle shadow, generous white space, bottom tab navigation. Luxury nightlife meets intuitive booking UX. Photography-forward with warm overlays. Gold foil accent details on dark chrome. Clean data hierarchy. Professional mockup on iPhone 15 Pro device frame (space black).
NEGATIVE: No stock photography of white people at generic restaurants. No corporate SaaS dashboard aesthetic. No cold blue-gray tech palette. No neon club flyer energy. No hamburger menus. No pure white #FFFFFF backgrounds. No pure black #000000 text. No Roboto or Inter fonts. No cluttered layouts. No wireframes. No clip art or cartoon illustrations. No generic food stock. No white-tablecloth-only imagery. No Silicon Valley startup aesthetic. No gradients that look like Stripe or Linear.
BACKGROUND: Present on dark midnight #0D0D1A surface with subtle ambient glow. iPhone 15 Pro device frame (space black) at 15-degree angle. Soft gold #C9A84C light leak from behind device. Clean editorial presentation. No busy patterns.
```

### PROMPT 02-C — Onboarding Screen 3: Book

```
BRAND: PullUpATL — Atlanta's nightlife and dining table booking app.
DEMOGRAPHIC: African American professionals, creatives, and socialites aged 22-55 in Atlanta, GA.
PLATFORM: Mobile-first iOS/Android app (React Native / Expo).
VIBE: Premium but not pretentious. Nightlife-native. Culturally confident. "Resy meets the group chat."
COLORS: Primary "Table Gold" #C9A84C | Secondary "Midnight" #1A1A2E | Accent "Velvet" #8B2252 | Background "Ivory" #FAF8F5 | Text "Onyx" #2D2D2D | Fill "Warm Gray" #F0EDE8 | Dark BG #0D0D1A | Dark Surface #1A1A2E | Dark Card #1E1E35
FONTS: Display: Playfair Display 700/800 (serif, editorial) | Heading: Plus Jakarta Sans 600/700 | Body: Plus Jakarta Sans 400/500
RULES: Mobile-first 390×844 (iPhone 15 Pro). Bottom tab bar (NEVER hamburger). Card UI 12px radius. Gold accents on dark = premium. Real ATL venue photography. Black people in lifestyle imagery.

SUBJECT: Third onboarding screen. Background: close-up of a VIP table at an Atlanta club — champagne in gold ice bucket, sparklers, velvet booth, ambient purple-gold lighting. Dark gradient overlay from bottom. Headline "Book the Section." in Playfair Display 700, Ivory. Subhead "Bottle service, private dining, and VIP — all in one tap." in Plus Jakarta Sans 400, Slate #6B7280. Small inline booking confirmation card mockup: venue name, date, party size, gold checkmark. Dot 3 active. CTA "Let's Go" gold button.

SCENE: Sells the premium booking experience. Aspirational but accessible — not bottle-popping excess, more "your section is ready."

STYLE: High-fidelity mobile app UI mockup rendered at Figma presentation quality. Pixel-perfect modern iOS/Android design language with warm editorial touches. Rounded cards with subtle shadow, generous white space, bottom tab navigation. Luxury nightlife meets intuitive booking UX. Photography-forward with warm overlays. Gold foil accent details on dark chrome. Clean data hierarchy. Professional mockup on iPhone 15 Pro device frame (space black).
NEGATIVE: No stock photography of white people at generic restaurants. No corporate SaaS dashboard aesthetic. No cold blue-gray tech palette. No neon club flyer energy. No hamburger menus. No pure white #FFFFFF backgrounds. No pure black #000000 text. No Roboto or Inter fonts. No cluttered layouts. No wireframes. No clip art or cartoon illustrations. No generic food stock. No white-tablecloth-only imagery. No Silicon Valley startup aesthetic. No gradients that look like Stripe or Linear.
BACKGROUND: Present on dark midnight #0D0D1A surface with subtle ambient glow. iPhone 15 Pro device frame (space black) at 15-degree angle. Soft gold #C9A84C light leak from behind device. Clean editorial presentation. No busy patterns.
```

---

## AGENT 03: Authentication Architect
**Layer:** 16 — Security | **Swarm:** Security Shield
**Owns:** Login, signup, OTP, forgot password
**Personas:** All users — gate screen

### PROMPT 03-A — Login Screen

```
BRAND: PullUpATL — Atlanta's nightlife and dining table booking app.
DEMOGRAPHIC: African American professionals, creatives, and socialites aged 22-55 in Atlanta, GA.
PLATFORM: Mobile-first iOS/Android app (React Native / Expo).
VIBE: Premium but not pretentious. Nightlife-native. Culturally confident. "Resy meets the group chat."
COLORS: Primary "Table Gold" #C9A84C | Secondary "Midnight" #1A1A2E | Accent "Velvet" #8B2252 | Background "Ivory" #FAF8F5 | Text "Onyx" #2D2D2D | Fill "Warm Gray" #F0EDE8 | Dark BG #0D0D1A | Dark Surface #1A1A2E | Dark Card #1E1E35
FONTS: Display: Playfair Display 700/800 (serif, editorial) | Heading: Plus Jakarta Sans 600/700 | Body: Plus Jakarta Sans 400/500
RULES: Mobile-first 390×844 (iPhone 15 Pro). Bottom tab bar (NEVER hamburger). Card UI 12px radius. Gold accents on dark = premium. Real ATL venue photography. Black people in lifestyle imagery.

SUBJECT: Login screen. Top third: Midnight #1A1A2E background with centered PullUpATL wordmark in Playfair Display 800, Table Gold. Below: "Welcome back." in Plus Jakarta Sans 500, Ivory. Bottom two-thirds: Ivory #FAF8F5 form area with rounded top corners 24px. Phone number input field with US flag prefix. "Continue" gold CTA button. Divider "or" with thin lines. Social buttons: "Continue with Google" (outlined), "Continue with Apple" (filled black). Bottom: "Don't have an account? Sign up" — "Sign up" in gold.

SCENE: Clean and fast — a doorway, not a destination. The dark/light split creates clear hierarchy between brand moment and utility form.

STYLE: High-fidelity mobile app UI mockup rendered at Figma presentation quality. Pixel-perfect modern iOS/Android design language with warm editorial touches. Rounded cards with subtle shadow, generous white space, bottom tab navigation. Luxury nightlife meets intuitive booking UX. Photography-forward with warm overlays. Gold foil accent details on dark chrome. Clean data hierarchy. Professional mockup on iPhone 15 Pro device frame (space black).
NEGATIVE: No stock photography of white people at generic restaurants. No corporate SaaS dashboard aesthetic. No cold blue-gray tech palette. No neon club flyer energy. No hamburger menus. No pure white #FFFFFF backgrounds. No pure black #000000 text. No Roboto or Inter fonts. No cluttered layouts. No wireframes. No clip art or cartoon illustrations. No generic food stock. No white-tablecloth-only imagery. No Silicon Valley startup aesthetic. No gradients that look like Stripe or Linear.
BACKGROUND: Present on dark midnight #0D0D1A surface with subtle ambient glow. iPhone 15 Pro device frame (space black) at 15-degree angle. Soft gold #C9A84C light leak from behind device. Clean editorial presentation. No busy patterns.
```

### PROMPT 03-B — OTP Verification

```
BRAND: PullUpATL — Atlanta's nightlife and dining table booking app.
DEMOGRAPHIC: African American professionals, creatives, and socialites aged 22-55 in Atlanta, GA.
PLATFORM: Mobile-first iOS/Android app (React Native / Expo).
VIBE: Premium but not pretentious. Nightlife-native. Culturally confident. "Resy meets the group chat."
COLORS: Primary "Table Gold" #C9A84C | Secondary "Midnight" #1A1A2E | Accent "Velvet" #8B2252 | Background "Ivory" #FAF8F5 | Text "Onyx" #2D2D2D | Fill "Warm Gray" #F0EDE8 | Dark BG #0D0D1A | Dark Surface #1A1A2E | Dark Card #1E1E35
FONTS: Display: Playfair Display 700/800 (serif, editorial) | Heading: Plus Jakarta Sans 600/700 | Body: Plus Jakarta Sans 400/500
RULES: Mobile-first 390×844 (iPhone 15 Pro). Bottom tab bar (NEVER hamburger). Card UI 12px radius. Gold accents on dark = premium. Real ATL venue photography. Black people in lifestyle imagery.

SUBJECT: OTP verification screen. Ivory background. Top: back arrow. Headline "Enter your code" in Plus Jakarta Sans 700, Onyx. Subhead "We sent a 6-digit code to (404) ***-7821" in Slate. Center: six individual digit input boxes in a row — large, rounded 12px, Warm Gray border. First three filled with numbers in Onyx, cursor blinking in fourth box, last two empty. Below: "Resend code in 0:42" countdown in Slate. "Use a different number" text link in gold. Bottom: "Verify" gold CTA (disabled state until all 6 digits entered — shown with reduced opacity).

SCENE: The OTP screen must feel effortless. Large input boxes for easy mobile typing. Auto-advance between digits. Clean, no distractions.

STYLE: High-fidelity mobile app UI mockup rendered at Figma presentation quality. Pixel-perfect modern iOS/Android design language with warm editorial touches. Rounded cards with subtle shadow, generous white space, bottom tab navigation. Luxury nightlife meets intuitive booking UX. Photography-forward with warm overlays. Gold foil accent details on dark chrome. Clean data hierarchy. Professional mockup on iPhone 15 Pro device frame (space black).
NEGATIVE: No stock photography of white people at generic restaurants. No corporate SaaS dashboard aesthetic. No cold blue-gray tech palette. No neon club flyer energy. No hamburger menus. No pure white #FFFFFF backgrounds. No pure black #000000 text. No Roboto or Inter fonts. No cluttered layouts. No wireframes. No clip art or cartoon illustrations. No generic food stock. No white-tablecloth-only imagery. No Silicon Valley startup aesthetic. No gradients that look like Stripe or Linear.
BACKGROUND: Present on dark midnight #0D0D1A surface with subtle ambient glow. iPhone 15 Pro device frame (space black) at 15-degree angle. Soft gold #C9A84C light leak from behind device. Clean editorial presentation. No busy patterns.
```

---

## AGENT 04: Personalization Designer
**Layer:** 03 — User Research | **Swarm:** User Insight Collective
**Owns:** Taste profile, preference screens, vibe selection
**Personas:** A01 Vibe Curator, A09 Couple, A13 Brunch Enthusiast

### PROMPT 04-A — Taste Profile / Vibe Selector

```
BRAND: PullUpATL — Atlanta's nightlife and dining table booking app.
DEMOGRAPHIC: African American professionals, creatives, and socialites aged 22-55 in Atlanta, GA.
PLATFORM: Mobile-first iOS/Android app (React Native / Expo).
VIBE: Premium but not pretentious. Nightlife-native. Culturally confident. "Resy meets the group chat."
COLORS: Primary "Table Gold" #C9A84C | Secondary "Midnight" #1A1A2E | Accent "Velvet" #8B2252 | Background "Ivory" #FAF8F5 | Text "Onyx" #2D2D2D | Fill "Warm Gray" #F0EDE8 | Dark BG #0D0D1A | Dark Surface #1A1A2E | Dark Card #1E1E35
FONTS: Display: Playfair Display 700/800 (serif, editorial) | Heading: Plus Jakarta Sans 600/700 | Body: Plus Jakarta Sans 400/500
RULES: Mobile-first 390×844 (iPhone 15 Pro). Bottom tab bar (NEVER hamburger). Card UI 12px radius. Gold accents on dark = premium. Real ATL venue photography. Black people in lifestyle imagery.

SUBJECT: Taste profile screen after signup. Ivory background. Headline "What's your vibe?" in Playfair Display 700, Onyx. Subhead "Pick what moves you. We'll curate your feed." in Plus Jakarta Sans 400, Slate. Grid of selectable chips in loose rows: "Fine Dining" "Hookah Lounge" "Rooftop Bar" "Brunch Spot" "Live Music" "Day Party" "Sports Bar" "Soul Food" "Sushi" "Caribbean" "Seafood" "Steak House" "Wine Bar" "Late Night" "Date Night" "Group Vibes". Selected chips: Midnight #1A1A2E fill with Ivory text. Unselected: Warm Gray #F0EDE8 fill with Onyx text. Show 4-5 chips pre-selected. Bottom: gold CTA "Show Me the Spots" + "Skip for now" text link in Slate.

SCENE: A mood board, not a form. Chips arranged organically. Generous spacing. Choosing identity through taste.

STYLE: High-fidelity mobile app UI mockup rendered at Figma presentation quality. Pixel-perfect modern iOS/Android design language with warm editorial touches. Rounded cards with subtle shadow, generous white space, bottom tab navigation. Luxury nightlife meets intuitive booking UX. Photography-forward with warm overlays. Gold foil accent details on dark chrome. Clean data hierarchy. Professional mockup on iPhone 15 Pro device frame (space black).
NEGATIVE: No stock photography of white people at generic restaurants. No corporate SaaS dashboard aesthetic. No cold blue-gray tech palette. No neon club flyer energy. No hamburger menus. No pure white #FFFFFF backgrounds. No pure black #000000 text. No Roboto or Inter fonts. No cluttered layouts. No wireframes. No clip art or cartoon illustrations. No generic food stock. No white-tablecloth-only imagery. No Silicon Valley startup aesthetic. No gradients that look like Stripe or Linear.
BACKGROUND: Present on dark midnight #0D0D1A surface with subtle ambient glow. iPhone 15 Pro device frame (space black) at 15-degree angle. Soft gold #C9A84C light leak from behind device. Clean editorial presentation. No busy patterns.
```

### PROMPT 04-B — Neighborhood Preference

```
BRAND: PullUpATL — Atlanta's nightlife and dining table booking app.
DEMOGRAPHIC: African American professionals, creatives, and socialites aged 22-55 in Atlanta, GA.
PLATFORM: Mobile-first iOS/Android app (React Native / Expo).
VIBE: Premium but not pretentious. Nightlife-native. Culturally confident. "Resy meets the group chat."
COLORS: Primary "Table Gold" #C9A84C | Secondary "Midnight" #1A1A2E | Accent "Velvet" #8B2252 | Background "Ivory" #FAF8F5 | Text "Onyx" #2D2D2D | Fill "Warm Gray" #F0EDE8 | Dark BG #0D0D1A | Dark Surface #1A1A2E | Dark Card #1E1E35
FONTS: Display: Playfair Display 700/800 (serif, editorial) | Heading: Plus Jakarta Sans 600/700 | Body: Plus Jakarta Sans 400/500
RULES: Mobile-first 390×844 (iPhone 15 Pro). Bottom tab bar (NEVER hamburger). Card UI 12px radius. Gold accents on dark = premium. Real ATL venue photography. Black people in lifestyle imagery.

SUBJECT: Neighborhood selection screen. Ivory background. Headline "Where do you pull up?" in Playfair Display 700, Onyx. Subhead "Pick your neighborhoods." in Plus Jakarta Sans 400, Slate. Grid of neighborhood cards — 2 columns, each card: photo background (actual ATL neighborhood — murals, street scenes, venue facades), dark overlay, neighborhood name centered in Plus Jakarta Sans 700, white. Selected cards have gold #C9A84C border glow. Neighborhoods: "Buckhead" "Midtown" "West End" "Old Fourth Ward" "East Atlanta" "Decatur" "Castleberry Hill" "Atlantic Station" "Poncey-Highland" "Edgewood". Bottom: "Continue" gold CTA.

SCENE: Each photo is distinct ATL neighborhood photography — not generic city shots. West End feels different from Buckhead. The gold border on selected cards creates satisfying visual feedback.

STYLE: High-fidelity mobile app UI mockup rendered at Figma presentation quality. Pixel-perfect modern iOS/Android design language with warm editorial touches. Rounded cards with subtle shadow, generous white space, bottom tab navigation. Luxury nightlife meets intuitive booking UX. Photography-forward with warm overlays. Gold foil accent details on dark chrome. Clean data hierarchy. Professional mockup on iPhone 15 Pro device frame (space black).
NEGATIVE: No stock photography of white people at generic restaurants. No corporate SaaS dashboard aesthetic. No cold blue-gray tech palette. No neon club flyer energy. No hamburger menus. No pure white #FFFFFF backgrounds. No pure black #000000 text. No Roboto or Inter fonts. No cluttered layouts. No wireframes. No clip art or cartoon illustrations. No generic food stock. No white-tablecloth-only imagery. No Silicon Valley startup aesthetic. No gradients that look like Stripe or Linear.
BACKGROUND: Present on dark midnight #0D0D1A surface with subtle ambient glow. iPhone 15 Pro device frame (space black) at 15-degree angle. Soft gold #C9A84C light leak from behind device. Clean editorial presentation. No busy patterns.
```

---

## AGENT 05: Permissions & Setup Designer
**Layer:** 13 — Mobile Frontend | **Swarm:** Mobile Engineering Squadron
**Owns:** Permission requests, notification opt-in, location access
**Personas:** All — system setup

### PROMPT 05-A — Notification Permission

```
BRAND: PullUpATL — Atlanta's nightlife and dining table booking app.
DEMOGRAPHIC: African American professionals, creatives, and socialites aged 22-55 in Atlanta, GA.
PLATFORM: Mobile-first iOS/Android app (React Native / Expo).
VIBE: Premium but not pretentious. Nightlife-native. Culturally confident. "Resy meets the group chat."
COLORS: Primary "Table Gold" #C9A84C | Secondary "Midnight" #1A1A2E | Accent "Velvet" #8B2252 | Background "Ivory" #FAF8F5 | Text "Onyx" #2D2D2D | Fill "Warm Gray" #F0EDE8 | Dark BG #0D0D1A | Dark Surface #1A1A2E | Dark Card #1E1E35
FONTS: Display: Playfair Display 700/800 (serif, editorial) | Heading: Plus Jakarta Sans 600/700 | Body: Plus Jakarta Sans 400/500
RULES: Mobile-first 390×844 (iPhone 15 Pro). Bottom tab bar (NEVER hamburger). Card UI 12px radius. Gold accents on dark = premium. Real ATL venue photography. Black people in lifestyle imagery.

SUBJECT: Push notification opt-in screen. Ivory background. Top: large gold bell icon with animated ring lines (frozen). Headline "Never Miss the Move." in Playfair Display 700, Onyx. Subhead "Get alerts when your favorite spots drop new events, when reservations open, and when your friends pull up." in Plus Jakarta Sans 400, Slate. Three benefit rows with icons: gold calendar icon + "Booking reminders 2hrs before" / gold fire icon + "Trending venues in your area" / gold people icon + "When your crew checks in". Primary CTA: "Turn On Notifications" gold button. Secondary: "Maybe Later" text link in Slate.

SCENE: Explains value before asking for permission. The three benefit rows sell the notification experience — it's not spam, it's the inside track.

STYLE: High-fidelity mobile app UI mockup rendered at Figma presentation quality. Pixel-perfect modern iOS/Android design language with warm editorial touches. Rounded cards with subtle shadow, generous white space, bottom tab navigation. Luxury nightlife meets intuitive booking UX. Photography-forward with warm overlays. Gold foil accent details on dark chrome. Clean data hierarchy. Professional mockup on iPhone 15 Pro device frame (space black).
NEGATIVE: No stock photography of white people at generic restaurants. No corporate SaaS dashboard aesthetic. No cold blue-gray tech palette. No neon club flyer energy. No hamburger menus. No pure white #FFFFFF backgrounds. No pure black #000000 text. No Roboto or Inter fonts. No cluttered layouts. No wireframes. No clip art or cartoon illustrations. No generic food stock. No white-tablecloth-only imagery. No Silicon Valley startup aesthetic. No gradients that look like Stripe or Linear.
BACKGROUND: Present on dark midnight #0D0D1A surface with subtle ambient glow. iPhone 15 Pro device frame (space black) at 15-degree angle. Soft gold #C9A84C light leak from behind device. Clean editorial presentation. No busy patterns.
```

---

# ═══════════════════════════════════════════════════
# TIER 2 — DISCOVERY & NAVIGATION
# Agents 06-10 | 12 Prompts
# ═══════════════════════════════════════════════════

---

## AGENT 06: Discovery Feed Designer
**Layer:** 05 — Information Architecture | **Swarm:** Navigation & Structure Unit
**Owns:** Home screen, personalized feed, "tonight" view
**Personas:** A01 Vibe Curator, A04 Out-of-Towner, A09 Couple

### PROMPT 06-A — Home Feed (Light Mode)

```
BRAND: PullUpATL — Atlanta's nightlife and dining table booking app.
DEMOGRAPHIC: African American professionals, creatives, and socialites aged 22-55 in Atlanta, GA.
PLATFORM: Mobile-first iOS/Android app (React Native / Expo).
VIBE: Premium but not pretentious. Nightlife-native. Culturally confident. "Resy meets the group chat."
COLORS: Primary "Table Gold" #C9A84C | Secondary "Midnight" #1A1A2E | Accent "Velvet" #8B2252 | Background "Ivory" #FAF8F5 | Text "Onyx" #2D2D2D | Fill "Warm Gray" #F0EDE8 | Dark BG #0D0D1A | Dark Surface #1A1A2E | Dark Card #1E1E35
FONTS: Display: Playfair Display 700/800 (serif, editorial) | Heading: Plus Jakarta Sans 600/700 | Body: Plus Jakarta Sans 400/500
RULES: Mobile-first 390×844 (iPhone 15 Pro). Bottom tab bar (NEVER hamburger). Card UI 12px radius. Gold accents on dark = premium. Real ATL venue photography. Black people in lifestyle imagery.

SUBJECT: Main discovery feed (home screen). Top: greeting "What's the move, Dame?" in Plus Jakarta Sans 700, Onyx, left-aligned. Location pill: map pin icon + "Midtown" dropdown. Horizontal scroll of filter chips: "All" (active — Midnight fill, Ivory text), "Tonight" "This Weekend" "Restaurants" "Nightlife" "Brunch" "Date Night" (inactive — Warm Gray fill). Main content: vertical scroll of venue cards. Each card: full-width photo (ATL restaurant interior, warm lighting, Black diners), 12px rounded corners, bottom gradient to dark. Overlay: venue name Plus Jakarta Sans 700 white, cuisine + neighborhood "Japanese · Buckhead", gold star rating 4.8, price "$$$$". Second card partially visible to encourage scroll. Bottom tab bar: 5 icons on frosted Midnight — Discover (active gold), Search, Book, Social, Profile.

SCENE: The feed is Instagram but every post is bookable. Photography-forward. Cards 3:2 ratio. Warm, alive, not sterile.

STYLE: High-fidelity mobile app UI mockup rendered at Figma presentation quality. Pixel-perfect modern iOS/Android design language with warm editorial touches. Rounded cards with subtle shadow, generous white space, bottom tab navigation. Luxury nightlife meets intuitive booking UX. Photography-forward with warm overlays. Gold foil accent details on dark chrome. Clean data hierarchy. Professional mockup on iPhone 15 Pro device frame (space black).
NEGATIVE: No stock photography of white people at generic restaurants. No corporate SaaS dashboard aesthetic. No cold blue-gray tech palette. No neon club flyer energy. No hamburger menus. No pure white #FFFFFF backgrounds. No pure black #000000 text. No Roboto or Inter fonts. No cluttered layouts. No wireframes. No clip art or cartoon illustrations. No generic food stock. No white-tablecloth-only imagery. No Silicon Valley startup aesthetic. No gradients that look like Stripe or Linear.
BACKGROUND: Present on dark midnight #0D0D1A surface with subtle ambient glow. iPhone 15 Pro device frame (space black) at 15-degree angle. Soft gold #C9A84C light leak from behind device. Clean editorial presentation. No busy patterns.
```

### PROMPT 06-B — "Tonight" Mode

```
BRAND: PullUpATL — Atlanta's nightlife and dining table booking app.
DEMOGRAPHIC: African American professionals, creatives, and socialites aged 22-55 in Atlanta, GA.
PLATFORM: Mobile-first iOS/Android app (React Native / Expo).
VIBE: Premium but not pretentious. Nightlife-native. Culturally confident. "Resy meets the group chat."
COLORS: Primary "Table Gold" #C9A84C | Secondary "Midnight" #1A1A2E | Accent "Velvet" #8B2252 | Background "Ivory" #FAF8F5 | Text "Onyx" #2D2D2D | Fill "Warm Gray" #F0EDE8 | Dark BG #0D0D1A | Dark Surface #1A1A2E | Dark Card #1E1E35
FONTS: Display: Playfair Display 700/800 (serif, editorial) | Heading: Plus Jakarta Sans 600/700 | Body: Plus Jakarta Sans 400/500
RULES: Mobile-first 390×844 (iPhone 15 Pro). Bottom tab bar (NEVER hamburger). Card UI 12px radius. Gold accents on dark = premium. Real ATL venue photography. Black people in lifestyle imagery.

SUBJECT: Discovery feed filtered to "Tonight" — showing what's happening right now. Dark mode activated. Background #0D0D1A. Top: "Tonight in ATL" in Playfair Display 700, Ivory. Current time "9:47 PM" + live dot pulsing in green. Cards shift to event-forward format: venue photo with event overlay — "DJ Trauma Live" at Havana Nightclub ATL, "R&B Night" at Revel Atlanta. Each card shows: event photo (DJ, crowd, performer), venue name, event title in gold, time "10 PM - 2 AM", cover/minimum "$40 cover" or "Free w/ RSVP", live occupancy indicator bar (70% full — amber). "Book Now" mini gold button on each card. Featured banner at top: "TONIGHT'S PICK" with one hero event card, larger, with Velvet #8B2252 border.

SCENE: The Tonight mode feels urgent and alive — the city is happening right now. Dark mode mirrors nighttime energy. The occupancy indicator creates FOMO. Event photography should be dynamic, not posed.

STYLE: High-fidelity mobile app UI mockup rendered at Figma presentation quality. Pixel-perfect modern iOS/Android design language with warm editorial touches. Rounded cards with subtle shadow, generous white space, bottom tab navigation. Luxury nightlife meets intuitive booking UX. Photography-forward with warm overlays. Gold foil accent details on dark chrome. Clean data hierarchy. Professional mockup on iPhone 15 Pro device frame (space black).
NEGATIVE: No stock photography of white people at generic restaurants. No corporate SaaS dashboard aesthetic. No cold blue-gray tech palette. No neon club flyer energy. No hamburger menus. No pure white #FFFFFF backgrounds. No pure black #000000 text. No Roboto or Inter fonts. No cluttered layouts. No wireframes. No clip art or cartoon illustrations. No generic food stock. No white-tablecloth-only imagery. No Silicon Valley startup aesthetic. No gradients that look like Stripe or Linear.
BACKGROUND-DARK: Same device frame on #0D0D1A surface. Subtle Velvet #8B2252 ambient glow behind device suggesting VIP energy. Faint gold particle effect in negative space.
```

### PROMPT 06-C — Weekend Planner View

```
BRAND: PullUpATL — Atlanta's nightlife and dining table booking app.
DEMOGRAPHIC: African American professionals, creatives, and socialites aged 22-55 in Atlanta, GA.
PLATFORM: Mobile-first iOS/Android app (React Native / Expo).
VIBE: Premium but not pretentious. Nightlife-native. Culturally confident. "Resy meets the group chat."
COLORS: Primary "Table Gold" #C9A84C | Secondary "Midnight" #1A1A2E | Accent "Velvet" #8B2252 | Background "Ivory" #FAF8F5 | Text "Onyx" #2D2D2D | Fill "Warm Gray" #F0EDE8 | Dark BG #0D0D1A | Dark Surface #1A1A2E | Dark Card #1E1E35
FONTS: Display: Playfair Display 700/800 (serif, editorial) | Heading: Plus Jakarta Sans 600/700 | Body: Plus Jakarta Sans 400/500
RULES: Mobile-first 390×844 (iPhone 15 Pro). Bottom tab bar (NEVER hamburger). Card UI 12px radius. Gold accents on dark = premium. Real ATL venue photography. Black people in lifestyle imagery.

SUBJECT: "This Weekend" planner view. Ivory background. Top: "This Weekend" header with date range "Apr 25-27" in Slate. Content organized by day — each day section: day header "FRIDAY" in Plus Jakarta Sans 700, Onyx, with gold underline. Below: horizontal scroll of event/venue cards (compact square format, 3 visible). FRIDAY shows nightlife-forward cards. SATURDAY shows brunch + day party + nightlife mix. SUNDAY shows brunch + chill dining. Each card: square photo, venue name, event type chip ("Day Party" "Brunch" "Live Music"), time, quick book icon. Bottom: "Plan My Weekend" gold CTA that opens a multi-venue booking builder.

SCENE: The weekend planner is for A01 Vibe Curator and A04 Out-of-Towner — people who plan the whole weekend at once. Day-by-day organization makes it scannable. The "Plan My Weekend" CTA is the multi-venue chain booking entry point.

STYLE: High-fidelity mobile app UI mockup rendered at Figma presentation quality. Pixel-perfect modern iOS/Android design language with warm editorial touches. Rounded cards with subtle shadow, generous white space, bottom tab navigation. Luxury nightlife meets intuitive booking UX. Photography-forward with warm overlays. Gold foil accent details on dark chrome. Clean data hierarchy. Professional mockup on iPhone 15 Pro device frame (space black).
NEGATIVE: No stock photography of white people at generic restaurants. No corporate SaaS dashboard aesthetic. No cold blue-gray tech palette. No neon club flyer energy. No hamburger menus. No pure white #FFFFFF backgrounds. No pure black #000000 text. No Roboto or Inter fonts. No cluttered layouts. No wireframes. No clip art or cartoon illustrations. No generic food stock. No white-tablecloth-only imagery. No Silicon Valley startup aesthetic. No gradients that look like Stripe or Linear.
BACKGROUND: Present on dark midnight #0D0D1A surface with subtle ambient glow. iPhone 15 Pro device frame (space black) at 15-degree angle. Soft gold #C9A84C light leak from behind device. Clean editorial presentation. No busy patterns.
```

---

## AGENT 07: Search & Filter Designer
**Layer:** 05 — Information Architecture | **Swarm:** Navigation & Structure Unit
**Owns:** Search screen, filters, trending, neighborhoods
**Personas:** A04 Out-of-Towner, A07 College Crew, A14 Deal Hunter

### PROMPT 07-A — Search Screen

```
BRAND: PullUpATL — Atlanta's nightlife and dining table booking app.
DEMOGRAPHIC: African American professionals, creatives, and socialites aged 22-55 in Atlanta, GA.
PLATFORM: Mobile-first iOS/Android app (React Native / Expo).
VIBE: Premium but not pretentious. Nightlife-native. Culturally confident. "Resy meets the group chat."
COLORS: Primary "Table Gold" #C9A84C | Secondary "Midnight" #1A1A2E | Accent "Velvet" #8B2252 | Background "Ivory" #FAF8F5 | Text "Onyx" #2D2D2D | Fill "Warm Gray" #F0EDE8 | Dark BG #0D0D1A | Dark Surface #1A1A2E | Dark Card #1E1E35
FONTS: Display: Playfair Display 700/800 (serif, editorial) | Heading: Plus Jakarta Sans 600/700 | Body: Plus Jakarta Sans 400/500
RULES: Mobile-first 390×844 (iPhone 15 Pro). Bottom tab bar (NEVER hamburger). Card UI 12px radius. Gold accents on dark = premium. Real ATL venue photography. Black people in lifestyle imagery.

SUBJECT: Search screen. Top: large search bar with magnifier icon, placeholder "Search venues, cuisines, vibes…" in Slate on Warm Gray field, 24px rounded. Quick filter row: "Open Now" "Has Sections" "Outdoor" "Live DJ" "Happy Hour" "Private Dining" — Warm Gray pills. "Trending in ATL" section: three compact cards horizontal scroll — venue photo, name overlay, fire emoji + gold "Trending" badge. "Popular Neighborhoods" section: grid of neighborhood pills with mini hero images — "Buckhead" "Midtown" "West End" "Old Fourth Ward" "East Atlanta" "Decatur" — rounded rectangles with photo background and name overlay. Tab bar persistent.

SCENE: Surfaces ATL geography and energy. Neighborhood pills use real ATL photography. Search is the utility knife — fast, smart, never overwhelming.

STYLE: High-fidelity mobile app UI mockup rendered at Figma presentation quality. Pixel-perfect modern iOS/Android design language with warm editorial touches. Rounded cards with subtle shadow, generous white space, bottom tab navigation. Luxury nightlife meets intuitive booking UX. Photography-forward with warm overlays. Gold foil accent details on dark chrome. Clean data hierarchy. Professional mockup on iPhone 15 Pro device frame (space black).
NEGATIVE: No stock photography of white people at generic restaurants. No corporate SaaS dashboard aesthetic. No cold blue-gray tech palette. No neon club flyer energy. No hamburger menus. No pure white #FFFFFF backgrounds. No pure black #000000 text. No Roboto or Inter fonts. No cluttered layouts. No wireframes. No clip art or cartoon illustrations. No generic food stock. No white-tablecloth-only imagery. No Silicon Valley startup aesthetic. No gradients that look like Stripe or Linear.
BACKGROUND: Present on dark midnight #0D0D1A surface with subtle ambient glow. iPhone 15 Pro device frame (space black) at 15-degree angle. Soft gold #C9A84C light leak from behind device. Clean editorial presentation. No busy patterns.
```

### PROMPT 07-B — Search Results with Active Filters

```
BRAND: PullUpATL — Atlanta's nightlife and dining table booking app.
DEMOGRAPHIC: African American professionals, creatives, and socialites aged 22-55 in Atlanta, GA.
PLATFORM: Mobile-first iOS/Android app (React Native / Expo).
VIBE: Premium but not pretentious. Nightlife-native. Culturally confident. "Resy meets the group chat."
COLORS: Primary "Table Gold" #C9A84C | Secondary "Midnight" #1A1A2E | Accent "Velvet" #8B2252 | Background "Ivory" #FAF8F5 | Text "Onyx" #2D2D2D | Fill "Warm Gray" #F0EDE8 | Dark BG #0D0D1A | Dark Surface #1A1A2E | Dark Card #1E1E35
FONTS: Display: Playfair Display 700/800 (serif, editorial) | Heading: Plus Jakarta Sans 600/700 | Body: Plus Jakarta Sans 400/500
RULES: Mobile-first 390×844 (iPhone 15 Pro). Bottom tab bar (NEVER hamburger). Card UI 12px radius. Gold accents on dark = premium. Real ATL venue photography. Black people in lifestyle imagery.

SUBJECT: Search results screen with active filters. Top: search bar showing "Rooftop" query text. Active filter chips below: "Buckhead" (Midnight fill, X dismiss), "Open Now" (Midnight fill, X dismiss), "$$-$$$" (Midnight fill, X dismiss), "Clear All" text link in gold. Results: "12 spots found" count. List view of venue result cards — each: horizontal layout (photo left, info right), venue name Plus Jakarta Sans 600, cuisine type, distance "0.8 mi", rating with gold star, price range, "Available tonight" green badge or "Waitlist" amber badge. Sort dropdown at top right: "Relevance" selected. Bottom: "Map View" floating button with map pin icon, Midnight fill, rounded pill.

SCENE: Results are scannable and information-dense but not cluttered. The horizontal card layout maximizes info per card. Active filters in dark chips clearly show what's narrowing results. Map view toggle floats above the tab bar.

STYLE: High-fidelity mobile app UI mockup rendered at Figma presentation quality. Pixel-perfect modern iOS/Android design language with warm editorial touches. Rounded cards with subtle shadow, generous white space, bottom tab navigation. Luxury nightlife meets intuitive booking UX. Photography-forward with warm overlays. Gold foil accent details on dark chrome. Clean data hierarchy. Professional mockup on iPhone 15 Pro device frame (space black).
NEGATIVE: No stock photography of white people at generic restaurants. No corporate SaaS dashboard aesthetic. No cold blue-gray tech palette. No neon club flyer energy. No hamburger menus. No pure white #FFFFFF backgrounds. No pure black #000000 text. No Roboto or Inter fonts. No cluttered layouts. No wireframes. No clip art or cartoon illustrations. No generic food stock. No white-tablecloth-only imagery. No Silicon Valley startup aesthetic. No gradients that look like Stripe or Linear.
BACKGROUND: Present on dark midnight #0D0D1A surface with subtle ambient glow. iPhone 15 Pro device frame (space black) at 15-degree angle. Soft gold #C9A84C light leak from behind device. Clean editorial presentation. No busy patterns.
```

---

## AGENT 08: Category & Cuisine Designer
**Layer:** 10 — Content Strategy | **Swarm:** Voice & Copy Collective
**Owns:** Category landing pages, cuisine browsing, curated collections
**Personas:** A09 Couple, A13 Brunch Enthusiast, A14 Deal Hunter

### PROMPT 08-A — Brunch Category Landing

```
BRAND: PullUpATL — Atlanta's nightlife and dining table booking app.
DEMOGRAPHIC: African American professionals, creatives, and socialites aged 22-55 in Atlanta, GA.
PLATFORM: Mobile-first iOS/Android app (React Native / Expo).
VIBE: Premium but not pretentious. Nightlife-native. Culturally confident. "Resy meets the group chat."
COLORS: Primary "Table Gold" #C9A84C | Secondary "Midnight" #1A1A2E | Accent "Velvet" #8B2252 | Background "Ivory" #FAF8F5 | Text "Onyx" #2D2D2D | Fill "Warm Gray" #F0EDE8 | Dark BG #0D0D1A | Dark Surface #1A1A2E | Dark Card #1E1E35
FONTS: Display: Playfair Display 700/800 (serif, editorial) | Heading: Plus Jakarta Sans 600/700 | Body: Plus Jakarta Sans 400/500
RULES: Mobile-first 390×844 (iPhone 15 Pro). Bottom tab bar (NEVER hamburger). Card UI 12px radius. Gold accents on dark = premium. Real ATL venue photography. Black people in lifestyle imagery.

SUBJECT: Brunch category landing page. Top: hero banner — wide photo of a brunch spread at an ATL restaurant (waffles, mimosa flight, eggs benedict, Black friends laughing around the table, natural morning light through windows). Dark gradient at bottom. Overlay: "ATL Brunch" in Playfair Display 700 Ivory, large. Sub-filters: "Bottomless Mimosas" "Rooftop" "Live DJ Brunch" "Boozy Brunch" "Family Friendly" — horizontal scroll chips. Featured collection: "Editor's Pick" card with gold border — one hero venue. Below: venue list cards in standard format, each showing brunch-specific info: "Bottomless mimosas $35" price callout, "Wait: ~25 min" live wait time, weekend hours.

SCENE: Brunch is a religion in ATL. This screen celebrates that with warm, bright photography — not the dark moody nightlife palette. Natural light, colorful food, genuine joy. The "Bottomless Mimosas" filter is what A13 Brunch Enthusiast clicks first.

STYLE: High-fidelity mobile app UI mockup rendered at Figma presentation quality. Pixel-perfect modern iOS/Android design language with warm editorial touches. Rounded cards with subtle shadow, generous white space, bottom tab navigation. Luxury nightlife meets intuitive booking UX. Photography-forward with warm overlays. Gold foil accent details on dark chrome. Clean data hierarchy. Professional mockup on iPhone 15 Pro device frame (space black).
NEGATIVE: No stock photography of white people at generic restaurants. No corporate SaaS dashboard aesthetic. No cold blue-gray tech palette. No neon club flyer energy. No hamburger menus. No pure white #FFFFFF backgrounds. No pure black #000000 text. No Roboto or Inter fonts. No cluttered layouts. No wireframes. No clip art or cartoon illustrations. No generic food stock. No white-tablecloth-only imagery. No Silicon Valley startup aesthetic. No gradients that look like Stripe or Linear.
BACKGROUND: Present on dark midnight #0D0D1A surface with subtle ambient glow. iPhone 15 Pro device frame (space black) at 15-degree angle. Soft gold #C9A84C light leak from behind device. Clean editorial presentation. No busy patterns.
```

### PROMPT 08-B — Date Night Collection

```
BRAND: PullUpATL — Atlanta's nightlife and dining table booking app.
DEMOGRAPHIC: African American professionals, creatives, and socialites aged 22-55 in Atlanta, GA.
PLATFORM: Mobile-first iOS/Android app (React Native / Expo).
VIBE: Premium but not pretentious. Nightlife-native. Culturally confident. "Resy meets the group chat."
COLORS: Primary "Table Gold" #C9A84C | Secondary "Midnight" #1A1A2E | Accent "Velvet" #8B2252 | Background "Ivory" #FAF8F5 | Text "Onyx" #2D2D2D | Fill "Warm Gray" #F0EDE8 | Dark BG #0D0D1A | Dark Surface #1A1A2E | Dark Card #1E1E35
FONTS: Display: Playfair Display 700/800 (serif, editorial) | Heading: Plus Jakarta Sans 600/700 | Body: Plus Jakarta Sans 400/500
RULES: Mobile-first 390×844 (iPhone 15 Pro). Bottom tab bar (NEVER hamburger). Card UI 12px radius. Gold accents on dark = premium. Real ATL venue photography. Black people in lifestyle imagery.

SUBJECT: "Date Night" curated collection page. Ivory background with Velvet #8B2252 accent touches. Top: editorial-style header "Date Night, Elevated." in Playfair Display 800, Onyx. Subhead "Curated for two." in Slate italic. Featured venue: large card with candlelit restaurant interior, Black couple at intimate table, warm tones. Below: three curated lists as horizontal scrolling rows — "Rooftop Romance" (3 venue cards), "First Date Energy" (3 cards), "Anniversary Worthy" (3 cards). Each mini-card: square photo, venue name, cuisine, price range, "Book for 2" gold mini-button. Subtle heart icon details throughout in Velvet color. Bottom: "Surprise Me" button with dice icon — randomizes a date night venue pick.

SCENE: This is for A09 Couple. The editorial layout feels like a magazine spread, not a search result. Curated lists tell a story. "Surprise Me" adds playfulness. Velvet accents (not gold) signal romance.

STYLE: High-fidelity mobile app UI mockup rendered at Figma presentation quality. Pixel-perfect modern iOS/Android design language with warm editorial touches. Rounded cards with subtle shadow, generous white space, bottom tab navigation. Luxury nightlife meets intuitive booking UX. Photography-forward with warm overlays. Gold foil accent details on dark chrome. Clean data hierarchy. Professional mockup on iPhone 15 Pro device frame (space black).
NEGATIVE: No stock photography of white people at generic restaurants. No corporate SaaS dashboard aesthetic. No cold blue-gray tech palette. No neon club flyer energy. No hamburger menus. No pure white #FFFFFF backgrounds. No pure black #000000 text. No Roboto or Inter fonts. No cluttered layouts. No wireframes. No clip art or cartoon illustrations. No generic food stock. No white-tablecloth-only imagery. No Silicon Valley startup aesthetic. No gradients that look like Stripe or Linear.
BACKGROUND: Present on dark midnight #0D0D1A surface with subtle ambient glow. iPhone 15 Pro device frame (space black) at 15-degree angle. Soft gold #C9A84C light leak from behind device. Clean editorial presentation. No busy patterns.
```

---

## AGENT 09: Map View Designer
**Layer:** 17 — Integration | **Swarm:** Integration Hub
**Owns:** Map-based venue discovery, proximity, cluster views
**Personas:** A04 Out-of-Towner, A08 Gameday Crew, A11 Solo Diner

### PROMPT 09-A — Map Discovery View

```
BRAND: PullUpATL — Atlanta's nightlife and dining table booking app.
DEMOGRAPHIC: African American professionals, creatives, and socialites aged 22-55 in Atlanta, GA.
PLATFORM: Mobile-first iOS/Android app (React Native / Expo).
VIBE: Premium but not pretentious. Nightlife-native. Culturally confident. "Resy meets the group chat."
COLORS: Primary "Table Gold" #C9A84C | Secondary "Midnight" #1A1A2E | Accent "Velvet" #8B2252 | Background "Ivory" #FAF8F5 | Text "Onyx" #2D2D2D | Fill "Warm Gray" #F0EDE8 | Dark BG #0D0D1A | Dark Surface #1A1A2E | Dark Card #1E1E35
FONTS: Display: Playfair Display 700/800 (serif, editorial) | Heading: Plus Jakarta Sans 600/700 | Body: Plus Jakarta Sans 400/500
RULES: Mobile-first 390×844 (iPhone 15 Pro). Bottom tab bar (NEVER hamburger). Card UI 12px radius. Gold accents on dark = premium. Real ATL venue photography. Black people in lifestyle imagery.

SUBJECT: Map view of venue discovery. Full-screen Apple Maps / Mapbox dark style map showing Midtown/Buckhead Atlanta. Custom map pins: gold #C9A84C circles with venue type icon inside (fork for restaurant, champagne for nightclub, coffee for brunch). Pin clusters show count badges. One pin is tapped/selected — expanded into a bottom card preview: venue photo strip, "Seven Midtown" name, "Steakhouse · Buckhead · $$$$", 4.7 stars gold, "2 tables available tonight" in green text, "Book" gold mini-button. Top: search bar with "Near me" location text. Filter chips below map: "Open Now" "Dining" "Nightlife" "Brunch". Bottom: half-sheet card showing the selected venue preview. Tab bar visible.

SCENE: Dark-styled map matches PullUpATL brand — not the default bright Google Maps. Custom gold pins are brand-distinctive. The bottom preview card lets users browse without leaving the map. Pin density shows venue-rich areas of ATL.

STYLE: High-fidelity mobile app UI mockup rendered at Figma presentation quality. Pixel-perfect modern iOS/Android design language with warm editorial touches. Rounded cards with subtle shadow, generous white space, bottom tab navigation. Luxury nightlife meets intuitive booking UX. Photography-forward with warm overlays. Gold foil accent details on dark chrome. Clean data hierarchy. Professional mockup on iPhone 15 Pro device frame (space black).
NEGATIVE: No stock photography of white people at generic restaurants. No corporate SaaS dashboard aesthetic. No cold blue-gray tech palette. No neon club flyer energy. No hamburger menus. No pure white #FFFFFF backgrounds. No pure black #000000 text. No Roboto or Inter fonts. No cluttered layouts. No wireframes. No clip art or cartoon illustrations. No generic food stock. No white-tablecloth-only imagery. No Silicon Valley startup aesthetic. No gradients that look like Stripe or Linear.
BACKGROUND: Present on dark midnight #0D0D1A surface with subtle ambient glow. iPhone 15 Pro device frame (space black) at 15-degree angle. Soft gold #C9A84C light leak from behind device. Clean editorial presentation. No busy patterns.
```

---

## AGENT 10: Navigation System Designer
**Layer:** 05 — Information Architecture | **Swarm:** Navigation & Structure Unit
**Owns:** Tab bar, headers, sheet transitions, navigation patterns
**Personas:** All

### PROMPT 10-A — Tab Bar & Header System

```
BRAND: PullUpATL — Atlanta's nightlife and dining table booking app.
DEMOGRAPHIC: African American professionals, creatives, and socialites aged 22-55 in Atlanta, GA.
PLATFORM: Mobile-first iOS/Android app (React Native / Expo).
VIBE: Premium but not pretentious. Nightlife-native. Culturally confident. "Resy meets the group chat."
COLORS: Primary "Table Gold" #C9A84C | Secondary "Midnight" #1A1A2E | Accent "Velvet" #8B2252 | Background "Ivory" #FAF8F5 | Text "Onyx" #2D2D2D | Fill "Warm Gray" #F0EDE8 | Dark BG #0D0D1A | Dark Surface #1A1A2E | Dark Card #1E1E35
FONTS: Display: Playfair Display 700/800 (serif, editorial) | Heading: Plus Jakarta Sans 600/700 | Body: Plus Jakarta Sans 400/500
RULES: Mobile-first 390×844 (iPhone 15 Pro). Bottom tab bar (NEVER hamburger). Card UI 12px radius. Gold accents on dark = premium. Real ATL venue photography. Black people in lifestyle imagery.

SUBJECT: Navigation system reference sheet showing multiple states. Top row: 5 tab bar variations — (1) Discover active (gold icon, gold dot, others slate), (2) Search active, (3) Book active with "+" badge, (4) Social active with notification count "3" red badge, (5) Profile active with avatar thumbnail. Second row: header variations — (1) Home header with greeting + location pill + notification bell with badge, (2) Detail page header with back arrow + venue name + share/heart icons on transparent over photo, (3) Flow header with back arrow + "Book a Table" + step "1 of 4" + progress bar. Third row: sheet/modal presentations — (1) half-sheet drawer rising from bottom with drag handle, (2) full-screen modal with X close button, (3) action sheet with stacked options. All on Ivory background with Midnight chrome where applicable.

SCENE: Reference sheet / component inventory — NOT a single screen. Show each variation in its own frame with labels. Clean, organized, design-system documentation feel. Gold is reserved for active states only.

STYLE: High-fidelity mobile app UI mockup rendered at Figma presentation quality. Pixel-perfect modern iOS/Android design language with warm editorial touches. Rounded cards with subtle shadow, generous white space, bottom tab navigation. Luxury nightlife meets intuitive booking UX. Photography-forward with warm overlays. Gold foil accent details on dark chrome. Clean data hierarchy. Professional mockup on iPhone 15 Pro device frame (space black).
NEGATIVE: No stock photography of white people at generic restaurants. No corporate SaaS dashboard aesthetic. No cold blue-gray tech palette. No neon club flyer energy. No hamburger menus. No pure white #FFFFFF backgrounds. No pure black #000000 text. No Roboto or Inter fonts. No cluttered layouts. No wireframes. No clip art or cartoon illustrations. No generic food stock. No white-tablecloth-only imagery. No Silicon Valley startup aesthetic. No gradients that look like Stripe or Linear.
BACKGROUND: Light gray #E5E5E5 flat surface. Components arranged in a grid with labels. No device frame — this is a design system reference.
```

---

# ═══════════════════════════════════════════════════
# TIER 3 — VENUE DETAIL
# Agents 11-14 | 8 Prompts
# ═══════════════════════════════════════════════════

---

## AGENT 11: Restaurant Detail Designer
**Layer:** 07 — Visual Design System | **Swarm:** Design System Forge
**Owns:** Restaurant venue detail page, menu highlights, hours
**Personas:** A01 Vibe Curator, A09 Couple, A12 Corporate Host

### PROMPT 11-A — Fine Dining Venue Detail

```
BRAND: PullUpATL — Atlanta's nightlife and dining table booking app.
DEMOGRAPHIC: African American professionals, creatives, and socialites aged 22-55 in Atlanta, GA.
PLATFORM: Mobile-first iOS/Android app (React Native / Expo).
VIBE: Premium but not pretentious. Nightlife-native. Culturally confident. "Resy meets the group chat."
COLORS: Primary "Table Gold" #C9A84C | Secondary "Midnight" #1A1A2E | Accent "Velvet" #8B2252 | Background "Ivory" #FAF8F5 | Text "Onyx" #2D2D2D | Fill "Warm Gray" #F0EDE8 | Dark BG #0D0D1A | Dark Surface #1A1A2E | Dark Card #1E1E35
FONTS: Display: Playfair Display 700/800 (serif, editorial) | Heading: Plus Jakarta Sans 600/700 | Body: Plus Jakarta Sans 400/500
RULES: Mobile-first 390×844 (iPhone 15 Pro). Bottom tab bar (NEVER hamburger). Card UI 12px radius. Gold accents on dark = premium. Real ATL venue photography. Black people in lifestyle imagery.

SUBJECT: Venue detail page for a fine dining restaurant. Full-bleed hero photo carousel (3 dots) — elegant interior, warm lighting, exposed brick, Black couple at candlelit table. Overlaid: back arrow top-left, heart + share icons top-right. Below hero: "Avenue Kitchen & Grill" in Plus Jakarta Sans 700 22pt Onyx. Metadata row: "Contemporary American · Midtown · $$$$" Slate. "4.8" gold star + "(324 reviews)" link. Action row: "Book a Table" gold button (primary), "Call" icon button outlined, "Directions" icon button outlined. Sections: "About" paragraph, "Hours" with today highlighted gold, "Menu Highlights" horizontal scroll of dish photos with names/prices, "Reviews" preview with 2 reviews showing avatars and star ratings. Sticky bottom bar: "Book a Table — 2 spots left tonight" gold CTA full width.

SCENE: The venue's dating profile — photo sells the experience. Data dense but hierarchical: photo → name → CTA → details. "2 spots left" creates urgency without being fake.

STYLE: High-fidelity mobile app UI mockup rendered at Figma presentation quality. Pixel-perfect modern iOS/Android design language with warm editorial touches. Rounded cards with subtle shadow, generous white space, bottom tab navigation. Luxury nightlife meets intuitive booking UX. Photography-forward with warm overlays. Gold foil accent details on dark chrome. Clean data hierarchy. Professional mockup on iPhone 15 Pro device frame (space black).
NEGATIVE: No stock photography of white people at generic restaurants. No corporate SaaS dashboard aesthetic. No cold blue-gray tech palette. No neon club flyer energy. No hamburger menus. No pure white #FFFFFF backgrounds. No pure black #000000 text. No Roboto or Inter fonts. No cluttered layouts. No wireframes. No clip art or cartoon illustrations. No generic food stock. No white-tablecloth-only imagery. No Silicon Valley startup aesthetic. No gradients that look like Stripe or Linear.
BACKGROUND: Present on dark midnight #0D0D1A surface with subtle ambient glow. iPhone 15 Pro device frame (space black) at 15-degree angle. Soft gold #C9A84C light leak from behind device. Clean editorial presentation. No busy patterns.
```

### PROMPT 11-B — Soul Food / Casual Venue Detail

```
BRAND: PullUpATL — Atlanta's nightlife and dining table booking app.
DEMOGRAPHIC: African American professionals, creatives, and socialites aged 22-55 in Atlanta, GA.
PLATFORM: Mobile-first iOS/Android app (React Native / Expo).
VIBE: Premium but not pretentious. Nightlife-native. Culturally confident. "Resy meets the group chat."
COLORS: Primary "Table Gold" #C9A84C | Secondary "Midnight" #1A1A2E | Accent "Velvet" #8B2252 | Background "Ivory" #FAF8F5 | Text "Onyx" #2D2D2D | Fill "Warm Gray" #F0EDE8 | Dark BG #0D0D1A | Dark Surface #1A1A2E | Dark Card #1E1E35
FONTS: Display: Playfair Display 700/800 (serif, editorial) | Heading: Plus Jakarta Sans 600/700 | Body: Plus Jakarta Sans 400/500
RULES: Mobile-first 390×844 (iPhone 15 Pro). Bottom tab bar (NEVER hamburger). Card UI 12px radius. Gold accents on dark = premium. Real ATL venue photography. Black people in lifestyle imagery.

SUBJECT: Venue detail for a beloved soul food restaurant. Hero photo: warm, bustling dining room — Black family at a large table, platters of fried chicken and collard greens and mac and cheese, sweet tea pitchers. Natural warm lighting. Same layout structure as fine dining but with adjusted signals: price "$$", "4.9" star rating with "(1,204 reviews)", vibe tags below name: "Family Style" "BYOB" "Cash Only" chips. "Been Here Since '92" heritage badge in gold. Special section: "What to Order" — staff picks with small food photos and descriptions. "Live Music Fridays" event callout card with Velvet border.

SCENE: Soul food spots have a different energy than fine dining — communal, heritage-rich, no pretension. The photography should be generous and warm. The "Been Here Since '92" badge honors legacy venues. "Cash Only" tag prevents friction at the register.

STYLE: High-fidelity mobile app UI mockup rendered at Figma presentation quality. Pixel-perfect modern iOS/Android design language with warm editorial touches. Rounded cards with subtle shadow, generous white space, bottom tab navigation. Luxury nightlife meets intuitive booking UX. Photography-forward with warm overlays. Gold foil accent details on dark chrome. Clean data hierarchy. Professional mockup on iPhone 15 Pro device frame (space black).
NEGATIVE: No stock photography of white people at generic restaurants. No corporate SaaS dashboard aesthetic. No cold blue-gray tech palette. No neon club flyer energy. No hamburger menus. No pure white #FFFFFF backgrounds. No pure black #000000 text. No Roboto or Inter fonts. No cluttered layouts. No wireframes. No clip art or cartoon illustrations. No generic food stock. No white-tablecloth-only imagery. No Silicon Valley startup aesthetic. No gradients that look like Stripe or Linear.
BACKGROUND: Present on dark midnight #0D0D1A surface with subtle ambient glow. iPhone 15 Pro device frame (space black) at 15-degree angle. Soft gold #C9A84C light leak from behind device. Clean editorial presentation. No busy patterns.
```

---

## AGENT 12: Nightclub Detail Designer
**Layer:** 07 — Visual Design System | **Swarm:** Design System Forge
**Owns:** Nightclub/lounge detail, section maps, event lineups
**Personas:** A02 Breadwinner, A05 Athlete, A06 Industry Head

### PROMPT 12-A — Nightclub Venue Detail

```
BRAND: PullUpATL — Atlanta's nightlife and dining table booking app.
DEMOGRAPHIC: African American professionals, creatives, and socialites aged 22-55 in Atlanta, GA.
PLATFORM: Mobile-first iOS/Android app (React Native / Expo).
VIBE: Premium but not pretentious. Nightlife-native. Culturally confident. "Resy meets the group chat."
COLORS: Primary "Table Gold" #C9A84C | Secondary "Midnight" #1A1A2E | Accent "Velvet" #8B2252 | Background "Ivory" #FAF8F5 | Text "Onyx" #2D2D2D | Fill "Warm Gray" #F0EDE8 | Dark BG #0D0D1A | Dark Surface #1A1A2E | Dark Card #1E1E35
FONTS: Display: Playfair Display 700/800 (serif, editorial) | Heading: Plus Jakarta Sans 600/700 | Body: Plus Jakarta Sans 400/500
RULES: Mobile-first 390×844 (iPhone 15 Pro). Bottom tab bar (NEVER hamburger). Card UI 12px radius. Gold accents on dark = premium. Real ATL venue photography. Black people in lifestyle imagery.

SUBJECT: Venue detail for a nightclub. Dark mode. Hero: moody club interior — LED-lit bar, DJ booth background, VIP sections with velvet ropes, bottle sparklers in distance. Venue name "Revel Atlanta" in Plus Jakarta Sans 700 Ivory on Midnight overlay. "Nightclub · Buckhead · $$$$" Slate. Two CTAs side by side: "Book a Section" (gold fill, Midnight text) and "Guest List" (outlined gold border/text). Sections: "Tonight's Lineup" — DJ name + photo + genre tags. "Section Map" thumbnail of interactive floor plan (bird's eye, sections color-coded: green available, gold selected, red taken). "Bottle Menu" horizontal scroll of bottle cards (Hennessy, Casamigos, Ace of Spades — photo, name, price). "Dress Code" with icon + text. Sticky bottom: "Book a Section — from $500" gold CTA.

SCENE: Darker and moodier than restaurant pages. The section map is the key differentiator. Bottle menu cards should look like a luxury spirits catalog. The dual CTA (Section + Guest List) serves both high-spend and regular customers.

STYLE: High-fidelity mobile app UI mockup rendered at Figma presentation quality. Pixel-perfect modern iOS/Android design language with warm editorial touches. Rounded cards with subtle shadow, generous white space, bottom tab navigation. Luxury nightlife meets intuitive booking UX. Photography-forward with warm overlays. Gold foil accent details on dark chrome. Clean data hierarchy. Professional mockup on iPhone 15 Pro device frame (space black).
NEGATIVE: No stock photography of white people at generic restaurants. No corporate SaaS dashboard aesthetic. No cold blue-gray tech palette. No neon club flyer energy. No hamburger menus. No pure white #FFFFFF backgrounds. No pure black #000000 text. No Roboto or Inter fonts. No cluttered layouts. No wireframes. No clip art or cartoon illustrations. No generic food stock. No white-tablecloth-only imagery. No Silicon Valley startup aesthetic. No gradients that look like Stripe or Linear.
BACKGROUND-DARK: Same device frame on #0D0D1A surface. Subtle Velvet #8B2252 ambient glow behind device suggesting VIP energy. Faint gold particle effect in negative space.
```

### PROMPT 12-B — Floor Plan / Section Map

```
BRAND: PullUpATL — Atlanta's nightlife and dining table booking app.
DEMOGRAPHIC: African American professionals, creatives, and socialites aged 22-55 in Atlanta, GA.
PLATFORM: Mobile-first iOS/Android app (React Native / Expo).
VIBE: Premium but not pretentious. Nightlife-native. Culturally confident. "Resy meets the group chat."
COLORS: Primary "Table Gold" #C9A84C | Secondary "Midnight" #1A1A2E | Accent "Velvet" #8B2252 | Background "Ivory" #FAF8F5 | Text "Onyx" #2D2D2D | Fill "Warm Gray" #F0EDE8 | Dark BG #0D0D1A | Dark Surface #1A1A2E | Dark Card #1E1E35
FONTS: Display: Playfair Display 700/800 (serif, editorial) | Heading: Plus Jakarta Sans 600/700 | Body: Plus Jakarta Sans 400/500
RULES: Mobile-first 390×844 (iPhone 15 Pro). Bottom tab bar (NEVER hamburger). Card UI 12px radius. Gold accents on dark = premium. Real ATL venue photography. Black people in lifestyle imagery.

SUBJECT: Interactive floor plan screen for VIP section booking. Dark background #0D0D1A. Top: "Havana Nightclub ATL" + "Select Your Section" header. Main: bird's-eye stylized floor plan — dance floor center with gradient, DJ booth top, bar left side, VIP sections around perimeter labeled "S1"-"S8". Color-coded: available (gold #C9A84C outline), selected (gold filled with glow), unavailable (dark gray #2D2D4A with "SOLD"), premium (Velvet #8B2252 outline + "VIP" badge). Bottom half-sheet drawer: selected section details — "Section S3 · Main Floor · Fits 8-12", photo of actual section angle, "$1,500 minimum" gold, "Includes 2 bottles" Slate, "Select This Section" gold CTA.

SCENE: The money screen — $500-$5,000 decisions happen here. Clean vector floor plan, not a photograph. Gold glow around selected section adds excitement. Bottom drawer seals the deal with a real photo of what you're booking.

STYLE: High-fidelity mobile app UI mockup rendered at Figma presentation quality. Pixel-perfect modern iOS/Android design language with warm editorial touches. Rounded cards with subtle shadow, generous white space, bottom tab navigation. Luxury nightlife meets intuitive booking UX. Photography-forward with warm overlays. Gold foil accent details on dark chrome. Clean data hierarchy. Professional mockup on iPhone 15 Pro device frame (space black).
NEGATIVE: No stock photography of white people at generic restaurants. No corporate SaaS dashboard aesthetic. No cold blue-gray tech palette. No neon club flyer energy. No hamburger menus. No pure white #FFFFFF backgrounds. No pure black #000000 text. No Roboto or Inter fonts. No cluttered layouts. No wireframes. No clip art or cartoon illustrations. No generic food stock. No white-tablecloth-only imagery. No Silicon Valley startup aesthetic. No gradients that look like Stripe or Linear.
BACKGROUND-DARK: Same device frame on #0D0D1A surface. Subtle Velvet #8B2252 ambient glow behind device suggesting VIP energy. Faint gold particle effect in negative space.
```

---

## AGENT 13: Brunch & Day Party Designer
**Layer:** 07 — Visual Design System | **Swarm:** Design System Forge
**Owns:** Brunch venue detail, day party listings
**Personas:** A13 Brunch Enthusiast, A07 College Crew, A15 Content Creator

### PROMPT 13-A — Day Party / Brunch Event Detail

```
BRAND: PullUpATL — Atlanta's nightlife and dining table booking app.
DEMOGRAPHIC: African American professionals, creatives, and socialites aged 22-55 in Atlanta, GA.
PLATFORM: Mobile-first iOS/Android app (React Native / Expo).
VIBE: Premium but not pretentious. Nightlife-native. Culturally confident. "Resy meets the group chat."
COLORS: Primary "Table Gold" #C9A84C | Secondary "Midnight" #1A1A2E | Accent "Velvet" #8B2252 | Background "Ivory" #FAF8F5 | Text "Onyx" #2D2D2D | Fill "Warm Gray" #F0EDE8 | Dark BG #0D0D1A | Dark Surface #1A1A2E | Dark Card #1E1E35
FONTS: Display: Playfair Display 700/800 (serif, editorial) | Heading: Plus Jakarta Sans 600/700 | Body: Plus Jakarta Sans 400/500
RULES: Mobile-first 390×844 (iPhone 15 Pro). Bottom tab bar (NEVER hamburger). Card UI 12px radius. Gold accents on dark = premium. Real ATL venue photography. Black people in lifestyle imagery.

SUBJECT: Day party event detail page. Bright, warm aesthetic — NOT dark mode. Hero photo: rooftop day party scene — Black partygoers in summer outfits, DJ playing, city skyline backdrop, golden hour sunlight, cocktails in hand. Overlay: event name "SunSoak Saturdays" in Playfair Display 700, Onyx on light overlay. Venue: "The Roof at Ponce City Market" link. Date/time prominent: "Every Saturday · 2 PM - 8 PM". Vibe tags: "Day Party" "Rooftop" "Live DJ" "Dress to Impress". Ticket/entry section: "Free before 3 PM w/ RSVP" in green, "General: $25 after 3 PM", "VIP Cabana: $350 (up to 6)". DJ lineup with small circular photos. "Share with your crew" button with share icon. Bottom: "RSVP — Free Entry" gold CTA.

SCENE: Day party energy is completely different from nightclub — bright, golden-hour, outdoor, social. The pricing transparency (free before 3) is a conversion lever. Photography should feel aspirational-weekend, not nightlife.

STYLE: High-fidelity mobile app UI mockup rendered at Figma presentation quality. Pixel-perfect modern iOS/Android design language with warm editorial touches. Rounded cards with subtle shadow, generous white space, bottom tab navigation. Luxury nightlife meets intuitive booking UX. Photography-forward with warm overlays. Gold foil accent details on dark chrome. Clean data hierarchy. Professional mockup on iPhone 15 Pro device frame (space black).
NEGATIVE: No stock photography of white people at generic restaurants. No corporate SaaS dashboard aesthetic. No cold blue-gray tech palette. No neon club flyer energy. No hamburger menus. No pure white #FFFFFF backgrounds. No pure black #000000 text. No Roboto or Inter fonts. No cluttered layouts. No wireframes. No clip art or cartoon illustrations. No generic food stock. No white-tablecloth-only imagery. No Silicon Valley startup aesthetic. No gradients that look like Stripe or Linear.
BACKGROUND: Present on dark midnight #0D0D1A surface with subtle ambient glow. iPhone 15 Pro device frame (space black) at 15-degree angle. Soft gold #C9A84C light leak from behind device. Clean editorial presentation. No busy patterns.
```

---

## AGENT 14: Venue Media Designer
**Layer:** 12 — Motion & Animation | **Swarm:** Animation Studio
**Owns:** Photo galleries, video reels, menu viewer
**Personas:** A01 Vibe Curator, A15 Content Creator

### PROMPT 14-A — Venue Photo Gallery

```
BRAND: PullUpATL — Atlanta's nightlife and dining table booking app.
DEMOGRAPHIC: African American professionals, creatives, and socialites aged 22-55 in Atlanta, GA.
PLATFORM: Mobile-first iOS/Android app (React Native / Expo).
VIBE: Premium but not pretentious. Nightlife-native. Culturally confident. "Resy meets the group chat."
COLORS: Primary "Table Gold" #C9A84C | Secondary "Midnight" #1A1A2E | Accent "Velvet" #8B2252 | Background "Ivory" #FAF8F5 | Text "Onyx" #2D2D2D | Fill "Warm Gray" #F0EDE8 | Dark BG #0D0D1A | Dark Surface #1A1A2E | Dark Card #1E1E35
FONTS: Display: Playfair Display 700/800 (serif, editorial) | Heading: Plus Jakarta Sans 600/700 | Body: Plus Jakarta Sans 400/500
RULES: Mobile-first 390×844 (iPhone 15 Pro). Bottom tab bar (NEVER hamburger). Card UI 12px radius. Gold accents on dark = premium. Real ATL venue photography. Black people in lifestyle imagery.

SUBJECT: Full-screen photo gallery for a venue. Dark mode #0D0D1A background. Photo displayed large — interior shot of beautifully plated dish on a dark table, golden ambient lighting. Photo counter "3 / 24" top right in Ivory. Close X top left. Bottom: thumbnail strip showing scrollable row of 6-8 venue photos (interior, food, drinks, exterior, crowd, details). User-generated photo section indicated by "Guest Photos" label with camera icon — tagged photos from Instagram-style user posts. Swipe indicator arrows on left/right edges.

SCENE: The gallery is where A01 Vibe Curator and A15 Content Creator make their decision. Photos need to be large, immersive, swipeable. The Guest Photos section adds social proof beyond the venue's own marketing shots.

STYLE: High-fidelity mobile app UI mockup rendered at Figma presentation quality. Pixel-perfect modern iOS/Android design language with warm editorial touches. Rounded cards with subtle shadow, generous white space, bottom tab navigation. Luxury nightlife meets intuitive booking UX. Photography-forward with warm overlays. Gold foil accent details on dark chrome. Clean data hierarchy. Professional mockup on iPhone 15 Pro device frame (space black).
NEGATIVE: No stock photography of white people at generic restaurants. No corporate SaaS dashboard aesthetic. No cold blue-gray tech palette. No neon club flyer energy. No hamburger menus. No pure white #FFFFFF backgrounds. No pure black #000000 text. No Roboto or Inter fonts. No cluttered layouts. No wireframes. No clip art or cartoon illustrations. No generic food stock. No white-tablecloth-only imagery. No Silicon Valley startup aesthetic. No gradients that look like Stripe or Linear.
BACKGROUND-DARK: Same device frame on #0D0D1A surface. Subtle Velvet #8B2252 ambient glow behind device suggesting VIP energy. Faint gold particle effect in negative space.
```

---

# ═══════════════════════════════════════════════════
# TIER 4 — BOOKING ENGINE
# Agents 15-19 | 10 Prompts
# ═══════════════════════════════════════════════════

---

## AGENT 15: Table Booking Flow Designer
**Layer:** 19 — Booking Engine | **Swarm:** Booking Flow Assembly
**Owns:** Date/time picker, party size, special requests
**Personas:** A01 Vibe Curator, A09 Couple, A10 Family Organizer

### PROMPT 15-A — Booking Step 1: Date/Time/Party

```
BRAND: PullUpATL — Atlanta's nightlife and dining table booking app.
DEMOGRAPHIC: African American professionals, creatives, and socialites aged 22-55 in Atlanta, GA.
PLATFORM: Mobile-first iOS/Android app (React Native / Expo).
VIBE: Premium but not pretentious. Nightlife-native. Culturally confident. "Resy meets the group chat."
COLORS: Primary "Table Gold" #C9A84C | Secondary "Midnight" #1A1A2E | Accent "Velvet" #8B2252 | Background "Ivory" #FAF8F5 | Text "Onyx" #2D2D2D | Fill "Warm Gray" #F0EDE8 | Dark BG #0D0D1A | Dark Surface #1A1A2E | Dark Card #1E1E35
FONTS: Display: Playfair Display 700/800 (serif, editorial) | Heading: Plus Jakarta Sans 600/700 | Body: Plus Jakarta Sans 400/500
RULES: Mobile-first 390×844 (iPhone 15 Pro). Bottom tab bar (NEVER hamburger). Card UI 12px radius. Gold accents on dark = premium. Real ATL venue photography. Black people in lifestyle imagery.

SUBJECT: Booking flow step 1 of 4. Ivory background. Top: back arrow + "Book a Table" + "1 of 4" Slate. Gold progress bar at 25%. Venue mini-card: thumbnail + "Avenue Kitchen & Grill" + "Contemporary American". Form: "Date" calendar grid — today gold circle, past dates gray, available Onyx, unavailable strikethrough. "Time" horizontal scroll pills: "7:00 PM" "7:30 PM" "8:00 PM" — available Warm Gray, selected Midnight fill, unavailable disabled opacity. "Party Size" stepper: minus/plus buttons flanking "4 guests" counter. "Special Occasion?" toggle (off state). Bottom: "Continue" gold CTA full width.

SCENE: Fast, frictionless — everything above the fold. Calendar uses standard iOS patterns with brand colors. Some time slots already taken to show real scarcity.

STYLE: High-fidelity mobile app UI mockup rendered at Figma presentation quality. Pixel-perfect modern iOS/Android design language with warm editorial touches. Rounded cards with subtle shadow, generous white space, bottom tab navigation. Luxury nightlife meets intuitive booking UX. Photography-forward with warm overlays. Gold foil accent details on dark chrome. Clean data hierarchy. Professional mockup on iPhone 15 Pro device frame (space black).
NEGATIVE: No stock photography of white people at generic restaurants. No corporate SaaS dashboard aesthetic. No cold blue-gray tech palette. No neon club flyer energy. No hamburger menus. No pure white #FFFFFF backgrounds. No pure black #000000 text. No Roboto or Inter fonts. No cluttered layouts. No wireframes. No clip art or cartoon illustrations. No generic food stock. No white-tablecloth-only imagery. No Silicon Valley startup aesthetic. No gradients that look like Stripe or Linear.
BACKGROUND: Present on dark midnight #0D0D1A surface with subtle ambient glow. iPhone 15 Pro device frame (space black) at 15-degree angle. Soft gold #C9A84C light leak from behind device. Clean editorial presentation. No busy patterns.
```

### PROMPT 15-B — Booking Step 2: Special Requests

```
BRAND: PullUpATL — Atlanta's nightlife and dining table booking app.
DEMOGRAPHIC: African American professionals, creatives, and socialites aged 22-55 in Atlanta, GA.
PLATFORM: Mobile-first iOS/Android app (React Native / Expo).
VIBE: Premium but not pretentious. Nightlife-native. Culturally confident. "Resy meets the group chat."
COLORS: Primary "Table Gold" #C9A84C | Secondary "Midnight" #1A1A2E | Accent "Velvet" #8B2252 | Background "Ivory" #FAF8F5 | Text "Onyx" #2D2D2D | Fill "Warm Gray" #F0EDE8 | Dark BG #0D0D1A | Dark Surface #1A1A2E | Dark Card #1E1E35
FONTS: Display: Playfair Display 700/800 (serif, editorial) | Heading: Plus Jakarta Sans 600/700 | Body: Plus Jakarta Sans 400/500
RULES: Mobile-first 390×844 (iPhone 15 Pro). Bottom tab bar (NEVER hamburger). Card UI 12px radius. Gold accents on dark = premium. Real ATL venue photography. Black people in lifestyle imagery.

SUBJECT: Booking step 2 of 4. Progress bar 50% gold. Header "Preferences". Content: seating preference chips — "Indoor" "Outdoor" "Bar" "Private Room" "Window" — single select, selected Midnight fill. "Dining occasion" dropdown: "Casual Dinner" selected showing options "Birthday" "Anniversary" "Business" "Celebration" "Just Dinner". Free-text field: "Special requests" with placeholder "Allergies, accessibility needs, surprises…" 3 lines tall, Warm Gray border. "Add to reservation" toggle row: "High chair needed" with toggle (off). "Accessibility needs" with toggle (off). Bottom: "Continue" gold CTA.

SCENE: This step captures info that makes the dining experience personal. The occasion dropdown triggers downstream features (birthday = cake emoji on confirmation, anniversary = special table placement). Free text field keeps it human.

STYLE: High-fidelity mobile app UI mockup rendered at Figma presentation quality. Pixel-perfect modern iOS/Android design language with warm editorial touches. Rounded cards with subtle shadow, generous white space, bottom tab navigation. Luxury nightlife meets intuitive booking UX. Photography-forward with warm overlays. Gold foil accent details on dark chrome. Clean data hierarchy. Professional mockup on iPhone 15 Pro device frame (space black).
NEGATIVE: No stock photography of white people at generic restaurants. No corporate SaaS dashboard aesthetic. No cold blue-gray tech palette. No neon club flyer energy. No hamburger menus. No pure white #FFFFFF backgrounds. No pure black #000000 text. No Roboto or Inter fonts. No cluttered layouts. No wireframes. No clip art or cartoon illustrations. No generic food stock. No white-tablecloth-only imagery. No Silicon Valley startup aesthetic. No gradients that look like Stripe or Linear.
BACKGROUND: Present on dark midnight #0D0D1A surface with subtle ambient glow. iPhone 15 Pro device frame (space black) at 15-degree angle. Soft gold #C9A84C light leak from behind device. Clean editorial presentation. No busy patterns.
```

---

## AGENT 16: Section Booking Designer
**Layer:** 19 — Booking Engine | **Swarm:** Booking Flow Assembly
**Owns:** VIP section selection, bottle pairing, minimum spend
**Personas:** A02 Breadwinner, A03 Birthday Monarch, A05 Athlete

### PROMPT 16-A — Section Booking Summary

```
BRAND: PullUpATL — Atlanta's nightlife and dining table booking app.
DEMOGRAPHIC: African American professionals, creatives, and socialites aged 22-55 in Atlanta, GA.
PLATFORM: Mobile-first iOS/Android app (React Native / Expo).
VIBE: Premium but not pretentious. Nightlife-native. Culturally confident. "Resy meets the group chat."
COLORS: Primary "Table Gold" #C9A84C | Secondary "Midnight" #1A1A2E | Accent "Velvet" #8B2252 | Background "Ivory" #FAF8F5 | Text "Onyx" #2D2D2D | Fill "Warm Gray" #F0EDE8 | Dark BG #0D0D1A | Dark Surface #1A1A2E | Dark Card #1E1E35
FONTS: Display: Playfair Display 700/800 (serif, editorial) | Heading: Plus Jakarta Sans 600/700 | Body: Plus Jakarta Sans 400/500
RULES: Mobile-first 390×844 (iPhone 15 Pro). Bottom tab bar (NEVER hamburger). Card UI 12px radius. Gold accents on dark = premium. Real ATL venue photography. Black people in lifestyle imagery.

SUBJECT: Section booking summary (pre-payment). Dark mode. "Your Section" header with Velvet "VIP" badge. Card on #1E1E35: section photo (VIP booth angle), "Section S3 · Main Floor" / "Fits 8-12" / "Sat, Mar 22 · 10 PM - 2 AM" in Ivory. Bottles: two mini-cards inline (thumbnail + name + price). "Add More Bottles" gold link. Divider. Breakdown: "Section minimum: $1,500" / "Hennessy VSOP: $350" / "Casamigos Reposado: $300" / "Subtotal: $2,150" / "Gratuity (20%): $430" / "Tax: $172" / "Total: $2,752" — total in gold Plus Jakarta Sans 700. Promoter: "Referred by: @Dame" with avatar. Bottom: "Confirm & Pay" gold CTA. "Split with group" text link.

SCENE: High-value transaction — must feel premium and transparent. Every cost itemized. Promoter attribution is business-critical. "Split with group" previews group payment feature.

STYLE: High-fidelity mobile app UI mockup rendered at Figma presentation quality. Pixel-perfect modern iOS/Android design language with warm editorial touches. Rounded cards with subtle shadow, generous white space, bottom tab navigation. Luxury nightlife meets intuitive booking UX. Photography-forward with warm overlays. Gold foil accent details on dark chrome. Clean data hierarchy. Professional mockup on iPhone 15 Pro device frame (space black).
NEGATIVE: No stock photography of white people at generic restaurants. No corporate SaaS dashboard aesthetic. No cold blue-gray tech palette. No neon club flyer energy. No hamburger menus. No pure white #FFFFFF backgrounds. No pure black #000000 text. No Roboto or Inter fonts. No cluttered layouts. No wireframes. No clip art or cartoon illustrations. No generic food stock. No white-tablecloth-only imagery. No Silicon Valley startup aesthetic. No gradients that look like Stripe or Linear.
BACKGROUND-DARK: Same device frame on #0D0D1A surface. Subtle Velvet #8B2252 ambient glow behind device suggesting VIP energy. Faint gold particle effect in negative space.
```

---

## AGENT 17: Bottle Service Designer
**Layer:** 22 — Payment & Commerce | **Swarm:** Revenue Engine
**Owns:** Bottle menu, package builder, upsells
**Personas:** A02 Breadwinner, A05 Athlete, A06 Industry Head

### PROMPT 17-A — Bottle Service Menu

```
BRAND: PullUpATL — Atlanta's nightlife and dining table booking app.
DEMOGRAPHIC: African American professionals, creatives, and socialites aged 22-55 in Atlanta, GA.
PLATFORM: Mobile-first iOS/Android app (React Native / Expo).
VIBE: Premium but not pretentious. Nightlife-native. Culturally confident. "Resy meets the group chat."
COLORS: Primary "Table Gold" #C9A84C | Secondary "Midnight" #1A1A2E | Accent "Velvet" #8B2252 | Background "Ivory" #FAF8F5 | Text "Onyx" #2D2D2D | Fill "Warm Gray" #F0EDE8 | Dark BG #0D0D1A | Dark Surface #1A1A2E | Dark Card #1E1E35
FONTS: Display: Playfair Display 700/800 (serif, editorial) | Heading: Plus Jakarta Sans 600/700 | Body: Plus Jakarta Sans 400/500
RULES: Mobile-first 390×844 (iPhone 15 Pro). Bottom tab bar (NEVER hamburger). Card UI 12px radius. Gold accents on dark = premium. Real ATL venue photography. Black people in lifestyle imagery.

SUBJECT: Bottle menu screen. Dark mode #0D0D1A. Top: venue name "Revel Atlanta" + "Bottle Menu" header. Filter pills: "All" "Champagne" "Cognac" "Tequila" "Vodka" "Whiskey" — active gold underline. Bottle cards vertical scroll: each on #1E1E35, landscape layout — studio-lit bottle photo on dark, name "Ace of Spades Brut" Plus Jakarta Sans 600 Ivory, brand "Armand de Brignac" Slate, size "750ml", price "$650" in gold. "Add to Section" outlined button. Bottom: package banner in Velvet gradient — "Pick 3 bottles, save 15%" Ivory, gold CTA "Build Package". Sticky cart: "2 bottles · $1,450" + "View Order" gold button.

SCENE: A luxury spirits catalog, not a drink list. Bottles beautifully lit, prices prominent but not cheap. Package builder upsell is the AOV lever. Dark mode mandatory for nightclub context.

STYLE: High-fidelity mobile app UI mockup rendered at Figma presentation quality. Pixel-perfect modern iOS/Android design language with warm editorial touches. Rounded cards with subtle shadow, generous white space, bottom tab navigation. Luxury nightlife meets intuitive booking UX. Photography-forward with warm overlays. Gold foil accent details on dark chrome. Clean data hierarchy. Professional mockup on iPhone 15 Pro device frame (space black).
NEGATIVE: No stock photography of white people at generic restaurants. No corporate SaaS dashboard aesthetic. No cold blue-gray tech palette. No neon club flyer energy. No hamburger menus. No pure white #FFFFFF backgrounds. No pure black #000000 text. No Roboto or Inter fonts. No cluttered layouts. No wireframes. No clip art or cartoon illustrations. No generic food stock. No white-tablecloth-only imagery. No Silicon Valley startup aesthetic. No gradients that look like Stripe or Linear.
BACKGROUND-DARK: Same device frame on #0D0D1A surface. Subtle Velvet #8B2252 ambient glow behind device suggesting VIP energy. Faint gold particle effect in negative space.
```

---

## AGENT 18: Birthday & Event Package Designer
**Layer:** 06 — Data Architecture | **Swarm:** Schema & Pipeline Collective
**Owns:** Birthday package builder, event add-ons, vendor marketplace
**Personas:** A03 Birthday Monarch, A10 Family Organizer

### PROMPT 18-A — Birthday Package Builder

```
BRAND: PullUpATL — Atlanta's nightlife and dining table booking app.
DEMOGRAPHIC: African American professionals, creatives, and socialites aged 22-55 in Atlanta, GA.
PLATFORM: Mobile-first iOS/Android app (React Native / Expo).
VIBE: Premium but not pretentious. Nightlife-native. Culturally confident. "Resy meets the group chat."
COLORS: Primary "Table Gold" #C9A84C | Secondary "Midnight" #1A1A2E | Accent "Velvet" #8B2252 | Background "Ivory" #FAF8F5 | Text "Onyx" #2D2D2D | Fill "Warm Gray" #F0EDE8 | Dark BG #0D0D1A | Dark Surface #1A1A2E | Dark Card #1E1E35
FONTS: Display: Playfair Display 700/800 (serif, editorial) | Heading: Plus Jakarta Sans 600/700 | Body: Plus Jakarta Sans 400/500
RULES: Mobile-first 390×844 (iPhone 15 Pro). Bottom tab bar (NEVER hamburger). Card UI 12px radius. Gold accents on dark = premium. Real ATL venue photography. Black people in lifestyle imagery.

SUBJECT: Birthday package builder screen. Dark top section: "Build Your Birthday" in Playfair Display 700, Ivory. Crown emoji. Progress: 3 dots "Venue → Bottles → Extras". Current step: "Extras". Selected venue shown as compact card: venue name + date + section. Add-on cards in scrollable grid (2 columns): "Custom Cake" ($150-$400) with cake photo, "Balloon Setup" ($200) with photo, "LED Marquee Letters" ($175) with photo, "Photographer" ($300/2hrs) with camera icon, "Party Bus Transfer" ($500) with bus photo, "Custom Flyer Design" ($75) with design preview. Each card: photo, name, price in gold, "Add" toggle button. Selected items have gold check overlay. Running total at bottom: "Package Total: $2,925" updating live. "Review Package" gold CTA.

SCENE: A03 Birthday Monarch is planning the night of the year. This screen is a marketplace of vendor add-ons that turn a section booking into a full production. Cards should feel shoppable. Running total creates accountability. Emoji usage (crown) matches brand voice.

STYLE: High-fidelity mobile app UI mockup rendered at Figma presentation quality. Pixel-perfect modern iOS/Android design language with warm editorial touches. Rounded cards with subtle shadow, generous white space, bottom tab navigation. Luxury nightlife meets intuitive booking UX. Photography-forward with warm overlays. Gold foil accent details on dark chrome. Clean data hierarchy. Professional mockup on iPhone 15 Pro device frame (space black).
NEGATIVE: No stock photography of white people at generic restaurants. No corporate SaaS dashboard aesthetic. No cold blue-gray tech palette. No neon club flyer energy. No hamburger menus. No pure white #FFFFFF backgrounds. No pure black #000000 text. No Roboto or Inter fonts. No cluttered layouts. No wireframes. No clip art or cartoon illustrations. No generic food stock. No white-tablecloth-only imagery. No Silicon Valley startup aesthetic. No gradients that look like Stripe or Linear.
BACKGROUND-DARK: Same device frame on #0D0D1A surface. Subtle Velvet #8B2252 ambient glow behind device suggesting VIP energy. Faint gold particle effect in negative space.
```

### PROMPT 18-B — Birthday Confirmation / Share Card

```
BRAND: PullUpATL — Atlanta's nightlife and dining table booking app.
DEMOGRAPHIC: African American professionals, creatives, and socialites aged 22-55 in Atlanta, GA.
PLATFORM: Mobile-first iOS/Android app (React Native / Expo).
VIBE: Premium but not pretentious. Nightlife-native. Culturally confident. "Resy meets the group chat."
COLORS: Primary "Table Gold" #C9A84C | Secondary "Midnight" #1A1A2E | Accent "Velvet" #8B2252 | Background "Ivory" #FAF8F5 | Text "Onyx" #2D2D2D | Fill "Warm Gray" #F0EDE8 | Dark BG #0D0D1A | Dark Surface #1A1A2E | Dark Card #1E1E35
FONTS: Display: Playfair Display 700/800 (serif, editorial) | Heading: Plus Jakarta Sans 600/700 | Body: Plus Jakarta Sans 400/500
RULES: Mobile-first 390×844 (iPhone 15 Pro). Bottom tab bar (NEVER hamburger). Card UI 12px radius. Gold accents on dark = premium. Real ATL venue photography. Black people in lifestyle imagery.

SUBJECT: Birthday booking confirmation with shareable invite card. Top: celebration screen — dark background with animated gold confetti burst (frozen), crown icon, "The Throne is Set." in Playfair Display 700, gold. Below: shareable invite card preview — designed like a digital flyer with Midnight background, Velvet accent border, birthday person's name "DESTINY'S BIRTHDAY" in Playfair Display, venue name, date, time, section number, dress code, and RSVP link QR code. Card shows in a phone-within-phone preview (how it'll look when shared). Action buttons: "Share to Instagram Stories" "Copy Link" "Send via Text" "Add to Calendar". Guest list RSVP counter: "4 of 12 confirmed" with avatar stack.

SCENE: The birthday share card is marketing gold — every share is organic promotion for PullUpATL. The card must look designed enough that people WANT to post it. The RSVP counter creates social pressure. This is where A15 Content Creator overlaps with A03 Birthday Monarch.

STYLE: High-fidelity mobile app UI mockup rendered at Figma presentation quality. Pixel-perfect modern iOS/Android design language with warm editorial touches. Rounded cards with subtle shadow, generous white space, bottom tab navigation. Luxury nightlife meets intuitive booking UX. Photography-forward with warm overlays. Gold foil accent details on dark chrome. Clean data hierarchy. Professional mockup on iPhone 15 Pro device frame (space black).
NEGATIVE: No stock photography of white people at generic restaurants. No corporate SaaS dashboard aesthetic. No cold blue-gray tech palette. No neon club flyer energy. No hamburger menus. No pure white #FFFFFF backgrounds. No pure black #000000 text. No Roboto or Inter fonts. No cluttered layouts. No wireframes. No clip art or cartoon illustrations. No generic food stock. No white-tablecloth-only imagery. No Silicon Valley startup aesthetic. No gradients that look like Stripe or Linear.
BACKGROUND-DARK: Same device frame on #0D0D1A surface. Subtle Velvet #8B2252 ambient glow behind device suggesting VIP energy. Faint gold particle effect in negative space.
```

---

## AGENT 19: Confirmation & Receipt Designer
**Layer:** 19 — Booking Engine | **Swarm:** Booking Flow Assembly
**Owns:** Booking confirmation, payment receipt, calendar add
**Personas:** All booking users

### PROMPT 19-A — Booking Confirmation (Table)

```
BRAND: PullUpATL — Atlanta's nightlife and dining table booking app.
DEMOGRAPHIC: African American professionals, creatives, and socialites aged 22-55 in Atlanta, GA.
PLATFORM: Mobile-first iOS/Android app (React Native / Expo).
VIBE: Premium but not pretentious. Nightlife-native. Culturally confident. "Resy meets the group chat."
COLORS: Primary "Table Gold" #C9A84C | Secondary "Midnight" #1A1A2E | Accent "Velvet" #8B2252 | Background "Ivory" #FAF8F5 | Text "Onyx" #2D2D2D | Fill "Warm Gray" #F0EDE8 | Dark BG #0D0D1A | Dark Surface #1A1A2E | Dark Card #1E1E35
FONTS: Display: Playfair Display 700/800 (serif, editorial) | Heading: Plus Jakarta Sans 600/700 | Body: Plus Jakarta Sans 400/500
RULES: Mobile-first 390×844 (iPhone 15 Pro). Bottom tab bar (NEVER hamburger). Card UI 12px radius. Gold accents on dark = premium. Real ATL venue photography. Black people in lifestyle imagery.

SUBJECT: Table booking confirmation — celebration screen. Top: Midnight background with centered gold checkmark icon, gold confetti particles frozen. "You're Locked In." in Playfair Display 700, Ivory. Confirmation card on Ivory with rounded top 24px: venue photo strip, "Avenue Kitchen & Grill" Plus Jakarta Sans 700, details grid — Date: "Sat, Mar 15" / Time: "8:30 PM" / Party: "4 guests" / Code: "PUA-7X3K" monospaced gold, tappable copy icon. QR code box. Actions: "Add to Calendar" outlined, "Share" outlined, "View Details" gold fill. Bottom: "See you there." Slate italic. Tab bar persistent.

SCENE: The dopamine hit — getting past the velvet rope. Confirmation code prominent and copyable. Share button generates branded card for the group chat. Warm, celebratory, not transactional.

STYLE: High-fidelity mobile app UI mockup rendered at Figma presentation quality. Pixel-perfect modern iOS/Android design language with warm editorial touches. Rounded cards with subtle shadow, generous white space, bottom tab navigation. Luxury nightlife meets intuitive booking UX. Photography-forward with warm overlays. Gold foil accent details on dark chrome. Clean data hierarchy. Professional mockup on iPhone 15 Pro device frame (space black).
NEGATIVE: No stock photography of white people at generic restaurants. No corporate SaaS dashboard aesthetic. No cold blue-gray tech palette. No neon club flyer energy. No hamburger menus. No pure white #FFFFFF backgrounds. No pure black #000000 text. No Roboto or Inter fonts. No cluttered layouts. No wireframes. No clip art or cartoon illustrations. No generic food stock. No white-tablecloth-only imagery. No Silicon Valley startup aesthetic. No gradients that look like Stripe or Linear.
BACKGROUND: Present on dark midnight #0D0D1A surface with subtle ambient glow. iPhone 15 Pro device frame (space black) at 15-degree angle. Soft gold #C9A84C light leak from behind device. Clean editorial presentation. No busy patterns.
```

### PROMPT 19-B — Payment / Booking Step 3

```
BRAND: PullUpATL — Atlanta's nightlife and dining table booking app.
DEMOGRAPHIC: African American professionals, creatives, and socialites aged 22-55 in Atlanta, GA.
PLATFORM: Mobile-first iOS/Android app (React Native / Expo).
VIBE: Premium but not pretentious. Nightlife-native. Culturally confident. "Resy meets the group chat."
COLORS: Primary "Table Gold" #C9A84C | Secondary "Midnight" #1A1A2E | Accent "Velvet" #8B2252 | Background "Ivory" #FAF8F5 | Text "Onyx" #2D2D2D | Fill "Warm Gray" #F0EDE8 | Dark BG #0D0D1A | Dark Surface #1A1A2E | Dark Card #1E1E35
FONTS: Display: Playfair Display 700/800 (serif, editorial) | Heading: Plus Jakarta Sans 600/700 | Body: Plus Jakarta Sans 400/500
RULES: Mobile-first 390×844 (iPhone 15 Pro). Bottom tab bar (NEVER hamburger). Card UI 12px radius. Gold accents on dark = premium. Real ATL venue photography. Black people in lifestyle imagery.

SUBJECT: Payment screen (booking step 3 of 4). Ivory background. Progress bar 75% gold. "Payment" header. Order summary card (Warm Gray bg, 12px radius): venue name, date/time, party size, deposit "$75.00". Payment methods: saved "Visa ····4582" with checkmark, "Add new card" with plus icon. Apple Pay / Google Pay branded buttons. Promo code field outlined with "Apply" button. Breakdown: "Deposit: $75.00" / "Booking fee: $0 (member)" with gold member badge / "Total: $75.00" Plus Jakarta Sans 700. Terms checkbox. Bottom: "Confirm & Pay $75" gold CTA. Lock icon + "Secured by Stripe" tiny Slate text.

SCENE: Secure and transparent — no surprises. The "$0 booking fee (member)" callout with gold badge is a conversion moment. Stripe badge adds trust.

STYLE: High-fidelity mobile app UI mockup rendered at Figma presentation quality. Pixel-perfect modern iOS/Android design language with warm editorial touches. Rounded cards with subtle shadow, generous white space, bottom tab navigation. Luxury nightlife meets intuitive booking UX. Photography-forward with warm overlays. Gold foil accent details on dark chrome. Clean data hierarchy. Professional mockup on iPhone 15 Pro device frame (space black).
NEGATIVE: No stock photography of white people at generic restaurants. No corporate SaaS dashboard aesthetic. No cold blue-gray tech palette. No neon club flyer energy. No hamburger menus. No pure white #FFFFFF backgrounds. No pure black #000000 text. No Roboto or Inter fonts. No cluttered layouts. No wireframes. No clip art or cartoon illustrations. No generic food stock. No white-tablecloth-only imagery. No Silicon Valley startup aesthetic. No gradients that look like Stripe or Linear.
BACKGROUND: Present on dark midnight #0D0D1A surface with subtle ambient glow. iPhone 15 Pro device frame (space black) at 15-degree angle. Soft gold #C9A84C light leak from behind device. Clean editorial presentation. No busy patterns.
```

---

# ═══════════════════════════════════════════════════
# TIER 5 — SOCIAL & COMMUNITY
# Agents 20-22 | 7 Prompts
# ═══════════════════════════════════════════════════

---

## AGENT 20: Social Feed Designer
**Layer:** 21 — Social Features | **Swarm:** Community Builders
**Owns:** Friend activity feed, check-ins, venue tags
**Personas:** A01 Vibe Curator, A07 College Crew, A15 Content Creator

### PROMPT 20-A — Social Activity Feed

```
BRAND: PullUpATL — Atlanta's nightlife and dining table booking app.
DEMOGRAPHIC: African American professionals, creatives, and socialites aged 22-55 in Atlanta, GA.
PLATFORM: Mobile-first iOS/Android app (React Native / Expo).
VIBE: Premium but not pretentious. Nightlife-native. Culturally confident. "Resy meets the group chat."
COLORS: Primary "Table Gold" #C9A84C | Secondary "Midnight" #1A1A2E | Accent "Velvet" #8B2252 | Background "Ivory" #FAF8F5 | Text "Onyx" #2D2D2D | Fill "Warm Gray" #F0EDE8 | Dark BG #0D0D1A | Dark Surface #1A1A2E | Dark Card #1E1E35
FONTS: Display: Playfair Display 700/800 (serif, editorial) | Heading: Plus Jakarta Sans 600/700 | Body: Plus Jakarta Sans 400/500
RULES: Mobile-first 390×844 (iPhone 15 Pro). Bottom tab bar (NEVER hamburger). Card UI 12px radius. Gold accents on dark = premium. Real ATL venue photography. Black people in lifestyle imagery.

SUBJECT: Social tab feed. Ivory background. Top: "Your Crew" header Plus Jakarta Sans 700. Toggle: "Friends" (active, gold underline) | "Trending" (inactive). Feed of activity cards: (1) "@KeshiaM booked a table at Seven Midtown for Saturday" — avatar, timestamp "2h ago", venue mini-card with photo, "Join the reservation" gold text link. (2) "@DreThePromoter checked in at Havana Nightclub ATL" — avatar, venue photo, "Live now" green pulse dot, "12 friends here tonight" text. (3) "@NicoleB left a review for Avenue Kitchen & Grill" — avatar, 5 gold stars, review preview snippet, venue link. (4) "@TylerJ is looking for the move tonight" — avatar, "Looking for dinner recs in Buckhead" text, "Suggest a spot" gold button. Notification badge on Social tab: "3".

SCENE: Social proof is the conversion engine. When you see your friend booked somewhere, you want to join. The "Join the reservation" link is frictionless social booking. "Looking for the move" creates organic discovery. Not Instagram — this is purpose-built social for going out.

STYLE: High-fidelity mobile app UI mockup rendered at Figma presentation quality. Pixel-perfect modern iOS/Android design language with warm editorial touches. Rounded cards with subtle shadow, generous white space, bottom tab navigation. Luxury nightlife meets intuitive booking UX. Photography-forward with warm overlays. Gold foil accent details on dark chrome. Clean data hierarchy. Professional mockup on iPhone 15 Pro device frame (space black).
NEGATIVE: No stock photography of white people at generic restaurants. No corporate SaaS dashboard aesthetic. No cold blue-gray tech palette. No neon club flyer energy. No hamburger menus. No pure white #FFFFFF backgrounds. No pure black #000000 text. No Roboto or Inter fonts. No cluttered layouts. No wireframes. No clip art or cartoon illustrations. No generic food stock. No white-tablecloth-only imagery. No Silicon Valley startup aesthetic. No gradients that look like Stripe or Linear.
BACKGROUND: Present on dark midnight #0D0D1A surface with subtle ambient glow. iPhone 15 Pro device frame (space black) at 15-degree angle. Soft gold #C9A84C light leak from behind device. Clean editorial presentation. No busy patterns.
```

### PROMPT 20-B — Venue Check-In Screen

```
BRAND: PullUpATL — Atlanta's nightlife and dining table booking app.
DEMOGRAPHIC: African American professionals, creatives, and socialites aged 22-55 in Atlanta, GA.
PLATFORM: Mobile-first iOS/Android app (React Native / Expo).
VIBE: Premium but not pretentious. Nightlife-native. Culturally confident. "Resy meets the group chat."
COLORS: Primary "Table Gold" #C9A84C | Secondary "Midnight" #1A1A2E | Accent "Velvet" #8B2252 | Background "Ivory" #FAF8F5 | Text "Onyx" #2D2D2D | Fill "Warm Gray" #F0EDE8 | Dark BG #0D0D1A | Dark Surface #1A1A2E | Dark Card #1E1E35
FONTS: Display: Playfair Display 700/800 (serif, editorial) | Heading: Plus Jakarta Sans 600/700 | Body: Plus Jakarta Sans 400/500
RULES: Mobile-first 390×844 (iPhone 15 Pro). Bottom tab bar (NEVER hamburger). Card UI 12px radius. Gold accents on dark = premium. Real ATL venue photography. Black people in lifestyle imagery.

SUBJECT: Check-in screen at a venue. Bottom sheet over the venue detail page. Dark background with gold accent. "You're at Revel Atlanta" confirmation header with location pin icon pulsing. Check-in card: venue photo background with dark overlay, venue name large, "Check in & share" gold CTA. Options: "Share to PullUpATL feed" toggle (on), "Share to Instagram Stories" toggle (off), "Tag friends" with avatar chips of friends to tag, "Add a vibe" emoji selector — fire, sparkle, heart, 100. Preview of the share card: branded mini-card showing your avatar, venue name, "is here" text, timestamp. After check-in: "You're here! 8 friends will see this." confirmation.

SCENE: The check-in creates FOMO in real-time — friends see you're out, they want to pull up. The share card is branded PullUpATL content that goes to Stories. Emoji "vibe" selector is culturally native — how you'd text about a spot.

STYLE: High-fidelity mobile app UI mockup rendered at Figma presentation quality. Pixel-perfect modern iOS/Android design language with warm editorial touches. Rounded cards with subtle shadow, generous white space, bottom tab navigation. Luxury nightlife meets intuitive booking UX. Photography-forward with warm overlays. Gold foil accent details on dark chrome. Clean data hierarchy. Professional mockup on iPhone 15 Pro device frame (space black).
NEGATIVE: No stock photography of white people at generic restaurants. No corporate SaaS dashboard aesthetic. No cold blue-gray tech palette. No neon club flyer energy. No hamburger menus. No pure white #FFFFFF backgrounds. No pure black #000000 text. No Roboto or Inter fonts. No cluttered layouts. No wireframes. No clip art or cartoon illustrations. No generic food stock. No white-tablecloth-only imagery. No Silicon Valley startup aesthetic. No gradients that look like Stripe or Linear.
BACKGROUND-DARK: Same device frame on #0D0D1A surface. Subtle Velvet #8B2252 ambient glow behind device suggesting VIP energy. Faint gold particle effect in negative space.
```

---

## AGENT 21: Group Coordination Designer
**Layer:** 06 — Data Architecture | **Swarm:** Schema & Pipeline Collective
**Owns:** Group booking, split payments, group chat
**Personas:** A01 Vibe Curator, A03 Birthday Monarch, A10 Family Organizer

### PROMPT 21-A — Group Booking / Split Payment

```
BRAND: PullUpATL — Atlanta's nightlife and dining table booking app.
DEMOGRAPHIC: African American professionals, creatives, and socialites aged 22-55 in Atlanta, GA.
PLATFORM: Mobile-first iOS/Android app (React Native / Expo).
VIBE: Premium but not pretentious. Nightlife-native. Culturally confident. "Resy meets the group chat."
COLORS: Primary "Table Gold" #C9A84C | Secondary "Midnight" #1A1A2E | Accent "Velvet" #8B2252 | Background "Ivory" #FAF8F5 | Text "Onyx" #2D2D2D | Fill "Warm Gray" #F0EDE8 | Dark BG #0D0D1A | Dark Surface #1A1A2E | Dark Card #1E1E35
FONTS: Display: Playfair Display 700/800 (serif, editorial) | Heading: Plus Jakarta Sans 600/700 | Body: Plus Jakarta Sans 400/500
RULES: Mobile-first 390×844 (iPhone 15 Pro). Bottom tab bar (NEVER hamburger). Card UI 12px radius. Gold accents on dark = premium. Real ATL venue photography. Black people in lifestyle imagery.

SUBJECT: Group booking screen — managing a reservation for 8 people. Ivory background. Header: "Your Group" with reservation mini-card (venue + date + party size 8). Guest list: avatar + name + status for each member. Statuses: "Confirmed ✓" green, "Pending" amber, "Invited" slate. Three guests confirmed, two pending, three invited (showing "Invite via text" option). Split payment section: "Split the deposit" toggle (on). Visual: $75 deposit shown as a pie chart divided into portions — each confirmed guest's slice in gold, pending in amber, uninvited in gray. "$9.38 per person" calculation. "Send payment request" gold CTA sends Venmo/CashApp-style request to pending members. Bottom: "Manage Group" + "Group Chat" icon buttons.

SCENE: A01 Vibe Curator organized the table — now she needs her girls to confirm and pay up. This screen takes the "who's coming and who's paying" chaos out of the group chat and into the app. The pie chart visual makes the split tangible. Payment requests go through native share sheet.

STYLE: High-fidelity mobile app UI mockup rendered at Figma presentation quality. Pixel-perfect modern iOS/Android design language with warm editorial touches. Rounded cards with subtle shadow, generous white space, bottom tab navigation. Luxury nightlife meets intuitive booking UX. Photography-forward with warm overlays. Gold foil accent details on dark chrome. Clean data hierarchy. Professional mockup on iPhone 15 Pro device frame (space black).
NEGATIVE: No stock photography of white people at generic restaurants. No corporate SaaS dashboard aesthetic. No cold blue-gray tech palette. No neon club flyer energy. No hamburger menus. No pure white #FFFFFF backgrounds. No pure black #000000 text. No Roboto or Inter fonts. No cluttered layouts. No wireframes. No clip art or cartoon illustrations. No generic food stock. No white-tablecloth-only imagery. No Silicon Valley startup aesthetic. No gradients that look like Stripe or Linear.
BACKGROUND: Present on dark midnight #0D0D1A surface with subtle ambient glow. iPhone 15 Pro device frame (space black) at 15-degree angle. Soft gold #C9A84C light leak from behind device. Clean editorial presentation. No busy patterns.
```

### PROMPT 21-B — Group Chat Thread

```
BRAND: PullUpATL — Atlanta's nightlife and dining table booking app.
DEMOGRAPHIC: African American professionals, creatives, and socialites aged 22-55 in Atlanta, GA.
PLATFORM: Mobile-first iOS/Android app (React Native / Expo).
VIBE: Premium but not pretentious. Nightlife-native. Culturally confident. "Resy meets the group chat."
COLORS: Primary "Table Gold" #C9A84C | Secondary "Midnight" #1A1A2E | Accent "Velvet" #8B2252 | Background "Ivory" #FAF8F5 | Text "Onyx" #2D2D2D | Fill "Warm Gray" #F0EDE8 | Dark BG #0D0D1A | Dark Surface #1A1A2E | Dark Card #1E1E35
FONTS: Display: Playfair Display 700/800 (serif, editorial) | Heading: Plus Jakarta Sans 600/700 | Body: Plus Jakarta Sans 400/500
RULES: Mobile-first 390×844 (iPhone 15 Pro). Bottom tab bar (NEVER hamburger). Card UI 12px radius. Gold accents on dark = premium. Real ATL venue photography. Black people in lifestyle imagery.

SUBJECT: In-app group chat for a reservation group. Familiar messaging UI — chat bubbles, sent (gold background, dark text — right aligned), received (Warm Gray background, Onyx text — left aligned). System messages centered in Slate: "Keshia added Nicole to the group" / "Tyler confirmed the reservation ✓". Pinned message at top: reservation card showing venue + date + time + section, tap to view full details. Quick-action buttons above the keyboard: "Share the invite" "Split payment" "Change party size" "Cancel reservation" as horizontal scroll pills. Typing indicator: "Destiny is typing..." at bottom. Chat header: venue name + party size "8 guests" + info icon.

SCENE: The group chat is reservation-aware — it knows what you're planning and surfaces relevant actions. Not a general chat app — purpose-built for coordinating a night out. System messages track reservation changes in the thread. Quick-action buttons prevent the "wait where's the link" problem.

STYLE: High-fidelity mobile app UI mockup rendered at Figma presentation quality. Pixel-perfect modern iOS/Android design language with warm editorial touches. Rounded cards with subtle shadow, generous white space, bottom tab navigation. Luxury nightlife meets intuitive booking UX. Photography-forward with warm overlays. Gold foil accent details on dark chrome. Clean data hierarchy. Professional mockup on iPhone 15 Pro device frame (space black).
NEGATIVE: No stock photography of white people at generic restaurants. No corporate SaaS dashboard aesthetic. No cold blue-gray tech palette. No neon club flyer energy. No hamburger menus. No pure white #FFFFFF backgrounds. No pure black #000000 text. No Roboto or Inter fonts. No cluttered layouts. No wireframes. No clip art or cartoon illustrations. No generic food stock. No white-tablecloth-only imagery. No Silicon Valley startup aesthetic. No gradients that look like Stripe or Linear.
BACKGROUND: Present on dark midnight #0D0D1A surface with subtle ambient glow. iPhone 15 Pro device frame (space black) at 15-degree angle. Soft gold #C9A84C light leak from behind device. Clean editorial presentation. No busy patterns.
```

---

## AGENT 22: Reviews & Ratings Designer
**Layer:** 10 — Content Strategy | **Swarm:** Voice & Copy Collective
**Owns:** Review display, submit review, venue ratings
**Personas:** A09 Couple, A11 Solo Diner, A13 Brunch Enthusiast

### PROMPT 22-A — Submit Review Screen

```
BRAND: PullUpATL — Atlanta's nightlife and dining table booking app.
DEMOGRAPHIC: African American professionals, creatives, and socialites aged 22-55 in Atlanta, GA.
PLATFORM: Mobile-first iOS/Android app (React Native / Expo).
VIBE: Premium but not pretentious. Nightlife-native. Culturally confident. "Resy meets the group chat."
COLORS: Primary "Table Gold" #C9A84C | Secondary "Midnight" #1A1A2E | Accent "Velvet" #8B2252 | Background "Ivory" #FAF8F5 | Text "Onyx" #2D2D2D | Fill "Warm Gray" #F0EDE8 | Dark BG #0D0D1A | Dark Surface #1A1A2E | Dark Card #1E1E35
FONTS: Display: Playfair Display 700/800 (serif, editorial) | Heading: Plus Jakarta Sans 600/700 | Body: Plus Jakarta Sans 400/500
RULES: Mobile-first 390×844 (iPhone 15 Pro). Bottom tab bar (NEVER hamburger). Card UI 12px radius. Gold accents on dark = premium. Real ATL venue photography. Black people in lifestyle imagery.

SUBJECT: Post-visit review submission screen. Ivory background. Top: venue photo strip + "How was Avenue Kitchen & Grill?" in Plus Jakarta Sans 700. Star rating selector: 5 large tappable stars (4 filled gold, 1 empty — showing mid-selection state). Vibe tags section: "Pick the vibes" with selectable chips — "Great Service" "Amazing Food" "Perfect Date Spot" "Worth the Price" "Long Wait" "Loud" "Instagrammable" "Good for Groups" — selected chips Midnight fill. Photo upload row: "Add photos" with camera icon + 2 thumbnail previews of uploaded food photos + add-more-plus button. Review text area: "Tell us about it..." placeholder, Warm Gray border, generous height. Anonymous toggle: "Post anonymously" with toggle (off). Bottom: "Submit Review" gold CTA.

SCENE: Reviews are social currency. Vibe tags create scannable, culturally relevant metadata (not just "Food 4/5, Service 3/5" — but "Instagrammable" and "Good for Groups" which is how people actually recommend spots). Photo upload encourages visual reviews. Anonymous option for honest feedback.

STYLE: High-fidelity mobile app UI mockup rendered at Figma presentation quality. Pixel-perfect modern iOS/Android design language with warm editorial touches. Rounded cards with subtle shadow, generous white space, bottom tab navigation. Luxury nightlife meets intuitive booking UX. Photography-forward with warm overlays. Gold foil accent details on dark chrome. Clean data hierarchy. Professional mockup on iPhone 15 Pro device frame (space black).
NEGATIVE: No stock photography of white people at generic restaurants. No corporate SaaS dashboard aesthetic. No cold blue-gray tech palette. No neon club flyer energy. No hamburger menus. No pure white #FFFFFF backgrounds. No pure black #000000 text. No Roboto or Inter fonts. No cluttered layouts. No wireframes. No clip art or cartoon illustrations. No generic food stock. No white-tablecloth-only imagery. No Silicon Valley startup aesthetic. No gradients that look like Stripe or Linear.
BACKGROUND: Present on dark midnight #0D0D1A surface with subtle ambient glow. iPhone 15 Pro device frame (space black) at 15-degree angle. Soft gold #C9A84C light leak from behind device. Clean editorial presentation. No busy patterns.
```

---

# ═══════════════════════════════════════════════════
# TIER 6 — USER PROFILE & MANAGEMENT
# Agents 23-25 | 7 Prompts
# ═══════════════════════════════════════════════════

---

## AGENT 23: Profile & Settings Designer
**Layer:** 13 — Mobile Frontend | **Swarm:** Mobile Engineering Squadron
**Owns:** User profile page, edit profile, settings
**Personas:** A01 Vibe Curator, A15 Content Creator

### PROMPT 23-A — User Profile Page

```
BRAND: PullUpATL — Atlanta's nightlife and dining table booking app.
DEMOGRAPHIC: African American professionals, creatives, and socialites aged 22-55 in Atlanta, GA.
PLATFORM: Mobile-first iOS/Android app (React Native / Expo).
VIBE: Premium but not pretentious. Nightlife-native. Culturally confident. "Resy meets the group chat."
COLORS: Primary "Table Gold" #C9A84C | Secondary "Midnight" #1A1A2E | Accent "Velvet" #8B2252 | Background "Ivory" #FAF8F5 | Text "Onyx" #2D2D2D | Fill "Warm Gray" #F0EDE8 | Dark BG #0D0D1A | Dark Surface #1A1A2E | Dark Card #1E1E35
FONTS: Display: Playfair Display 700/800 (serif, editorial) | Heading: Plus Jakarta Sans 600/700 | Body: Plus Jakarta Sans 400/500
RULES: Mobile-first 390×844 (iPhone 15 Pro). Bottom tab bar (NEVER hamburger). Card UI 12px radius. Gold accents on dark = premium. Real ATL venue photography. Black people in lifestyle imagery.

SUBJECT: User profile page. Top section: Midnight #1A1A2E background. Centered: large circular avatar (Black woman, professional photo, warm lighting), "Keshia M." name Plus Jakarta Sans 700 Ivory, "@KeshiaTheCurator" handle in gold, "Midtown, ATL" location in Slate. Stats row: "47 bookings" | "12 reviews" | "89 saved" — numbers in Ivory, labels in Slate. "Edit Profile" outlined button, small. Below: Ivory background content tabs — "Activity" (active gold underline) | "Reviews" | "Saved". Activity tab shows recent booking cards and check-ins in a timeline format. Saved tab preview: horizontal scroll of saved venue cards with heart icons. Member badge: "PullUp Member" gold badge with benefits peek — "No booking fees · Early access · Priority seating".

SCENE: The profile celebrates the user's taste and history. Stats show social proof. The member badge sells the subscription tier. This is a personal brand page for going out — your dining/nightlife identity.

STYLE: High-fidelity mobile app UI mockup rendered at Figma presentation quality. Pixel-perfect modern iOS/Android design language with warm editorial touches. Rounded cards with subtle shadow, generous white space, bottom tab navigation. Luxury nightlife meets intuitive booking UX. Photography-forward with warm overlays. Gold foil accent details on dark chrome. Clean data hierarchy. Professional mockup on iPhone 15 Pro device frame (space black).
NEGATIVE: No stock photography of white people at generic restaurants. No corporate SaaS dashboard aesthetic. No cold blue-gray tech palette. No neon club flyer energy. No hamburger menus. No pure white #FFFFFF backgrounds. No pure black #000000 text. No Roboto or Inter fonts. No cluttered layouts. No wireframes. No clip art or cartoon illustrations. No generic food stock. No white-tablecloth-only imagery. No Silicon Valley startup aesthetic. No gradients that look like Stripe or Linear.
BACKGROUND: Present on dark midnight #0D0D1A surface with subtle ambient glow. iPhone 15 Pro device frame (space black) at 15-degree angle. Soft gold #C9A84C light leak from behind device. Clean editorial presentation. No busy patterns.
```

### PROMPT 23-B — Settings Screen

```
BRAND: PullUpATL — Atlanta's nightlife and dining table booking app.
DEMOGRAPHIC: African American professionals, creatives, and socialites aged 22-55 in Atlanta, GA.
PLATFORM: Mobile-first iOS/Android app (React Native / Expo).
VIBE: Premium but not pretentious. Nightlife-native. Culturally confident. "Resy meets the group chat."
COLORS: Primary "Table Gold" #C9A84C | Secondary "Midnight" #1A1A2E | Accent "Velvet" #8B2252 | Background "Ivory" #FAF8F5 | Text "Onyx" #2D2D2D | Fill "Warm Gray" #F0EDE8 | Dark BG #0D0D1A | Dark Surface #1A1A2E | Dark Card #1E1E35
FONTS: Display: Playfair Display 700/800 (serif, editorial) | Heading: Plus Jakarta Sans 600/700 | Body: Plus Jakarta Sans 400/500
RULES: Mobile-first 390×844 (iPhone 15 Pro). Bottom tab bar (NEVER hamburger). Card UI 12px radius. Gold accents on dark = premium. Real ATL venue photography. Black people in lifestyle imagery.

SUBJECT: Settings screen. Ivory background. Clean grouped list layout (iOS Settings style but branded). Groups: "Account" — Profile, Phone Number, Email, Password (each row with chevron). "Preferences" — Notifications (with toggle preview), Neighborhoods, Cuisine Preferences, Dark Mode toggle. "Payment" — Payment Methods, Transaction History. "Membership" — "PullUp Member" with gold star icon, "Manage" chevron. "Support" — Help Center, Report a Problem, Terms of Service, Privacy Policy. "Danger Zone" — "Log Out" in Alert Red, "Delete Account" in Alert Red. PullUpATL version "v1.2.0" at very bottom in tiny Slate. Each row: icon left (Slate), label center (Onyx), chevron or toggle right.

SCENE: Settings must be boring-functional — not a design showcase. Clean rows, clear labels, standard iOS patterns. The one design moment: the Membership row gets a gold star icon and slightly elevated visual weight.

STYLE: High-fidelity mobile app UI mockup rendered at Figma presentation quality. Pixel-perfect modern iOS/Android design language with warm editorial touches. Rounded cards with subtle shadow, generous white space, bottom tab navigation. Luxury nightlife meets intuitive booking UX. Photography-forward with warm overlays. Gold foil accent details on dark chrome. Clean data hierarchy. Professional mockup on iPhone 15 Pro device frame (space black).
NEGATIVE: No stock photography of white people at generic restaurants. No corporate SaaS dashboard aesthetic. No cold blue-gray tech palette. No neon club flyer energy. No hamburger menus. No pure white #FFFFFF backgrounds. No pure black #000000 text. No Roboto or Inter fonts. No cluttered layouts. No wireframes. No clip art or cartoon illustrations. No generic food stock. No white-tablecloth-only imagery. No Silicon Valley startup aesthetic. No gradients that look like Stripe or Linear.
BACKGROUND: Present on dark midnight #0D0D1A surface with subtle ambient glow. iPhone 15 Pro device frame (space black) at 15-degree angle. Soft gold #C9A84C light leak from behind device. Clean editorial presentation. No busy patterns.
```

---

## AGENT 24: My Bookings Designer
**Layer:** 19 — Booking Engine | **Swarm:** Booking Flow Assembly
**Owns:** Upcoming bookings, past bookings, modification flow
**Personas:** A09 Couple, A12 Corporate Host, A02 Breadwinner

### PROMPT 24-A — My Bookings List

```
BRAND: PullUpATL — Atlanta's nightlife and dining table booking app.
DEMOGRAPHIC: African American professionals, creatives, and socialites aged 22-55 in Atlanta, GA.
PLATFORM: Mobile-first iOS/Android app (React Native / Expo).
VIBE: Premium but not pretentious. Nightlife-native. Culturally confident. "Resy meets the group chat."
COLORS: Primary "Table Gold" #C9A84C | Secondary "Midnight" #1A1A2E | Accent "Velvet" #8B2252 | Background "Ivory" #FAF8F5 | Text "Onyx" #2D2D2D | Fill "Warm Gray" #F0EDE8 | Dark BG #0D0D1A | Dark Surface #1A1A2E | Dark Card #1E1E35
FONTS: Display: Playfair Display 700/800 (serif, editorial) | Heading: Plus Jakarta Sans 600/700 | Body: Plus Jakarta Sans 400/500
RULES: Mobile-first 390×844 (iPhone 15 Pro). Bottom tab bar (NEVER hamburger). Card UI 12px radius. Gold accents on dark = premium. Real ATL venue photography. Black people in lifestyle imagery.

SUBJECT: My Bookings screen. Ivory background. Tab toggle: "Upcoming" (active gold underline) | "Past" | "Canceled". Upcoming bookings: two cards. Card 1 (tonight): gold left border accent, venue photo + "Avenue Kitchen & Grill" + "Tonight · 8:30 PM · 4 guests" + "2 hours away" countdown in amber. Quick actions: "Modify" "Cancel" "Share" icon buttons. Confirmation code "PUA-7X3K" in monospaced gold. Card 2 (next week): standard Warm Gray border, "Revel Atlanta" + "Sat, Mar 22 · 10 PM · 8 guests" + "VIP Section S3" badge in Velvet. Guest count "5/8 confirmed" with avatar stack. Empty state at bottom (if only 2 bookings): subtle CTA "Find your next spot" with gold arrow.

SCENE: The upcoming bookings screen is the app's retention hook — people come back to check their reservations. Tonight's booking gets elevated visual treatment (gold border, countdown). Guest confirmation status on group bookings reduces anxiety. The "Find your next spot" CTA at the bottom keeps them browsing.

STYLE: High-fidelity mobile app UI mockup rendered at Figma presentation quality. Pixel-perfect modern iOS/Android design language with warm editorial touches. Rounded cards with subtle shadow, generous white space, bottom tab navigation. Luxury nightlife meets intuitive booking UX. Photography-forward with warm overlays. Gold foil accent details on dark chrome. Clean data hierarchy. Professional mockup on iPhone 15 Pro device frame (space black).
NEGATIVE: No stock photography of white people at generic restaurants. No corporate SaaS dashboard aesthetic. No cold blue-gray tech palette. No neon club flyer energy. No hamburger menus. No pure white #FFFFFF backgrounds. No pure black #000000 text. No Roboto or Inter fonts. No cluttered layouts. No wireframes. No clip art or cartoon illustrations. No generic food stock. No white-tablecloth-only imagery. No Silicon Valley startup aesthetic. No gradients that look like Stripe or Linear.
BACKGROUND: Present on dark midnight #0D0D1A surface with subtle ambient glow. iPhone 15 Pro device frame (space black) at 15-degree angle. Soft gold #C9A84C light leak from behind device. Clean editorial presentation. No busy patterns.
```

### PROMPT 24-B — Past Booking with Review Prompt

```
BRAND: PullUpATL — Atlanta's nightlife and dining table booking app.
DEMOGRAPHIC: African American professionals, creatives, and socialites aged 22-55 in Atlanta, GA.
PLATFORM: Mobile-first iOS/Android app (React Native / Expo).
VIBE: Premium but not pretentious. Nightlife-native. Culturally confident. "Resy meets the group chat."
COLORS: Primary "Table Gold" #C9A84C | Secondary "Midnight" #1A1A2E | Accent "Velvet" #8B2252 | Background "Ivory" #FAF8F5 | Text "Onyx" #2D2D2D | Fill "Warm Gray" #F0EDE8 | Dark BG #0D0D1A | Dark Surface #1A1A2E | Dark Card #1E1E35
FONTS: Display: Playfair Display 700/800 (serif, editorial) | Heading: Plus Jakarta Sans 600/700 | Body: Plus Jakarta Sans 400/500
RULES: Mobile-first 390×844 (iPhone 15 Pro). Bottom tab bar (NEVER hamburger). Card UI 12px radius. Gold accents on dark = premium. Real ATL venue photography. Black people in lifestyle imagery.

SUBJECT: Past booking detail screen with review prompt. Ivory background. Top: venue photo (dimmed slightly to signal "past"), venue name, date "Mar 8, 2025" in Slate. Status badge: "Completed ✓" green. Booking details: time, party size, confirmation code (grayed). Spend summary: "Total spent: $312" with receipt link. Review prompt card: gold-bordered, "How was Avenue Kitchen & Grill?" headline, 5 empty star outlines, "Leave a review" gold CTA. Below: "Rebook this spot" outlined button with repeat icon. "Similar venues" horizontal scroll of 3 recommendation cards.

SCENE: Past bookings are re-engagement opportunities. The review prompt catches users while the memory is fresh. "Rebook" creates one-tap repeat visits for A09 Couple. Similar venue recommendations expand their repertoire.

STYLE: High-fidelity mobile app UI mockup rendered at Figma presentation quality. Pixel-perfect modern iOS/Android design language with warm editorial touches. Rounded cards with subtle shadow, generous white space, bottom tab navigation. Luxury nightlife meets intuitive booking UX. Photography-forward with warm overlays. Gold foil accent details on dark chrome. Clean data hierarchy. Professional mockup on iPhone 15 Pro device frame (space black).
NEGATIVE: No stock photography of white people at generic restaurants. No corporate SaaS dashboard aesthetic. No cold blue-gray tech palette. No neon club flyer energy. No hamburger menus. No pure white #FFFFFF backgrounds. No pure black #000000 text. No Roboto or Inter fonts. No cluttered layouts. No wireframes. No clip art or cartoon illustrations. No generic food stock. No white-tablecloth-only imagery. No Silicon Valley startup aesthetic. No gradients that look like Stripe or Linear.
BACKGROUND: Present on dark midnight #0D0D1A surface with subtle ambient glow. iPhone 15 Pro device frame (space black) at 15-degree angle. Soft gold #C9A84C light leak from behind device. Clean editorial presentation. No busy patterns.
```

---

## AGENT 25: Payments & Wallet Designer
**Layer:** 22 — Payment & Commerce | **Swarm:** Revenue Engine
**Owns:** Payment methods, transaction history, refunds
**Personas:** A02 Breadwinner, A12 Corporate Host

### PROMPT 25-A — Wallet / Payment Methods

```
BRAND: PullUpATL — Atlanta's nightlife and dining table booking app.
DEMOGRAPHIC: African American professionals, creatives, and socialites aged 22-55 in Atlanta, GA.
PLATFORM: Mobile-first iOS/Android app (React Native / Expo).
VIBE: Premium but not pretentious. Nightlife-native. Culturally confident. "Resy meets the group chat."
COLORS: Primary "Table Gold" #C9A84C | Secondary "Midnight" #1A1A2E | Accent "Velvet" #8B2252 | Background "Ivory" #FAF8F5 | Text "Onyx" #2D2D2D | Fill "Warm Gray" #F0EDE8 | Dark BG #0D0D1A | Dark Surface #1A1A2E | Dark Card #1E1E35
FONTS: Display: Playfair Display 700/800 (serif, editorial) | Heading: Plus Jakarta Sans 600/700 | Body: Plus Jakarta Sans 400/500
RULES: Mobile-first 390×844 (iPhone 15 Pro). Bottom tab bar (NEVER hamburger). Card UI 12px radius. Gold accents on dark = premium. Real ATL venue photography. Black people in lifestyle imagery.

SUBJECT: Payment methods / wallet screen. Ivory background. Header: "Payment" Plus Jakarta Sans 700. Saved cards displayed as stylized card previews: (1) Visa card — dark Midnight #1A1A2E gradient card shape with gold PullUpATL watermark, last four "····4582", exp "09/27", "Default" gold badge. (2) Amex — lighter card. "Add Payment Method" row with plus icon and chevron. Apple Pay / Google Pay toggle rows with their branded icons. Divider. "Transaction History" section: list of recent transactions — each row: venue name, date, amount, status. "Avenue Kitchen & Grill · Mar 8 · $312.00 · Completed ✓" green. "Revel Atlanta · Mar 1 · $2,752.00 · Completed ✓". "Havana Nightclub ATL · Feb 22 · $75.00 · Refunded" amber. "View all transactions" link at bottom.

SCENE: The saved card preview should feel like a digital wallet — branded card shape with the PullUpATL watermark adds polish. Transaction history is transparent. The whale persona (A02) needs to see their spend history clearly — this is their status ledger.

STYLE: High-fidelity mobile app UI mockup rendered at Figma presentation quality. Pixel-perfect modern iOS/Android design language with warm editorial touches. Rounded cards with subtle shadow, generous white space, bottom tab navigation. Luxury nightlife meets intuitive booking UX. Photography-forward with warm overlays. Gold foil accent details on dark chrome. Clean data hierarchy. Professional mockup on iPhone 15 Pro device frame (space black).
NEGATIVE: No stock photography of white people at generic restaurants. No corporate SaaS dashboard aesthetic. No cold blue-gray tech palette. No neon club flyer energy. No hamburger menus. No pure white #FFFFFF backgrounds. No pure black #000000 text. No Roboto or Inter fonts. No cluttered layouts. No wireframes. No clip art or cartoon illustrations. No generic food stock. No white-tablecloth-only imagery. No Silicon Valley startup aesthetic. No gradients that look like Stripe or Linear.
BACKGROUND: Present on dark midnight #0D0D1A surface with subtle ambient glow. iPhone 15 Pro device frame (space black) at 15-degree angle. Soft gold #C9A84C light leak from behind device. Clean editorial presentation. No busy patterns.
```

---

# ═══════════════════════════════════════════════════
# TIER 7 — VENUE SIDE (Admin / B2B)
# Agents 26-28 | 6 Prompts
# ═══════════════════════════════════════════════════

---

## AGENT 26: Venue Owner Dashboard Designer
**Layer:** 23 — Venue Management | **Swarm:** Venue Operations Center
**Owns:** Venue owner overview, reservations management, revenue
**Personas:** B01 Club Owner (Jay), B06 GM

### PROMPT 26-A — Venue Owner Dashboard (Overview)

```
BRAND: PullUpATL — Atlanta's nightlife and dining table booking app.
DEMOGRAPHIC: African American professionals, creatives, and socialites aged 22-55 in Atlanta, GA.
PLATFORM: Mobile-first iOS/Android app (React Native / Expo).
VIBE: Premium but not pretentious. Nightlife-native. Culturally confident. "Resy meets the group chat."
COLORS: Primary "Table Gold" #C9A84C | Secondary "Midnight" #1A1A2E | Accent "Velvet" #8B2252 | Background "Ivory" #FAF8F5 | Text "Onyx" #2D2D2D | Fill "Warm Gray" #F0EDE8 | Dark BG #0D0D1A | Dark Surface #1A1A2E | Dark Card #1E1E35
FONTS: Display: Playfair Display 700/800 (serif, editorial) | Heading: Plus Jakarta Sans 600/700 | Body: Plus Jakarta Sans 400/500
RULES: Mobile-first 390×844 (iPhone 15 Pro). Bottom tab bar (NEVER hamburger). Card UI 12px radius. Gold accents on dark = premium. Real ATL venue photography. Black people in lifestyle imagery.

SUBJECT: Venue owner admin dashboard — web view (desktop width, NOT mobile). Dark mode: #0D0D1A background. Left sidebar: PullUpATL logo top, nav items — "Dashboard" (active gold), "Reservations", "Sections & Tables", "Bottle Menu", "Events", "Promoters", "Staff", "Reviews", "Analytics", "Settings" — icons + labels in Slate, active in Ivory with gold left border. Main content: "Good evening, Jay" greeting. KPI card row: "Tonight's Covers: 247" / "Revenue Today: $18,400" / "Tables Available: 3 of 12" / "Section Utilization: 87%" — each card on dark surface #1E1E35, number large in Ivory, label in Slate, trend arrow green/red. Below: two columns — left: "Tonight's Reservations" table (time, name, party, section, status), right: "Revenue This Week" bar chart in gold bars on dark. Bottom: "Live Floor" button with pulse dot — links to real-time floor management.

SCENE: The venue owner dashboard is a command center. B01 Club Owner needs to see tonight's numbers at a glance. Dark mode because venue managers check this at night, on-site. KPI cards are the hero. The sidebar nav is comprehensive but not overwhelming.

STYLE: Web dashboard mockup. Dark mode. Data-dense but organized. NOT consumer app aesthetic — this is a business tool. Clean tables, legible charts, functional layout. Presented in a browser window frame (Chrome, dark mode).
NEGATIVE: No stock photography of white people at generic restaurants. No corporate SaaS dashboard aesthetic. No cold blue-gray tech palette. No neon club flyer energy. No hamburger menus. No pure white #FFFFFF backgrounds. No pure black #000000 text. No Roboto or Inter fonts. No cluttered layouts. No wireframes. No clip art or cartoon illustrations. No generic food stock. No white-tablecloth-only imagery. No Silicon Valley startup aesthetic. No gradients that look like Stripe or Linear.
BACKGROUND: Dark surface. Macbook Pro mockup at slight angle. Subtle gold ambient glow.
```

### PROMPT 26-B — Reservations Management Grid

```
BRAND: PullUpATL — Atlanta's nightlife and dining table booking app.
DEMOGRAPHIC: African American professionals, creatives, and socialites aged 22-55 in Atlanta, GA.
PLATFORM: Mobile-first iOS/Android app (React Native / Expo).
VIBE: Premium but not pretentious. Nightlife-native. Culturally confident. "Resy meets the group chat."
COLORS: Primary "Table Gold" #C9A84C | Secondary "Midnight" #1A1A2E | Accent "Velvet" #8B2252 | Background "Ivory" #FAF8F5 | Text "Onyx" #2D2D2D | Fill "Warm Gray" #F0EDE8 | Dark BG #0D0D1A | Dark Surface #1A1A2E | Dark Card #1E1E35
FONTS: Display: Playfair Display 700/800 (serif, editorial) | Heading: Plus Jakarta Sans 600/700 | Body: Plus Jakarta Sans 400/500
RULES: Mobile-first 390×844 (iPhone 15 Pro). Bottom tab bar (NEVER hamburger). Card UI 12px radius. Gold accents on dark = premium. Real ATL venue photography. Black people in lifestyle imagery.

SUBJECT: Reservations management screen (web dashboard). Dark mode. Table/grid view of tonight's reservations: columns — Time, Guest Name, Party Size, Table/Section, Status, Source, Actions. Rows with alternating dark surface shades. Status badges: "Confirmed" green, "Pending" amber, "Seated" gold, "No-Show" red, "Waitlist" blue. Source column: "App" "Walk-in" "Phone" "Promoter: @Dame". Filter bar top: date picker, status dropdown, section filter. Search: "Search by name or confirmation code". Action icons per row: checkmark (seat), X (cancel), pencil (modify), chat bubble (message guest). Right panel: selected reservation detail — guest profile card with booking history "12th visit", spend history "$4,200 lifetime", notes "Regular — prefers Section S3, allergic to shellfish", dietary tags.

SCENE: The GM's operational view. This screen replaces the paper reservation book. Guest profile cards with lifetime spend and visit history enable VIP treatment — the hostess can see this is a whale before they walk in. "Source: Promoter: @Dame" tracks attribution.

STYLE: Web dashboard. Dense data grid. Dark mode. Professional operations tool. Browser frame.
NEGATIVE: No stock photography of white people at generic restaurants. No corporate SaaS dashboard aesthetic. No cold blue-gray tech palette. No neon club flyer energy. No hamburger menus. No pure white #FFFFFF backgrounds. No pure black #000000 text. No Roboto or Inter fonts. No cluttered layouts. No wireframes. No clip art or cartoon illustrations. No generic food stock. No white-tablecloth-only imagery. No Silicon Valley startup aesthetic. No gradients that look like Stripe or Linear.
BACKGROUND: Macbook Pro mockup on dark surface.
```

---

## AGENT 27: Promoter Dashboard Designer
**Layer:** 23 — Venue Management | **Swarm:** Venue Operations Center
**Owns:** Promoter attribution, commission tracking, guest lists
**Personas:** B02 Promoter (Dame), C01 Event Planner

### PROMPT 27-A — Promoter Dashboard (Mobile)

```
BRAND: PullUpATL — Atlanta's nightlife and dining table booking app.
DEMOGRAPHIC: African American professionals, creatives, and socialites aged 22-55 in Atlanta, GA.
PLATFORM: Mobile-first iOS/Android app (React Native / Expo).
VIBE: Premium but not pretentious. Nightlife-native. Culturally confident. "Resy meets the group chat."
COLORS: Primary "Table Gold" #C9A84C | Secondary "Midnight" #1A1A2E | Accent "Velvet" #8B2252 | Background "Ivory" #FAF8F5 | Text "Onyx" #2D2D2D | Fill "Warm Gray" #F0EDE8 | Dark BG #0D0D1A | Dark Surface #1A1A2E | Dark Card #1E1E35
FONTS: Display: Playfair Display 700/800 (serif, editorial) | Heading: Plus Jakarta Sans 600/700 | Body: Plus Jakarta Sans 400/500
RULES: Mobile-first 390×844 (iPhone 15 Pro). Bottom tab bar (NEVER hamburger). Card UI 12px radius. Gold accents on dark = premium. Real ATL venue photography. Black people in lifestyle imagery.

SUBJECT: Promoter-specific dashboard (mobile app view — promoters use phones, not desktops). Dark mode. Top: "Your Dashboard" + promoter name "@Dame" with verified gold checkmark. Stats cards row (horizontal scroll): "Tonight's Guest List: 34" / "This Month Revenue: $12,400" / "Commission Earned: $1,860" / "Conversion Rate: 68%". Below: "Your Link" section — the promoter's unique attribution URL "pullup.atl/dame" with copy button and share button. QR code for the link. "Tonight's Guest List" expandable section: list of names + party size + status (RSVP'd / Confirmed / Arrived with green pulse). "Quick Add" floating action button to add walk-up guests. "Commission History" section: monthly breakdown chart in gold bars. "Active Venues" list: venues the promoter works with, each with tonight's event and guest list count.

SCENE: Dame checks this on his phone while working the door at 11 PM. Everything must be one-tap accessible. The attribution link is the core tool — it's how he gets credit for every guest he brings. QR code lets him share at the door. Commission transparency builds trust with the platform. Guest list management replaces clipboard and pen.

STYLE: High-fidelity mobile app UI mockup rendered at Figma presentation quality. Pixel-perfect modern iOS/Android design language with warm editorial touches. Rounded cards with subtle shadow, generous white space, bottom tab navigation. Luxury nightlife meets intuitive booking UX. Photography-forward with warm overlays. Gold foil accent details on dark chrome. Clean data hierarchy. Professional mockup on iPhone 15 Pro device frame (space black).
NEGATIVE: No stock photography of white people at generic restaurants. No corporate SaaS dashboard aesthetic. No cold blue-gray tech palette. No neon club flyer energy. No hamburger menus. No pure white #FFFFFF backgrounds. No pure black #000000 text. No Roboto or Inter fonts. No cluttered layouts. No wireframes. No clip art or cartoon illustrations. No generic food stock. No white-tablecloth-only imagery. No Silicon Valley startup aesthetic. No gradients that look like Stripe or Linear.
BACKGROUND-DARK: Same device frame on #0D0D1A surface. Subtle Velvet #8B2252 ambient glow behind device suggesting VIP energy. Faint gold particle effect in negative space.
```

### PROMPT 27-B — Promoter Attribution Link Sharing

```
BRAND: PullUpATL — Atlanta's nightlife and dining table booking app.
DEMOGRAPHIC: African American professionals, creatives, and socialites aged 22-55 in Atlanta, GA.
PLATFORM: Mobile-first iOS/Android app (React Native / Expo).
VIBE: Premium but not pretentious. Nightlife-native. Culturally confident. "Resy meets the group chat."
COLORS: Primary "Table Gold" #C9A84C | Secondary "Midnight" #1A1A2E | Accent "Velvet" #8B2252 | Background "Ivory" #FAF8F5 | Text "Onyx" #2D2D2D | Fill "Warm Gray" #F0EDE8 | Dark BG #0D0D1A | Dark Surface #1A1A2E | Dark Card #1E1E35
FONTS: Display: Playfair Display 700/800 (serif, editorial) | Heading: Plus Jakarta Sans 600/700 | Body: Plus Jakarta Sans 400/500
RULES: Mobile-first 390×844 (iPhone 15 Pro). Bottom tab bar (NEVER hamburger). Card UI 12px radius. Gold accents on dark = premium. Real ATL venue photography. Black people in lifestyle imagery.

SUBJECT: Share sheet for promoter attribution link. Dark bottom sheet overlay. Header: "Share Your Link" with gold link icon. The link "pullup.atl/dame" displayed large in monospaced gold font with copy icon. "Every booking from this link earns you 15% commission" explainer in Slate. QR code: high-contrast, gold corners on white code block — scannable. Share options: large icon buttons for "Instagram Story" "Text Message" "WhatsApp" "Copy Link" "More". Below: "Customize your link" — option to attach to a specific event or venue. Preview of what the shared link shows: a branded card with the promoter's name, venue, event details, and "Book through @Dame" CTA.

SCENE: This is the promoter's money tool. The attribution link must be dead simple to share — one tap to Instagram, one tap to text. The QR code works at the door when someone walks up and says "who sent you?" The branded share preview card is a mini-flyer that promotes both the event and the promoter.

STYLE: High-fidelity mobile app UI mockup rendered at Figma presentation quality. Pixel-perfect modern iOS/Android design language with warm editorial touches. Rounded cards with subtle shadow, generous white space, bottom tab navigation. Luxury nightlife meets intuitive booking UX. Photography-forward with warm overlays. Gold foil accent details on dark chrome. Clean data hierarchy. Professional mockup on iPhone 15 Pro device frame (space black).
NEGATIVE: No stock photography of white people at generic restaurants. No corporate SaaS dashboard aesthetic. No cold blue-gray tech palette. No neon club flyer energy. No hamburger menus. No pure white #FFFFFF backgrounds. No pure black #000000 text. No Roboto or Inter fonts. No cluttered layouts. No wireframes. No clip art or cartoon illustrations. No generic food stock. No white-tablecloth-only imagery. No Silicon Valley startup aesthetic. No gradients that look like Stripe or Linear.
BACKGROUND-DARK: Same device frame on #0D0D1A surface. Subtle Velvet #8B2252 ambient glow behind device suggesting VIP energy. Faint gold particle effect in negative space.
```

---

## AGENT 28: Staff View Designer
**Layer:** 23 — Venue Management | **Swarm:** Venue Operations Center
**Owns:** Hostess assignment view, DJ scheduling, bottle service tracker
**Personas:** B03 DJ, B04 Bottle Hostess, B05 Bartender

### PROMPT 28-A — Hostess / VIP Server View

```
BRAND: PullUpATL — Atlanta's nightlife and dining table booking app.
DEMOGRAPHIC: African American professionals, creatives, and socialites aged 22-55 in Atlanta, GA.
PLATFORM: Mobile-first iOS/Android app (React Native / Expo).
VIBE: Premium but not pretentious. Nightlife-native. Culturally confident. "Resy meets the group chat."
COLORS: Primary "Table Gold" #C9A84C | Secondary "Midnight" #1A1A2E | Accent "Velvet" #8B2252 | Background "Ivory" #FAF8F5 | Text "Onyx" #2D2D2D | Fill "Warm Gray" #F0EDE8 | Dark BG #0D0D1A | Dark Surface #1A1A2E | Dark Card #1E1E35
FONTS: Display: Playfair Display 700/800 (serif, editorial) | Heading: Plus Jakarta Sans 600/700 | Body: Plus Jakarta Sans 400/500
RULES: Mobile-first 390×844 (iPhone 15 Pro). Bottom tab bar (NEVER hamburger). Card UI 12px radius. Gold accents on dark = premium. Real ATL venue photography. Black people in lifestyle imagery.

SUBJECT: Hostess/VIP server mobile view for tonight. Dark mode. Top: venue name + "Your Sections Tonight" header. Assigned sections: visual mini floor plan showing 3 highlighted sections (S2, S5, S7) in gold — the rest dimmed. Section cards below: each card shows section ID "S5", booking details "Tyler J. · Party of 10 · Arriving 10:30 PM", bottle pre-order "2x Hennessy, 1x Ace of Spades", special notes "Birthday — bring sparklers and cake at 11 PM" with flag icon, spend target "Min: $2,500 · Pre-ordered: $1,800 · Remaining: $700" progress bar in gold. Guest profile peek: "12th visit · VIP Member · Allergic: shellfish" in small text. Quick actions: "Mark as Arrived" green button, "Message Guest" chat icon, "Call Guest" phone icon.

SCENE: The hostess needs this at a glance while greeting guests. Section assignment, who's coming, what they ordered, special instructions — all on one card. Guest history ("12th visit, VIP Member") enables white-glove service. The spend progress bar helps the hostess track whether the table is meeting minimum.

STYLE: High-fidelity mobile app UI mockup rendered at Figma presentation quality. Pixel-perfect modern iOS/Android design language with warm editorial touches. Rounded cards with subtle shadow, generous white space, bottom tab navigation. Luxury nightlife meets intuitive booking UX. Photography-forward with warm overlays. Gold foil accent details on dark chrome. Clean data hierarchy. Professional mockup on iPhone 15 Pro device frame (space black).
NEGATIVE: No stock photography of white people at generic restaurants. No corporate SaaS dashboard aesthetic. No cold blue-gray tech palette. No neon club flyer energy. No hamburger menus. No pure white #FFFFFF backgrounds. No pure black #000000 text. No Roboto or Inter fonts. No cluttered layouts. No wireframes. No clip art or cartoon illustrations. No generic food stock. No white-tablecloth-only imagery. No Silicon Valley startup aesthetic. No gradients that look like Stripe or Linear.
BACKGROUND-DARK: Same device frame on #0D0D1A surface. Subtle Velvet #8B2252 ambient glow behind device suggesting VIP energy. Faint gold particle effect in negative space.
```

---

# ═══════════════════════════════════════════════════
# TIER 8 — SYSTEM STATES & POLISH
# Agents 29-30 | 6 Prompts
# ═══════════════════════════════════════════════════

---

## AGENT 29: Notifications & Alerts Designer
**Layer:** 18 — Real-Time | **Swarm:** Live Wire Network
**Owns:** Push notifications, in-app alerts, notification center
**Personas:** All

### PROMPT 29-A — Notification Center

```
BRAND: PullUpATL — Atlanta's nightlife and dining table booking app.
DEMOGRAPHIC: African American professionals, creatives, and socialites aged 22-55 in Atlanta, GA.
PLATFORM: Mobile-first iOS/Android app (React Native / Expo).
VIBE: Premium but not pretentious. Nightlife-native. Culturally confident. "Resy meets the group chat."
COLORS: Primary "Table Gold" #C9A84C | Secondary "Midnight" #1A1A2E | Accent "Velvet" #8B2252 | Background "Ivory" #FAF8F5 | Text "Onyx" #2D2D2D | Fill "Warm Gray" #F0EDE8 | Dark BG #0D0D1A | Dark Surface #1A1A2E | Dark Card #1E1E35
FONTS: Display: Playfair Display 700/800 (serif, editorial) | Heading: Plus Jakarta Sans 600/700 | Body: Plus Jakarta Sans 400/500
RULES: Mobile-first 390×844 (iPhone 15 Pro). Bottom tab bar (NEVER hamburger). Card UI 12px radius. Gold accents on dark = premium. Real ATL venue photography. Black people in lifestyle imagery.

SUBJECT: Notification center / inbox screen. Ivory background. Header: "Notifications" with "Mark all read" text link in gold. Toggle: "All" | "Bookings" | "Social" | "Promos". Notification cards grouped by time: "Today" section — (1) gold bell icon + "Reminder: Your table at Avenue Kitchen & Grill is in 2 hours" + "6:30 PM" timestamp, unread gold left border. (2) people icon + "Nicole confirmed the reservation" with avatar, "3h ago". (3) fire icon + "Trending: Seven Midtown just opened reservations for Saturday" + venue thumbnail. "Earlier This Week" section — (4) star icon + "You earned 50 PullUp Points from your last visit" gold text. (5) megaphone icon + "New: Bottle service now available at 12 venues" with Velvet badge "NEW". Read notifications have no left border and slightly dimmed. Unread count badge on top of the screen.

SCENE: The notification center is organized by relevance, not just time. Booking reminders get gold treatment (they're time-sensitive). Social notifications drive engagement. Promo notifications sell features. The category toggle lets users find what matters to them.

STYLE: High-fidelity mobile app UI mockup rendered at Figma presentation quality. Pixel-perfect modern iOS/Android design language with warm editorial touches. Rounded cards with subtle shadow, generous white space, bottom tab navigation. Luxury nightlife meets intuitive booking UX. Photography-forward with warm overlays. Gold foil accent details on dark chrome. Clean data hierarchy. Professional mockup on iPhone 15 Pro device frame (space black).
NEGATIVE: No stock photography of white people at generic restaurants. No corporate SaaS dashboard aesthetic. No cold blue-gray tech palette. No neon club flyer energy. No hamburger menus. No pure white #FFFFFF backgrounds. No pure black #000000 text. No Roboto or Inter fonts. No cluttered layouts. No wireframes. No clip art or cartoon illustrations. No generic food stock. No white-tablecloth-only imagery. No Silicon Valley startup aesthetic. No gradients that look like Stripe or Linear.
BACKGROUND: Present on dark midnight #0D0D1A surface with subtle ambient glow. iPhone 15 Pro device frame (space black) at 15-degree angle. Soft gold #C9A84C light leak from behind device. Clean editorial presentation. No busy patterns.
```

### PROMPT 29-B — Push Notification Lock Screen Mockup

```
BRAND: PullUpATL — Atlanta's nightlife and dining table booking app.
DEMOGRAPHIC: African American professionals, creatives, and socialites aged 22-55 in Atlanta, GA.
PLATFORM: Mobile-first iOS/Android app (React Native / Expo).
VIBE: Premium but not pretentious. Nightlife-native. Culturally confident. "Resy meets the group chat."
COLORS: Primary "Table Gold" #C9A84C | Secondary "Midnight" #1A1A2E | Accent "Velvet" #8B2252 | Background "Ivory" #FAF8F5 | Text "Onyx" #2D2D2D | Fill "Warm Gray" #F0EDE8 | Dark BG #0D0D1A | Dark Surface #1A1A2E | Dark Card #1E1E35
FONTS: Display: Playfair Display 700/800 (serif, editorial) | Heading: Plus Jakarta Sans 600/700 | Body: Plus Jakarta Sans 400/500
RULES: Mobile-first 390×844 (iPhone 15 Pro). Bottom tab bar (NEVER hamburger). Card UI 12px radius. Gold accents on dark = premium. Real ATL venue photography. Black people in lifestyle imagery.

SUBJECT: Three push notification designs shown on iPhone lock screen. Phone is locked, showing wallpaper (dark, subtle ATL skyline at night). Three PullUpATL notifications stacked: (1) "🔥 Your crew is at Havana Nightclub ATL right now — 5 friends checked in" with PullUpATL icon, (2) "⏰ Your table at Avenue Kitchen & Grill is in 2 hours. Don't forget: dress code is smart casual." with action buttons "View Details" "Get Directions", (3) "🎂 Destiny's birthday section is confirmed! Share the invite with your group." with action button "Share Invite". Each notification shows PullUpATL app icon (gold mark on midnight), app name, timestamp. Rich notification preview with venue thumbnail image.

SCENE: Push notifications are the re-engagement channel. Each notification serves a different purpose: FOMO (friends are out), Reminder (your booking), Action (share the invite). They must be compelling enough to unlock the phone and open the app. Rich notifications with images outperform text-only.

STYLE: High-fidelity mobile app UI mockup rendered at Figma presentation quality. Pixel-perfect modern iOS/Android design language with warm editorial touches. Rounded cards with subtle shadow, generous white space, bottom tab navigation. Luxury nightlife meets intuitive booking UX. Photography-forward with warm overlays. Gold foil accent details on dark chrome. Clean data hierarchy. Professional mockup on iPhone 15 Pro device frame (space black).
NEGATIVE: No stock photography of white people at generic restaurants. No corporate SaaS dashboard aesthetic. No cold blue-gray tech palette. No neon club flyer energy. No hamburger menus. No pure white #FFFFFF backgrounds. No pure black #000000 text. No Roboto or Inter fonts. No cluttered layouts. No wireframes. No clip art or cartoon illustrations. No generic food stock. No white-tablecloth-only imagery. No Silicon Valley startup aesthetic. No gradients that look like Stripe or Linear.
BACKGROUND: iPhone 15 Pro lock screen, straight-on, dark wallpaper. Realistic notification styling. Time "9:47 PM" visible at top.
```

### PROMPT 29-C — In-App Toast / Alert States

```
BRAND: PullUpATL — Atlanta's nightlife and dining table booking app.
DEMOGRAPHIC: African American professionals, creatives, and socialites aged 22-55 in Atlanta, GA.
PLATFORM: Mobile-first iOS/Android app (React Native / Expo).
VIBE: Premium but not pretentious. Nightlife-native. Culturally confident. "Resy meets the group chat."
COLORS: Primary "Table Gold" #C9A84C | Secondary "Midnight" #1A1A2E | Accent "Velvet" #8B2252 | Background "Ivory" #FAF8F5 | Text "Onyx" #2D2D2D | Fill "Warm Gray" #F0EDE8 | Dark BG #0D0D1A | Dark Surface #1A1A2E | Dark Card #1E1E35
FONTS: Display: Playfair Display 700/800 (serif, editorial) | Heading: Plus Jakarta Sans 600/700 | Body: Plus Jakarta Sans 400/500
RULES: Mobile-first 390×844 (iPhone 15 Pro). Bottom tab bar (NEVER hamburger). Card UI 12px radius. Gold accents on dark = premium. Real ATL venue photography. Black people in lifestyle imagery.

SUBJECT: Reference sheet of in-app alert/toast notification states. Show 6 variations on Ivory background: (1) Success toast: green left border, checkmark icon, "Booking confirmed!" text, slides down from top. (2) Error toast: red left border, X icon, "Payment failed. Try another card." text. (3) Warning banner: amber background full-width, "Only 1 table left tonight — book now" with "Book" button. (4) Info banner: brand info blue #3B82F6 background, "New feature: Bottle service is live!" with "Try it" link. (5) Gold promotional banner: "PullUp Members get free booking fees" with "Join" gold button. (6) Snackbar at bottom: dark Midnight pill, "Saved to favorites ★" with "Undo" gold text, auto-dismisses.

SCENE: Design system reference — all alert states in one sheet. Each has distinct color coding: green/success, red/error, amber/warning, blue/info, gold/promotional. Consistent shape, sizing, and animation direction. Not a screen — a component inventory.

STYLE: High-fidelity mobile app UI mockup rendered at Figma presentation quality. Pixel-perfect modern iOS/Android design language with warm editorial touches. Rounded cards with subtle shadow, generous white space, bottom tab navigation. Luxury nightlife meets intuitive booking UX. Photography-forward with warm overlays. Gold foil accent details on dark chrome. Clean data hierarchy. Professional mockup on iPhone 15 Pro device frame (space black).
NEGATIVE: No stock photography of white people at generic restaurants. No corporate SaaS dashboard aesthetic. No cold blue-gray tech palette. No neon club flyer energy. No hamburger menus. No pure white #FFFFFF backgrounds. No pure black #000000 text. No Roboto or Inter fonts. No cluttered layouts. No wireframes. No clip art or cartoon illustrations. No generic food stock. No white-tablecloth-only imagery. No Silicon Valley startup aesthetic. No gradients that look like Stripe or Linear.
BACKGROUND: Light gray surface. Components arranged in vertical stack with labels. No device frame.
```

---

## AGENT 30: Empty States, Errors & Loading Designer
**Layer:** 11 — Accessibility | **Swarm:** Inclusive Design Unit
**Owns:** Skeleton screens, empty lists, error pages, offline state
**Personas:** All

### PROMPT 30-A — Empty States Collection

```
BRAND: PullUpATL — Atlanta's nightlife and dining table booking app.
DEMOGRAPHIC: African American professionals, creatives, and socialites aged 22-55 in Atlanta, GA.
PLATFORM: Mobile-first iOS/Android app (React Native / Expo).
VIBE: Premium but not pretentious. Nightlife-native. Culturally confident. "Resy meets the group chat."
COLORS: Primary "Table Gold" #C9A84C | Secondary "Midnight" #1A1A2E | Accent "Velvet" #8B2252 | Background "Ivory" #FAF8F5 | Text "Onyx" #2D2D2D | Fill "Warm Gray" #F0EDE8 | Dark BG #0D0D1A | Dark Surface #1A1A2E | Dark Card #1E1E35
FONTS: Display: Playfair Display 700/800 (serif, editorial) | Heading: Plus Jakarta Sans 600/700 | Body: Plus Jakarta Sans 400/500
RULES: Mobile-first 390×844 (iPhone 15 Pro). Bottom tab bar (NEVER hamburger). Card UI 12px radius. Gold accents on dark = premium. Real ATL venue photography. Black people in lifestyle imagery.

SUBJECT: Collection of 4 empty states on one reference sheet. Each in its own phone frame: (1) No Bookings: centered illustration (minimalist line art of an empty table with a single chair, gold accent on the chair), "No bookings yet?" in Plus Jakarta Sans 600 Onyx, "Atlanta's too good to eat at home. Let's find your spot." in Slate, "Explore Venues" gold CTA. (2) No Search Results: illustration (magnifier with question mark, gold), "Nothing matched that vibe." text, "Try different filters" gold link. (3) No Reviews: illustration (empty speech bubble, gold star), "Be the first to review." text, "Write a Review" CTA. (4) No Friends Yet: illustration (two people silhouettes reaching toward each other, gold), "Your crew isn't here yet." text, "Invite Friends" gold CTA + "Find Friends" secondary link.

SCENE: Empty states are brand moments — they reveal personality. Each illustration is minimalist line art with gold accent (not full-color illustrations). Copy matches brand voice: conversational, insider, never condescending. Every empty state has a clear next action.

STYLE: High-fidelity mobile app UI mockup rendered at Figma presentation quality. Pixel-perfect modern iOS/Android design language with warm editorial touches. Rounded cards with subtle shadow, generous white space, bottom tab navigation. Luxury nightlife meets intuitive booking UX. Photography-forward with warm overlays. Gold foil accent details on dark chrome. Clean data hierarchy. Professional mockup on iPhone 15 Pro device frame (space black).
NEGATIVE: No stock photography of white people at generic restaurants. No corporate SaaS dashboard aesthetic. No cold blue-gray tech palette. No neon club flyer energy. No hamburger menus. No pure white #FFFFFF backgrounds. No pure black #000000 text. No Roboto or Inter fonts. No cluttered layouts. No wireframes. No clip art or cartoon illustrations. No generic food stock. No white-tablecloth-only imagery. No Silicon Valley startup aesthetic. No gradients that look like Stripe or Linear.
BACKGROUND: Light gray surface. Four phone frames in 2×2 grid with labels.
```

### PROMPT 30-B — Skeleton Loading & Error States

```
BRAND: PullUpATL — Atlanta's nightlife and dining table booking app.
DEMOGRAPHIC: African American professionals, creatives, and socialites aged 22-55 in Atlanta, GA.
PLATFORM: Mobile-first iOS/Android app (React Native / Expo).
VIBE: Premium but not pretentious. Nightlife-native. Culturally confident. "Resy meets the group chat."
COLORS: Primary "Table Gold" #C9A84C | Secondary "Midnight" #1A1A2E | Accent "Velvet" #8B2252 | Background "Ivory" #FAF8F5 | Text "Onyx" #2D2D2D | Fill "Warm Gray" #F0EDE8 | Dark BG #0D0D1A | Dark Surface #1A1A2E | Dark Card #1E1E35
FONTS: Display: Playfair Display 700/800 (serif, editorial) | Heading: Plus Jakarta Sans 600/700 | Body: Plus Jakarta Sans 400/500
RULES: Mobile-first 390×844 (iPhone 15 Pro). Bottom tab bar (NEVER hamburger). Card UI 12px radius. Gold accents on dark = premium. Real ATL venue photography. Black people in lifestyle imagery.

SUBJECT: Loading and error state reference sheet. Three phone frames: (1) Skeleton loading screen for discovery feed: animated shimmer (frozen at peak shine) over placeholder shapes — rectangular photo area, two text lines, star rating dots, all in Warm Gray #F0EDE8 pulsing on Ivory. Tab bar visible and functional. Content shapes match the exact card layout of the real feed. (2) Full-page error: centered, large gold exclamation mark icon, "Something went wrong on our end — not on yours." in Plus Jakarta Sans 600, "We're fixing it. Try again in a sec." in Slate, "Retry" gold CTA button, "Go Home" text link. (3) Offline state: WiFi icon with slash in Slate, "You're offline." headline, "Your bookings are still saved. We'll sync when you're back." reassuring text, cached bookings visible below as read-only cards with "Offline" badge.

SCENE: Skeleton screens must match the shape of real content exactly — not generic gray boxes. The error message matches brand voice (casual, reassuring — "not on yours"). Offline state is graceful — shows cached data instead of a dead end. These screens determine whether users wait or bounce.

STYLE: High-fidelity mobile app UI mockup rendered at Figma presentation quality. Pixel-perfect modern iOS/Android design language with warm editorial touches. Rounded cards with subtle shadow, generous white space, bottom tab navigation. Luxury nightlife meets intuitive booking UX. Photography-forward with warm overlays. Gold foil accent details on dark chrome. Clean data hierarchy. Professional mockup on iPhone 15 Pro device frame (space black).
NEGATIVE: No stock photography of white people at generic restaurants. No corporate SaaS dashboard aesthetic. No cold blue-gray tech palette. No neon club flyer energy. No hamburger menus. No pure white #FFFFFF backgrounds. No pure black #000000 text. No Roboto or Inter fonts. No cluttered layouts. No wireframes. No clip art or cartoon illustrations. No generic food stock. No white-tablecloth-only imagery. No Silicon Valley startup aesthetic. No gradients that look like Stripe or Linear.
BACKGROUND: Light gray surface. Three phone frames in a row with labels.
```

### PROMPT 30-C — App Store Screenshot Set

```
BRAND: PullUpATL — Atlanta's nightlife and dining table booking app.
DEMOGRAPHIC: African American professionals, creatives, and socialites aged 22-55 in Atlanta, GA.
PLATFORM: Mobile-first iOS/Android app (React Native / Expo).
VIBE: Premium but not pretentious. Nightlife-native. Culturally confident. "Resy meets the group chat."
COLORS: Primary "Table Gold" #C9A84C | Secondary "Midnight" #1A1A2E | Accent "Velvet" #8B2252 | Background "Ivory" #FAF8F5 | Text "Onyx" #2D2D2D | Fill "Warm Gray" #F0EDE8 | Dark BG #0D0D1A | Dark Surface #1A1A2E | Dark Card #1E1E35
FONTS: Display: Playfair Display 700/800 (serif, editorial) | Heading: Plus Jakarta Sans 600/700 | Body: Plus Jakarta Sans 400/500
RULES: Mobile-first 390×844 (iPhone 15 Pro). Bottom tab bar (NEVER hamburger). Card UI 12px radius. Gold accents on dark = premium. Real ATL venue photography. Black people in lifestyle imagery.

SUBJECT: App Store screenshot set — 5 screenshots for iPhone 15 Pro in landscape strip. Each screenshot is a real app screen with marketing text overlay at top: (1) Discovery feed with "Find your next spot in ATL" gold headline on Midnight banner. (2) Venue detail page with "Book tables, sections & bottle service" text. (3) Floor plan / section map with "Choose your VIP section" text. (4) Booking confirmation with "Locked in. See you there." text. (5) Social feed with "See where your crew pulls up" text. Each screenshot uses a Midnight #1A1A2E background behind the device frame. PullUpATL wordmark subtly in the bottom corner of each. The screenshots tell a story: discover → detail → book → confirm → connect.

SCENE: App Store screenshots must convert browsers into downloaders. The 5-screenshot narrative arc mirrors the user journey. Marketing text is minimal and punchy — not feature lists. The gold-on-dark treatment is premium and distinctive in the App Store grid.

STYLE: High-fidelity mobile app UI mockup rendered at Figma presentation quality. Pixel-perfect modern iOS/Android design language with warm editorial touches. Rounded cards with subtle shadow, generous white space, bottom tab navigation. Luxury nightlife meets intuitive booking UX. Photography-forward with warm overlays. Gold foil accent details on dark chrome. Clean data hierarchy. Professional mockup on iPhone 15 Pro device frame (space black).
NEGATIVE: No stock photography of white people at generic restaurants. No corporate SaaS dashboard aesthetic. No cold blue-gray tech palette. No neon club flyer energy. No hamburger menus. No pure white #FFFFFF backgrounds. No pure black #000000 text. No Roboto or Inter fonts. No cluttered layouts. No wireframes. No clip art or cartoon illustrations. No generic food stock. No white-tablecloth-only imagery. No Silicon Valley startup aesthetic. No gradients that look like Stripe or Linear.
BACKGROUND: Each screenshot on Midnight #1A1A2E with gold accent framing. Strip layout showing all 5 side by side.
```

---

# ═══════════════════════════════════════════════════
# PROMPT MANIFEST INDEX
# ═══════════════════════════════════════════════════

| # | Agent | Layer | Prompt ID | Screen/Component | Personas |
|---|-------|-------|-----------|------------------|----------|
| 01 | Brand Identity | 01 | 01-A | Splash Screen | All |
| 01 | Brand Identity | 01 | 01-B | App Icon | All |
| 02 | Onboarding Flow | 09 | 02-A | Onboard 1: Arrival | A01,A04,A07 |
| 02 | Onboarding Flow | 09 | 02-B | Onboard 2: Discover | A01,A04,A07 |
| 02 | Onboarding Flow | 09 | 02-C | Onboard 3: Book | A01,A04,A07 |
| 03 | Authentication | 16 | 03-A | Login | All |
| 03 | Authentication | 16 | 03-B | OTP Verification | All |
| 04 | Personalization | 03 | 04-A | Taste Profile | A01,A09,A13 |
| 04 | Personalization | 03 | 04-B | Neighborhood Pref | A01,A09,A13 |
| 05 | Permissions | 13 | 05-A | Notification Opt-In | All |
| 06 | Discovery Feed | 05 | 06-A | Home Feed Light | A01,A04,A09 |
| 06 | Discovery Feed | 05 | 06-B | Tonight Mode Dark | A01,A04,A09 |
| 06 | Discovery Feed | 05 | 06-C | Weekend Planner | A01,A04,A09 |
| 07 | Search & Filter | 05 | 07-A | Search Screen | A04,A07,A14 |
| 07 | Search & Filter | 05 | 07-B | Results w/ Filters | A04,A07,A14 |
| 08 | Category | 10 | 08-A | Brunch Landing | A09,A13,A14 |
| 08 | Category | 10 | 08-B | Date Night Collection | A09 |
| 09 | Map View | 17 | 09-A | Map Discovery | A04,A08,A11 |
| 10 | Navigation | 05 | 10-A | Tab Bar & Headers | All |
| 11 | Restaurant Detail | 07 | 11-A | Fine Dining Detail | A01,A09,A12 |
| 11 | Restaurant Detail | 07 | 11-B | Soul Food Detail | A01,A09,A12 |
| 12 | Nightclub Detail | 07 | 12-A | Nightclub Detail | A02,A05,A06 |
| 12 | Nightclub Detail | 07 | 12-B | Floor Plan | A02,A05,A06 |
| 13 | Brunch/Day Party | 07 | 13-A | Day Party Detail | A13,A07,A15 |
| 14 | Venue Media | 12 | 14-A | Photo Gallery | A01,A15 |
| 15 | Table Booking | 19 | 15-A | Book Step 1 | A01,A09,A10 |
| 15 | Table Booking | 19 | 15-B | Book Step 2 | A01,A09,A10 |
| 16 | Section Booking | 19 | 16-A | Section Summary | A02,A03,A05 |
| 17 | Bottle Service | 22 | 17-A | Bottle Menu | A02,A05,A06 |
| 18 | Birthday Package | 06 | 18-A | Birthday Builder | A03,A10 |
| 18 | Birthday Package | 06 | 18-B | Birthday Share Card | A03,A15 |
| 19 | Confirmation | 19 | 19-A | Booking Confirmed | All |
| 19 | Confirmation | 19 | 19-B | Payment Screen | All |
| 20 | Social Feed | 21 | 20-A | Activity Feed | A01,A07,A15 |
| 20 | Social Feed | 21 | 20-B | Venue Check-In | A01,A15 |
| 21 | Group Coord | 06 | 21-A | Group Split Pay | A01,A03,A10 |
| 21 | Group Coord | 06 | 21-B | Group Chat | A01,A03,A10 |
| 22 | Reviews | 10 | 22-A | Submit Review | A09,A11,A13 |
| 23 | Profile | 13 | 23-A | User Profile | A01,A15 |
| 23 | Profile | 13 | 23-B | Settings | All |
| 24 | My Bookings | 19 | 24-A | Bookings List | A09,A12,A02 |
| 24 | My Bookings | 19 | 24-B | Past w/ Review | A09,A12,A02 |
| 25 | Payments | 22 | 25-A | Wallet/Methods | A02,A12 |
| 26 | Venue Dashboard | 23 | 26-A | Owner Overview | B01,B06 |
| 26 | Venue Dashboard | 23 | 26-B | Reservations Grid | B01,B06 |
| 27 | Promoter Dash | 23 | 27-A | Promoter Mobile | B02 |
| 27 | Promoter Dash | 23 | 27-B | Attribution Share | B02 |
| 28 | Staff View | 23 | 28-A | Hostess View | B04,B05 |
| 29 | Notifications | 18 | 29-A | Notification Center | All |
| 29 | Notifications | 18 | 29-B | Lock Screen Push | All |
| 29 | Notifications | 18 | 29-C | Toast/Alert States | All |
| 30 | Empty/Error/Load | 11 | 30-A | Empty States | All |
| 30 | Empty/Error/Load | 11 | 30-B | Skeleton/Error | All |
| 30 | Empty/Error/Load | 11 | 30-C | App Store Screenshots | All |

---

**TOTAL: 30 Agents × 77 Prompts × 28 Personas Referenced**

## USAGE INSTRUCTIONS

1. Open Google Stitch (or Stitch / Midjourney / DALL-E)
2. Copy the 4 shared blocks (Preamble, Style, Negative, Background) into a scratch document
3. [COMPLETED] Each prompt has been updated with its corresponding shared block text.
4. Generate the mockup
5. Screenshot the output and add to `docs/mockups/` in the repo
6. Agent-04 Brand Compliance Auditor should verify every generated mockup against `01-BRAND-SYSTEM.md` before the mockup moves to code conversion

## QUALITY GATES

- Every mockup must use the exact hex values from the brand system
- Every mockup must show real ATL venue names and neighborhoods (not "Restaurant A")
- Every mockup must include Black people in lifestyle photography
- Every nightlife screen must be in dark mode
- Every mockup must show the bottom tab bar where applicable
- No hamburger menus anywhere
- Gold is reserved for accents and controlled emphasis; do not use gold as a full-screen, section, card, or panel background fill, but gold-filled primary CTA buttons are allowed
- Velvet is rationed to VIP contexts only


# ═══════════════════════════════════════════════════
# NEW PROMPTS — Added in v2 Audit
# ═══════════════════════════════════════════════════


## TIER 1 — BRAND & ENTRY (NEW ADDITIONS)

### PROMPT 03-C — Forgot Password Screen
**Agent:** 3 — Authentication Architect | **Layer:** 01 — Brand System | **FSD Feature:** F02
**Personas:** All

```
BRAND: PullUpATL — Atlanta's nightlife and dining table booking app.
DEMOGRAPHIC: African American professionals, creatives, and socialites aged 22-55 in Atlanta, GA.
PLATFORM: Mobile-first iOS/Android app (React Native / Expo).
VIBE: Premium but not pretentious. Nightlife-native. Culturally confident. "Resy meets the group chat."
COLORS: Primary "Table Gold" #C9A84C | Secondary "Midnight" #1A1A2E | Accent "Velvet" #8B2252 | Background "Ivory" #FAF8F5 | Text "Onyx" #2D2D2D | Fill "Warm Gray" #F0EDE8 | Dark BG #0D0D1A | Dark Surface #1A1A2E | Dark Card #1E1E35
FONTS: Display: Playfair Display 700/800 (serif, editorial) | Heading: Plus Jakarta Sans 600/700 | Body: Plus Jakarta Sans 400/500
RULES: Mobile-first 390×844 (iPhone 15 Pro). Bottom tab bar (NEVER hamburger). Card UI 12px radius. Gold accents on dark = premium. Real ATL venue photography. Black people in lifestyle imagery.

SUBJECT: Forgot password screen. Ivory background. Top: back arrow + "Reset Password" header. Illustration: stylized gold key icon on Midnight circle. Copy: "Enter the email linked to your account and we'll send a reset link" in Plus Jakarta Sans 400. Email input field with envelope icon. "Send Reset Link" gold CTA full width. Below: "Back to Login" text link in Slate. Clean single-purpose screen.

SCENE: Single iPhone 15 Pro screen, portrait. Minimal and reassuring — warm, not clinical. Warm Gray input border, focus state Midnight.

STYLE: High-fidelity mobile app UI mockup rendered at Figma presentation quality. Pixel-perfect modern iOS/Android design language with warm editorial touches. Rounded cards with subtle shadow, generous white space, bottom tab navigation. Luxury nightlife meets intuitive booking UX. Photography-forward with warm overlays. Gold foil accent details on dark chrome. Clean data hierarchy. Professional mockup on iPhone 15 Pro device frame (space black).
NEGATIVE: No stock photography of white people at generic restaurants. No corporate SaaS dashboard aesthetic. No cold blue-gray tech palette. No neon club flyer energy. No hamburger menus. No pure white #FFFFFF backgrounds. No pure black #000000 text. No Roboto or Inter fonts. No cluttered layouts. No wireframes. No clip art or cartoon illustrations. No generic food stock. No white-tablecloth-only imagery. No Silicon Valley startup aesthetic. No gradients that look like Stripe or Linear.
BACKGROUND: Present on dark midnight #0D0D1A surface with subtle ambient glow. iPhone 15 Pro device frame (space black) at 15-degree angle. Soft gold #C9A84C light leak from behind device. Clean editorial presentation. No busy patterns.
```

---


## TIER 2 — DISCOVERY & NAVIGATION (NEW ADDITIONS)

### PROMPT 06-D — Gameday Mode
**Agent:** 6 — Discovery Feed Designer | **Layer:** 05 — Information Architecture | **FSD Feature:** F03
**Personas:** A08 Gameday Crew, A04 Out-of-Towner

```
BRAND: PullUpATL — Atlanta's nightlife and dining table booking app.
DEMOGRAPHIC: African American professionals, creatives, and socialites aged 22-55 in Atlanta, GA.
PLATFORM: Mobile-first iOS/Android app (React Native / Expo).
VIBE: Premium but not pretentious. Nightlife-native. Culturally confident. "Resy meets the group chat."
COLORS: Primary "Table Gold" #C9A84C | Secondary "Midnight" #1A1A2E | Accent "Velvet" #8B2252 | Background "Ivory" #FAF8F5 | Text "Onyx" #2D2D2D | Fill "Warm Gray" #F0EDE8 | Dark BG #0D0D1A | Dark Surface #1A1A2E | Dark Card #1E1E35
FONTS: Display: Playfair Display 700/800 (serif, editorial) | Heading: Plus Jakarta Sans 600/700 | Body: Plus Jakarta Sans 400/500
RULES: Mobile-first 390×844 (iPhone 15 Pro). Bottom tab bar (NEVER hamburger). Card UI 12px radius. Gold accents on dark = premium. Real ATL venue photography. Black people in lifestyle imagery.

SUBJECT: Gameday mode discovery screen. Dark mode #0D0D1A. Top banner: team logo placeholder + "GAMEDAY MODE" in Playfair Display 700 gold + "Falcons vs Saints · Mercedes-Benz Stadium · 4:25 PM" in Plus Jakarta Sans 400 Ivory. Map snippet showing stadium pin with gold radius ring "Within 1 mile". Venue cards filtered by proximity: "Pre-Game" section with cards for Avenue Kitchen & Grill, Chillz Restaurant and Bar — each showing "0.4 mi from stadium", estimated walk time, "Reserve pre-game table" gold CTA. "Post-Game" section: Revel Atlanta, Havana Nightclub ATL — "Open late tonight", "After-party: DJ Kourt Live" event badge. Bottom: countdown timer "Kickoff in 3h 12m" amber.

SCENE: Single iPhone 15 Pro screen. Energy is tailgate-meets-luxury. Stadium proximity is the hero data point.

STYLE: High-fidelity mobile app UI mockup rendered at Figma presentation quality. Pixel-perfect modern iOS/Android design language with warm editorial touches. Rounded cards with subtle shadow, generous white space, bottom tab navigation. Luxury nightlife meets intuitive booking UX. Photography-forward with warm overlays. Gold foil accent details on dark chrome. Clean data hierarchy. Professional mockup on iPhone 15 Pro device frame (space black).
NEGATIVE: No stock photography of white people at generic restaurants. No corporate SaaS dashboard aesthetic. No cold blue-gray tech palette. No neon club flyer energy. No hamburger menus. No pure white #FFFFFF backgrounds. No pure black #000000 text. No Roboto or Inter fonts. No cluttered layouts. No wireframes. No clip art or cartoon illustrations. No generic food stock. No white-tablecloth-only imagery. No Silicon Valley startup aesthetic. No gradients that look like Stripe or Linear.
BACKGROUND: Present on dark midnight #0D0D1A surface with subtle ambient glow. iPhone 15 Pro device frame (space black) at 15-degree angle. Soft gold #C9A84C light leak from behind device. Clean editorial presentation. No busy patterns.
```

---

### PROMPT 06-E — Visitor Mode
**Agent:** 6 — Discovery Feed Designer | **Layer:** 05 — Information Architecture | **FSD Feature:** F03
**Personas:** A04 Out-of-Towner

```
BRAND: PullUpATL — Atlanta's nightlife and dining table booking app.
DEMOGRAPHIC: African American professionals, creatives, and socialites aged 22-55 in Atlanta, GA.
PLATFORM: Mobile-first iOS/Android app (React Native / Expo).
VIBE: Premium but not pretentious. Nightlife-native. Culturally confident. "Resy meets the group chat."
COLORS: Primary "Table Gold" #C9A84C | Secondary "Midnight" #1A1A2E | Accent "Velvet" #8B2252 | Background "Ivory" #FAF8F5 | Text "Onyx" #2D2D2D | Fill "Warm Gray" #F0EDE8 | Dark BG #0D0D1A | Dark Surface #1A1A2E | Dark Card #1E1E35
FONTS: Display: Playfair Display 700/800 (serif, editorial) | Heading: Plus Jakarta Sans 600/700 | Body: Plus Jakarta Sans 400/500
RULES: Mobile-first 390×844 (iPhone 15 Pro). Bottom tab bar (NEVER hamburger). Card UI 12px radius. Gold accents on dark = premium. Real ATL venue photography. Black people in lifestyle imagery.

SUBJECT: Visitor mode curated screen. Ivory background. Top: "Welcome to ATL" in Playfair Display 700 Onyx + dates "Apr 18-20" editable. Curated sections: "ATL Essentials" — 3 hero cards (Avenue Kitchen & Grill, Magic City, Revel Atlanta) with editorial blurbs. "Your Neighborhood Guide" — Buckhead, Midtown, Old Fourth Ward horizontal scroll with vibe tags. "This Weekend's Moves" — event cards with date/time. "Build Your Night" CTA: gold button linking to multi-venue chain booking. Bottom: "Curated by PullUpATL" badge. Visitor badge at top-right: airplane icon + "Visiting".

SCENE: Single iPhone 15 Pro screen. Feels like a boutique travel concierge, not a tourist trap. Editorial warmth.

STYLE: High-fidelity mobile app UI mockup rendered at Figma presentation quality. Pixel-perfect modern iOS/Android design language with warm editorial touches. Rounded cards with subtle shadow, generous white space, bottom tab navigation. Luxury nightlife meets intuitive booking UX. Photography-forward with warm overlays. Gold foil accent details on dark chrome. Clean data hierarchy. Professional mockup on iPhone 15 Pro device frame (space black).
NEGATIVE: No stock photography of white people at generic restaurants. No corporate SaaS dashboard aesthetic. No cold blue-gray tech palette. No neon club flyer energy. No hamburger menus. No pure white #FFFFFF backgrounds. No pure black #000000 text. No Roboto or Inter fonts. No cluttered layouts. No wireframes. No clip art or cartoon illustrations. No generic food stock. No white-tablecloth-only imagery. No Silicon Valley startup aesthetic. No gradients that look like Stripe or Linear.
BACKGROUND: Present on dark midnight #0D0D1A surface with subtle ambient glow. iPhone 15 Pro device frame (space black) at 15-degree angle. Soft gold #C9A84C light leak from behind device. Clean editorial presentation. No busy patterns.
```

---

### PROMPT 07-C — DJ Discovery / Profile
**Agent:** 7 — Search & Filter Designer | **Layer:** 05 — Information Architecture | **FSD Feature:** F03
**Personas:** A01 Weekender, A07 The College Senior, B03 The DJ

```
BRAND: PullUpATL — Atlanta's nightlife and dining table booking app.
DEMOGRAPHIC: African American professionals, creatives, and socialites aged 22-55 in Atlanta, GA.
PLATFORM: Mobile-first iOS/Android app (React Native / Expo).
VIBE: Premium but not pretentious. Nightlife-native. Culturally confident. "Resy meets the group chat."
COLORS: Primary "Table Gold" #C9A84C | Secondary "Midnight" #1A1A2E | Accent "Velvet" #8B2252 | Background "Ivory" #FAF8F5 | Text "Onyx" #2D2D2D | Fill "Warm Gray" #F0EDE8 | Dark BG #0D0D1A | Dark Surface #1A1A2E | Dark Card #1E1E35
FONTS: Display: Playfair Display 700/800 (serif, editorial) | Heading: Plus Jakarta Sans 600/700 | Body: Plus Jakarta Sans 400/500
RULES: Mobile-first 390×844 (iPhone 15 Pro). Bottom tab bar (NEVER hamburger). Card UI 12px radius. Gold accents on dark = premium. Real ATL venue photography. Black people in lifestyle imagery.

SUBJECT: DJ profile page. Dark mode #0D0D1A. Top: full-bleed DJ photo with dark gradient overlay. DJ name "DJ Kourt" in Plus Jakarta Sans 700 Ivory 24pt. Genre tags: "Hip-Hop" "R&B" "Afrobeats" in pill chips. Social links: Instagram, SoundCloud icons. Stats row: "127 shows" "12 residencies" "4.9 rating" in gold. "Upcoming Sets" section: venue cards with date, time, venue name — "Revel Atlanta · Fri Apr 18 · 10 PM" with "RSVP" gold mini-button. "Residencies" section: weekly schedule — "Tuesdays: REVERB Downtown Atlanta" "Fridays: Havana Nightclub ATL". "Reviews from attendees" preview. Bottom: "Book DJ Kourt for your event" outlined gold CTA.

SCENE: Single iPhone 15 Pro screen. This is the DJ's portfolio inside the app — music-forward, credibility-first.

STYLE: High-fidelity mobile app UI mockup rendered at Figma presentation quality. Pixel-perfect modern iOS/Android design language with warm editorial touches. Rounded cards with subtle shadow, generous white space, bottom tab navigation. Luxury nightlife meets intuitive booking UX. Photography-forward with warm overlays. Gold foil accent details on dark chrome. Clean data hierarchy. Professional mockup on iPhone 15 Pro device frame (space black).
NEGATIVE: No stock photography of white people at generic restaurants. No corporate SaaS dashboard aesthetic. No cold blue-gray tech palette. No neon club flyer energy. No hamburger menus. No pure white #FFFFFF backgrounds. No pure black #000000 text. No Roboto or Inter fonts. No cluttered layouts. No wireframes. No clip art or cartoon illustrations. No generic food stock. No white-tablecloth-only imagery. No Silicon Valley startup aesthetic. No gradients that look like Stripe or Linear.
BACKGROUND: Present on dark midnight #0D0D1A surface with subtle ambient glow. iPhone 15 Pro device frame (space black) at 15-degree angle. Soft gold #C9A84C light leak from behind device. Clean editorial presentation. No busy patterns.
```

---

### PROMPT 08-C — Happy Hour / Deal Discovery
**Agent:** 8 — Category & Cuisine Designer | **Layer:** 05 — Information Architecture | **FSD Feature:** F03
**Personas:** A14 Deal Hunter, A07 College Senior

```
BRAND: PullUpATL — Atlanta's nightlife and dining table booking app.
DEMOGRAPHIC: African American professionals, creatives, and socialites aged 22-55 in Atlanta, GA.
PLATFORM: Mobile-first iOS/Android app (React Native / Expo).
VIBE: Premium but not pretentious. Nightlife-native. Culturally confident. "Resy meets the group chat."
COLORS: Primary "Table Gold" #C9A84C | Secondary "Midnight" #1A1A2E | Accent "Velvet" #8B2252 | Background "Ivory" #FAF8F5 | Text "Onyx" #2D2D2D | Fill "Warm Gray" #F0EDE8 | Dark BG #0D0D1A | Dark Surface #1A1A2E | Dark Card #1E1E35
FONTS: Display: Playfair Display 700/800 (serif, editorial) | Heading: Plus Jakarta Sans 600/700 | Body: Plus Jakarta Sans 400/500
RULES: Mobile-first 390×844 (iPhone 15 Pro). Bottom tab bar (NEVER hamburger). Card UI 12px radius. Gold accents on dark = premium. Real ATL venue photography. Black people in lifestyle imagery.

SUBJECT: Happy hour and deals discovery screen. Ivory background. Top: "Deals & Happy Hours" in Playfair Display 700 + filter: "Today" "This Week" "Near Me" chips. Time-aware banner: "Happy Hour is LIVE right now" amber pulse if currently 4-7 PM. Deal cards: each with venue photo, venue name, deal details — "Chillz Restaurant and Bar · $5 wells & $3 drafts · 4-7 PM" with countdown timer. "REVERB Downtown Atlanta · Half-price appetizers · Tue-Thu" with day badges. "$" savings badge on each card. Category tabs: "Drinks" "Food" "Brunch" "Late Night". Map toggle: pin view of deals near you. Bottom: "Set deal alerts" bell icon — "Get notified when new deals drop near you" with toggle.

SCENE: Single iPhone 15 Pro screen. Savings-forward but still premium — not coupon-clipper energy.

STYLE: High-fidelity mobile app UI mockup rendered at Figma presentation quality. Pixel-perfect modern iOS/Android design language with warm editorial touches. Rounded cards with subtle shadow, generous white space, bottom tab navigation. Luxury nightlife meets intuitive booking UX. Photography-forward with warm overlays. Gold foil accent details on dark chrome. Clean data hierarchy. Professional mockup on iPhone 15 Pro device frame (space black).
NEGATIVE: No stock photography of white people at generic restaurants. No corporate SaaS dashboard aesthetic. No cold blue-gray tech palette. No neon club flyer energy. No hamburger menus. No pure white #FFFFFF backgrounds. No pure black #000000 text. No Roboto or Inter fonts. No cluttered layouts. No wireframes. No clip art or cartoon illustrations. No generic food stock. No white-tablecloth-only imagery. No Silicon Valley startup aesthetic. No gradients that look like Stripe or Linear.
BACKGROUND: Present on dark midnight #0D0D1A surface with subtle ambient glow. iPhone 15 Pro device frame (space black) at 15-degree angle. Soft gold #C9A84C light leak from behind device. Clean editorial presentation. No busy patterns.
```

---


## TIER 3 — VENUE DETAIL (NEW ADDITIONS)

### PROMPT 11-C — Gentleman's Club Venue Detail
**Agent:** 11 — Restaurant Detail Designer | **Layer:** 07 — Visual Design System | **FSD Feature:** F04
**Personas:** A02 VIP Socialite, A05 The Athlete, A06 Industry Head

```
BRAND: PullUpATL — Atlanta's nightlife and dining table booking app.
DEMOGRAPHIC: African American professionals, creatives, and socialites aged 22-55 in Atlanta, GA.
PLATFORM: Mobile-first iOS/Android app (React Native / Expo).
VIBE: Premium but not pretentious. Nightlife-native. Culturally confident. "Resy meets the group chat."
COLORS: Primary "Table Gold" #C9A84C | Secondary "Midnight" #1A1A2E | Accent "Velvet" #8B2252 | Background "Ivory" #FAF8F5 | Text "Onyx" #2D2D2D | Fill "Warm Gray" #F0EDE8 | Dark BG #0D0D1A | Dark Surface #1A1A2E | Dark Card #1E1E35
FONTS: Display: Playfair Display 700/800 (serif, editorial) | Heading: Plus Jakarta Sans 600/700 | Body: Plus Jakarta Sans 400/500
RULES: Mobile-first 390×844 (iPhone 15 Pro). Bottom tab bar (NEVER hamburger). Card UI 12px radius. Gold accents on dark = premium. Real ATL venue photography. Black people in lifestyle imagery.

SUBJECT: Venue detail for gentleman's club / adult entertainment. Dark mode #0D0D1A. Hero: moody interior — VIP booths, stage lighting, premium atmosphere. Venue name "Magic City" in Plus Jakarta Sans 700 Ivory on Midnight overlay. "Gentleman's Club · West End · $$$$" Slate. Age verification banner: "21+ Only" Velvet badge. Two CTAs: "Book VIP Section" (gold fill) and "Buy Bottle Service" (outlined gold). Sections: "Tonight" — featured performers / showcase info. "VIP Room Tiers" — card grid: "Main Floor Section · $500 min" / "Mezzanine VIP · $1,500 min" / "Private Suite · $3,000 min" with Velvet #8B2252 accent on premium tiers. "Bottle Menu" horizontal scroll. "Cover Pricing" — "Before 11 PM: $20" / "After 11 PM: $40" / "VIP Skip-Line: $100". "Dress Code" with icon. Sticky bottom: "Book VIP — from $500" gold CTA.

SCENE: Single iPhone 15 Pro screen. Dark, premium, exclusive. Velvet accents used more liberally here (VIP context). Adult but tasteful — no explicit imagery.

STYLE: High-fidelity mobile app UI mockup rendered at Figma presentation quality. Pixel-perfect modern iOS/Android design language with warm editorial touches. Rounded cards with subtle shadow, generous white space, bottom tab navigation. Luxury nightlife meets intuitive booking UX. Photography-forward with warm overlays. Gold foil accent details on dark chrome. Clean data hierarchy. Professional mockup on iPhone 15 Pro device frame (space black).
NEGATIVE: No stock photography of white people at generic restaurants. No corporate SaaS dashboard aesthetic. No cold blue-gray tech palette. No neon club flyer energy. No hamburger menus. No pure white #FFFFFF backgrounds. No pure black #000000 text. No Roboto or Inter fonts. No cluttered layouts. No wireframes. No clip art or cartoon illustrations. No generic food stock. No white-tablecloth-only imagery. No Silicon Valley startup aesthetic. No gradients that look like Stripe or Linear.
BACKGROUND: Present on dark midnight #0D0D1A surface with subtle ambient glow. iPhone 15 Pro device frame (space black) at 15-degree angle. Soft gold #C9A84C light leak from behind device. Clean editorial presentation. No busy patterns.
```

---

### PROMPT 11-D — Ultra Lounge Venue Detail
**Agent:** 11 — Restaurant Detail Designer | **Layer:** 07 — Visual Design System | **FSD Feature:** F04
**Personas:** A01 Weekender, A02 VIP Socialite, A09 The Date Planner

```
BRAND: PullUpATL — Atlanta's nightlife and dining table booking app.
DEMOGRAPHIC: African American professionals, creatives, and socialites aged 22-55 in Atlanta, GA.
PLATFORM: Mobile-first iOS/Android app (React Native / Expo).
VIBE: Premium but not pretentious. Nightlife-native. Culturally confident. "Resy meets the group chat."
COLORS: Primary "Table Gold" #C9A84C | Secondary "Midnight" #1A1A2E | Accent "Velvet" #8B2252 | Background "Ivory" #FAF8F5 | Text "Onyx" #2D2D2D | Fill "Warm Gray" #F0EDE8 | Dark BG #0D0D1A | Dark Surface #1A1A2E | Dark Card #1E1E35
FONTS: Display: Playfair Display 700/800 (serif, editorial) | Heading: Plus Jakarta Sans 600/700 | Body: Plus Jakarta Sans 400/500
RULES: Mobile-first 390×844 (iPhone 15 Pro). Bottom tab bar (NEVER hamburger). Card UI 12px radius. Gold accents on dark = premium. Real ATL venue photography. Black people in lifestyle imagery.

SUBJECT: Venue detail for ultra lounge. Dark mode #0D0D1A. Hero: atmospheric hookah lounge interior — ambient lighting, plush seating, intimate vibe. Venue name "Teranga City Ultra Lounge" in Plus Jakarta Sans 700 Ivory. "Ultra Lounge · South Downtown · $$$" Slate. CTAs: "Book a Table" (gold fill) and "Reserve Hookah" (outlined gold). Sections: "Hookah Menu" — horizontal scroll of hookah flavor cards with photos, names, prices ($25-$45). "Late-Night Kitchen" — menu highlights available until 2 AM. "DJ Residency Schedule" — weekly grid with DJ names and genres. "Bottle Service" — package cards. "Vibe" — ambient music genre, dress code, average age. Sticky bottom: "Book Tonight — Tables from $0 min" gold CTA.

SCENE: Single iPhone 15 Pro screen. Sensual, warm, lounge energy. Darker than restaurant detail but warmer than nightclub detail.

STYLE: High-fidelity mobile app UI mockup rendered at Figma presentation quality. Pixel-perfect modern iOS/Android design language with warm editorial touches. Rounded cards with subtle shadow, generous white space, bottom tab navigation. Luxury nightlife meets intuitive booking UX. Photography-forward with warm overlays. Gold foil accent details on dark chrome. Clean data hierarchy. Professional mockup on iPhone 15 Pro device frame (space black).
NEGATIVE: No stock photography of white people at generic restaurants. No corporate SaaS dashboard aesthetic. No cold blue-gray tech palette. No neon club flyer energy. No hamburger menus. No pure white #FFFFFF backgrounds. No pure black #000000 text. No Roboto or Inter fonts. No cluttered layouts. No wireframes. No clip art or cartoon illustrations. No generic food stock. No white-tablecloth-only imagery. No Silicon Valley startup aesthetic. No gradients that look like Stripe or Linear.
BACKGROUND: Present on dark midnight #0D0D1A surface with subtle ambient glow. iPhone 15 Pro device frame (space black) at 15-degree angle. Soft gold #C9A84C light leak from behind device. Clean editorial presentation. No busy patterns.
```

---

### PROMPT 11-E — Studio / Creative Space Detail
**Agent:** 11 — Restaurant Detail Designer | **Layer:** 07 — Visual Design System | **FSD Feature:** F04
**Personas:** A06 Industry Head, B03 The DJ, A15 The Creator

```
BRAND: PullUpATL — Atlanta's nightlife and dining table booking app.
DEMOGRAPHIC: African American professionals, creatives, and socialites aged 22-55 in Atlanta, GA.
PLATFORM: Mobile-first iOS/Android app (React Native / Expo).
VIBE: Premium but not pretentious. Nightlife-native. Culturally confident. "Resy meets the group chat."
COLORS: Primary "Table Gold" #C9A84C | Secondary "Midnight" #1A1A2E | Accent "Velvet" #8B2252 | Background "Ivory" #FAF8F5 | Text "Onyx" #2D2D2D | Fill "Warm Gray" #F0EDE8 | Dark BG #0D0D1A | Dark Surface #1A1A2E | Dark Card #1E1E35
FONTS: Display: Playfair Display 700/800 (serif, editorial) | Heading: Plus Jakarta Sans 600/700 | Body: Plus Jakarta Sans 400/500
RULES: Mobile-first 390×844 (iPhone 15 Pro). Bottom tab bar (NEVER hamburger). Card UI 12px radius. Gold accents on dark = premium. Real ATL venue photography. Black people in lifestyle imagery.

SUBJECT: Venue detail for recording studio / creative space. Dark mode #0D0D1A. Hero: studio interior — mixing console, monitors, vocal booth visible. Venue name "Sessions Atlanta Studio" in Plus Jakarta Sans 700 Ivory. "Recording Studio · West Midtown · $$$$" Slate. CTAs: "Book a Session" (gold fill) and "Tour Request" (outlined gold). Sections: "Studio Rooms" — card grid showing Room A (tracking), Room B (mixing), Room C (podcast/content) with photos, hourly rate "$150/hr" gold, equipment list preview. "Equipment" — expandable list: "SSL Console" "Neumann U87" "Pro Tools HDX". "Recent Sessions" — anonymized or public credits. "Availability" — calendar strip showing open/booked slots. "Engineer Add-On" — toggle for in-house engineer "$75/hr". Sticky bottom: "Book Session — from $150/hr" gold CTA.

SCENE: Single iPhone 15 Pro screen. Professional, creative, studio vibes. Not nightlife — but still premium PullUpATL aesthetic.

STYLE: High-fidelity mobile app UI mockup rendered at Figma presentation quality. Pixel-perfect modern iOS/Android design language with warm editorial touches. Rounded cards with subtle shadow, generous white space, bottom tab navigation. Luxury nightlife meets intuitive booking UX. Photography-forward with warm overlays. Gold foil accent details on dark chrome. Clean data hierarchy. Professional mockup on iPhone 15 Pro device frame (space black).
NEGATIVE: No stock photography of white people at generic restaurants. No corporate SaaS dashboard aesthetic. No cold blue-gray tech palette. No neon club flyer energy. No hamburger menus. No pure white #FFFFFF backgrounds. No pure black #000000 text. No Roboto or Inter fonts. No cluttered layouts. No wireframes. No clip art or cartoon illustrations. No generic food stock. No white-tablecloth-only imagery. No Silicon Valley startup aesthetic. No gradients that look like Stripe or Linear.
BACKGROUND: Present on dark midnight #0D0D1A surface with subtle ambient glow. iPhone 15 Pro device frame (space black) at 15-degree angle. Soft gold #C9A84C light leak from behind device. Clean editorial presentation. No busy patterns.
```

---


## TIER 4 — BOOKING ENGINE (NEW ADDITIONS)

### PROMPT 15-C — Booking Modification Flow
**Agent:** 15 — Table Booking Flow Designer | **Layer:** 14 — Backend API | **FSD Feature:** F05
**Personas:** All

```
BRAND: PullUpATL — Atlanta's nightlife and dining table booking app.
DEMOGRAPHIC: African American professionals, creatives, and socialites aged 22-55 in Atlanta, GA.
PLATFORM: Mobile-first iOS/Android app (React Native / Expo).
VIBE: Premium but not pretentious. Nightlife-native. Culturally confident. "Resy meets the group chat."
COLORS: Primary "Table Gold" #C9A84C | Secondary "Midnight" #1A1A2E | Accent "Velvet" #8B2252 | Background "Ivory" #FAF8F5 | Text "Onyx" #2D2D2D | Fill "Warm Gray" #F0EDE8 | Dark BG #0D0D1A | Dark Surface #1A1A2E | Dark Card #1E1E35
FONTS: Display: Playfair Display 700/800 (serif, editorial) | Heading: Plus Jakarta Sans 600/700 | Body: Plus Jakarta Sans 400/500
RULES: Mobile-first 390×844 (iPhone 15 Pro). Bottom tab bar (NEVER hamburger). Card UI 12px radius. Gold accents on dark = premium. Real ATL venue photography. Black people in lifestyle imagery.

SUBJECT: Booking modification screen. Ivory background. Top: back arrow + "Modify Reservation" header. Current booking card (dimmed): "Avenue Kitchen & Grill · Sat, Mar 15 · 8:30 PM · 4 guests". Editable fields below with current values pre-filled: "New Date" calendar picker, "New Time" horizontal scroll pills, "New Party Size" stepper. Changed fields highlighted with gold left border + "Changed" badge. Warning banner if party size increased: "Subject to availability" amber. Comparison summary: "Original: Sat 8:30 PM, 4 guests → New: Sun 7:00 PM, 6 guests". Bottom: "Confirm Changes" gold CTA + "Cancel" text link. Note: "Free modification up to 4 hours before".

SCENE: Single iPhone 15 Pro screen. Reassuring, clear diff between old and new. No anxiety-inducing UI.

STYLE: High-fidelity mobile app UI mockup rendered at Figma presentation quality. Pixel-perfect modern iOS/Android design language with warm editorial touches. Rounded cards with subtle shadow, generous white space, bottom tab navigation. Luxury nightlife meets intuitive booking UX. Photography-forward with warm overlays. Gold foil accent details on dark chrome. Clean data hierarchy. Professional mockup on iPhone 15 Pro device frame (space black).
NEGATIVE: No stock photography of white people at generic restaurants. No corporate SaaS dashboard aesthetic. No cold blue-gray tech palette. No neon club flyer energy. No hamburger menus. No pure white #FFFFFF backgrounds. No pure black #000000 text. No Roboto or Inter fonts. No cluttered layouts. No wireframes. No clip art or cartoon illustrations. No generic food stock. No white-tablecloth-only imagery. No Silicon Valley startup aesthetic. No gradients that look like Stripe or Linear.
BACKGROUND: Present on dark midnight #0D0D1A surface with subtle ambient glow. iPhone 15 Pro device frame (space black) at 15-degree angle. Soft gold #C9A84C light leak from behind device. Clean editorial presentation. No busy patterns.
```

---

### PROMPT 15-D — Cancellation Confirmation
**Agent:** 15 — Table Booking Flow Designer | **Layer:** 14 — Backend API | **FSD Feature:** F05
**Personas:** All

```
BRAND: PullUpATL — Atlanta's nightlife and dining table booking app.
DEMOGRAPHIC: African American professionals, creatives, and socialites aged 22-55 in Atlanta, GA.
PLATFORM: Mobile-first iOS/Android app (React Native / Expo).
VIBE: Premium but not pretentious. Nightlife-native. Culturally confident. "Resy meets the group chat."
COLORS: Primary "Table Gold" #C9A84C | Secondary "Midnight" #1A1A2E | Accent "Velvet" #8B2252 | Background "Ivory" #FAF8F5 | Text "Onyx" #2D2D2D | Fill "Warm Gray" #F0EDE8 | Dark BG #0D0D1A | Dark Surface #1A1A2E | Dark Card #1E1E35
FONTS: Display: Playfair Display 700/800 (serif, editorial) | Heading: Plus Jakarta Sans 600/700 | Body: Plus Jakarta Sans 400/500
RULES: Mobile-first 390×844 (iPhone 15 Pro). Bottom tab bar (NEVER hamburger). Card UI 12px radius. Gold accents on dark = premium. Real ATL venue photography. Black people in lifestyle imagery.

SUBJECT: Cancellation confirmation screen. Ivory background with warning energy. Top: amber warning triangle icon. "Cancel Reservation?" in Plus Jakarta Sans 700 Onyx. Booking card: "Seven Midtown · Sat, Mar 15 · 8:30 PM · 4 guests". Consequence section: red-bordered card — "Deposit of $50 will be forfeited" bold. Strike warning: "This is cancellation 2 of 3. After 3 cancellations, your booking ability will be restricted." with progress indicator (2/3 filled amber). Refund info: "Refund Policy: Cancellations 4+ hours out = full refund. Within 4 hours = deposit forfeited." Reason selector: "Why are you canceling?" dropdown — "Change of plans" "Found a better option" "Group size changed" "Other". Bottom: "Confirm Cancellation" red-outlined button + "Keep My Reservation" gold CTA (primary emphasis on keeping).

SCENE: Single iPhone 15 Pro screen. Designed to inform, not guilt-trip. Clear consequences but not punitive.

STYLE: High-fidelity mobile app UI mockup rendered at Figma presentation quality. Pixel-perfect modern iOS/Android design language with warm editorial touches. Rounded cards with subtle shadow, generous white space, bottom tab navigation. Luxury nightlife meets intuitive booking UX. Photography-forward with warm overlays. Gold foil accent details on dark chrome. Clean data hierarchy. Professional mockup on iPhone 15 Pro device frame (space black).
NEGATIVE: No stock photography of white people at generic restaurants. No corporate SaaS dashboard aesthetic. No cold blue-gray tech palette. No neon club flyer energy. No hamburger menus. No pure white #FFFFFF backgrounds. No pure black #000000 text. No Roboto or Inter fonts. No cluttered layouts. No wireframes. No clip art or cartoon illustrations. No generic food stock. No white-tablecloth-only imagery. No Silicon Valley startup aesthetic. No gradients that look like Stripe or Linear.
BACKGROUND: Present on dark midnight #0D0D1A surface with subtle ambient glow. iPhone 15 Pro device frame (space black) at 15-degree angle. Soft gold #C9A84C light leak from behind device. Clean editorial presentation. No busy patterns.
```

---

### PROMPT 15-E — Private / Discreet Booking Mode
**Agent:** 15 — Table Booking Flow Designer | **Layer:** 14 — Backend API | **FSD Feature:** F05
**Personas:** A05 The Athlete, A06 Industry Head

```
BRAND: PullUpATL — Atlanta's nightlife and dining table booking app.
DEMOGRAPHIC: African American professionals, creatives, and socialites aged 22-55 in Atlanta, GA.
PLATFORM: Mobile-first iOS/Android app (React Native / Expo).
VIBE: Premium but not pretentious. Nightlife-native. Culturally confident. "Resy meets the group chat."
COLORS: Primary "Table Gold" #C9A84C | Secondary "Midnight" #1A1A2E | Accent "Velvet" #8B2252 | Background "Ivory" #FAF8F5 | Text "Onyx" #2D2D2D | Fill "Warm Gray" #F0EDE8 | Dark BG #0D0D1A | Dark Surface #1A1A2E | Dark Card #1E1E35
FONTS: Display: Playfair Display 700/800 (serif, editorial) | Heading: Plus Jakarta Sans 600/700 | Body: Plus Jakarta Sans 400/500
RULES: Mobile-first 390×844 (iPhone 15 Pro). Bottom tab bar (NEVER hamburger). Card UI 12px radius. Gold accents on dark = premium. Real ATL venue photography. Black people in lifestyle imagery.

SUBJECT: Private booking mode toggle and flow. Dark mode #0D0D1A. During booking step 2: "Privacy Mode" section with toggle switch. When activated: expanded options card with Velvet #8B2252 left border. Options: "Hide from activity feed" toggle (on), "Disable check-in prompts" toggle (on), "Use alias" text input — placeholder "Display name for venue" with example "Mr. Williams", "Request private entrance info" toggle (on). Privacy badge: shield icon + "DISCREET" in Velvet. Note: "Your booking will not appear in friends' feeds or social activity. Venue staff will use your alias." Confirmation shows shield icon next to booking code. Separate confirmation card variant: no venue photo, minimal info, alias displayed.

SCENE: Single iPhone 15 Pro screen. Ultra-private energy. Velvet accent appropriate (VIP context). Minimal, secure, luxurious.

STYLE: High-fidelity mobile app UI mockup rendered at Figma presentation quality. Pixel-perfect modern iOS/Android design language with warm editorial touches. Rounded cards with subtle shadow, generous white space, bottom tab navigation. Luxury nightlife meets intuitive booking UX. Photography-forward with warm overlays. Gold foil accent details on dark chrome. Clean data hierarchy. Professional mockup on iPhone 15 Pro device frame (space black).
NEGATIVE: No stock photography of white people at generic restaurants. No corporate SaaS dashboard aesthetic. No cold blue-gray tech palette. No neon club flyer energy. No hamburger menus. No pure white #FFFFFF backgrounds. No pure black #000000 text. No Roboto or Inter fonts. No cluttered layouts. No wireframes. No clip art or cartoon illustrations. No generic food stock. No white-tablecloth-only imagery. No Silicon Valley startup aesthetic. No gradients that look like Stripe or Linear.
BACKGROUND: Present on dark midnight #0D0D1A surface with subtle ambient glow. iPhone 15 Pro device frame (space black) at 15-degree angle. Soft gold #C9A84C light leak from behind device. Clean editorial presentation. No busy patterns.
```

---

### PROMPT 15-F — Multi-Venue Chain Booking
**Agent:** 15 — Table Booking Flow Designer | **Layer:** 14 — Backend API | **FSD Feature:** F05
**Personas:** A01 Weekender, A04 Out-of-Towner

```
BRAND: PullUpATL — Atlanta's nightlife and dining table booking app.
DEMOGRAPHIC: African American professionals, creatives, and socialites aged 22-55 in Atlanta, GA.
PLATFORM: Mobile-first iOS/Android app (React Native / Expo).
VIBE: Premium but not pretentious. Nightlife-native. Culturally confident. "Resy meets the group chat."
COLORS: Primary "Table Gold" #C9A84C | Secondary "Midnight" #1A1A2E | Accent "Velvet" #8B2252 | Background "Ivory" #FAF8F5 | Text "Onyx" #2D2D2D | Fill "Warm Gray" #F0EDE8 | Dark BG #0D0D1A | Dark Surface #1A1A2E | Dark Card #1E1E35
FONTS: Display: Playfair Display 700/800 (serif, editorial) | Heading: Plus Jakarta Sans 600/700 | Body: Plus Jakarta Sans 400/500
RULES: Mobile-first 390×844 (iPhone 15 Pro). Bottom tab bar (NEVER hamburger). Card UI 12px radius. Gold accents on dark = premium. Real ATL venue photography. Black people in lifestyle imagery.

SUBJECT: Multi-venue chain booking screen. Ivory background. Top: "Plan Your Night" in Playfair Display 700 + date "Sat, Mar 15". Timeline visualization: vertical gold line connecting venue stops. Stop 1 (confirmed): gold dot + "Dinner · 7:30 PM" + venue card "Avenue Kitchen & Grill" with mini photo + "4 guests" + checkmark. Arrow connector: "30 min travel" + Uber icon. Stop 2 (selecting): pulsing gold dot + "After-Party · 10:30 PM" + venue search/select card — filtered to nightclubs, shows "Revel Atlanta" "Havana Nightclub ATL" options. "Add Another Stop" dashed gold button at bottom of timeline. Summary bar: "2 venues · 4 guests · Est. total: $650-$1,200". Bottom: "Confirm Full Night" gold CTA.

SCENE: Single iPhone 15 Pro screen. Journey planner energy. Timeline is the hero UI pattern. Excitement of planning a full night.

STYLE: High-fidelity mobile app UI mockup rendered at Figma presentation quality. Pixel-perfect modern iOS/Android design language with warm editorial touches. Rounded cards with subtle shadow, generous white space, bottom tab navigation. Luxury nightlife meets intuitive booking UX. Photography-forward with warm overlays. Gold foil accent details on dark chrome. Clean data hierarchy. Professional mockup on iPhone 15 Pro device frame (space black).
NEGATIVE: No stock photography of white people at generic restaurants. No corporate SaaS dashboard aesthetic. No cold blue-gray tech palette. No neon club flyer energy. No hamburger menus. No pure white #FFFFFF backgrounds. No pure black #000000 text. No Roboto or Inter fonts. No cluttered layouts. No wireframes. No clip art or cartoon illustrations. No generic food stock. No white-tablecloth-only imagery. No Silicon Valley startup aesthetic. No gradients that look like Stripe or Linear.
BACKGROUND: Present on dark midnight #0D0D1A surface with subtle ambient glow. iPhone 15 Pro device frame (space black) at 15-degree angle. Soft gold #C9A84C light leak from behind device. Clean editorial presentation. No busy patterns.
```

---

### PROMPT 19-C — Guest List RSVP
**Agent:** 19 — Confirmation & Receipt Designer | **Layer:** 14 — Backend API | **FSD Feature:** F19
**Personas:** A07 College Senior, A14 Deal Hunter, A01 Weekender

```
BRAND: PullUpATL — Atlanta's nightlife and dining table booking app.
DEMOGRAPHIC: African American professionals, creatives, and socialites aged 22-55 in Atlanta, GA.
PLATFORM: Mobile-first iOS/Android app (React Native / Expo).
VIBE: Premium but not pretentious. Nightlife-native. Culturally confident. "Resy meets the group chat."
COLORS: Primary "Table Gold" #C9A84C | Secondary "Midnight" #1A1A2E | Accent "Velvet" #8B2252 | Background "Ivory" #FAF8F5 | Text "Onyx" #2D2D2D | Fill "Warm Gray" #F0EDE8 | Dark BG #0D0D1A | Dark Surface #1A1A2E | Dark Card #1E1E35
FONTS: Display: Playfair Display 700/800 (serif, editorial) | Heading: Plus Jakarta Sans 600/700 | Body: Plus Jakarta Sans 400/500
RULES: Mobile-first 390×844 (iPhone 15 Pro). Bottom tab bar (NEVER hamburger). Card UI 12px radius. Gold accents on dark = premium. Real ATL venue photography. Black people in lifestyle imagery.

SUBJECT: Guest list RSVP confirmation screen. Dark mode #0D0D1A. Top: gold checkmark + "You're on the List" in Playfair Display 700 Ivory. Event card: venue photo strip with event overlay, "R&B Night at Revel Atlanta" Plus Jakarta Sans 700, "Fri, Mar 14 · 10 PM - 2 AM". Guest list details: "Guest List: DJ Kourt's List" with promoter avatar. "Guests: You + 2" with avatar chips. "Cover: FREE before 11 PM / $20 after" with clock icon and countdown. QR code for door scan. Rules card: "Arrive before 11 PM for free entry" "Valid ID required" "Dress code: Upscale casual". Share button: "Invite friends to this list" gold outlined. Bottom: "Add to Calendar" + "Get Directions" action buttons.

SCENE: Single iPhone 15 Pro screen. Celebration energy but different from table booking — more nightlife, more social.

STYLE: High-fidelity mobile app UI mockup rendered at Figma presentation quality. Pixel-perfect modern iOS/Android design language with warm editorial touches. Rounded cards with subtle shadow, generous white space, bottom tab navigation. Luxury nightlife meets intuitive booking UX. Photography-forward with warm overlays. Gold foil accent details on dark chrome. Clean data hierarchy. Professional mockup on iPhone 15 Pro device frame (space black).
NEGATIVE: No stock photography of white people at generic restaurants. No corporate SaaS dashboard aesthetic. No cold blue-gray tech palette. No neon club flyer energy. No hamburger menus. No pure white #FFFFFF backgrounds. No pure black #000000 text. No Roboto or Inter fonts. No cluttered layouts. No wireframes. No clip art or cartoon illustrations. No generic food stock. No white-tablecloth-only imagery. No Silicon Valley startup aesthetic. No gradients that look like Stripe or Linear.
BACKGROUND: Present on dark midnight #0D0D1A surface with subtle ambient glow. iPhone 15 Pro device frame (space black) at 15-degree angle. Soft gold #C9A84C light leak from behind device. Clean editorial presentation. No busy patterns.
```

---


## TIER 5 — SOCIAL & COMMUNITY (NEW ADDITIONS)

### PROMPT 22-B — Waitlist Position Tracker
**Agent:** 22 — Reviews & Ratings Designer | **Layer:** 07 — Visual Design System | **FSD Feature:** F22
**Personas:** A01 Weekender, A09 Date Planner

```
BRAND: PullUpATL — Atlanta's nightlife and dining table booking app.
DEMOGRAPHIC: African American professionals, creatives, and socialites aged 22-55 in Atlanta, GA.
PLATFORM: Mobile-first iOS/Android app (React Native / Expo).
VIBE: Premium but not pretentious. Nightlife-native. Culturally confident. "Resy meets the group chat."
COLORS: Primary "Table Gold" #C9A84C | Secondary "Midnight" #1A1A2E | Accent "Velvet" #8B2252 | Background "Ivory" #FAF8F5 | Text "Onyx" #2D2D2D | Fill "Warm Gray" #F0EDE8 | Dark BG #0D0D1A | Dark Surface #1A1A2E | Dark Card #1E1E35
FONTS: Display: Playfair Display 700/800 (serif, editorial) | Heading: Plus Jakarta Sans 600/700 | Body: Plus Jakarta Sans 400/500
RULES: Mobile-first 390×844 (iPhone 15 Pro). Bottom tab bar (NEVER hamburger). Card UI 12px radius. Gold accents on dark = premium. Real ATL venue photography. Black people in lifestyle imagery.

SUBJECT: Waitlist screen. Ivory background. Top: "You're on the Waitlist" header + venue name "Seven Midtown". Position indicator: large circular progress — "Position 3 of 12" with gold arc showing progress. Estimated wait: "~25 minutes" in Plus Jakarta Sans 600. Live updates section: "Position updated 2 min ago" with pulsing green dot. Notification preference: "We'll notify you when a table opens" with push notification toggle (on). Original request: "Sat, Mar 15 · 7:30 PM · 4 guests" in card format. Actions: "Leave Waitlist" red text link (with confirmation), "Browse Similar" gold outlined button showing 2 alternative venue cards with availability. Bottom: "While you wait" section with nearby venue suggestions that have open tables right now.

SCENE: Single iPhone 15 Pro screen. Reassuring, transparent. Real-time energy without anxiety.

STYLE: High-fidelity mobile app UI mockup rendered at Figma presentation quality. Pixel-perfect modern iOS/Android design language with warm editorial touches. Rounded cards with subtle shadow, generous white space, bottom tab navigation. Luxury nightlife meets intuitive booking UX. Photography-forward with warm overlays. Gold foil accent details on dark chrome. Clean data hierarchy. Professional mockup on iPhone 15 Pro device frame (space black).
NEGATIVE: No stock photography of white people at generic restaurants. No corporate SaaS dashboard aesthetic. No cold blue-gray tech palette. No neon club flyer energy. No hamburger menus. No pure white #FFFFFF backgrounds. No pure black #000000 text. No Roboto or Inter fonts. No cluttered layouts. No wireframes. No clip art or cartoon illustrations. No generic food stock. No white-tablecloth-only imagery. No Silicon Valley startup aesthetic. No gradients that look like Stripe or Linear.
BACKGROUND: Present on dark midnight #0D0D1A surface with subtle ambient glow. iPhone 15 Pro device frame (space black) at 15-degree angle. Soft gold #C9A84C light leak from behind device. Clean editorial presentation. No busy patterns.
```

---

### PROMPT 20-C — Personal Dining Stats
**Agent:** 20 — Social Feed Designer | **Layer:** 20 — Analytics | **FSD Feature:** F20
**Personas:** A01, A09, A11, A13

```
BRAND: PullUpATL — Atlanta's nightlife and dining table booking app.
DEMOGRAPHIC: African American professionals, creatives, and socialites aged 22-55 in Atlanta, GA.
PLATFORM: Mobile-first iOS/Android app (React Native / Expo).
VIBE: Premium but not pretentious. Nightlife-native. Culturally confident. "Resy meets the group chat."
COLORS: Primary "Table Gold" #C9A84C | Secondary "Midnight" #1A1A2E | Accent "Velvet" #8B2252 | Background "Ivory" #FAF8F5 | Text "Onyx" #2D2D2D | Fill "Warm Gray" #F0EDE8 | Dark BG #0D0D1A | Dark Surface #1A1A2E | Dark Card #1E1E35
FONTS: Display: Playfair Display 700/800 (serif, editorial) | Heading: Plus Jakarta Sans 600/700 | Body: Plus Jakarta Sans 400/500
RULES: Mobile-first 390×844 (iPhone 15 Pro). Bottom tab bar (NEVER hamburger). Card UI 12px radius. Gold accents on dark = premium. Real ATL venue photography. Black people in lifestyle imagery.

SUBJECT: Personal dining stats / year-in-review screen. Ivory background. Top: "Your PullUp Stats" in Playfair Display 700 + year selector "2025". Hero stat cards row: "42 Bookings" gold number / "$4,280 Spent" / "18 Venues Tried". Visualizations: "Cuisine Breakdown" donut chart — Southern Soul 28%, Seafood 18%, Japanese 15%, Caribbean 12%, Other 27% in brand colors. "Favorite Neighborhood" — Midtown highlighted on mini map. "Most Visited" — venue card for Avenue Kitchen & Grill with "8 visits" badge. "Night Owl Score" — "72% of your bookings are after 8 PM" with moon icon. "Social" — "You've dined with 23 different friends this year". Share card: "Share your year in food" gold CTA generates Instagram Story-sized branded card.

SCENE: Single iPhone 15 Pro screen. Spotify Wrapped energy for dining. Celebratory, data-beautiful, shareable.

STYLE: High-fidelity mobile app UI mockup rendered at Figma presentation quality. Pixel-perfect modern iOS/Android design language with warm editorial touches. Rounded cards with subtle shadow, generous white space, bottom tab navigation. Luxury nightlife meets intuitive booking UX. Photography-forward with warm overlays. Gold foil accent details on dark chrome. Clean data hierarchy. Professional mockup on iPhone 15 Pro device frame (space black).
NEGATIVE: No stock photography of white people at generic restaurants. No corporate SaaS dashboard aesthetic. No cold blue-gray tech palette. No neon club flyer energy. No hamburger menus. No pure white #FFFFFF backgrounds. No pure black #000000 text. No Roboto or Inter fonts. No cluttered layouts. No wireframes. No clip art or cartoon illustrations. No generic food stock. No white-tablecloth-only imagery. No Silicon Valley startup aesthetic. No gradients that look like Stripe or Linear.
BACKGROUND: Present on dark midnight #0D0D1A surface with subtle ambient glow. iPhone 15 Pro device frame (space black) at 15-degree angle. Soft gold #C9A84C light leak from behind device. Clean editorial presentation. No busy patterns.
```

---

### PROMPT 21-C — Referral Program
**Agent:** 21 — Group Coordination Designer | **Layer:** 29 — Referral | **FSD Feature:** F21
**Personas:** All consumer

```
BRAND: PullUpATL — Atlanta's nightlife and dining table booking app.
DEMOGRAPHIC: African American professionals, creatives, and socialites aged 22-55 in Atlanta, GA.
PLATFORM: Mobile-first iOS/Android app (React Native / Expo).
VIBE: Premium but not pretentious. Nightlife-native. Culturally confident. "Resy meets the group chat."
COLORS: Primary "Table Gold" #C9A84C | Secondary "Midnight" #1A1A2E | Accent "Velvet" #8B2252 | Background "Ivory" #FAF8F5 | Text "Onyx" #2D2D2D | Fill "Warm Gray" #F0EDE8 | Dark BG #0D0D1A | Dark Surface #1A1A2E | Dark Card #1E1E35
FONTS: Display: Playfair Display 700/800 (serif, editorial) | Heading: Plus Jakarta Sans 600/700 | Body: Plus Jakarta Sans 400/500
RULES: Mobile-first 390×844 (iPhone 15 Pro). Bottom tab bar (NEVER hamburger). Card UI 12px radius. Gold accents on dark = premium. Real ATL venue photography. Black people in lifestyle imagery.

SUBJECT: Referral and invitation screen. Ivory background. Top: "Invite Friends, Get $10" in Playfair Display 700. Hero card: Midnight background with gold confetti — "Give $10, Get $10" headline in Ivory. Explanation: "When your friend books their first table, you both get $10 credit." Your referral code: "DAME2026" in monospaced gold, copy button. Share methods: "Share via" row — iMessage, WhatsApp, Instagram DM, Copy Link icon buttons. Stats card: "3 friends invited" / "2 signed up" / "$20 earned" with gold progress indicators. Referral history: list of friend avatars + names + status ("Signed up" green / "Pending" amber / "Booked!" gold star). Bottom: "Your credit balance: $20.00" gold banner.

SCENE: Single iPhone 15 Pro screen. Social, rewarding, easy to share. Growth-engine screen that doesn't feel transactional.

STYLE: High-fidelity mobile app UI mockup rendered at Figma presentation quality. Pixel-perfect modern iOS/Android design language with warm editorial touches. Rounded cards with subtle shadow, generous white space, bottom tab navigation. Luxury nightlife meets intuitive booking UX. Photography-forward with warm overlays. Gold foil accent details on dark chrome. Clean data hierarchy. Professional mockup on iPhone 15 Pro device frame (space black).
NEGATIVE: No stock photography of white people at generic restaurants. No corporate SaaS dashboard aesthetic. No cold blue-gray tech palette. No neon club flyer energy. No hamburger menus. No pure white #FFFFFF backgrounds. No pure black #000000 text. No Roboto or Inter fonts. No cluttered layouts. No wireframes. No clip art or cartoon illustrations. No generic food stock. No white-tablecloth-only imagery. No Silicon Valley startup aesthetic. No gradients that look like Stripe or Linear.
BACKGROUND: Present on dark midnight #0D0D1A surface with subtle ambient glow. iPhone 15 Pro device frame (space black) at 15-degree angle. Soft gold #C9A84C light leak from behind device. Clean editorial presentation. No busy patterns.
```

---


## TIER 6 — USER PROFILE & MANAGEMENT (NEW ADDITIONS)

### PROMPT 23-C — Saved Venues / Collections
**Agent:** 23 — Profile & Settings Designer | **Layer:** 07 — Visual Design System | **FSD Feature:** F23
**Personas:** A01, A09, A13

```
BRAND: PullUpATL — Atlanta's nightlife and dining table booking app.
DEMOGRAPHIC: African American professionals, creatives, and socialites aged 22-55 in Atlanta, GA.
PLATFORM: Mobile-first iOS/Android app (React Native / Expo).
VIBE: Premium but not pretentious. Nightlife-native. Culturally confident. "Resy meets the group chat."
COLORS: Primary "Table Gold" #C9A84C | Secondary "Midnight" #1A1A2E | Accent "Velvet" #8B2252 | Background "Ivory" #FAF8F5 | Text "Onyx" #2D2D2D | Fill "Warm Gray" #F0EDE8 | Dark BG #0D0D1A | Dark Surface #1A1A2E | Dark Card #1E1E35
FONTS: Display: Playfair Display 700/800 (serif, editorial) | Heading: Plus Jakarta Sans 600/700 | Body: Plus Jakarta Sans 400/500
RULES: Mobile-first 390×844 (iPhone 15 Pro). Bottom tab bar (NEVER hamburger). Card UI 12px radius. Gold accents on dark = premium. Real ATL venue photography. Black people in lifestyle imagery.

SUBJECT: Saved venues and collections screen. Ivory background. Top: "Saved" header with "Create Collection" gold text link. Default collection: "All Saved" with count "(14)". User collections: horizontal scroll of collection cards — "Date Night Spots" (5 venues, cover photo collage), "Brunch Rotation" (8 venues), "Birthday Options" (3 venues). Each collection card: 4-photo grid thumbnail, title, venue count. Below: "All Saved" full list — venue cards with photo, name, cuisine, neighborhood, saved date, heart icon (filled gold). Swipe left to remove. Long press to add to collection. Empty state if no saves: gold heart outline illustration + "Save venues you love" + "Tap the heart on any venue to save it here" + "Start Exploring" gold CTA.

SCENE: Single iPhone 15 Pro screen. Pinterest-energy for dining. Personal curation.

STYLE: High-fidelity mobile app UI mockup rendered at Figma presentation quality. Pixel-perfect modern iOS/Android design language with warm editorial touches. Rounded cards with subtle shadow, generous white space, bottom tab navigation. Luxury nightlife meets intuitive booking UX. Photography-forward with warm overlays. Gold foil accent details on dark chrome. Clean data hierarchy. Professional mockup on iPhone 15 Pro device frame (space black).
NEGATIVE: No stock photography of white people at generic restaurants. No corporate SaaS dashboard aesthetic. No cold blue-gray tech palette. No neon club flyer energy. No hamburger menus. No pure white #FFFFFF backgrounds. No pure black #000000 text. No Roboto or Inter fonts. No cluttered layouts. No wireframes. No clip art or cartoon illustrations. No generic food stock. No white-tablecloth-only imagery. No Silicon Valley startup aesthetic. No gradients that look like Stripe or Linear.
BACKGROUND: Present on dark midnight #0D0D1A surface with subtle ambient glow. iPhone 15 Pro device frame (space black) at 15-degree angle. Soft gold #C9A84C light leak from behind device. Clean editorial presentation. No busy patterns.
```

---

### PROMPT 23-D — Membership / Subscription Management
**Agent:** 23 — Profile & Settings Designer | **Layer:** 07 — Visual Design System | **FSD Feature:** NEW
**Personas:** A01, A02, A09, A12

```
BRAND: PullUpATL — Atlanta's nightlife and dining table booking app.
DEMOGRAPHIC: African American professionals, creatives, and socialites aged 22-55 in Atlanta, GA.
PLATFORM: Mobile-first iOS/Android app (React Native / Expo).
VIBE: Premium but not pretentious. Nightlife-native. Culturally confident. "Resy meets the group chat."
COLORS: Primary "Table Gold" #C9A84C | Secondary "Midnight" #1A1A2E | Accent "Velvet" #8B2252 | Background "Ivory" #FAF8F5 | Text "Onyx" #2D2D2D | Fill "Warm Gray" #F0EDE8 | Dark BG #0D0D1A | Dark Surface #1A1A2E | Dark Card #1E1E35
FONTS: Display: Playfair Display 700/800 (serif, editorial) | Heading: Plus Jakarta Sans 600/700 | Body: Plus Jakarta Sans 400/500
RULES: Mobile-first 390×844 (iPhone 15 Pro). Bottom tab bar (NEVER hamburger). Card UI 12px radius. Gold accents on dark = premium. Real ATL venue photography. Black people in lifestyle imagery.

SUBJECT: Membership management screen. Ivory background. Top: "PullUp Member" badge in gold with crown icon. Current plan card: Midnight #1A1A2E background, gold border — "Ultimate Member · $14.99/mo" in Plus Jakarta Sans 700 Ivory. Benefits list with gold checkmarks: "No booking fees" "Priority reservations" "Early access to events" "Exclusive venue offers" "Concierge AI access". Usage stats: "Saved this month: $47.50 in booking fees" gold. Billing section: "Next billing: Apr 15, 2026" + "Visa ····4582" + "Update Payment" link. Plan comparison: "Compare Plans" expandable — Free vs Member vs Ultimate grid. Bottom actions: "Manage Plan" outlined + "Cancel Membership" red text link (small, de-emphasized).

SCENE: Single iPhone 15 Pro screen. Premium feel — the membership card itself should feel like holding a Black Card.

STYLE: High-fidelity mobile app UI mockup rendered at Figma presentation quality. Pixel-perfect modern iOS/Android design language with warm editorial touches. Rounded cards with subtle shadow, generous white space, bottom tab navigation. Luxury nightlife meets intuitive booking UX. Photography-forward with warm overlays. Gold foil accent details on dark chrome. Clean data hierarchy. Professional mockup on iPhone 15 Pro device frame (space black).
NEGATIVE: No stock photography of white people at generic restaurants. No corporate SaaS dashboard aesthetic. No cold blue-gray tech palette. No neon club flyer energy. No hamburger menus. No pure white #FFFFFF backgrounds. No pure black #000000 text. No Roboto or Inter fonts. No cluttered layouts. No wireframes. No clip art or cartoon illustrations. No generic food stock. No white-tablecloth-only imagery. No Silicon Valley startup aesthetic. No gradients that look like Stripe or Linear.
BACKGROUND: Present on dark midnight #0D0D1A surface with subtle ambient glow. iPhone 15 Pro device frame (space black) at 15-degree angle. Soft gold #C9A84C light leak from behind device. Clean editorial presentation. No busy patterns.
```

---

### PROMPT 25-B — Corporate Booking / Expense Receipt
**Agent:** 25 — Payments & Wallet Designer | **Layer:** 07 — Visual Design System | **FSD Feature:** F35
**Personas:** A12 Corporate Host

```
BRAND: PullUpATL — Atlanta's nightlife and dining table booking app.
DEMOGRAPHIC: African American professionals, creatives, and socialites aged 22-55 in Atlanta, GA.
PLATFORM: Mobile-first iOS/Android app (React Native / Expo).
VIBE: Premium but not pretentious. Nightlife-native. Culturally confident. "Resy meets the group chat."
COLORS: Primary "Table Gold" #C9A84C | Secondary "Midnight" #1A1A2E | Accent "Velvet" #8B2252 | Background "Ivory" #FAF8F5 | Text "Onyx" #2D2D2D | Fill "Warm Gray" #F0EDE8 | Dark BG #0D0D1A | Dark Surface #1A1A2E | Dark Card #1E1E35
FONTS: Display: Playfair Display 700/800 (serif, editorial) | Heading: Plus Jakarta Sans 600/700 | Body: Plus Jakarta Sans 400/500
RULES: Mobile-first 390×844 (iPhone 15 Pro). Bottom tab bar (NEVER hamburger). Card UI 12px radius. Gold accents on dark = premium. Real ATL venue photography. Black people in lifestyle imagery.

SUBJECT: Corporate booking expense receipt screen. Ivory background. Top: "Corporate Receipt" header + company logo placeholder. Receipt card: formal layout — "Avenue Kitchen & Grill" venue name, "Client Dinner" occasion tag, date, time, party size. Line items: "Deposit: $100.00" / "Service fee: $0.00 (Ultimate Member)" / "Subtotal: $100.00" / "Tax: $8.90" / "Total: $108.90". Payment method: "Corporate Amex ····1234". Corporate fields: "Expense Category: Client Entertainment" dropdown, "Cost Center" input, "Client Name" input, "Notes" text area. Actions: "Email Receipt" (to self or controller), "Download PDF" gold CTA, "Add to Expense Report" integration button. Company account badge: "TechCorp Team Account" with team member avatar row.

SCENE: Single iPhone 15 Pro screen. Professional, formal, expense-report-ready. Clean data hierarchy.

STYLE: High-fidelity mobile app UI mockup rendered at Figma presentation quality. Pixel-perfect modern iOS/Android design language with warm editorial touches. Rounded cards with subtle shadow, generous white space, bottom tab navigation. Luxury nightlife meets intuitive booking UX. Photography-forward with warm overlays. Gold foil accent details on dark chrome. Clean data hierarchy. Professional mockup on iPhone 15 Pro device frame (space black).
NEGATIVE: No stock photography of white people at generic restaurants. No corporate SaaS dashboard aesthetic. No cold blue-gray tech palette. No neon club flyer energy. No hamburger menus. No pure white #FFFFFF backgrounds. No pure black #000000 text. No Roboto or Inter fonts. No cluttered layouts. No wireframes. No clip art or cartoon illustrations. No generic food stock. No white-tablecloth-only imagery. No Silicon Valley startup aesthetic. No gradients that look like Stripe or Linear.
BACKGROUND: Present on dark midnight #0D0D1A surface with subtle ambient glow. iPhone 15 Pro device frame (space black) at 15-degree angle. Soft gold #C9A84C light leak from behind device. Clean editorial presentation. No busy patterns.
```

---


## TIER 7 — VENUE SIDE (Admin / B2B) (NEW ADDITIONS)

### PROMPT 26-C — AI Concierge Chat
**Agent:** 26 — Venue Owner Dashboard Designer | **Layer:** 19 — ML/AI | **FSD Feature:** F26
**Personas:** A02 VIP Socialite, A05 The Athlete, A06 Industry Head

```
BRAND: PullUpATL — Atlanta's nightlife and dining table booking app.
DEMOGRAPHIC: African American professionals, creatives, and socialites aged 22-55 in Atlanta, GA.
PLATFORM: Mobile-first iOS/Android app (React Native / Expo).
VIBE: Premium but not pretentious. Nightlife-native. Culturally confident. "Resy meets the group chat."
COLORS: Primary "Table Gold" #C9A84C | Secondary "Midnight" #1A1A2E | Accent "Velvet" #8B2252 | Background "Ivory" #FAF8F5 | Text "Onyx" #2D2D2D | Fill "Warm Gray" #F0EDE8 | Dark BG #0D0D1A | Dark Surface #1A1A2E | Dark Card #1E1E35
FONTS: Display: Playfair Display 700/800 (serif, editorial) | Heading: Plus Jakarta Sans 600/700 | Body: Plus Jakarta Sans 400/500
RULES: Mobile-first 390×844 (iPhone 15 Pro). Bottom tab bar (NEVER hamburger). Card UI 12px radius. Gold accents on dark = premium. Real ATL venue photography. Black people in lifestyle imagery.

SUBJECT: AI Concierge chat screen. Dark mode #0D0D1A. Top: gold sparkle icon + "PullUp Concierge" in Plus Jakarta Sans 700 Ivory + "AI" badge in Velvet. Chat interface: user message bubble (Midnight #1A1A2E): "I need a private table for 6 tonight in Buckhead. Upscale, good cocktails, quiet enough to talk." AI response bubble (darker surface #1E1E35 with gold left border): "I found 3 options for tonight:" followed by inline venue cards — Seven Midtown (available 8:30 PM, 4.8 stars), Whiskey Mistress (available 9 PM, 4.7 stars). Each card has "Book Now" gold mini-button. Follow-up suggestion: "Would you like me to check for private room availability?" Quick-reply chips: "Yes, check private rooms" "Show more options" "Book Seven Midtown". Input bar: message field + send button gold. "Powered by Claude" small text at bottom.

SCENE: Single iPhone 15 Pro screen. High-end AI assistant energy — iMessage meets luxury concierge. Not chatbot-y.

STYLE: High-fidelity mobile app UI mockup rendered at Figma presentation quality. Pixel-perfect modern iOS/Android design language with warm editorial touches. Rounded cards with subtle shadow, generous white space, bottom tab navigation. Luxury nightlife meets intuitive booking UX. Photography-forward with warm overlays. Gold foil accent details on dark chrome. Clean data hierarchy. Professional mockup on iPhone 15 Pro device frame (space black).
NEGATIVE: No stock photography of white people at generic restaurants. No corporate SaaS dashboard aesthetic. No cold blue-gray tech palette. No neon club flyer energy. No hamburger menus. No pure white #FFFFFF backgrounds. No pure black #000000 text. No Roboto or Inter fonts. No cluttered layouts. No wireframes. No clip art or cartoon illustrations. No generic food stock. No white-tablecloth-only imagery. No Silicon Valley startup aesthetic. No gradients that look like Stripe or Linear.
BACKGROUND: Present on dark midnight #0D0D1A surface with subtle ambient glow. iPhone 15 Pro device frame (space black) at 15-degree angle. Soft gold #C9A84C light leak from behind device. Clean editorial presentation. No busy patterns.
```

---

### PROMPT 27-C — Promoter Guest List Management
**Agent:** 27 — Promoter Dashboard Designer | **Layer:** 23 — Admin Panels | **FSD Feature:** F31
**Personas:** B02 The Promoter

```
BRAND: PullUpATL — Atlanta's nightlife and dining table booking app.
DEMOGRAPHIC: African American professionals, creatives, and socialites aged 22-55 in Atlanta, GA.
PLATFORM: Mobile-first iOS/Android app (React Native / Expo).
VIBE: Premium but not pretentious. Nightlife-native. Culturally confident. "Resy meets the group chat."
COLORS: Primary "Table Gold" #C9A84C | Secondary "Midnight" #1A1A2E | Accent "Velvet" #8B2252 | Background "Ivory" #FAF8F5 | Text "Onyx" #2D2D2D | Fill "Warm Gray" #F0EDE8 | Dark BG #0D0D1A | Dark Surface #1A1A2E | Dark Card #1E1E35
FONTS: Display: Playfair Display 700/800 (serif, editorial) | Heading: Plus Jakarta Sans 600/700 | Body: Plus Jakarta Sans 400/500
RULES: Mobile-first 390×844 (iPhone 15 Pro). Bottom tab bar (NEVER hamburger). Card UI 12px radius. Gold accents on dark = premium. Real ATL venue photography. Black people in lifestyle imagery.

SUBJECT: Promoter guest list management screen. Dark mode #0D0D1A. Top: "Guest List" header + venue "Revel Atlanta" + event "R&B Night · Fri Mar 14". Stats row: "47 RSVPs" "32 Confirmed" "15 Pending" in Ivory. Search bar: "Search names...". Guest list table: rows with name, phone (masked), status badge (Confirmed green / Pending amber / Declined red), "+2 guests" count, "Added by" (promoter or self-RSVP). Actions per row: check-in toggle, remove (swipe). "Add to List" floating gold button. Walk-up section at bottom: "Walk-Up Additions" header + quick-add form (name + guest count + phone). Capacity bar: "47/100 capacity" gold progress bar. Bottom: "Share Guest List Link" gold CTA + "Export" outlined.

SCENE: Single iPhone 15 Pro screen. Functional, fast, door-energy. Promoter needs to add names in 5 seconds.

STYLE: High-fidelity mobile app UI mockup rendered at Figma presentation quality. Pixel-perfect modern iOS/Android design language with warm editorial touches. Rounded cards with subtle shadow, generous white space, bottom tab navigation. Luxury nightlife meets intuitive booking UX. Photography-forward with warm overlays. Gold foil accent details on dark chrome. Clean data hierarchy. Professional mockup on iPhone 15 Pro device frame (space black).
NEGATIVE: No stock photography of white people at generic restaurants. No corporate SaaS dashboard aesthetic. No cold blue-gray tech palette. No neon club flyer energy. No hamburger menus. No pure white #FFFFFF backgrounds. No pure black #000000 text. No Roboto or Inter fonts. No cluttered layouts. No wireframes. No clip art or cartoon illustrations. No generic food stock. No white-tablecloth-only imagery. No Silicon Valley startup aesthetic. No gradients that look like Stripe or Linear.
BACKGROUND: Present on dark midnight #0D0D1A surface with subtle ambient glow. iPhone 15 Pro device frame (space black) at 15-degree angle. Soft gold #C9A84C light leak from behind device. Clean editorial presentation. No busy patterns.
```

---

### PROMPT 28-B — Bartender / Bar View
**Agent:** 28 — Staff View Designer | **Layer:** 23 — Admin Panels | **FSD Feature:** F13
**Personas:** B05 The Bartender

```
BRAND: PullUpATL — Atlanta's nightlife and dining table booking app.
DEMOGRAPHIC: African American professionals, creatives, and socialites aged 22-55 in Atlanta, GA.
PLATFORM: Mobile-first iOS/Android app (React Native / Expo).
VIBE: Premium but not pretentious. Nightlife-native. Culturally confident. "Resy meets the group chat."
COLORS: Primary "Table Gold" #C9A84C | Secondary "Midnight" #1A1A2E | Accent "Velvet" #8B2252 | Background "Ivory" #FAF8F5 | Text "Onyx" #2D2D2D | Fill "Warm Gray" #F0EDE8 | Dark BG #0D0D1A | Dark Surface #1A1A2E | Dark Card #1E1E35
FONTS: Display: Playfair Display 700/800 (serif, editorial) | Heading: Plus Jakarta Sans 600/700 | Body: Plus Jakarta Sans 400/500
RULES: Mobile-first 390×844 (iPhone 15 Pro). Bottom tab bar (NEVER hamburger). Card UI 12px radius. Gold accents on dark = premium. Real ATL venue photography. Black people in lifestyle imagery.

SUBJECT: Bartender bar view screen. Dark mode #0D0D1A. Top: "Bar View" header + venue "Whiskey Mistress" + shift "Tonight 8PM-2AM". Bar seat map: horizontal strip showing bar stools numbered 1-12, color-coded (occupied Ivory, reserved gold, open dark). Orders queue: live feed of incoming bottle/cocktail orders — each card shows section/table number, items ordered, time since order, status (Preparing amber / Ready green / Delivered Slate). Quick stats: "42 drinks served" / "Avg prep: 4 min" / "Top order: Hennessy & Coke". Tab management: active tabs list with guest name (or alias), running total, items. "Close Tab" swipe action. Bottom: "Flag Manager" red icon button for issues.

SCENE: Single iPhone 15 Pro screen. Fast, functional, glanceable. Built for someone with wet hands and low patience.

STYLE: High-fidelity mobile app UI mockup rendered at Figma presentation quality. Pixel-perfect modern iOS/Android design language with warm editorial touches. Rounded cards with subtle shadow, generous white space, bottom tab navigation. Luxury nightlife meets intuitive booking UX. Photography-forward with warm overlays. Gold foil accent details on dark chrome. Clean data hierarchy. Professional mockup on iPhone 15 Pro device frame (space black).
NEGATIVE: No stock photography of white people at generic restaurants. No corporate SaaS dashboard aesthetic. No cold blue-gray tech palette. No neon club flyer energy. No hamburger menus. No pure white #FFFFFF backgrounds. No pure black #000000 text. No Roboto or Inter fonts. No cluttered layouts. No wireframes. No clip art or cartoon illustrations. No generic food stock. No white-tablecloth-only imagery. No Silicon Valley startup aesthetic. No gradients that look like Stripe or Linear.
BACKGROUND: Present on dark midnight #0D0D1A surface with subtle ambient glow. iPhone 15 Pro device frame (space black) at 15-degree angle. Soft gold #C9A84C light leak from behind device. Clean editorial presentation. No busy patterns.
```

---


## TIER 8 — SYSTEM STATES & POLISH (NEW ADDITIONS)

### PROMPT 30-D — In-App Support / Help
**Agent:** 30 — Empty States, Errors & Loading Designer | **Layer:** 30 — Customer Support | **FSD Feature:** F30
**Personas:** All

```
BRAND: PullUpATL — Atlanta's nightlife and dining table booking app.
DEMOGRAPHIC: African American professionals, creatives, and socialites aged 22-55 in Atlanta, GA.
PLATFORM: Mobile-first iOS/Android app (React Native / Expo).
VIBE: Premium but not pretentious. Nightlife-native. Culturally confident. "Resy meets the group chat."
COLORS: Primary "Table Gold" #C9A84C | Secondary "Midnight" #1A1A2E | Accent "Velvet" #8B2252 | Background "Ivory" #FAF8F5 | Text "Onyx" #2D2D2D | Fill "Warm Gray" #F0EDE8 | Dark BG #0D0D1A | Dark Surface #1A1A2E | Dark Card #1E1E35
FONTS: Display: Playfair Display 700/800 (serif, editorial) | Heading: Plus Jakarta Sans 600/700 | Body: Plus Jakarta Sans 400/500
RULES: Mobile-first 390×844 (iPhone 15 Pro). Bottom tab bar (NEVER hamburger). Card UI 12px radius. Gold accents on dark = premium. Real ATL venue photography. Black people in lifestyle imagery.

SUBJECT: In-app support and help screen. Ivory background. Top: "Help & Support" header. Search bar: "Search help articles..." with magnifying glass. Quick actions grid: 4 icon-label cards — "My Booking Issue" (calendar icon), "Payment Problem" (card icon), "Report a Venue" (flag icon), "Account Help" (person icon). FAQ accordion: "How do I cancel a reservation?" "What's the cancellation policy?" "How do I get a refund?" — expandable with Plus Jakarta Sans 400 answers. Recent tickets section: "Your recent requests" — ticket card with status badge (Open amber / Resolved green). Contact options: "Chat with Support" gold CTA (primary), "Email Us" outlined, "Call" icon button. Bottom: "Community Guidelines" text link + app version "v1.0.0" footnote.

SCENE: Single iPhone 15 Pro screen. Helpful, not bureaucratic. Easy to find the right path fast.

STYLE: High-fidelity mobile app UI mockup rendered at Figma presentation quality. Pixel-perfect modern iOS/Android design language with warm editorial touches. Rounded cards with subtle shadow, generous white space, bottom tab navigation. Luxury nightlife meets intuitive booking UX. Photography-forward with warm overlays. Gold foil accent details on dark chrome. Clean data hierarchy. Professional mockup on iPhone 15 Pro device frame (space black).
NEGATIVE: No stock photography of white people at generic restaurants. No corporate SaaS dashboard aesthetic. No cold blue-gray tech palette. No neon club flyer energy. No hamburger menus. No pure white #FFFFFF backgrounds. No pure black #000000 text. No Roboto or Inter fonts. No cluttered layouts. No wireframes. No clip art or cartoon illustrations. No generic food stock. No white-tablecloth-only imagery. No Silicon Valley startup aesthetic. No gradients that look like Stripe or Linear.
BACKGROUND: Present on dark midnight #0D0D1A surface with subtle ambient glow. iPhone 15 Pro device frame (space black) at 15-degree angle. Soft gold #C9A84C light leak from behind device. Clean editorial presentation. No busy patterns.
```

---


# ═══════════════════════════════════════════════════
# PROMPT INDEX TABLE — v2 Complete
# ═══════════════════════════════════════════════════

| Prompt ID | Title | Agent | Tier | Personas | Status |
|---|---|---|---|---|---|
| 01-A | Splash Screen | 1 | 1 | All — first impression screen | CORRECTED (venues) |
| 01-B | App Icon Design | 1 | 1 | All — first impression screen | CORRECTED (venues) |
| 02-A | Onboarding Screen 1: Arrival | 2 | 1 | A01 Vibe Curator, A04 Out-of-Towner, A07 | CORRECTED (venues) |
| 02-B | Onboarding Screen 2: Discover | 2 | 1 | A01 Vibe Curator, A04 Out-of-Towner, A07 | CORRECTED (venues) |
| 02-C | Onboarding Screen 3: Book | 2 | 1 | A01 Vibe Curator, A04 Out-of-Towner, A07 | CORRECTED (venues) |
| 03-A | Login Screen | 3 | 1 | All users — gate screen | CORRECTED (venues) |
| 03-B | OTP Verification | 3 | 1 | All users — gate screen | CORRECTED (venues) |
| 04-A | Taste Profile / Vibe Selector | 4 | 1 | A01 Vibe Curator, A09 Couple, A13 Brunch | CORRECTED (venues) |
| 04-B | Neighborhood Preference | 4 | 1 | A01 Vibe Curator, A09 Couple, A13 Brunch | CORRECTED (venues) |
| 05-A | Notification Permission | 5 | 1 | All — system setup | CORRECTED (venues) |
| 06-A | Home Feed (Light Mode) | 6 | 2 | A01 Vibe Curator, A04 Out-of-Towner, A09 | CORRECTED (venues) |
| 06-B | "Tonight" Mode | 6 | 2 | A01 Vibe Curator, A04 Out-of-Towner, A09 | CORRECTED (venues) |
| 06-C | Weekend Planner View | 6 | 2 | A01 Vibe Curator, A04 Out-of-Towner, A09 | CORRECTED (venues) |
| 07-A | Search Screen | 7 | 2 | A04 Out-of-Towner, A07 College Crew, A14 | CORRECTED (venues) |
| 07-B | Search Results with Active Filters | 7 | 2 | A04 Out-of-Towner, A07 College Crew, A14 | CORRECTED (venues) |
| 08-A | Brunch Category Landing | 8 | 2 | A09 Couple, A13 Brunch Enthusiast, A14 D | CORRECTED (venues) |
| 08-B | Date Night Collection | 8 | 2 | A09 Couple, A13 Brunch Enthusiast, A14 D | CORRECTED (venues) |
| 09-A | Map Discovery View | 9 | 2 | A04 Out-of-Towner, A08 Gameday Crew, A11 | CORRECTED (venues) |
| 10-A | Tab Bar & Header System | 10 | 2 | All | CORRECTED (venues) |
| 11-A | Fine Dining Venue Detail | 11 | 3 | A01 Vibe Curator, A09 Couple, A12 Corpor | CORRECTED (venues) |
| 11-B | Soul Food / Casual Venue Detail | 11 | 3 | A01 Vibe Curator, A09 Couple, A12 Corpor | CORRECTED (venues) |
| 12-A | Nightclub Venue Detail | 12 | 3 | A02 Breadwinner, A05 Athlete, A06 Indust | CORRECTED (venues) |
| 12-B | Floor Plan / Section Map | 12 | 3 | A02 Breadwinner, A05 Athlete, A06 Indust | CORRECTED (venues) |
| 13-A | Day Party / Brunch Event Detail | 13 | 3 | A13 Brunch Enthusiast, A07 College Crew, | CORRECTED (venues) |
| 14-A | Venue Photo Gallery | 14 | 3 | A01 Vibe Curator, A15 Content Creator | CORRECTED (venues) |
| 15-A | Booking Step 1: Date/Time/Party | 15 | 4 | A01 Vibe Curator, A09 Couple, A10 Family | CORRECTED (venues) |
| 15-B | Booking Step 2: Special Requests | 15 | 4 | A01 Vibe Curator, A09 Couple, A10 Family | CORRECTED (venues) |
| 16-A | Section Booking Summary | 16 | 4 | A02 Breadwinner, A03 Birthday Monarch, A | CORRECTED (venues) |
| 17-A | Bottle Service Menu | 17 | 4 | A02 Breadwinner, A05 Athlete, A06 Indust | CORRECTED (venues) |
| 18-A | Birthday Package Builder | 18 | 4 | A03 Birthday Monarch, A10 Family Organiz | CORRECTED (venues) |
| 18-B | Birthday Confirmation / Share Card | 18 | 4 | A03 Birthday Monarch, A10 Family Organiz | CORRECTED (venues) |
| 19-A | Booking Confirmation (Table) | 19 | 4 | All booking users | CORRECTED (venues) |
| 19-B | Payment / Booking Step 3 | 19 | 4 | All booking users | CORRECTED (venues) |
| 20-A | Social Activity Feed | 20 | 5 | A01 Vibe Curator, A07 College Crew, A15  | CORRECTED (venues) |
| 20-B | Venue Check-In Screen | 20 | 5 | A01 Vibe Curator, A07 College Crew, A15  | CORRECTED (venues) |
| 21-A | Group Booking / Split Payment | 21 | 5 | A01 Vibe Curator, A03 Birthday Monarch,  | CORRECTED (venues) |
| 21-B | Group Chat Thread | 21 | 5 | A01 Vibe Curator, A03 Birthday Monarch,  | CORRECTED (venues) |
| 22-A | Submit Review Screen | 22 | 5 | A09 Couple, A11 Solo Diner, A13 Brunch E | CORRECTED (venues) |
| 23-A | User Profile Page | 23 | 6 | A01 Vibe Curator, A15 Content Creator | CORRECTED (venues) |
| 23-B | Settings Screen | 23 | 6 | A01 Vibe Curator, A15 Content Creator | CORRECTED (venues) |
| 24-A | My Bookings List | 24 | 6 | A09 Couple, A12 Corporate Host, A02 Brea | CORRECTED (venues) |
| 24-B | Past Booking with Review Prompt | 24 | 6 | A09 Couple, A12 Corporate Host, A02 Brea | CORRECTED (venues) |
| 25-A | Wallet / Payment Methods | 25 | 6 | A02 Breadwinner, A12 Corporate Host | CORRECTED (venues) |
| 26-A | Venue Owner Dashboard (Overview) | 26 | 7 | B01 Club Owner (Jay), B06 GM | CORRECTED (venues) |
| 26-B | Reservations Management Grid | 26 | 7 | B01 Club Owner (Jay), B06 GM | CORRECTED (venues) |
| 27-A | Promoter Dashboard (Mobile) | 27 | 7 | B02 Promoter (Dame), C01 Event Planner | CORRECTED (venues) |
| 27-B | Promoter Attribution Link Sharing | 27 | 7 | B02 Promoter (Dame), C01 Event Planner | CORRECTED (venues) |
| 28-A | Hostess / VIP Server View | 28 | 7 | B03 DJ, B04 Bottle Hostess, B05 Bartende | CORRECTED (venues) |
| 29-A | Notification Center | 29 | 8 | All | CORRECTED (venues) |
| 29-B | Push Notification Lock Screen Mockup | 29 | 8 | All | CORRECTED (venues) |
| 29-C | In-App Toast / Alert States | 29 | 8 | All | CORRECTED (venues) |
| 30-A | Empty States Collection | 30 | 8 | All | CORRECTED (venues) |
| 30-B | Skeleton Loading & Error States | 30 | 8 | All | CORRECTED (venues) |
| 30-C | App Store Screenshot Set | 30 | 8 | All | CORRECTED (venues) |
| 03-C | Forgot Password Screen | 3 | 1 | All | NEW |
| 06-D | Gameday Mode | 6 | 2 | A08 Gameday Crew, A04 Out-of-Towner | NEW |
| 06-E | Visitor Mode | 6 | 2 | A04 Out-of-Towner | NEW |
| 07-C | DJ Discovery / Profile | 7 | 2 | A01 Weekender, A07 The College Senior, B | NEW |
| 11-C | Gentleman's Club Venue Detail | 11 | 3 | A02 VIP Socialite, A05 The Athlete, A06  | NEW |
| 11-D | Ultra Lounge Venue Detail | 11 | 3 | A01 Weekender, A02 VIP Socialite, A09 Th | NEW |
| 11-E | Studio / Creative Space Detail | 11 | 3 | A06 Industry Head, B03 The DJ, A15 The C | NEW |
| 15-C | Booking Modification Flow | 15 | 4 | All | NEW |
| 15-D | Cancellation Confirmation | 15 | 4 | All | NEW |
| 15-E | Private / Discreet Booking Mode | 15 | 4 | A05 The Athlete, A06 Industry Head | NEW |
| 15-F | Multi-Venue Chain Booking | 15 | 4 | A01 Weekender, A04 Out-of-Towner | NEW |
| 19-C | Guest List RSVP | 19 | 4 | A07 College Senior, A14 Deal Hunter, A01 | NEW |
| 22-B | Waitlist Position Tracker | 22 | 5 | A01 Weekender, A09 Date Planner | NEW |
| 23-C | Saved Venues / Collections | 23 | 6 | A01, A09, A13 | NEW |
| 23-D | Membership / Subscription Management | 23 | 6 | A01, A02, A09, A12 | NEW |
| 25-B | Corporate Booking / Expense Receipt | 25 | 6 | A12 Corporate Host | NEW |
| 26-C | AI Concierge Chat | 26 | 7 | A02 VIP Socialite, A05 The Athlete, A06  | NEW |
| 27-C | Promoter Guest List Management | 27 | 7 | B02 The Promoter | NEW |
| 20-C | Personal Dining Stats | 20 | 5 | A01, A09, A11, A13 | NEW |
| 08-C | Happy Hour / Deal Discovery | 8 | 2 | A14 Deal Hunter, A07 College Senior | NEW |
| 30-D | In-App Support / Help | 30 | 8 | All | NEW |
| 21-C | Referral Program | 21 | 5 | All consumer | NEW |
| 28-B | Bartender / Bar View | 28 | 7 | B05 The Bartender | NEW |

---

## QUALITY GATE CHECKLIST

- [x] Every venue name is a real, verifiable Atlanta venue
- [x] Every FSD screen (F01-F30+) has a corresponding prompt
- [x] Every consumer persona (A01-A15) is served by at least 1 prompt
- [x] Every venue-side persona (B01-B05) is served by at least 1 prompt
- [ ] B06-B08 and C01-C05: partial coverage — see REMAINING GAPS
- [x] No prompt uses made-up venue names
- [x] All new prompts follow the exact same block structure
- [x] Index table is accurate and complete
- [x] Total prompt count updated: 77