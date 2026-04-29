# PullUpATL — 30x Design Agent Google Stitch Prompt Manifest
## Version: 1.0 | Total Prompts: 68 | Agents: 30
## Brand: PullUpATL | Repo: atl-table-booking-app
## Demographic: African American 22-55, Atlanta Metro
## Prompt Architecture: Preamble → Subject → Scene → Style → Negative → Background

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
BRAND: PullUpATL — Atlanta’s nightlife and dining table booking app.
DEMOGRAPHIC: African American professionals, creatives, and socialites aged 22-55 in Atlanta, GA.
PLATFORM: Mobile-first iOS/Android app (React Native / Expo).
VIBE: Premium but not pretentious. Nightlife-native. Culturally confident. “Resy meets the group chat.”
COLORS: Primary “Table Gold” #C9A84C | Secondary “Midnight” #1A1A2E | Accent “Velvet” #8B2252 | Background “Ivory” #FAF8F5 | Text “Onyx” #2D2D2D | Fill “Warm Gray” #F0EDE8 | Dark BG #0D0D1A | Dark Surface #1A1A2E | Dark Card #1E1E35
FONTS: Display: Playfair Display 700/800 (serif, editorial) | Heading: Plus Jakarta Sans 600/700 | Body: Plus Jakarta Sans 400/500
RULES: Mobile-first 390×844 (iPhone 15 Pro). Bottom tab bar (NEVER hamburger). Card UI 12px radius. Gold accents on dark = premium. Real ATL venue photography. Black people in lifestyle imagery.

SUBJECT: PullUpATL app splash screen. Centered logo mark — a stylized table silhouette with a subtle crown/flame detail at the top, rendered in Table Gold #C9A84C on deep Midnight #1A1A2E background. Below the mark: "PullUpATL" wordmark in Playfair Display 800, gold on dark. Frozen gold particle burst radiating outward from logo center. Bottom center: "Your seat at the culture." in Plus Jakarta Sans 400, muted #9CA3AF.

SCENE: Single iPhone 15 Pro screen, portrait. The splash is a velvet-rope moment — dark, warm, magnetic. Faint Velvet #8B2252 gradient glow at bottom edge. No other UI. Pure brand.

STYLE: High-fidelity mobile app UI mockup rendered at Figma presentation quality. Pixel-perfect modern iOS/Android design language with warm editorial touches. Rounded cards with subtle shadow, generous white space, bottom tab navigation. Luxury nightlife meets intuitive booking UX. Photography-forward with warm overlays. Gold foil accent details on dark chrome. Clean data hierarchy. Professional mockup on iPhone 15 Pro device frame (space black).
NEGATIVE: No stock photography of white people at generic restaurants. No corporate SaaS dashboard aesthetic. No cold blue-gray tech palette. No neon club flyer energy. No hamburger menus. No pure white #FFFFFF backgrounds. No pure black #000000 text. No Roboto or Inter fonts. No cluttered layouts. No wireframes. No clip art or cartoon illustrations. No generic food stock. No white-tablecloth-only imagery. No Silicon Valley startup aesthetic. No gradients that look like Stripe or Linear.
BACKGROUND: Present on dark midnight #0D0D1A surface with subtle ambient glow. iPhone 15 Pro device frame (space black) at 15-degree angle. Soft gold #C9A84C light leak from behind device. Clean editorial presentation. No busy patterns.
```

### PROMPT 01-B — App Icon Design

```
BRAND: PullUpATL — Atlanta’s nightlife and dining table booking app.
DEMOGRAPHIC: African American professionals, creatives, and socialites aged 22-55 in Atlanta, GA.
PLATFORM: Mobile-first iOS/Android app (React Native / Expo).
VIBE: Premium but not pretentious. Nightlife-native. Culturally confident. “Resy meets the group chat.”
COLORS: Primary “Table Gold” #C9A84C | Secondary “Midnight” #1A1A2E | Accent “Velvet” #8B2252 | Background “Ivory” #FAF8F5 | Text “Onyx” #2D2D2D | Fill “Warm Gray” #F0EDE8 | Dark BG #0D0D1A | Dark Surface #1A1A2E | Dark Card #1E1E35
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
BRAND: PullUpATL — Atlanta’s nightlife and dining table booking app.
DEMOGRAPHIC: African American professionals, creatives, and socialites aged 22-55 in Atlanta, GA.
PLATFORM: Mobile-first iOS/Android app (React Native / Expo).
VIBE: Premium but not pretentious. Nightlife-native. Culturally confident. “Resy meets the group chat.”
COLORS: Primary “Table Gold” #C9A84C | Secondary “Midnight” #1A1A2E | Accent “Velvet” #8B2252 | Background “Ivory” #FAF8F5 | Text “Onyx” #2D2D2D | Fill “Warm Gray” #F0EDE8 | Dark BG #0D0D1A | Dark Surface #1A1A2E | Dark Card #1E1E35
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
BRAND: PullUpATL — Atlanta’s nightlife and dining table booking app.
DEMOGRAPHIC: African American professionals, creatives, and socialites aged 22-55 in Atlanta, GA.
PLATFORM: Mobile-first iOS/Android app (React Native / Expo).
VIBE: Premium but not pretentious. Nightlife-native. Culturally confident. “Resy meets the group chat.”
COLORS: Primary “Table Gold” #C9A84C | Secondary “Midnight” #1A1A2E | Accent “Velvet” #8B2252 | Background “Ivory” #FAF8F5 | Text “Onyx” #2D2D2D | Fill “Warm Gray” #F0EDE8 | Dark BG #0D0D1A | Dark Surface #1A1A2E | Dark Card #1E1E35
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
BRAND: PullUpATL — Atlanta’s nightlife and dining table booking app.
DEMOGRAPHIC: African American professionals, creatives, and socialites aged 22-55 in Atlanta, GA.
PLATFORM: Mobile-first iOS/Android app (React Native / Expo).
VIBE: Premium but not pretentious. Nightlife-native. Culturally confident. “Resy meets the group chat.”
COLORS: Primary “Table Gold” #C9A84C | Secondary “Midnight” #1A1A2E | Accent “Velvet” #8B2252 | Background “Ivory” #FAF8F5 | Text “Onyx” #2D2D2D | Fill “Warm Gray” #F0EDE8 | Dark BG #0D0D1A | Dark Surface #1A1A2E | Dark Card #1E1E35
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
**Agent:** 3 — Authentication Architect | **Layer:** 16 — Security | **FSD Feature:** F02
**Personas:** All users

```
AGENT CONTEXT: You are the Authentication Architect. Your goal is to design a secure yet frictionless entry point for the PullUpATL app. Focus on mobile-first clarity, fast interaction, and cultural warmth.

BRAND PREAMBLE:
BRAND: PullUpATL — Atlanta's nightlife and dining table booking app.
DEMOGRAPHIC: African American professionals, creatives, and socialites aged 22-55 in Atlanta, GA.
PLATFORM: Mobile-first iOS/Android app (React Native / Expo).
VIBE: Premium but not pretentious. Nightlife-native. Culturally confident. "Resy meets the group chat."

SUBJECT: Login screen with phone-first entry.
SCENE: This is the user's first interaction post-onboarding. The screen needs to feel secure yet inviting.
TARGET PERSONAS: All 30 personas use this screen.
LAYOUT SPEC: 
- Top 30%: Brand space (Midnight #1A1A2E).
- Bottom 70%: Form space (Ivory #FAF8F5 with 24px top-rounded corners).
- Centered brand mark in brand space.
- Grouped social logins at the bottom of the form space.
RESPONSIVE CONTEXT: Mobile-first 390×844 (iPhone 15 Pro).
COMPONENT TARGET: apps/mobile/app/(auth)/login.tsx

BRAND COLORS: Primary "Table Gold" #C9A84C | Secondary "Midnight" #1A1A2E | Accent "Velvet" #8B2252 | Background "Ivory" #FAF8F5 | Text "Onyx" #2D2D2D | Fill "Warm Gray" #F0EDE8
DESIGN TOKENS: Card UI 12px radius. Spacing unit 4px. Gaps 16px/24px.
VARIANT DIRECTIVE: Refined production-ready UI.

SUBJECT DETAIL: Login screen. Top third: Midnight #1A1A2E background with centered PullUpATL wordmark in Playfair Display 800, Table Gold. Below: "Welcome back." in Plus Jakarta Sans 500, Ivory. Bottom two-thirds: Ivory #FAF8F5 form area with rounded top corners 24px. Phone number input field with US flag prefix. "Continue" gold CTA button. Divider "or" with thin lines. Social buttons: "Continue with Google" (outlined), "Continue with Apple" (filled black). Bottom: "Don't have an account? Sign up" — "Sign up" in gold.

STYLE: High-fidelity mobile app UI mockup rendered at Figma presentation quality. Pixel-perfect modern iOS/Android design language with warm editorial touches. Rounded cards with subtle shadow, generous white space, bottom tab navigation. Luxury nightlife meets intuitive booking UX. Photography-forward with warm overlays. Gold foil accent details on dark chrome. Clean data hierarchy. Professional mockup on iPhone 15 Pro device frame (space black).
NEGATIVE: No stock photography of white people at generic restaurants. No corporate SaaS dashboard aesthetic. No cold blue-gray tech palette. No neon club flyer energy. No hamburger menus. No pure white #FFFFFF backgrounds. No pure black #000000 text. No Roboto or Inter fonts. No cluttered layouts. No wireframes. No clip art or cartoon illustrations. No generic food stock. No white-tablecloth-only imagery. No Silicon Valley startup aesthetic. No gradients that look like Stripe or Linear.
BACKGROUND: Present on dark midnight #0D0D1A surface with subtle ambient glow. iPhone 15 Pro device frame (space black) at 15-degree angle. Soft gold #C9A84C light leak from behind device. Clean editorial presentation. No busy patterns.
```

### PROMPT 03-B — OTP Verification
**Agent:** 3 — Authentication Architect | **Layer:** 16 — Security | **FSD Feature:** F02
**Personas:** All users

```
AGENT CONTEXT: You are the Authentication Architect. Your goal is to design a high-conversion OTP verification flow. Ensure the input boxes are large and touch-friendly for mobile socialites in a hurry.

BRAND PREAMBLE:
BRAND: PullUpATL — Atlanta's nightlife and dining table booking app.
DEMOGRAPHIC: African American professionals, creatives, and socialites aged 22-55 in Atlanta, GA.
PLATFORM: Mobile-first iOS/Android app (React Native / Expo).
VIBE: Premium but not pretentious. Nightlife-native. Culturally confident. "Resy meets the group chat."

SUBJECT: 6-digit OTP verification screen.
SCENE: The user has just entered their phone number and is waiting for a text.
TARGET PERSONAS: All users.
LAYOUT SPEC:
- Clean ivory background.
- Top: Back arrow.
- Center: 6-box input row (horizontal).
- Bottom: Resend logic + Verify CTA.
RESPONSIVE CONTEXT: Mobile-first 390×844 (iPhone 15 Pro).
COMPONENT TARGET: apps/mobile/app/(auth)/phone-verify.tsx

BRAND COLORS: Primary "Table Gold" #C9A84C | Secondary "Midnight" #1A1A2E | Accent "Velvet" #8B2252 | Background "Ivory" #FAF8F5 | Text "Onyx" #2D2D2D | Fill "Warm Gray" #F0EDE8
DESIGN TOKENS: Radius 12px for input boxes. Gaps 12px between digits. 
VARIANT DIRECTIVE: Focus on clarity and input state visibility.

SUBJECT DETAIL: OTP verification screen. Ivory background. Top: back arrow. Headline "Enter your code" in Plus Jakarta Sans 700, Onyx. Subhead "We sent a 6-digit code to (404) ***-7821" in Slate. Center: six individual digit input boxes in a row — large, rounded 12px, Warm Gray border. First three filled with numbers in Onyx, cursor blinking in fourth box, last two empty. Below: "Resend code in 0:42" countdown in Slate. "Use a different number" text link in gold. Bottom: "Verify" gold CTA (disabled state until all 6 digits entered — shown with reduced opacity).

STYLE: High-fidelity mobile app UI mockup rendered at Figma presentation quality. Pixel-perfect modern iOS/Android design language with warm editorial touches. Rounded cards with subtle shadow, generous white space, bottom tab navigation. Luxury nightlife meets intuitive booking UX. Photography-forward with warm overlays. Gold foil accent details on dark chrome. Clean data hierarchy. Professional mockup on iPhone 15 Pro device frame (space black).
NEGATIVE: No stock photography of white people at generic restaurants. No corporate SaaS dashboard aesthetic. No cold blue-gray tech palette. No neon club flyer energy. No hamburger menus. No pure white #FFFFFF backgrounds. No pure black #000000 text. No Roboto or Inter fonts. No cluttered layouts. No wireframes. No clip art or cartoon illustrations. No generic food stock. No white-tablecloth-only imagery. No Silicon Valley startup aesthetic. No gradients that look like Stripe or Linear.
BACKGROUND: Present on dark midnight #0D0D1A surface with subtle ambient glow. iPhone 15 Pro device frame (space black) at 15-degree angle. Soft gold #C9A84C light leak from behind device. Clean editorial presentation. No busy patterns.
```

### PROMPT 03-C — Forgot Password Screen
**Agent:** 3 — Authentication Architect | **Layer:** 16 — Security | **FSD Feature:** F02
**Personas:** All users

```
AGENT CONTEXT: You are the Authentication Architect. Design a simple, reassuring screen for password recovery. Use minimal elements to reduce cognitive load during a high-friction user event.

BRAND PREAMBLE:
BRAND: PullUpATL — Atlanta's nightlife and dining table booking app.
DEMOGRAPHIC: African American professionals, creatives, and socialites aged 22-55 in Atlanta, GA.
PLATFORM: Mobile-first iOS/Android app (React Native / Expo).
VIBE: Premium but not pretentious. Nightlife-native. Culturally confident. "Resy meets the group chat."

SUBJECT: Email-based password recovery screen.
SCENE: The user has forgotten their password and needs to receive a reset link.
TARGET PERSONAS: All users.
LAYOUT SPEC:
- Single-column form.
- Iconic illustration for recovery.
- Large input for email.
RESPONSIVE CONTEXT: Mobile-first 390×844 (iPhone 15 Pro).
COMPONENT TARGET: apps/mobile/app/(auth)/forgot-password.tsx

BRAND COLORS: Primary "Table Gold" #C9A84C | Secondary "Midnight" #1A1A2E | Accent "Velvet" #8B2252 | Background "Ivory" #FAF8F5 | Text "Onyx" #2D2D2D | Fill "Warm Gray" #F0EDE8
DESIGN TOKENS: Input field radius 12px. CTA full width.
VARIANT DIRECTIVE: Minimalist and functional.

SUBJECT DETAIL: Forgot password screen. Ivory background. Top: back arrow + "Reset Password" header. Illustration: stylized gold key icon on Midnight circle. Copy: "Enter the email linked to your account and we'll send a reset link" in Plus Jakarta Sans 400. Email input field with envelope icon. "Send Reset Link" gold CTA full width. Below: "Back to Login" text link in Slate. Clean single-purpose screen.

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
BRAND: PullUpATL — Atlanta’s nightlife and dining table booking app.
DEMOGRAPHIC: African American professionals, creatives, and socialites aged 22-55 in Atlanta, GA.
PLATFORM: Mobile-first iOS/Android app (React Native / Expo).
VIBE: Premium but not pretentious. Nightlife-native. Culturally confident. “Resy meets the group chat.”
COLORS: Primary “Table Gold” #C9A84C | Secondary “Midnight” #1A1A2E | Accent “Velvet” #8B2252 | Background “Ivory” #FAF8F5 | Text “Onyx” #2D2D2D | Fill “Warm Gray” #F0EDE8 | Dark BG #0D0D1A | Dark Surface #1A1A2E | Dark Card #1E1E35
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
BRAND: PullUpATL — Atlanta’s nightlife and dining table booking app.
DEMOGRAPHIC: African American professionals, creatives, and socialites aged 22-55 in Atlanta, GA.
PLATFORM: Mobile-first iOS/Android app (React Native / Expo).
VIBE: Premium but not pretentious. Nightlife-native. Culturally confident. “Resy meets the group chat.”
COLORS: Primary “Table Gold” #C9A84C | Secondary “Midnight” #1A1A2E | Accent “Velvet” #8B2252 | Background “Ivory” #FAF8F5 | Text “Onyx” #2D2D2D | Fill “Warm Gray” #F0EDE8 | Dark BG #0D0D1A | Dark Surface #1A1A2E | Dark Card #1E1E35
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
BRAND: PullUpATL — Atlanta’s nightlife and dining table booking app.
DEMOGRAPHIC: African American professionals, creatives, and socialites aged 22-55 in Atlanta, GA.
PLATFORM: Mobile-first iOS/Android app (React Native / Expo).
VIBE: Premium but not pretentious. Nightlife-native. Culturally confident. “Resy meets the group chat.”
COLORS: Primary “Table Gold” #C9A84C | Secondary “Midnight” #1A1A2E | Accent “Velvet” #8B2252 | Background “Ivory” #FAF8F5 | Text “Onyx” #2D2D2D | Fill “Warm Gray” #F0EDE8 | Dark BG #0D0D1A | Dark Surface #1A1A2E | Dark Card #1E1E35
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
**Agent:** 6 — Discovery Feed Designer | **Layer:** 05 — Information Architecture | **FSD Feature:** F03
**Personas:** A01, A04, A09

```
AGENT CONTEXT: You are the Discovery Feed Designer. Create an engaging, photography-forward home screen that surfaces personalized venue recommendations. Focus on high-fidelity card design and scannable filters.

BRAND PREAMBLE:
BRAND: PullUpATL — Atlanta's nightlife and dining table booking app.
DEMOGRAPHIC: African American professionals, creatives, and socialites aged 22-55 in Atlanta, GA.
PLATFORM: Mobile-first iOS/Android app (React Native / Expo).
VIBE: Premium but not pretentious. Nightlife-native. Culturally confident. "Resy meets the group chat."

SUBJECT: Main discovery feed (home screen).
SCENE: This is the primary destination for users to find their next move. The feed must feel alive and culturally relevant.
TARGET PERSONAS: A01 Vibe Curator, A04 Out-of-Towner, A09 Couple.
LAYOUT SPEC:
- Sticky header with location selector.
- Horizontal scroll of filter chips.
- Vertical scroll of 3:2 aspect ratio venue cards.
- Bottom tab bar persistent.
RESPONSIVE CONTEXT: Mobile-first 390×844 (iPhone 15 Pro).
COMPONENT TARGET: apps/mobile/app/(tabs)/discover/index.tsx

BRAND COLORS: Primary "Table Gold" #C9A84C | Secondary "Midnight" #1A1A2E | Background "Ivory" #FAF8F5 | Text "Onyx" #2D2D2D | Fill "Warm Gray" #F0EDE8
DESIGN TOKENS: Card radius 12px. Spacing unit 4px. Card shadow MD.
VARIANT DIRECTIVE: Production-ready polished UI.

SUBJECT DETAIL: Main discovery feed (home screen). Top: greeting "What's the move, Dame?" in Plus Jakarta Sans 700, Onyx, left-aligned. Location pill: map pin icon + "Midtown" dropdown. Horizontal scroll of filter chips: "All" (active — Midnight fill, Ivory text), "Tonight" "This Weekend" "Restaurants" "Nightlife" "Brunch" "Date Night" (inactive — Warm Gray fill). Main content: vertical scroll of venue cards. Each card: full-width photo (ATL restaurant interior, warm lighting, Black diners), 12px rounded corners, bottom gradient to dark. Overlay: venue name Plus Jakarta Sans 700 white, cuisine + neighborhood "Japanese · Buckhead", gold star rating 4.8, price "$$$$". Second card partially visible to encourage scroll. Bottom tab bar: 5 icons on frosted Midnight — Discover (active gold), Search, Book, Social, Profile.

STYLE: High-fidelity mobile app UI mockup rendered at Figma presentation quality. Pixel-perfect modern iOS/Android design language with warm editorial touches. Rounded cards with subtle shadow, generous white space, bottom tab navigation. Luxury nightlife meets intuitive booking UX. Photography-forward with warm overlays. Gold foil accent details on dark chrome. Clean data hierarchy. Professional mockup on iPhone 15 Pro device frame (space black).
NEGATIVE: No stock photography of white people at generic restaurants. No corporate SaaS dashboard aesthetic. No cold blue-gray tech palette. No neon club flyer energy. No hamburger menus. No pure white #FFFFFF backgrounds. No pure black #000000 text. No Roboto or Inter fonts. No cluttered layouts. No wireframes. No clip art or cartoon illustrations. No generic food stock. No white-tablecloth-only imagery. No Silicon Valley startup aesthetic. No gradients that look like Stripe or Linear.
BACKGROUND: Present on dark midnight #0D0D1A surface with subtle ambient glow. iPhone 15 Pro device frame (space black) at 15-degree angle. Soft gold #C9A84C light leak from behind device. Clean editorial presentation. No busy patterns.
```

### PROMPT 06-B — "Tonight" Mode
**Agent:** 6 — Discovery Feed Designer | **Layer:** 05 — Information Architecture | **FSD Feature:** F03
**Personas:** A01, A04, A09

```
AGENT CONTEXT: You are the Discovery Feed Designer. Focus on real-time urgency and nighttime energy. Use a high-contrast dark theme to represent "tonight" and FOMO-driven elements like occupancy bars.

BRAND PREAMBLE:
BRAND: PullUpATL — Atlanta's nightlife and dining table booking app.
DEMOGRAPHIC: African American professionals, creatives, and socialites aged 22-55 in Atlanta, GA.
PLATFORM: Mobile-first iOS/Android app (React Native / Expo).
VIBE: Premium but not pretentious. Nightlife-native. Culturally confident. "Resy meets the group chat."

SUBJECT: Discovery feed filtered to "Tonight" (Dark Mode).
SCENE: Users check this at 9 PM to see where the party is right now.
TARGET PERSONAS: A01 Vibe Curator, A05 Athlete (VIP needs), A07 College Senior.
LAYOUT SPEC:
- Dark background #0D0D1A.
- Event-forward card format.
- Live occupancy indicators (amber/green/red).
- "Tonight's Pick" hero banner at top.
RESPONSIVE CONTEXT: Mobile-first 390×844 (iPhone 15 Pro).
COMPONENT TARGET: apps/mobile/app/(tabs)/discover/index.tsx (Tonight variant)

BRAND COLORS: Primary "Table Gold" #C9A84C | Dark BG #0D0D1A | Dark Card #1E1E35 | Accent "Velvet" #8B2252
DESIGN TOKENS: radius 12px. Gaps 16px.
VARIANT DIRECTIVE: Moody, high-energy nighttime UI.

SUBJECT DETAIL: Discovery feed filtered to "Tonight" — showing what's happening right now. Dark mode activated. Background #0D0D1A. Top: "Tonight in ATL" in Playfair Display 700, Ivory. Current time "9:47 PM" + live dot pulsing in green. Cards shift to event-forward format: venue photo with event overlay — "DJ Trauma Live" at Havana Nightclub ATL, "R&B Night" at Revel Atlanta. Each card shows: event photo (DJ, crowd, performer), venue name, event title in gold, time "10 PM - 2 AM", cover/minimum "$40 cover" or "Free w/ RSVP", live occupancy indicator bar (70% full — amber). "Book Now" mini gold button on each card. Featured banner at top: "TONIGHT'S PICK" with one hero event card, larger, with Velvet #8B2252 border.

STYLE: High-fidelity mobile app UI mockup rendered at Figma presentation quality. Pixel-perfect modern iOS/Android design language with warm editorial touches. Rounded cards with subtle shadow, generous white space, bottom tab navigation. Luxury nightlife meets intuitive booking UX. Photography-forward with warm overlays. Gold foil accent details on dark chrome. Clean data hierarchy. Professional mockup on iPhone 15 Pro device frame (space black).
NEGATIVE: No stock photography of white people at generic restaurants. No corporate SaaS dashboard aesthetic. No cold blue-gray tech palette. No neon club flyer energy. No hamburger menus. No pure white #FFFFFF backgrounds. No pure black #000000 text. No Roboto or Inter fonts. No cluttered layouts. No wireframes. No clip art or cartoon illustrations. No generic food stock. No white-tablecloth-only imagery. No Silicon Valley startup aesthetic. No gradients that look like Stripe or Linear.
BACKGROUND-DARK: Same device frame on #0D0D1A surface. Subtle Velvet #8B2252 ambient glow behind device suggesting VIP energy. Faint gold particle effect in negative space.
```

### PROMPT 06-C — Weekend Planner View
**Agent:** 6 — Discovery Feed Designer | **Layer:** 05 — Information Architecture | **FSD Feature:** F03
**Personas:** A01, A04, A09

```
AGENT CONTEXT: You are the Discovery Feed Designer. Create a chronological "planner" view that helps users map out their Friday through Sunday. Focus on multi-day scannability.

BRAND PREAMBLE:
BRAND: PullUpATL — Atlanta's nightlife and dining table booking app.
DEMOGRAPHIC: African American professionals, creatives, and socialites aged 22-55 in Atlanta, GA.
PLATFORM: Mobile-first iOS/Android app (React Native / Expo).
VIBE: Premium but not pretentious. Nightlife-native. Culturally confident. "Resy meets the group chat."

SUBJECT: "This Weekend" planner discovery view.
SCENE: Users planning their full weekend itinerary on Thursday or Friday morning.
TARGET PERSONAS: A01 Weekender, A04 Out-of-Towner.
LAYOUT SPEC:
- Sectioned by day (Friday, Saturday, Sunday).
- Vertical timeline or day headers.
- Horizontal scroll of events per day.
- Sticky "Plan My Weekend" multi-booking CTA.
RESPONSIVE CONTEXT: Mobile-first 390×844 (iPhone 15 Pro).
COMPONENT TARGET: apps/mobile/app/(tabs)/discover/index.tsx (Weekend variant)

BRAND COLORS: Primary "Table Gold" #C9A84C | Background "Ivory" #FAF8F5 | Text "Onyx" #2D2D2D
DESIGN TOKENS: Radius 12px. Gaps 24px between days.
VARIANT DIRECTIVE: Editorial, curated planner aesthetic.

SUBJECT DETAIL: "This Weekend" planner view. Ivory background. Top: "This Weekend" header with date range "Apr 25-27" in Slate. Content organized by day — each day section: day header "FRIDAY" in Plus Jakarta Sans 700, Onyx, with gold underline. Below: horizontal scroll of event/venue cards (compact square format, 3 visible). FRIDAY shows nightlife-forward cards. SATURDAY shows brunch + day party + nightlife mix. SUNDAY shows brunch + chill dining. Each card: square photo, venue name, event type chip ("Day Party" "Brunch" "Live Music"), time, quick book icon. Bottom: "Plan My Weekend" gold CTA that opens a multi-venue booking builder.

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
**Agent:** 7 — Search & Filter Designer | **Layer:** 05 — Information Architecture | **FSD Feature:** F03
**Personas:** A04, A07, A14

```
AGENT CONTEXT: You are the Search & Filter Designer. Your goal is to make discovery fast and intuitive. Prioritize trending venues and popular neighborhoods to reduce "search dread."

BRAND PREAMBLE:
BRAND: PullUpATL — Atlanta's nightlife and dining table booking app.
DEMOGRAPHIC: African American professionals, creatives, and socialites aged 22-55 in Atlanta, GA.
PLATFORM: Mobile-first iOS/Android app (React Native / Expo).
VIBE: Premium but not pretentious. Nightlife-native. Culturally confident. "Resy meets the group chat."

SUBJECT: Main search screen (pre-query).
SCENE: User taps the search icon and is presented with quick paths to discovery.
TARGET PERSONAS: A04 Out-of-Towner (needs neighborhood guides), A14 Deal Hunter (needs happy hour filters).
LAYOUT SPEC:
- Large search input field at top.
- Recent searches or Quick Filters chips.
- "Trending in ATL" horizontal venue cards.
- Neighborhood grid with photography background.
RESPONSIVE CONTEXT: Mobile-first 390×844 (iPhone 15 Pro).
COMPONENT TARGET: apps/mobile/app/(tabs)/discover/search.tsx

BRAND COLORS: Primary "Table Gold" #C9A84C | Background "Ivory" #FAF8F5 | Fill "Warm Gray" #F0EDE8
DESIGN TOKENS: Input field radius 24px. Card radius 12px.
VARIANT DIRECTIVE: Utility-first, clean, scannable.

SUBJECT DETAIL: Search screen. Top: large search bar with magnifier icon, placeholder "Search venues, cuisines, vibes…" in Slate on Warm Gray field, 24px rounded. Quick filter row: "Open Now" "Has Sections" "Outdoor" "Live DJ" "Happy Hour" "Private Dining" — Warm Gray pills. "Trending in ATL" section: three compact cards horizontal scroll — venue photo, name overlay, fire emoji + gold "Trending" badge. "Popular Neighborhoods" section: grid of neighborhood pills with mini hero images — "Buckhead" "Midtown" "West End" "Old Fourth Ward" "East Atlanta" "Decatur" — rounded rectangles with photo background and name overlay. Tab bar persistent.

STYLE: High-fidelity mobile app UI mockup rendered at Figma presentation quality. Pixel-perfect modern iOS/Android design language with warm editorial touches. Rounded cards with subtle shadow, generous white space, bottom tab navigation. Luxury nightlife meets intuitive booking UX. Photography-forward with warm overlays. Gold foil accent details on dark chrome. Clean data hierarchy. Professional mockup on iPhone 15 Pro device frame (space black).
NEGATIVE: No stock photography of white people at generic restaurants. No corporate SaaS dashboard aesthetic. No cold blue-gray tech palette. No neon club flyer energy. No hamburger menus. No pure white #FFFFFF backgrounds. No pure black #000000 text. No Roboto or Inter fonts. No cluttered layouts. No wireframes. No clip art or cartoon illustrations. No generic food stock. No white-tablecloth-only imagery. No Silicon Valley startup aesthetic. No gradients that look like Stripe or Linear.
BACKGROUND: Present on dark midnight #0D0D1A surface with subtle ambient glow. iPhone 15 Pro device frame (space black) at 15-degree angle. Soft gold #C9A84C light leak from behind device. Clean editorial presentation. No busy patterns.
```

### PROMPT 07-B — Search Results with Active Filters
**Agent:** 7 — Search & Filter Designer | **Layer:** 05 — Information Architecture | **FSD Feature:** F03
**Personas:** A04, A07, A14

```
AGENT CONTEXT: You are the Search & Filter Designer. Focus on efficient results presentation. Show real-time availability and distance to maximize conversion for users ready to pull up.

BRAND PREAMBLE:
BRAND: PullUpATL — Atlanta's nightlife and dining table booking app.
DEMOGRAPHIC: African American professionals, creatives, and socialites aged 22-55 in Atlanta, GA.
PLATFORM: Mobile-first iOS/Android app (React Native / Expo).
VIBE: Premium but not pretentious. Nightlife-native. Culturally confident. "Resy meets the group chat."

SUBJECT: Search results list view with active filters.
SCENE: User has applied filters and is browsing matching venues.
TARGET PERSONAS: A14 Deal Hunter, A08 Gameday Crew (proximity focus).
LAYOUT SPEC:
- Sticky search bar with active query.
- Horizontal row of active filter dismissible chips.
- Result count ("12 spots found").
- Horizontal-layout venue cards (photo left, data right).
- Floating "Map View" pill button.
RESPONSIVE CONTEXT: Mobile-first 390×844 (iPhone 15 Pro).
COMPONENT TARGET: apps/mobile/app/(tabs)/discover/search.tsx (Results variant)

BRAND COLORS: Primary "Table Gold" #C9A84C | Secondary "Midnight" #1A1A2E | Success "Green" #2D8A4E
DESIGN TOKENS: Card radius 12px. Gaps 16px. Shadow SM for cards.
VARIANT DIRECTIVE: High information density, scannable.

SUBJECT DETAIL: Search results screen with active filters. Top: search bar showing "Rooftop" query text. Active filter chips below: "Buckhead" (Midnight fill, X dismiss), "Open Now" (Midnight fill, X dismiss), "$$-$$$" (Midnight fill, X dismiss), "Clear All" text link in gold. Results: "12 spots found" count. List view of venue result cards — each: horizontal layout (photo left, info right), venue name Plus Jakarta Sans 600, cuisine type, distance "0.8 mi", rating with gold star, price range, "Available tonight" green badge or "Waitlist" amber badge. Sort dropdown at top right: "Relevance" selected. Bottom: "Map View" floating button with map pin icon, Midnight fill, rounded pill.

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
**Agent:** 8 — Category & Cuisine Designer | **Layer:** 10 — Content Strategy | **FSD Feature:** F03
**Personas:** A13 Brunch Enthusiast

```
AGENT CONTEXT: You are the Category & Cuisine Designer. Brunch in Atlanta is a lifestyle. Your goal is to design a landing page that feels like an editorial magazine spread. Use bright, high-key photography and emphasize "Bottomless" and "Rooftop" tags.

BRAND PREAMBLE:
BRAND: PullUpATL — Atlanta's nightlife and dining table booking app.
DEMOGRAPHIC: African American professionals, creatives, and socialites aged 22-55 in Atlanta, GA.
PLATFORM: Mobile-first iOS/Android app (React Native / Expo).
VIBE: Premium but not pretentious. Nightlife-native. Culturally confident. "Resy meets the group chat."

SUBJECT: Brunch category landing page.
SCENE: The user has tapped the "Brunch" filter/category and wants to see the best spots.
TARGET PERSONAS: A13 Brunch Enthusiast, A01 Weekender.
LAYOUT SPEC:
- Hero banner with full-bleed lifestyle photo.
- Editorial headline "ATL Brunch".
- Sub-filter horizontal scroll (Bottomless, Rooftop, etc).
- Curated "Editor's Pick" hero card.
- Standard venue cards below.
RESPONSIVE CONTEXT: Mobile-first 390×844 (iPhone 15 Pro).
COMPONENT TARGET: apps/mobile/app/collection/[id].tsx (Category variant)

BRAND COLORS: Primary "Table Gold" #C9A84C | Background "Ivory" #FAF8F5 | Text "Onyx" #2D2D2D
DESIGN TOKENS: Hero radius 0 (full bleed). Card radius 12px. Gaps 20px.
VARIANT DIRECTIVE: Bright, warm, social, daylight energy.

SUBJECT DETAIL: Brunch category landing page. Top: hero banner — wide photo of a brunch spread at an ATL restaurant (waffles, mimosa flight, eggs benedict, Black friends laughing around the table, natural morning light through windows). Dark gradient at bottom. Overlay: "ATL Brunch" in Playfair Display 700 Ivory, large. Sub-filters: "Bottomless Mimosas" "Rooftop" "Live DJ Brunch" "Boozy Brunch" "Family Friendly" — horizontal scroll chips. Featured collection: "Editor's Pick" card with gold border — one hero venue. Below: venue list cards in standard format, each showing brunch-specific info: "Bottomless mimosas $35" price callout, "Wait: ~25 min" live wait time, weekend hours.

STYLE: High-fidelity mobile app UI mockup rendered at Figma presentation quality. Pixel-perfect modern iOS/Android design language with warm editorial touches. Rounded cards with subtle shadow, generous white space, bottom tab navigation. Luxury nightlife meets intuitive booking UX. Photography-forward with warm overlays. Gold foil accent details on dark chrome. Clean data hierarchy. Professional mockup on iPhone 15 Pro device frame (space black).
NEGATIVE: No stock photography of white people at generic restaurants. No corporate SaaS dashboard aesthetic. No cold blue-gray tech palette. No neon club flyer energy. No hamburger menus. No pure white #FFFFFF backgrounds. No pure black #000000 text. No Roboto or Inter fonts. No cluttered layouts. No wireframes. No clip art or cartoon illustrations. No generic food stock. No white-tablecloth-only imagery. No Silicon Valley startup aesthetic. No gradients that look like Stripe or Linear.
BACKGROUND: Present on dark midnight #0D0D1A surface with subtle ambient glow. iPhone 15 Pro device frame (space black) at 15-degree angle. Soft gold #C9A84C light leak from behind device. Clean editorial presentation. No busy patterns.
```

### PROMPT 08-B — Date Night Collection
**Agent:** 8 — Category & Cuisine Designer | **Layer:** 10 — Content Strategy | **FSD Feature:** F03
**Personas:** A09 Couple

```
AGENT CONTEXT: You are the Category & Cuisine Designer. Create a mood-board style screen for "Date Night." The atmosphere should be intimate, sophisticated, and romantic. Use Velvet #8B2252 as the primary accent color instead of Gold.

BRAND PREAMBLE:
BRAND: PullUpATL — Atlanta's nightlife and dining table booking app.
DEMOGRAPHIC: African American professionals, creatives, and socialites aged 22-55 in Atlanta, GA.
PLATFORM: Mobile-first iOS/Android app (React Native / Expo).
VIBE: Premium but not pretentious. Nightlife-native. Culturally confident. "Resy meets the group chat."

SUBJECT: "Date Night" curated collection screen.
SCENE: A user looking for a romantic spot for two.
TARGET PERSONAS: A09 The Couple, A11 Solo Diner (upscale needs).
LAYOUT SPEC:
- Large editorial hero card.
- Grouped horizontal scrolling rows by sub-vibe.
- "Surprise Me" floating dice button.
- Subtle heart-shaped UI details.
RESPONSIVE CONTEXT: Mobile-first 390×844 (iPhone 15 Pro).
COMPONENT TARGET: apps/mobile/app/collection/[id].tsx (Collection variant)

BRAND COLORS: Primary "Table Gold" #C9A84C | Accent "Velvet" #8B2252 | Background "Ivory" #FAF8F5
DESIGN TOKENS: Card radius 16px (softer corners). Gaps 16px.
VARIANT DIRECTIVE: Romantic, intimate, editorial.

SUBJECT DETAIL: "Date Night" curated collection page. Ivory background with Velvet #8B2252 accent touches. Top: editorial-style header "Date Night, Elevated." in Playfair Display 800, Onyx. Subhead "Curated for two." in Slate italic. Featured venue: large card with candlelit restaurant interior, Black couple at intimate table, warm tones. Below: three curated lists as horizontal scrolling rows — "Rooftop Romance" (3 venue cards), "First Date Energy" (3 cards), "Anniversary Worthy" (3 cards). Each mini-card: square photo, venue name, cuisine, price range, "Book for 2" gold mini-button. Subtle heart icon details throughout in Velvet color. Bottom: "Surprise Me" button with dice icon — randomizes a date night venue pick.

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
**Agent:** 9 — Map View Designer | **Layer:** 17 — Integration | **FSD Feature:** F03
**Personas:** A04, A08, A11

```
AGENT CONTEXT: You are the Map View Designer. Your goal is to combine geographic utility with PullUpATL's premium branding. Use a custom dark map style and branded map pins.

BRAND PREAMBLE:
BRAND: PullUpATL — Atlanta's nightlife and dining table booking app.
DEMOGRAPHIC: African American professionals, creatives, and socialites aged 22-55 in Atlanta, GA.
PLATFORM: Mobile-first iOS/Android app (React Native / Expo).
VIBE: Premium but not pretentious. Nightlife-native. Culturally confident. "Resy meets the group chat."

SUBJECT: Full-screen interactive map view.
SCENE: User wants to see venues relative to their current location or a specific neighborhood.
TARGET PERSONAS: A04 Out-of-Towner (finding Midtown), A08 Gameday Crew (finding stadium radius).
LAYOUT SPEC:
- Full-screen dark map.
- Top: Search/Location bar.
- Custom gold pins with category icons.
- Bottom: 40% height bottom sheet with venue preview.
RESPONSIVE CONTEXT: Mobile-first 390×844 (iPhone 15 Pro).
COMPONENT TARGET: apps/mobile/app/(tabs)/discover/index.tsx (Map variant)

BRAND COLORS: Primary "Table Gold" #C9A84C | Dark BG #0D0D1A | Dark Card #1A1A2E
DESIGN TOKENS: Bottom sheet radius 24px. Pin size 32px.
VARIANT DIRECTIVE: Tech-forward, high-contrast, premium map.

SUBJECT DETAIL: Map view of venue discovery. Full-screen Apple Maps / Mapbox dark style map showing Midtown/Buckhead Atlanta. Custom map pins: gold #C9A84C circles with venue type icon inside (fork for restaurant, champagne for nightclub, coffee for brunch). Pin clusters show count badges. One pin is tapped/selected — expanded into a bottom card preview: venue photo strip, "Seven Midtown" name, "Steakhouse · Buckhead · $$$$", 4.7 stars gold, "2 tables available tonight" in green text, "Book" gold mini-button. Top: search bar with "Near me" location text. Filter chips below map: "Open Now" "Dining" "Nightlife" "Brunch". Bottom: half-sheet card showing the selected venue preview. Tab bar visible.

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
**Agent:** 10 — Navigation System Designer | **Layer:** 05 — Information Architecture | **FSD Feature:** All
**Personas:** All

```
AGENT CONTEXT: You are the Navigation System Designer. Create a component reference sheet that defines global navigation patterns. Focus on the bottom tab bar and contextual headers.

BRAND PREAMBLE:
BRAND: PullUpATL — Atlanta's nightlife and dining table booking app.
DEMOGRAPHIC: African American professionals, creatives, and socialites aged 22-55 in Atlanta, GA.
PLATFORM: Mobile-first iOS/Android app (React Native / Expo).
VIBE: Premium but not pretentious. Nightlife-native. Culturally confident. "Resy meets the group chat."

SUBJECT: Design system reference sheet for Navigation.
SCENE: Global UI components used across the entire app.
TARGET PERSONAS: All users.
LAYOUT SPEC:
- Grid layout showing components in isolated frames.
- Row 1: Tab bar states.
- Row 2: Header variations.
- Row 3: Sheet/Modal patterns.
RESPONSIVE CONTEXT: Components at 390px width.
COMPONENT TARGET: apps/mobile/app/(tabs)/_layout.tsx (and shared/ui/Header.tsx)

BRAND COLORS: Primary "Table Gold" #C9A84C | Secondary "Midnight" #1A1A2E | Background "Ivory" #FAF8F5
DESIGN TOKENS: Tab bar height 88px. Header height 64px. Gaps 32px between sections.
VARIANT DIRECTIVE: Documentation-style clean grid.

SUBJECT DETAIL: Navigation system reference sheet showing multiple states. Top row: 5 tab bar variations — (1) Discover active (gold icon, gold dot, others slate), (2) Search active, (3) Book active with "+" badge, (4) Social active with notification count "3" red badge, (5) Profile active with avatar thumbnail. Second row: header variations — (1) Home header with greeting + location pill + notification bell with badge, (2) Detail page header with back arrow + venue name + share/heart icons on transparent over photo, (3) Flow header with back arrow + "Book a Table" + step "1 of 4" + progress bar. Third row: sheet/modal presentations — (1) half-sheet drawer rising from bottom with drag handle, (2) full-screen modal with X close button, (3) action sheet with stacked options. All on Ivory background with Midnight chrome where applicable.

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
**Agent:** 11 — Restaurant Detail Designer | **Layer:** 07 — Visual Design System | **FSD Feature:** F04
**Personas:** A01, A09, A12

```
AGENT CONTEXT: You are the Restaurant Detail Designer. Create a premium venue landing page that sells the atmosphere before the food. Focus on hero photography and clear metadata hierarchy.

BRAND PREAMBLE:
BRAND: PullUpATL — Atlanta's nightlife and dining table booking app.
DEMOGRAPHIC: African American professionals, creatives, and socialites aged 22-55 in Atlanta, GA.
PLATFORM: Mobile-first iOS/Android app (React Native / Expo).
VIBE: Premium but not pretentious. Nightlife-native. Culturally confident. "Resy meets the group chat."

SUBJECT: Fine dining venue detail page.
SCENE: User is deep-diving into a specific venue to decide whether to book.
TARGET PERSONAS: A01 Vibe Curator (ambiance check), A09 Couple (date night check), A12 Corporate Host (credibility check).
LAYOUT SPEC:
- Hero carousel at top (full bleed).
- Sticky bottom CTA bar.
- Tabbed or sectioned data for About, Hours, Menu, Reviews.
- Horizontal scroll for menu highlights.
RESPONSIVE CONTEXT: Mobile-first 390×844 (iPhone 15 Pro).
COMPONENT TARGET: apps/mobile/app/venue/[id].tsx

BRAND COLORS: Primary "Table Gold" #C9A84C | Background "Ivory" #FAF8F5 | Text "Onyx" #2D2D2D
DESIGN TOKENS: radius 12px for cards. Spacing unit 4px.
VARIANT DIRECTIVE: High-fidelity production UI.

SUBJECT DETAIL: Venue detail page for a fine dining restaurant. Full-bleed hero photo carousel (3 dots) — elegant interior, warm lighting, exposed brick, Black couple at candlelit table. Overlaid: back arrow top-left, heart + share icons top-right. Below hero: "Avenue Kitchen & Grill" in Plus Jakarta Sans 700 22pt Onyx. Metadata row: "Contemporary American · Midtown · $$$$" Slate. "4.8" gold star + "(324 reviews)" link. Action row: "Book a Table" gold button (primary), "Call" icon button outlined, "Directions" icon button outlined. Sections: "About" paragraph, "Hours" with today highlighted gold, "Menu Highlights" horizontal scroll of dish photos with names/prices, "Reviews" preview with 2 reviews showing avatars and star ratings. Sticky bottom bar: "Book a Table — 2 spots left tonight" gold CTA full width.

STYLE: High-fidelity mobile app UI mockup rendered at Figma presentation quality. Pixel-perfect modern iOS/Android design language with warm editorial touches. Rounded cards with subtle shadow, generous white space, bottom tab navigation. Luxury nightlife meets intuitive booking UX. Photography-forward with warm overlays. Gold foil accent details on dark chrome. Clean data hierarchy. Professional mockup on iPhone 15 Pro device frame (space black).
NEGATIVE: No stock photography of white people at generic restaurants. No corporate SaaS dashboard aesthetic. No cold blue-gray tech palette. No neon club flyer energy. No hamburger menus. No pure white #FFFFFF backgrounds. No pure black #000000 text. No Roboto or Inter fonts. No cluttered layouts. No wireframes. No clip art or cartoon illustrations. No generic food stock. No white-tablecloth-only imagery. No Silicon Valley startup aesthetic. No gradients that look like Stripe or Linear.
BACKGROUND: Present on dark midnight #0D0D1A surface with subtle ambient glow. iPhone 15 Pro device frame (space black) at 15-degree angle. Soft gold #C9A84C light leak from behind device. Clean editorial presentation. No busy patterns.
```

### PROMPT 11-B — Soul Food / Casual Venue Detail
**Agent:** 11 — Restaurant Detail Designer | **Layer:** 07 — Visual Design System | **FSD Feature:** F04
**Personas:** A01, A10, A13

```
AGENT CONTEXT: You are the Restaurant Detail Designer. For soul food and casual spots, emphasize community and heritage. The photography should be generous, warm, and highlight "staple dishes."

BRAND PREAMBLE:
BRAND: PullUpATL — Atlanta's nightlife and dining table booking app.
DEMOGRAPHIC: African American professionals, creatives, and socialites aged 22-55 in Atlanta, GA.
PLATFORM: Mobile-first iOS/Android app (React Native / Expo).
VIBE: Premium but not pretentious. Nightlife-native. Culturally confident. "Resy meets the group chat."

SUBJECT: Casual/Heritage dining venue detail.
SCENE: User looking for "real" ATL vibes and communal dining.
TARGET PERSONAS: A10 Family Organizer, A13 Brunch Enthusiast.
LAYOUT SPEC: Same as fine dining but with "Vibe Tags" (Family Style, Cash Only) more prominent.
RESPONSIVE CONTEXT: Mobile-first 390×844 (iPhone 15 Pro).
COMPONENT TARGET: apps/mobile/app/venue/[id].tsx

BRAND COLORS: Primary "Table Gold" #C9A84C | Background "Ivory" #FAF8F5
DESIGN TOKENS: radius 12px. Gaps 16px.
VARIANT DIRECTIVE: Warm, bright, communal atmosphere.

SUBJECT DETAIL: Venue detail for a beloved soul food restaurant. Hero photo: warm, bustling dining room — Black family at a large table, platters of fried chicken and collard greens and mac and cheese, sweet tea pitchers. Natural warm lighting. Same layout structure as fine dining but with adjusted signals: price "$$", "4.9" star rating with "(1,204 reviews)", vibe tags below name: "Family Style" "BYOB" "Cash Only" chips. "Been Here Since '92" heritage badge in gold. Special section: "What to Order" — staff picks with small food photos and descriptions. "Live Music Fridays" event callout card with Velvet border.

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
**Agent:** 12 — Nightclub Detail Designer | **Layer:** 07 — Visual Design System | **FSD Feature:** F04
**Personas:** A02, A05, A06

```
AGENT CONTEXT: You are the Nightclub Detail Designer. Focus on elite, high-energy nighttime aesthetics. Use dark backgrounds exclusively and highlight VIP-specific actions like "Book a Section."

BRAND PREAMBLE:
BRAND: PullUpATL — Atlanta's nightlife and dining table booking app.
DEMOGRAPHIC: African American professionals, creatives, and socialites aged 22-55 in Atlanta, GA.
PLATFORM: Mobile-first iOS/Android app (React Native / Expo).
VIBE: Premium but not pretentious. Nightlife-native. Culturally confident. "Resy meets the group chat."

SUBJECT: Nightclub venue detail page.
SCENE: User checking tonight's lineup and section prices for a high-end club.
TARGET PERSONAS: A02 VIP Socialite, A05 Athlete, A06 Industry Head.
LAYOUT SPEC:
- Dark background #0D0D1A.
- Dual Primary CTAs (Book Section + Guest List).
- Interactive Floor Plan preview card.
- Scannable bottle menu horizontal scroll.
RESPONSIVE CONTEXT: Mobile-first 390×844 (iPhone 15 Pro).
COMPONENT TARGET: apps/mobile/app/venue/[id].tsx (Nightlife variant)

BRAND COLORS: Primary "Table Gold" #C9A84C | Dark BG #0D0D1A | Dark Card #1E1E35 | Accent "Velvet" #8B2252
DESIGN TOKENS: radius 12px. Gold particle effects.
VARIANT DIRECTIVE: Moody, high-energy, exclusive.

SUBJECT DETAIL: Venue detail for a nightclub. Dark mode. Hero: moody club interior — LED-lit bar, DJ booth background, VIP sections with velvet ropes, bottle sparklers in distance. Venue name "Revel Atlanta" in Plus Jakarta Sans 700 Ivory on Midnight overlay. "Nightclub · Buckhead · $$$$" Slate. Two CTAs side by side: "Book a Section" (gold fill, Midnight text) and "Guest List" (outlined gold border/text). Sections: "Tonight's Lineup" — DJ name + photo + genre tags. "Section Map" thumbnail of interactive floor plan (bird's eye, sections color-coded: green available, gold selected, red taken). "Bottle Menu" horizontal scroll of bottle cards (Hennessy, Casamigos, Ace of Spades — photo, name, price). "Dress Code" with icon + text. Sticky bottom: "Book a Section — from $500" gold CTA.

STYLE: High-fidelity mobile app UI mockup rendered at Figma presentation quality. Pixel-perfect modern iOS/Android design language with warm editorial touches. Rounded cards with subtle shadow, generous white space, bottom tab navigation. Luxury nightlife meets intuitive booking UX. Photography-forward with warm overlays. Gold foil accent details on dark chrome. Clean data hierarchy. Professional mockup on iPhone 15 Pro device frame (space black).
NEGATIVE: No stock photography of white people at generic restaurants. No corporate SaaS dashboard aesthetic. No cold blue-gray tech palette. No neon club flyer energy. No hamburger menus. No pure white #FFFFFF backgrounds. No pure black #000000 text. No Roboto or Inter fonts. No cluttered layouts. No wireframes. No clip art or cartoon illustrations. No generic food stock. No white-tablecloth-only imagery. No Silicon Valley startup aesthetic. No gradients that look like Stripe or Linear.
BACKGROUND-DARK: Same device frame on #0D0D1A surface. Subtle Velvet #8B2252 ambient glow behind device suggesting VIP energy. Faint gold particle effect in negative space.
```

### PROMPT 12-B — Floor Plan / Section Map
**Agent:** 12 — Nightclub Detail Designer | **Layer:** 07 — Visual Design System | **FSD Feature:** F14
**Personas:** A02, A03, A05

```
AGENT CONTEXT: You are the Nightclub Detail Designer. Design the core "revenue screen" of the app. The floor plan must be a clear, stylized vector map that makes selecting a VIP section feel like choosing a seat on a private jet.

BRAND PREAMBLE:
BRAND: PullUpATL — Atlanta's nightlife and dining table booking app.
DEMOGRAPHIC: African American professionals, creatives, and socialites aged 22-55 in Atlanta, GA.
PLATFORM: Mobile-first iOS/Android app (React Native / Expo).
VIBE: Premium but not pretentious. Nightlife-native. Culturally confident. "Resy meets the group chat."

SUBJECT: Interactive VIP Section Floor Plan.
SCENE: High-intent user selecting their specific location in the club.
TARGET PERSONAS: A02 Breadwinner, A03 Birthday Monarch (needs best view).
LAYOUT SPEC:
- Stylized floor plan map (top 60%).
- Bottom sheet drawer with section selection details (bottom 40%).
- Color-coded legend (Available, Selected, Sold).
RESPONSIVE CONTEXT: Mobile-first 390×844 (iPhone 15 Pro).
COMPONENT TARGET: apps/mobile/app/venue/[id]/floor-plan.tsx

BRAND COLORS: Primary "Table Gold" #C9A84C | Dark BG #0D0D1A | Accent "Velvet" #8B2252
DESIGN TOKENS: radius 24px for bottom sheet. Gaps 8px between section markers.
VARIANT DIRECTIVE: Technical but luxurious vector map.

SUBJECT DETAIL: Interactive floor plan screen for VIP section booking. Dark background #0D0D1A. Top: "Havana Nightclub ATL" + "Select Your Section" header. Main: bird's-eye stylized floor plan — dance floor center with gradient, DJ booth top, bar left side, VIP sections around perimeter labeled "S1"-"S8". Color-coded: available (gold #C9A84C outline), selected (gold filled with glow), unavailable (dark gray #2D2D4A with "SOLD"), premium (Velvet #8B2252 outline + "VIP" badge). Bottom half-sheet drawer: selected section details — "Section S3 · Main Floor · Fits 8-12", photo of actual section angle, "$1,500 minimum" gold, "Includes 2 bottles" Slate, "Select This Section" gold CTA.

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
**Agent:** 13 — Brunch & Day Party Designer | **Layer:** 07 — Visual Design System | **FSD Feature:** F04
**Personas:** A13, A07, A15

```
AGENT CONTEXT: You are the Brunch & Day Party Designer. Day parties in Atlanta are high-fashion, social, and sun-drenched. Your designs must be bright and celebratory, focusing on the "social scene" and outdoor ambiance.

BRAND PREAMBLE:
BRAND: PullUpATL — Atlanta's nightlife and dining table booking app.
DEMOGRAPHIC: African American professionals, creatives, and socialites aged 22-55 in Atlanta, GA.
PLATFORM: Mobile-first iOS/Android app (React Native / Expo).
VIBE: Premium but not pretentious. Nightlife-native. Culturally confident. "Resy meets the group chat."

SUBJECT: Day party / Brunch event detail page.
SCENE: User is checking out a Saturday day party or Sunday brunch event.
TARGET PERSONAS: A13 Brunch Enthusiast, A15 Content Creator (needs photo-worthy spots).
LAYOUT SPEC:
- Bright, airy layout (Not Dark Mode).
- Large hero photo showing outdoor/rooftop social scene.
- Ticket tiers and RSVP status prominently displayed.
- DJ lineup with circular avatars.
RESPONSIVE CONTEXT: Mobile-first 390×844 (iPhone 15 Pro).
COMPONENT TARGET: apps/mobile/app/venue/[id]/event.tsx

BRAND COLORS: Primary "Table Gold" #C9A84C | Background "Ivory" #FAF8F5 | Text "Onyx" #2D2D2D
DESIGN TOKENS: radius 12px. Gaps 16px.
VARIANT DIRECTIVE: Bright, vibrant, outdoor social energy.

SUBJECT DETAIL: Day party event detail page. Bright, warm aesthetic — NOT dark mode. Hero photo: rooftop day party scene — Black partygoers in summer outfits, DJ playing, city skyline backdrop, golden hour sunlight, cocktails in hand. Overlay: event name "SunSoak Saturdays" in Playfair Display 700, Onyx on light overlay. Venue: "The Roof at Ponce City Market" link. Date/time prominent: "Every Saturday · 2 PM - 8 PM". Vibe tags: "Day Party" "Rooftop" "Live DJ" "Dress to Impress". Ticket/entry section: "Free before 3 PM w/ RSVP" in green, "General: $25 after 3 PM", "VIP Cabana: $350 (up to 6)". DJ lineup with small circular photos. "Share with your crew" button with share icon. Bottom: "RSVP — Free Entry" gold CTA.

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
**Agent:** 14 — Venue Media Designer | **Layer:** 12 — Motion & Animation | **FSD Feature:** F04
**Personas:** A01, A15

```
AGENT CONTEXT: You are the Venue Media Designer. Your goal is to create an immersive, full-screen media viewer. Prioritize high-resolution photography and include social proof elements like "Guest Photos."

BRAND PREAMBLE:
BRAND: PullUpATL — Atlanta's nightlife and dining table booking app.
DEMOGRAPHIC: African American professionals, creatives, and socialites aged 22-55 in Atlanta, GA.
PLATFORM: Mobile-first iOS/Android app (React Native / Expo).
VIBE: Premium but not pretentious. Nightlife-native. Culturally confident. "Resy meets the group chat."

SUBJECT: Full-screen venue photo gallery.
SCENE: User browsing high-fidelity photos to confirm the vibe.
TARGET PERSONAS: A01 Vibe Curator, A15 Content Creator.
LAYOUT SPEC:
- Full-screen image container.
- Horizontal thumbnail strip at bottom for navigation.
- Image counter and "Guest Photo" badges.
- Minimal overlay UI to keep focus on photography.
RESPONSIVE CONTEXT: Mobile-first 390×844 (iPhone 15 Pro).
COMPONENT TARGET: apps/mobile/src/components/media/PhotoGallery.tsx

BRAND COLORS: Dark BG #0D0D1A | Primary "Table Gold" #C9A84C | Ivory #FAF8F5
DESIGN TOKENS: Thumbnail radius 8px. Smooth swipe transitions implied.
VARIANT DIRECTIVE: Immersive, clean, photography-forward.

SUBJECT DETAIL: Full-screen photo gallery for a venue. Dark mode #0D0D1A background. Photo displayed large — interior shot of beautifully plated dish on a dark table, golden ambient lighting. Photo counter "3 / 24" top right in Ivory. Close X top left. Bottom: thumbnail strip showing scrollable row of 6-8 venue photos (interior, food, drinks, exterior, crowd, details). User-generated photo section indicated by "Guest Photos" label with camera icon — tagged photos from Instagram-style user posts. Swipe indicator arrows on left/right edges.

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
BRAND: PullUpATL — Atlanta’s nightlife and dining table booking app.
DEMOGRAPHIC: African American professionals, creatives, and socialites aged 22-55 in Atlanta, GA.
PLATFORM: Mobile-first iOS/Android app (React Native / Expo).
VIBE: Premium but not pretentious. Nightlife-native. Culturally confident. “Resy meets the group chat.”
COLORS: Primary “Table Gold” #C9A84C | Secondary “Midnight” #1A1A2E | Accent “Velvet” #8B2252 | Background “Ivory” #FAF8F5 | Text “Onyx” #2D2D2D | Fill “Warm Gray” #F0EDE8 | Dark BG #0D0D1A | Dark Surface #1A1A2E | Dark Card #1E1E35
FONTS: Display: Playfair Display 700/800 (serif, editorial) | Heading: Plus Jakarta Sans 600/700 | Body: Plus Jakarta Sans 400/500
RULES: Mobile-first 390×844 (iPhone 15 Pro). Bottom tab bar (NEVER hamburger). Card UI 12px radius. Gold accents on dark = premium. Real ATL venue photography. Black people in lifestyle imagery.

SUBJECT: Booking flow step 1 of 4. Ivory background. Top: back arrow + "Book a Table" + "1 of 4" Slate. Gold progress bar at 25%. Venue mini-card: thumbnail + "Apt 4B" + "Contemporary American". Form: "Date" calendar grid — today gold circle, past dates gray, available Onyx, unavailable strikethrough. "Time" horizontal scroll pills: "7:00 PM" "7:30 PM" "8:00 PM" — available Warm Gray, selected Midnight fill, unavailable disabled opacity. "Party Size" stepper: minus/plus buttons flanking "4 guests" counter. "Special Occasion?" toggle (off state). Bottom: "Continue" gold CTA full width.

SCENE: Fast, frictionless — everything above the fold. Calendar uses standard iOS patterns with brand colors. Some time slots already taken to show real scarcity.

STYLE: High-fidelity mobile app UI mockup rendered at Figma presentation quality. Pixel-perfect modern iOS/Android design language with warm editorial touches. Rounded cards with subtle shadow, generous white space, bottom tab navigation. Luxury nightlife meets intuitive booking UX. Photography-forward with warm overlays. Gold foil accent details on dark chrome. Clean data hierarchy. Professional mockup on iPhone 15 Pro device frame (space black).
NEGATIVE: No stock photography of white people at generic restaurants. No corporate SaaS dashboard aesthetic. No cold blue-gray tech palette. No neon club flyer energy. No hamburger menus. No pure white #FFFFFF backgrounds. No pure black #000000 text. No Roboto or Inter fonts. No cluttered layouts. No wireframes. No clip art or cartoon illustrations. No generic food stock. No white-tablecloth-only imagery. No Silicon Valley startup aesthetic. No gradients that look like Stripe or Linear.
BACKGROUND: Present on dark midnight #0D0D1A surface with subtle ambient glow. iPhone 15 Pro device frame (space black) at 15-degree angle. Soft gold #C9A84C light leak from behind device. Clean editorial presentation. No busy patterns.
```

### PROMPT 15-B — Booking Step 2: Special Requests

```
BRAND: PullUpATL — Atlanta’s nightlife and dining table booking app.
DEMOGRAPHIC: African American professionals, creatives, and socialites aged 22-55 in Atlanta, GA.
PLATFORM: Mobile-first iOS/Android app (React Native / Expo).
VIBE: Premium but not pretentious. Nightlife-native. Culturally confident. “Resy meets the group chat.”
COLORS: Primary “Table Gold” #C9A84C | Secondary “Midnight” #1A1A2E | Accent “Velvet” #8B2252 | Background “Ivory” #FAF8F5 | Text “Onyx” #2D2D2D | Fill “Warm Gray” #F0EDE8 | Dark BG #0D0D1A | Dark Surface #1A1A2E | Dark Card #1E1E35
FONTS: Display: Playfair Display 700/800 (serif, editorial) | Heading: Plus Jakarta Sans 600/700 | Body: Plus Jakarta Sans 400/500
RULES: Mobile-first 390×844 (iPhone 15 Pro). Bottom tab bar (NEVER hamburger). Card UI 12px radius. Gold accents on dark = premium. Real ATL venue photography. Black people in lifestyle imagery.

SUBJECT: Booking step 2 of 4. Progress bar 50% gold. Header "Preferences". Content: seating preference chips — "Indoor" "Outdoor" "Bar" "Private Room" "Window" — single select, selected Midnight fill. "Dining occasion" dropdown: "Casual Dinner" selected showing options "Birthday" "Anniversary" "Business" "Celebration" "Just Dinner". Free-text field: "Special requests" with placeholder "Allergies, accessibility needs, surprises…" 3 lines tall, Warm Gray border. "Add to reservation" toggle row: "High chair needed" with toggle (off). "Accessibility needs" with toggle (off). Bottom: "Continue" gold CTA.

SCENE: This step captures info that makes the dining experience personal. The occasion dropdown triggers downstream features (birthday = cake emoji on confirmation, anniversary = special table placement). Free text field keeps it human.

STYLE: High-fidelity mobile app UI mockup rendered at Figma presentation quality. Pixel-perfect modern iOS/Android design language with warm editorial touches. Rounded cards with subtle shadow, generous white space, bottom tab navigation. Luxury nightlife meets intuitive booking UX. Photography-forward with warm overlays. Gold foil accent details on dark chrome. Clean data hierarchy. Professional mockup on iPhone 15 Pro device frame (space black).
NEGATIVE: No stock photography of white people at generic restaurants. No corporate SaaS dashboard aesthetic. No cold blue-gray tech palette. No neon club flyer energy. No hamburger menus. No pure white #FFFFFF backgrounds. No pure black #000000 text. No Roboto or Inter fonts. No cluttered layouts. No wireframes. No clip art or cartoon illustrations. No generic food stock. No white-tablecloth-only imagery. No Silicon Valley startup aesthetic. No gradients that look like Stripe or Linear.
BACKGROUND: Present on dark midnight #0D0D1A surface with subtle ambient glow. iPhone 15 Pro device frame (space black) at 15-degree angle. Soft gold #C9A84C light leak from behind device. Clean editorial presentation. No busy patterns.
```

---

## AGENT 15: Table Booking Flow Designer
**Layer:** 19 — Booking Engine | **Swarm:** Booking Flow Assembly
**Owns:** Date/time picker, party size, special requests
**Personas:** A01 Vibe Curator, A09 Couple, A10 Family Organizer

### PROMPT 15-A — Booking Step 1: Date/Time/Party
**Agent:** 15 — Table Booking Flow Designer | **Layer:** 19 — Booking Engine | **FSD Feature:** F05
**Personas:** A01, A09, A10

```
AGENT CONTEXT: You are the Table Booking Flow Designer. Design a frictionless "Step 1" interface for reservation requests. Prioritize speed, scannable time slots, and clear date selection using native-feeling mobile UI patterns.

BRAND PREAMBLE:
BRAND: PullUpATL — Atlanta's nightlife and dining table booking app.
DEMOGRAPHIC: African American professionals, creatives, and socialites aged 22-55 in Atlanta, GA.
PLATFORM: Mobile-first iOS/Android app (React Native / Expo).
VIBE: Premium but not pretentious. Nightlife-native. Culturally confident. "Resy meets the group chat."

SUBJECT: Booking flow Step 1 (Availability).
SCENE: User has selected a venue and is now committing to a specific date and time.
TARGET PERSONAS: A01 Vibe Curator, A09 Couple, A10 Family Organizer.
LAYOUT SPEC:
- Standard booking header with back button and progress step.
- Compact venue info card.
- Calendar grid for date selection.
- Horizontal scroll for time slots.
- Number stepper for party size.
RESPONSIVE CONTEXT: Mobile-first 390×844 (iPhone 15 Pro).
COMPONENT TARGET: apps/mobile/app/booking/[venueId].tsx

BRAND COLORS: Primary "Table Gold" #C9A84C | Background "Ivory" #FAF8F5 | Text "Onyx" #2D2D2D
DESIGN TOKENS: radius 12px for cards/buttons. Gaps 16px.
VARIANT DIRECTIVE: Production-ready clean utility.

SUBJECT DETAIL: Booking flow step 1 of 4. Ivory background. Top: back arrow + "Book a Table" + "1 of 4" Slate. Gold progress bar at 25%. Venue mini-card: thumbnail + "Avenue Kitchen & Grill" + "Contemporary American". Form: "Date" calendar grid — today gold circle, past dates gray, available Onyx, unavailable strikethrough. "Time" horizontal scroll pills: "7:00 PM" "7:30 PM" "8:00 PM" — available Warm Gray, selected Midnight fill, unavailable disabled opacity. "Party Size" stepper: minus/plus buttons flanking "4 guests" counter. "Special Occasion?" toggle (off state). Bottom: "Continue" gold CTA full width.

STYLE: High-fidelity mobile app UI mockup rendered at Figma presentation quality. Pixel-perfect modern iOS/Android design language with warm editorial touches. Rounded cards with subtle shadow, generous white space, bottom tab navigation. Luxury nightlife meets intuitive booking UX. Photography-forward with warm overlays. Gold foil accent details on dark chrome. Clean data hierarchy. Professional mockup on iPhone 15 Pro device frame (space black).
NEGATIVE: No stock photography of white people at generic restaurants. No corporate SaaS dashboard aesthetic. No cold blue-gray tech palette. No neon club flyer energy. No hamburger menus. No pure white #FFFFFF backgrounds. No pure black #000000 text. No Roboto or Inter fonts. No cluttered layouts. No wireframes. No clip art or cartoon illustrations. No generic food stock. No white-tablecloth-only imagery. No Silicon Valley startup aesthetic. No gradients that look like Stripe or Linear.
BACKGROUND: Present on dark midnight #0D0D1A surface with subtle ambient glow. iPhone 15 Pro device frame (space black) at 15-degree angle. Soft gold #C9A84C light leak from behind device. Clean editorial presentation. No busy patterns.
```

### PROMPT 15-B — Booking Step 2: Special Requests
**Agent:** 15 — Table Booking Flow Designer | **Layer:** 19 — Booking Engine | **FSD Feature:** F05
**Personas:** A01, A09, A10

```
AGENT CONTEXT: You are the Table Booking Flow Designer. This step captures personalization data. Ensure seating preferences and occasions are presented as premium "upgrades" to the experience, not just form fields.

BRAND PREAMBLE:
BRAND: PullUpATL — Atlanta's nightlife and dining table booking app.
DEMOGRAPHIC: African American professionals, creatives, and socialites aged 22-55 in Atlanta, GA.
PLATFORM: Mobile-first iOS/Android app (React Native / Expo).
VIBE: Premium but not pretentious. Nightlife-native. Culturally confident. "Resy meets the group chat."

SUBJECT: Booking flow Step 2 (Preferences).
SCENE: User adding details to their reservation to ensure the vibe is right.
TARGET PERSONAS: A01 Vibe Curator, A03 Birthday Monarch, A10 Family Organizer.
LAYOUT SPEC:
- Clean Ivory background.
- Selectable "vibe chips" for seating.
- Occasion dropdown/picker.
- Multiline text area for special requests.
- Toggle switches for binary needs (High chair, etc).
RESPONSIVE CONTEXT: Mobile-first 390×844 (iPhone 15 Pro).
COMPONENT TARGET: apps/mobile/app/booking/[venueId]/details.tsx

BRAND COLORS: Primary "Table Gold" #C9A84C | Background "Ivory" #FAF8F5 | Text "Onyx" #2D2D2D
DESIGN TOKENS: radius 12px. Gaps 24px between form sections.
VARIANT DIRECTIVE: High-fidelity production UI.

SUBJECT DETAIL: Booking step 2 of 4. Progress bar 50% gold. Header "Preferences". Content: seating preference chips — "Indoor" "Outdoor" "Bar" "Private Room" "Window" — single select, selected Midnight fill. "Dining occasion" dropdown: "Casual Dinner" selected showing options "Birthday" "Anniversary" "Business" "Celebration" "Just Dinner". Free-text field: "Special requests" with placeholder "Allergies, accessibility needs, surprises…" 3 lines tall, Warm Gray border. "Add to reservation" toggle row: "High chair needed" with toggle (off). "Accessibility needs" with toggle (off). Bottom: "Continue" gold CTA.

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
**Agent:** 16 — Section Booking Designer | **Layer:** 19 — Booking Engine | **FSD Feature:** F14
**Personas:** A02, A03, A05

```
AGENT CONTEXT: You are the Section Booking Designer. Your goal is to design a high-value summary screen that justifies the VIP price point. Focus on transparency, itemized breakdowns, and a "high-status" checkout energy.

BRAND PREAMBLE:
BRAND: PullUpATL — Atlanta's nightlife and dining table booking app.
DEMOGRAPHIC: African American professionals, creatives, and socialites aged 22-55 in Atlanta, GA.
PLATFORM: Mobile-first iOS/Android app (React Native / Expo).
VIBE: Premium but not pretentious. Nightlife-native. Culturally confident. "Resy meets the group chat."

SUBJECT: VIP Section Booking Summary & Pre-Payment.
SCENE: High-spend user reviewing their $1,500+ section before confirming.
TARGET PERSONAS: A02 Breadwinner, A03 Birthday Monarch, A05 Athlete.
LAYOUT SPEC:
- Dark Mode exclusively.
- Detailed card for the selected section (photo + specs).
- List of pre-ordered bottles.
- Itemized price breakdown with taxes/gratuity.
- Promoter attribution field.
RESPONSIVE CONTEXT: Mobile-first 390×844 (iPhone 15 Pro).
COMPONENT TARGET: apps/mobile/app/booking/[venueId]/payment.tsx (VIP variant)

BRAND COLORS: Primary "Table Gold" #C9A84C | Dark BG #0D0D1A | Dark Card #1E1E35 | Accent "Velvet" #8B2252
DESIGN TOKENS: radius 12px. Card shadow LG.
VARIANT DIRECTIVE: Ultra-luxurious, dark-mode summary.

SUBJECT DETAIL: Section booking summary (pre-payment). Dark mode. "Your Section" header with Velvet "VIP" badge. Card on #1E1E35: section photo (VIP booth angle), "Section S3 · Main Floor" / "Fits 8-12" / "Sat, Mar 22 · 10 PM - 2 AM" in Ivory. Bottles: two mini-cards inline (thumbnail + name + price). "Add More Bottles" gold link. Divider. Breakdown: "Section minimum: $1,500" / "Hennessy VSOP: $350" / "Casamigos Reposado: $300" / "Subtotal: $2,150" / "Gratuity (20%): $430" / "Tax: $172" / "Total: $2,752" — total in gold Plus Jakarta Sans 700. Promoter: "Referred by: @Dame" with avatar. Bottom: "Confirm & Pay" gold CTA. "Split with group" text link.

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
**Agent:** 17 — Bottle Service Designer | **Layer:** 22 — Payment & Commerce | **FSD Feature:** F04/F14
**Personas:** A02, A05, A06

```
AGENT CONTEXT: You are the Bottle Service Designer. Your goal is to design an interface that makes browsing expensive spirits feel like a luxury shopping experience. Focus on bottle photography and "Package" upsells.

BRAND PREAMBLE:
BRAND: PullUpATL — Atlanta's nightlife and dining table booking app.
DEMOGRAPHIC: African American professionals, creatives, and socialites aged 22-55 in Atlanta, GA.
PLATFORM: Mobile-first iOS/Android app (React Native / Expo).
VIBE: Premium but not pretentious. Nightlife-native. Culturally confident. "Resy meets the group chat."

SUBJECT: In-app Bottle Service Menu.
SCENE: User adding bottles to their VIP section or pre-ordering for a table.
TARGET PERSONAS: A02 Breadwinner, A05 Athlete, A06 Industry Head.
LAYOUT SPEC:
- Dark Mode exclusively.
- Category horizontal scroll (Champagne, Tequila, etc).
- List of landscape bottle cards (photo left, metadata right).
- "Package Builder" banner in Velvet gradient.
- Sticky bottom cart bar.
RESPONSIVE CONTEXT: Mobile-first 390×844 (iPhone 15 Pro).
COMPONENT TARGET: apps/mobile/app/venue/[id]/bottles.tsx

BRAND COLORS: Primary "Table Gold" #C9A84C | Dark BG #0D0D1A | Dark Card #1E1E35 | Accent "Velvet" #8B2252
DESIGN TOKENS: radius 12px. High-contrast typography (Ivory on Dark).
VARIANT DIRECTIVE: Luxury catalog aesthetic.

SUBJECT DETAIL: Bottle menu screen. Dark mode #0D0D1A. Top: venue name "Revel Atlanta" + "Bottle Menu" header. Filter pills: "All" "Champagne" "Cognac" "Tequila" "Vodka" "Stitchey" — active gold underline. Bottle cards vertical scroll: each on #1E1E35, landscape layout — studio-lit bottle photo on dark, name "Ace of Spades Brut" Plus Jakarta Sans 600 Ivory, brand "Armand de Brignac" Slate, size "750ml", price "$650" in gold. "Add to Section" outlined button. Bottom: package banner in Velvet gradient — "Pick 3 bottles, save 15%" Ivory, gold CTA "Build Package". Sticky cart: "2 bottles · $1,450" + "View Order" gold button.

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
**Agent:** 18 — Birthday & Event Package Designer | **Layer:** 06 — Data Architecture | **FSD Feature:** F18
**Personas:** A03, A10

```
AGENT CONTEXT: You are the Birthday & Event Package Designer. Your goal is to design an add-on marketplace that feels celebratory and curated. Focus on the "extra" details that make a night out special (cakes, balloons, photography).

BRAND PREAMBLE:
BRAND: PullUpATL — Atlanta's nightlife and dining table booking app.
DEMOGRAPHIC: African American professionals, creatives, and socialites aged 22-55 in Atlanta, GA.
PLATFORM: Mobile-first iOS/Android app (React Native / Expo).
VIBE: Premium but not pretentious. Nightlife-native. Culturally confident. "Resy meets the group chat."

SUBJECT: Birthday / Special Event Add-on Builder.
SCENE: A user planning a landmark celebration adding specialized vendor services to their booking.
TARGET PERSONAS: A03 Birthday Monarch, A10 Family Organizer.
LAYOUT SPEC:
- Dark Mode preferred for high-value celebration energy.
- Progress tracker (Venue → Bottles → Extras).
- Visual grid of service cards (photo, price, add toggle).
- Live running total at bottom.
RESPONSIVE CONTEXT: Mobile-first 390×844 (iPhone 15 Pro).
COMPONENT TARGET: apps/mobile/src/features/booking/components/AddOnMarketplace.tsx

BRAND COLORS: Primary "Table Gold" #C9A84C | Dark BG #0D0D1A | Dark Card #1E1E35 | Accent "Velvet" #8B2252
DESIGN TOKENS: radius 12px. Gaps 12px.
VARIANT DIRECTIVE: Celebratory, lush, visual-first.

SUBJECT DETAIL: Birthday package builder screen. Dark top section: "Build Your Birthday" in Playfair Display 700, Ivory. Crown emoji. Progress: 3 dots "Venue → Bottles → Extras". Current step: "Extras". Selected venue shown as compact card: venue name + date + section. Add-on cards in scrollable grid (2 columns): "Custom Cake" ($150-$400) with cake photo, "Balloon Setup" ($200) with photo, "LED Marquee Letters" ($175) with photo, "Photographer" ($300/2hrs) with camera icon, "Party Bus Transfer" ($500) with bus photo, "Custom Flyer Design" ($75) with design preview. Each card: photo, name, price in gold, "Add" toggle button. Selected items have gold check overlay. Running total at bottom: "Package Total: $2,925" updating live. "Review Package" gold CTA.

STYLE: High-fidelity mobile app UI mockup rendered at Figma presentation quality. Pixel-perfect modern iOS/Android design language with warm editorial touches. Rounded cards with subtle shadow, generous white space, bottom tab navigation. Luxury nightlife meets intuitive booking UX. Photography-forward with warm overlays. Gold foil accent details on dark chrome. Clean data hierarchy. Professional mockup on iPhone 15 Pro device frame (space black).
NEGATIVE: No stock photography of white people at generic restaurants. No corporate SaaS dashboard aesthetic. No cold blue-gray tech palette. No neon club flyer energy. No hamburger menus. No pure white #FFFFFF backgrounds. No pure black #000000 text. No Roboto or Inter fonts. No cluttered layouts. No wireframes. No clip art or cartoon illustrations. No generic food stock. No white-tablecloth-only imagery. No Silicon Valley startup aesthetic. No gradients that look like Stripe or Linear.
BACKGROUND-DARK: Same device frame on #0D0D1A surface. Subtle Velvet #8B2252 ambient glow behind device suggesting VIP energy. Faint gold particle effect in negative space.
```

### PROMPT 18-B — Birthday Confirmation / Share Card
**Agent:** 18 — Birthday & Event Package Designer | **Layer:** 06 — Data Architecture | **FSD Feature:** F18
**Personas:** A03, A15

```
AGENT CONTEXT: You are the Birthday & Event Package Designer. Design a "Share Card" that is so visually appealing that users WANT to share it on Instagram. This is a core organic growth lever for the brand.

BRAND PREAMBLE:
BRAND: PullUpATL — Atlanta's nightlife and dining table booking app.
DEMOGRAPHIC: African American professionals, creatives, and socialites aged 22-55 in Atlanta, GA.
PLATFORM: Mobile-first iOS/Android app (React Native / Expo).
VIBE: Premium but not pretentious. Nightlife-native. Culturally confident. "Resy meets the group chat."

SUBJECT: Shareable digital flyer for a birthday event.
SCENE: User has confirmed their celebration and wants to invite their group.
TARGET PERSONAS: A03 Birthday Monarch, A15 Content Creator.
LAYOUT SPEC:
- Phone-within-phone presentation.
- Branded digital flyer (flyer-style layout).
- Clear RSVP link / QR code.
- "Share to Story" primary action button.
RESPONSIVE CONTEXT: Mobile-first 390×844 (iPhone 15 Pro).
COMPONENT TARGET: apps/mobile/src/features/social/components/CelebrationShareSheet.tsx

BRAND COLORS: Dark BG #0D0D1A | Primary "Table Gold" #C9A84C | Accent "Velvet" #8B2252
DESIGN TOKENS: radius 16px for shared cards.
VARIANT DIRECTIVE: "Instagram Story" ready aesthetic.

SUBJECT DETAIL: Birthday booking confirmation with shareable invite card. Top: celebration screen — dark background with animated gold confetti burst (frozen), crown icon, "The Throne is Set." in Playfair Display 700, gold. Below: shareable invite card preview — designed like a digital flyer with Midnight background, Velvet accent border, birthday person's name "DESTINY'S BIRTHDAY" in Playfair Display, venue name, date, time, section number, dress code, and RSVP link QR code. Card shows in a phone-within-phone preview (how it'll look when shared). Action buttons: "Share to Instagram Stories" "Copy Link" "Send via Text" "Add to Calendar". Guest list RSVP counter: "4 of 12 confirmed" with avatar stack.

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
**Agent:** 19 — Confirmation & Receipt Designer | **Layer:** 19 — Booking Engine | **FSD Feature:** F05
**Personas:** All

```
AGENT CONTEXT: You are the Confirmation & Receipt Designer. Your goal is to deliver the "win" moment. The screen must be highly celebratory while remaining functional for the venue hostess.

BRAND PREAMBLE:
BRAND: PullUpATL — Atlanta's nightlife and dining table booking app.
DEMOGRAPHIC: African American professionals, creatives, and socialites aged 22-55 in Atlanta, GA.
PLATFORM: Mobile-first iOS/Android app (React Native / Expo).
VIBE: Premium but not pretentious. Nightlife-native. Culturally confident. "Resy meets the group chat."

SUBJECT: Table booking confirmation (Success screen).
SCENE: User has successfully completed a transaction and is now "locked in."
TARGET PERSONAS: All booking users.
LAYOUT SPEC:
- Dark celebration banner at top.
- Success checkmark icon.
- High-fidelity confirmation card with QR code.
- Action row for utility (Calendar, Directions, Share).
RESPONSIVE CONTEXT: Mobile-first 390×844 (iPhone 15 Pro).
COMPONENT TARGET: apps/mobile/app/booking/[venueId]/confirmation.tsx

BRAND COLORS: Primary "Table Gold" #C9A84C | Background "Ivory" #FAF8F5 | Text "Onyx" #2D2D2D
DESIGN TOKENS: radius 24px for top of card. Monospaced font for codes.
VARIANT DIRECTIVE: Celebratory, reliable, final.

SUBJECT DETAIL: Table booking confirmation — celebration screen. Top: Midnight background with centered gold checkmark icon, gold confetti particles frozen. "You're Locked In." in Playfair Display 700, Ivory. Confirmation card on Ivory with rounded top 24px: venue photo strip, "Avenue Kitchen & Grill" Plus Jakarta Sans 700, details grid — Date: "Sat, Mar 15" / Time: "8:30 PM" / Party: "4 guests" / Code: "PUA-7X3K" monospaced gold, tappable copy icon. QR code box. Actions: "Add to Calendar" outlined, "Share" outlined, "View Details" gold fill. Bottom: "See you there." Slate italic. Tab bar persistent.

STYLE: High-fidelity mobile app UI mockup rendered at Figma presentation quality. Pixel-perfect modern iOS/Android design language with warm editorial touches. Rounded cards with subtle shadow, generous white space, bottom tab navigation. Luxury nightlife meets intuitive booking UX. Photography-forward with warm overlays. Gold foil accent details on dark chrome. Clean data hierarchy. Professional mockup on iPhone 15 Pro device frame (space black).
NEGATIVE: No stock photography of white people at generic restaurants. No corporate SaaS dashboard aesthetic. No cold blue-gray tech palette. No neon club flyer energy. No hamburger menus. No pure white #FFFFFF backgrounds. No pure black #000000 text. No Roboto or Inter fonts. No cluttered layouts. No wireframes. No clip art or cartoon illustrations. No generic food stock. No white-tablecloth-only imagery. No Silicon Valley startup aesthetic. No gradients that look like Stripe or Linear.
BACKGROUND: Present on dark midnight #0D0D1A surface with subtle ambient glow. iPhone 15 Pro device frame (space black) at 15-degree angle. Soft gold #C9A84C light leak from behind device. Clean editorial presentation. No busy patterns.
```

### PROMPT 19-B — Payment / Booking Step 3
**Agent:** 19 — Confirmation & Receipt Designer | **Layer:** 22 — Payment & Commerce | **FSD Feature:** F05
**Personas:** All

```
AGENT CONTEXT: You are the Confirmation & Receipt Designer. This is the trust screen. Design a high-conversion payment interface that surfaces saved methods and clear itemized order summaries.

BRAND PREAMBLE:
BRAND: PullUpATL — Atlanta's nightlife and dining table booking app.
DEMOGRAPHIC: African American professionals, creatives, and socialites aged 22-55 in Atlanta, GA.
PLATFORM: Mobile-first iOS/Android app (React Native / Expo).
VIBE: Premium but not pretentious. Nightlife-native. Culturally confident. "Resy meets the group chat."

SUBJECT: Payment / Checkout screen (Step 3).
SCENE: User entering their payment information to secure a reservation.
TARGET PERSONAS: All booking users.
LAYOUT SPEC:
- Progress step (75%).
- Sticky order summary card at top.
- List of saved cards + "Add New."
- Branded social pay buttons (Apple/Google).
- Promo code input with instant validation.
- Stripe security badge.
RESPONSIVE CONTEXT: Mobile-first 390×844 (iPhone 15 Pro).
COMPONENT TARGET: apps/mobile/app/booking/[venueId]/payment.tsx

BRAND COLORS: Primary "Table Gold" #C9A84C | Background "Ivory" #FAF8F5 | Success "Green" #2D8A4E
DESIGN TOKENS: radius 12px. Gaps 16px.
VARIANT DIRECTIVE: Secure, fast, professional checkout.

SUBJECT DETAIL: Payment screen (booking step 3 of 4). Ivory background. Progress bar 75% gold. "Payment" header. Order summary card (Warm Gray bg, 12px radius): venue name, date/time, party size, deposit "$75.00". Payment methods: saved "Visa ····4582" with checkmark, "Add new card" with plus icon. Apple Pay / Google Pay branded buttons. Promo code field outlined with "Apply" button. Breakdown: "Deposit: $75.00" / "Booking fee: $0 (member)" with gold member badge / "Total: $75.00" Plus Jakarta Sans 700. Terms checkbox. Bottom: "Confirm & Pay $75" gold CTA. Lock icon + "Secured by Stripe" tiny Slate text.

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
**Agent:** 20 — Social Feed Designer | **Layer:** 21 — Social Features | **FSD Feature:** F09
**Personas:** A01, A07, A15

```
AGENT CONTEXT: You are the Social Feed Designer. Social proof is the conversion engine. Design an activity feed that makes users want to "join the move." Focus on friend-driven content and actionable booking links.

BRAND PREAMBLE:
BRAND: PullUpATL — Atlanta's nightlife and dining table booking app.
DEMOGRAPHIC: African American professionals, creatives, and socialites aged 22-55 in Atlanta, GA.
PLATFORM: Mobile-first iOS/Android app (React Native / Expo).
VIBE: Premium but not pretentious. Nightlife-native. Culturally confident. "Resy meets the group chat."

SUBJECT: Friend Activity / Social Feed.
SCENE: User checking where their crew is or what spots are trending in their circle.
TARGET PERSONAS: A01 Vibe Curator, A07 College Senior, A15 Content Creator.
LAYOUT SPEC:
- Clean Ivory background.
- Feed of interactive activity cards.
- Prominent friend avatars.
- Inline "Join" or "Suggest" action buttons.
- Toggle for Friends vs Trending.
RESPONSIVE CONTEXT: Mobile-first 390×844 (iPhone 15 Pro).
COMPONENT TARGET: apps/mobile/app/(tabs)/social/index.tsx

BRAND COLORS: Primary "Table Gold" #C9A84C | Background "Ivory" #FAF8F5 | Text "Onyx" #2D2D2D
DESIGN TOKENS: radius 12px for cards. Spacing unit 4px.
VARIANT DIRECTIVE: Social-forward, high engagement UI.

SUBJECT DETAIL: Social tab feed. Ivory background. Top: "Your Crew" header Plus Jakarta Sans 700. Toggle: "Friends" (active, gold underline) | "Trending" (inactive). Feed of activity cards: (1) "@KeshiaM booked a table at Seven Midtown for Saturday" — avatar, timestamp "2h ago", venue mini-card with photo, "Join the reservation" gold text link. (2) "@DreThePromoter checked in at Havana Nightclub ATL" — avatar, venue photo, "Live now" green pulse dot, "12 friends here tonight" text. (3) "@NicoleB left a review for Avenue Kitchen & Grill" — avatar, 5 gold stars, review preview snippet, venue link. (4) "@TylerJ is looking for the move tonight" — avatar, "Looking for dinner recs in Buckhead" text, "Suggest a spot" gold button. Notification badge on Social tab: "3".

STYLE: High-fidelity mobile app UI mockup rendered at Figma presentation quality. Pixel-perfect modern iOS/Android design language with warm editorial touches. Rounded cards with subtle shadow, generous white space, bottom tab navigation. Luxury nightlife meets intuitive booking UX. Photography-forward with warm overlays. Gold foil accent details on dark chrome. Clean data hierarchy. Professional mockup on iPhone 15 Pro device frame (space black).
NEGATIVE: No stock photography of white people at generic restaurants. No corporate SaaS dashboard aesthetic. No cold blue-gray tech palette. No neon club flyer energy. No hamburger menus. No pure white #FFFFFF backgrounds. No pure black #000000 text. No Roboto or Inter fonts. No cluttered layouts. No wireframes. No clip art or cartoon illustrations. No generic food stock. No white-tablecloth-only imagery. No Silicon Valley startup aesthetic. No gradients that look like Stripe or Linear.
BACKGROUND: Present on dark midnight #0D0D1A surface with subtle ambient glow. iPhone 15 Pro device frame (space black) at 15-degree angle. Soft gold #C9A84C light leak from behind device. Clean editorial presentation. No busy patterns.
```

### PROMPT 20-B — Venue Check-In Screen
**Agent:** 20 — Social Feed Designer | **Layer:** 21 — Social Features | **FSD Feature:** F09
**Personas:** A01, A15

```
AGENT CONTEXT: You are the Social Feed Designer. The check-in is a "brag" moment. Design a stylish bottom sheet that encourages sharing to both PullUpATL and Instagram Stories. Use high-end typography and "Vibe" emojis.

BRAND PREAMBLE:
BRAND: PullUpATL — Atlanta's nightlife and dining table booking app.
DEMOGRAPHIC: African American professionals, creatives, and socialites aged 22-55 in Atlanta, GA.
PLATFORM: Mobile-first iOS/Android app (React Native / Expo).
VIBE: Premium but not pretentious. Nightlife-native. Culturally confident. "Resy meets the group chat."

SUBJECT: Venue Check-In Bottom Sheet.
SCENE: User has arrived at the venue and wants to alert their friends.
TARGET PERSONAS: A01 Vibe Curator, A15 Content Creator.
LAYOUT SPEC:
- 60% height bottom sheet over venue detail.
- High-contrast card showing "I'm here."
- Social sharing toggles.
- Custom emoji "vibe" selector.
- Stacked friend avatars preview.
RESPONSIVE CONTEXT: Mobile-first 390×844 (iPhone 15 Pro).
COMPONENT TARGET: apps/mobile/src/components/social/CheckInModal.tsx

BRAND COLORS: Primary "Table Gold" #C9A84C | Dark BG #0D0D1A | Dark Card #1E1E35
DESIGN TOKENS: radius 24px for sheet. Subtle gold glow pulse.
VARIANT DIRECTIVE: High-energy, share-worthy UI.

SUBJECT DETAIL: Check-in screen at a venue. Bottom sheet over the venue detail page. Dark background with gold accent. "You're at Revel Atlanta" confirmation header with location pin icon pulsing. Check-in card: venue photo background with dark overlay, venue name large, "Check in & share" gold CTA. Options: "Share to PullUpATL feed" toggle (on), "Share to Instagram Stories" toggle (off), "Tag friends" with avatar chips of friends to tag, "Add a vibe" emoji selector — fire, sparkle, heart, 100. Preview of the share card: branded mini-card showing your avatar, venue name, "is here" text, timestamp. After check-in: "You're here! 8 friends will see this." confirmation.

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
**Agent:** 21 — Group Coordination Designer | **Layer:** 06 — Data Architecture | **FSD Feature:** F06
**Personas:** A01, A03, A10

```
AGENT CONTEXT: You are the Group Coordination Designer. Coordinate the "group chat chaos" into a structured payment view. Design a transparent split-payment interface using visual data (pie charts) to show status.

BRAND PREAMBLE:
BRAND: PullUpATL — Atlanta's nightlife and dining table booking app.
DEMOGRAPHIC: African American professionals, creatives, and socialites aged 22-55 in Atlanta, GA.
PLATFORM: Mobile-first iOS/Android app (React Native / Expo).
VIBE: Premium but not pretentious. Nightlife-native. Culturally confident. "Resy meets the group chat."

SUBJECT: Group Management / Split Payment Screen.
SCENE: Organizer managing a group of 8 and requesting deposit payments.
TARGET PERSONAS: A01 Vibe Curator (Organizer), A03 Birthday Monarch.
LAYOUT SPEC:
- List of guests with status indicators (Confirmed/Pending).
- Pie chart visualization of deposit split.
- Financial calculation ("$9.38 per person").
- "Send Payment Request" gold CTA.
RESPONSIVE CONTEXT: Mobile-first 390×844 (iPhone 15 Pro).
COMPONENT TARGET: apps/mobile/app/group/[id].tsx

BRAND COLORS: Primary "Table Gold" #C9A84C | Background "Ivory" #FAF8F5 | Onyx #2D2D2D
DESIGN TOKENS: radius 12px. Spacing unit 4px.
VARIANT DIRECTIVE: Functional, transparent, financial UI.

SUBJECT DETAIL: Group booking screen — managing a reservation for 8 people. Ivory background. Header: "Your Group" with reservation mini-card (venue + date + party size 8). Guest list: avatar + name + status for each member. Statuses: "Confirmed ✓" green, "Pending" amber, "Invited" slate. Three guests confirmed, two pending, three invited (showing "Invite via text" option). Split payment section: "Split the deposit" toggle (on). Visual: $75 deposit shown as a pie chart divided into portions — each confirmed guest's slice in gold, pending in amber, uninvited in gray. "$9.38 per person" calculation. "Send payment request" gold CTA sends Venmo/CashApp-style request to pending members. Bottom: "Manage Group" + "Group Chat" icon buttons.

STYLE: High-fidelity mobile app UI mockup rendered at Figma presentation quality. Pixel-perfect modern iOS/Android design language with warm editorial touches. Rounded cards with subtle shadow, generous white space, bottom tab navigation. Luxury nightlife meets intuitive booking UX. Photography-forward with warm overlays. Gold foil accent details on dark chrome. Clean data hierarchy. Professional mockup on iPhone 15 Pro device frame (space black).
NEGATIVE: No stock photography of white people at generic restaurants. No corporate SaaS dashboard aesthetic. No cold blue-gray tech palette. No neon club flyer energy. No hamburger menus. No pure white #FFFFFF backgrounds. No pure black #000000 text. No Roboto or Inter fonts. No cluttered layouts. No wireframes. No clip art or cartoon illustrations. No generic food stock. No white-tablecloth-only imagery. No Silicon Valley startup aesthetic. No gradients that look like Stripe or Linear.
BACKGROUND: Present on dark midnight #0D0D1A surface with subtle ambient glow. iPhone 15 Pro device frame (space black) at 15-degree angle. Soft gold #C9A84C light leak from behind device. Clean editorial presentation. No busy patterns.
```

### PROMPT 21-B — Group Chat Thread
**Agent:** 21 — Group Coordination Designer | **Layer:** 06 — Data Architecture | **FSD Feature:** F06
**Personas:** A01, A03, A10

```
AGENT CONTEXT: You are the Group Coordination Designer. Design an in-app chat that is "reservation-aware." It should feel like iMessage but with persistent booking data and quick-action reservation pills.

BRAND PREAMBLE:
BRAND: PullUpATL — Atlanta's nightlife and dining table booking app.
DEMOGRAPHIC: African American professionals, creatives, and socialites aged 22-55 in Atlanta, GA.
PLATFORM: Mobile-first iOS/Android app (React Native / Expo).
VIBE: Premium but not pretentious. Nightlife-native. Culturally confident. "Resy meets the group chat."

SUBJECT: Reservation Group Chat Thread.
SCENE: Group members discussing the night out and confirming their attendance.
TARGET PERSONAS: All group booking users.
LAYOUT SPEC:
- Chat bubbles (Gold/Midnight for self, Gray/Onyx for friends).
- Pinned reservation card at top of thread.
- Quick-action horizontal pills above keyboard (Split Pay, Invite, etc).
- System status messages in-line.
RESPONSIVE CONTEXT: Mobile-first 390×844 (iPhone 15 Pro).
COMPONENT TARGET: apps/mobile/app/group/[id]/chat.tsx

BRAND COLORS: Primary "Table Gold" #C9A84C | Background "Ivory" #FAF8F5 | Secondary "Midnight" #1A1A2E
DESIGN TOKENS: radius 12px for bubbles.
VARIANT DIRECTIVE: Communication-first, utilitarian but branded.

SUBJECT DETAIL: In-app group chat for a reservation group. Familiar messaging UI — chat bubbles, sent (gold background, dark text — right aligned), received (Warm Gray background, Onyx text — left aligned). System messages centered in Slate: "Keshia added Nicole to the group" / "Tyler confirmed the reservation ✓". Pinned message at top: reservation card showing venue + date + time + section, tap to view full details. Quick-action buttons above the keyboard: "Share the invite" "Split payment" "Change party size" "Cancel reservation" as horizontal scroll pills. Typing indicator: "Destiny is typing..." at bottom. Chat header: venue name + party size "8 guests" + info icon.

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
**Agent:** 22 — Reviews & Ratings Designer | **Layer:** 10 — Content Strategy | **FSD Feature:** F09
**Personas:** A09, A11, A13

```
AGENT CONTEXT: You are the Reviews & Ratings Designer. Design a feedback loop that feels rewarding. Use "Vibe Tags" to capture the cultural nuances of ATL dining that standard stars miss (e.g., "Instagrammable").

BRAND PREAMBLE:
BRAND: PullUpATL — Atlanta's nightlife and dining table booking app.
DEMOGRAPHIC: African American professionals, creatives, and socialites aged 22-55 in Atlanta, GA.
PLATFORM: Mobile-first iOS/Android app (React Native / Expo).
VIBE: Premium but not pretentious. Nightlife-native. Culturally confident. "Resy meets the group chat."

SUBJECT: Post-visit Review Submission.
SCENE: User leaving feedback after a Friday night out.
TARGET PERSONAS: A09 Date Planner, A11 Solo Diner, A13 Brunch Enthusiast.
LAYOUT SPEC:
- Ivory background.
- Large star selector (1-5).
- Selectable "vibe chips" grid.
- Photo upload thumbnails.
- Multiline text feedback area.
RESPONSIVE CONTEXT: Mobile-first 390×844 (iPhone 15 Pro).
COMPONENT TARGET: apps/mobile/app/review/[venueId].tsx

BRAND COLORS: Primary "Table Gold" #C9A84C | Background "Ivory" #FAF8F5 | Onyx #2D2D2D
DESIGN TOKENS: radius 12px for fields. Gaps 24px.
VARIANT DIRECTIVE: Reflective, easy to complete.

SUBJECT DETAIL: Post-visit review submission screen. Ivory background. Top: venue photo strip + "How was Avenue Kitchen & Grill?" in Plus Jakarta Sans 700. Star rating selector: 5 large tappable stars (4 filled gold, 1 empty — showing mid-selection state). Vibe tags section: "Pick the vibes" with selectable chips — "Great Service" "Amazing Food" "Perfect Date Spot" "Worth the Price" "Long Wait" "Loud" "Instagrammable" "Good for Groups" — selected chips Midnight fill. Photo upload row: "Add photos" with camera icon + 2 thumbnail previews of uploaded food photos + add-more-plus button. Review text area: "Tell us about it..." placeholder, Warm Gray border, generous height. Anonymous toggle: "Post anonymously" with toggle (off). Bottom: "Submit Review" gold CTA.

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
**Agent:** 23 — Profile & Settings Designer | **Layer:** 13 — Mobile Frontend | **FSD Feature:** F23
**Personas:** A01, A15

```
AGENT CONTEXT: You are the Profile & Settings Designer. The user profile is a personal "status" page. Design an interface that celebrates the user's history and taste, while highlighting their premium membership status.

BRAND PREAMBLE:
BRAND: PullUpATL — Atlanta's nightlife and dining table booking app.
DEMOGRAPHIC: African American professionals, creatives, and socialites aged 22-55 in Atlanta, GA.
PLATFORM: Mobile-first iOS/Android app (React Native / Expo).
VIBE: Premium but not pretentious. Nightlife-native. Culturally confident. "Resy meets the group chat."

SUBJECT: User Profile / Personal Brand Page.
SCENE: User reviewing their own activity, stats, and membership benefits.
TARGET PERSONAS: A01 Vibe Curator, A15 Content Creator.
LAYOUT SPEC:
- Top 40%: Midnight #1A1A2E background with large avatar and status stats.
- Bottom 60%: Ivory #FAF8F5 content area with tabs (Activity, Reviews, Saved).
- Persistent "PullUp Member" gold badge.
- Timeline-style activity feed.
RESPONSIVE CONTEXT: Mobile-first 390×844 (iPhone 15 Pro).
COMPONENT TARGET: apps/mobile/app/(tabs)/profile/index.tsx

BRAND COLORS: Primary "Table Gold" #C9A84C | Secondary "Midnight" #1A1A2E | Background "Ivory" #FAF8F5
DESIGN TOKENS: radius 12px for cards. Spacing unit 4px.
VARIANT DIRECTIVE: High-status, elegant, personal profile.

SUBJECT DETAIL: User profile page. Top section: Midnight #1A1A2E background. Centered: large circular avatar (Black woman, professional photo, warm lighting), "Keshia M." name Plus Jakarta Sans 700 Ivory, "@KeshiaTheCurator" handle in gold, "Midtown, ATL" location in Slate. Stats row: "47 bookings" | "12 reviews" | "89 saved" — numbers in Ivory, labels in Slate. "Edit Profile" outlined button, small. Below: Ivory background content tabs — "Activity" (active gold underline) | "Reviews" | "Saved". Activity tab shows recent booking cards and check-ins in a timeline format. Saved tab preview: horizontal scroll of saved venue cards with heart icons. Member badge: "PullUp Member" gold badge with benefits peek — "No booking fees · Early access · Priority seating".

STYLE: High-fidelity mobile app UI mockup rendered at Figma presentation quality. Pixel-perfect modern iOS/Android design language with warm editorial touches. Rounded cards with subtle shadow, generous white space, bottom tab navigation. Luxury nightlife meets intuitive booking UX. Photography-forward with warm overlays. Gold foil accent details on dark chrome. Clean data hierarchy. Professional mockup on iPhone 15 Pro device frame (space black).
NEGATIVE: No stock photography of white people at generic restaurants. No corporate SaaS dashboard aesthetic. No cold blue-gray tech palette. No neon club flyer energy. No hamburger menus. No pure white #FFFFFF backgrounds. No pure black #000000 text. No Roboto or Inter fonts. No cluttered layouts. No wireframes. No clip art or cartoon illustrations. No generic food stock. No white-tablecloth-only imagery. No Silicon Valley startup aesthetic. No gradients that look like Stripe or Linear.
BACKGROUND: Present on dark midnight #0D0D1A surface with subtle ambient glow. iPhone 15 Pro device frame (space black) at 15-degree angle. Soft gold #C9A84C light leak from behind device. Clean editorial presentation. No busy patterns.
```

### PROMPT 23-B — Settings Screen
**Agent:** 23 — Profile & Settings Designer | **Layer:** 13 — Mobile Frontend | **FSD Feature:** All
**Personas:** All

```
AGENT CONTEXT: You are the Profile & Settings Designer. Settings should be functional and "native-feeling." Use standard list patterns but with PullUpATL's premium typography and color accents.

BRAND PREAMBLE:
BRAND: PullUpATL — Atlanta's nightlife and dining table booking app.
DEMOGRAPHIC: African American professionals, creatives, and socialites aged 22-55 in Atlanta, GA.
PLATFORM: Mobile-first iOS/Android app (React Native / Expo).
VIBE: Premium but not pretentious. Nightlife-native. Culturally confident. "Resy meets the group chat."

SUBJECT: App Settings / Configuration Screen.
SCENE: User managing their account preferences, notifications, and security.
TARGET PERSONAS: All users.
LAYOUT SPEC:
- Grouped list items (iOS Settings style).
- Standard chevrons and toggles.
- Distinct "Danger Zone" for destructive actions.
- Version number visible at bottom.
RESPONSIVE CONTEXT: Mobile-first 390×844 (iPhone 15 Pro).
COMPONENT TARGET: apps/mobile/app/(tabs)/profile/settings.tsx

BRAND COLORS: Primary "Table Gold" #C9A84C | Background "Ivory" #FAF8F5 | Onyx #2D2D2D
DESIGN TOKENS: radius 12px for list groups. Gaps 12px.
VARIANT DIRECTIVE: Clean, minimal, utilitarian.

SUBJECT DETAIL: Settings screen. Ivory background. Clean grouped list layout (iOS Settings style but branded). Groups: "Account" — Profile, Phone Number, Email, Password (each row with chevron). "Preferences" — Notifications (with toggle preview), Neighborhoods, Cuisine Preferences, Dark Mode toggle. "Payment" — Payment Methods, Transaction History. "Membership" — "PullUp Member" with gold star icon, "Manage" chevron. "Support" — Help Center, Report a Problem, Terms of Service, Privacy Policy. "Danger Zone" — "Log Out" in Alert Red, "Delete Account" in Alert Red. PullUpATL version "v1.2.0" at very bottom in tiny Slate. Each row: icon left (Slate), label center (Onyx), chevron or toggle right.

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
**Agent:** 24 — My Bookings Designer | **Layer:** 19 — Booking Engine | **FSD Feature:** F05
**Personas:** A09, A12, A02

```
AGENT CONTEXT: You are the My Bookings Designer. This is the user's "itinerary." Focus on scannability and urgency for tonight's bookings, while keeping the full list accessible.

BRAND PREAMBLE:
BRAND: PullUpATL — Atlanta's nightlife and dining table booking app.
DEMOGRAPHIC: African American professionals, creatives, and socialites aged 22-55 in Atlanta, GA.
PLATFORM: Mobile-first iOS/Android app (React Native / Expo).
VIBE: Premium but not pretentious. Nightlife-native. Culturally confident. "Resy meets the group chat."

SUBJECT: User's Booking History & Upcoming Itinerary.
SCENE: User checking their plans for the weekend or looking for a past receipt.
TARGET PERSONAS: A09 Couple (weekend planning), A12 Corporate Host (receipt access).
LAYOUT SPEC:
- Tabbed navigation (Upcoming, Past, Canceled).
- High-priority "Tonight" card with gold accent.
- Standard cards for future dates.
- Group status badges (e.g., "5/8 confirmed").
RESPONSIVE CONTEXT: Mobile-first 390×844 (iPhone 15 Pro).
COMPONENT TARGET: apps/mobile/app/bookings/index.tsx

BRAND COLORS: Primary "Table Gold" #C9A84C | Secondary "Midnight" #1A1A2E | Accent "Velvet" #8B2252
DESIGN TOKENS: radius 12px for cards. Gaps 16px.
VARIANT DIRECTIVE: Organized, reliable, high information density.

SUBJECT DETAIL: My Bookings screen. Ivory background. Tab toggle: "Upcoming" (active gold underline) | "Past" | "Canceled". Upcoming bookings: two cards. Card 1 (tonight): gold left border accent, venue photo + "Avenue Kitchen & Grill" + "Tonight · 8:30 PM · 4 guests" + "2 hours away" countdown in amber. Quick actions: "Modify" "Cancel" "Share" icon buttons. Confirmation code "PUA-7X3K" in monospaced gold. Card 2 (next week): standard Warm Gray border, "Revel Atlanta" + "Sat, Mar 22 · 10 PM · 8 guests" + "VIP Section S3" badge in Velvet. Guest count "5/8 confirmed" with avatar stack. Empty state at bottom (if only 2 bookings): subtle CTA "Find your next spot" with gold arrow.

STYLE: High-fidelity mobile app UI mockup rendered at Figma presentation quality. Pixel-perfect modern iOS/Android design language with warm editorial touches. Rounded cards with subtle shadow, generous white space, bottom tab navigation. Luxury nightlife meets intuitive booking UX. Photography-forward with warm overlays. Gold foil accent details on dark chrome. Clean data hierarchy. Professional mockup on iPhone 15 Pro device frame (space black).
NEGATIVE: No stock photography of white people at generic restaurants. No corporate SaaS dashboard aesthetic. No cold blue-gray tech palette. No neon club flyer energy. No hamburger menus. No pure white #FFFFFF backgrounds. No pure black #000000 text. No Roboto or Inter fonts. No cluttered layouts. No wireframes. No clip art or cartoon illustrations. No generic food stock. No white-tablecloth-only imagery. No Silicon Valley startup aesthetic. No gradients that look like Stripe or Linear.
BACKGROUND: Present on dark midnight #0D0D1A surface with subtle ambient glow. iPhone 15 Pro device frame (space black) at 15-degree angle. Soft gold #C9A84C light leak from behind device. Clean editorial presentation. No busy patterns.
```

### PROMPT 24-B — Past Booking with Review Prompt
**Agent:** 24 — My Bookings Designer | **Layer:** 19 — Booking Engine | **FSD Feature:** F09
**Personas:** A09, A12, A02

```
AGENT CONTEXT: You are the My Bookings Designer. Re-engage the user post-visit. Design a screen that makes writing a review and re-booking feel like a natural next step.

BRAND PREAMBLE:
BRAND: PullUpATL — Atlanta's nightlife and dining table booking app.
DEMOGRAPHIC: African American professionals, creatives, and socialites aged 22-55 in Atlanta, GA.
PLATFORM: Mobile-first iOS/Android app (React Native / Expo).
VIBE: Premium but not pretentious. Nightlife-native. Culturally confident. "Resy meets the group chat."

SUBJECT: Past Booking Detail / Review Entry Point.
SCENE: User checking a past booking and being prompted for feedback.
TARGET PERSONAS: A09 Couple (repeat visit intent), A13 Brunch Enthusiast.
LAYOUT SPEC:
- Dimmed photography to signal past status.
- Highlighted "Leave a Review" card.
- spend summary and itemized receipt link.
- "Rebook" CTA prominently placed.
RESPONSIVE CONTEXT: Mobile-first 390×844 (iPhone 15 Pro).
COMPONENT TARGET: apps/mobile/app/bookings/[id].tsx (Past variant)

BRAND COLORS: Primary "Table Gold" #C9A84C | Background "Ivory" #FAF8F5 | Slate #6B7280
DESIGN TOKENS: radius 12px. Gaps 24px.
VARIANT DIRECTIVE: Reflective, encouraging re-engagement.

SUBJECT DETAIL: Past booking detail screen with review prompt. Ivory background. Top: venue photo (dimmed slightly to signal "past"), venue name, date "Mar 8, 2025" in Slate. Status badge: "Completed ✓" green. Booking details: time, party size, confirmation code (grayed). Spend summary: "Total spent: $312" with receipt link. Review prompt card: gold-bordered, "How was Avenue Kitchen & Grill?" headline, 5 empty star outlines, "Leave a review" gold CTA. Below: "Rebook this spot" outlined button with repeat icon. "Similar venues" horizontal scroll of 3 recommendation cards.

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
**Agent:** 25 — Payments & Wallet Designer | **Layer:** 22 — Payment & Commerce | **FSD Feature:** F22
**Personas:** A02, A12

```
AGENT CONTEXT: You are the Payments & Wallet Designer. Design a "digital wallet" that feels high-end and secure. Cards should look like luxury physical cards, and transaction history should be clear for corporate spenders.

BRAND PREAMBLE:
BRAND: PullUpATL — Atlanta's nightlife and dining table booking app.
DEMOGRAPHIC: African American professionals, creatives, and socialites aged 22-55 in Atlanta, GA.
PLATFORM: Mobile-first iOS/Android app (React Native / Expo).
VIBE: Premium but not pretentious. Nightlife-native. Culturally confident. "Resy meets the group chat."

SUBJECT: Payment Management / Wallet Screen.
SCENE: User managing their saved cards or reviewing their spending history.
TARGET PERSONAS: A02 Breadwinner (high spend), A12 Corporate Host (expense tracking).
LAYOUT SPEC:
- Horizontal carousel of saved card graphics.
- "Add Payment Method" list item.
- Transaction history vertical list with status badges.
- Branded watermarks on card graphics.
RESPONSIVE CONTEXT: Mobile-first 390×844 (iPhone 15 Pro).
COMPONENT TARGET: apps/mobile/src/features/payments/components/WalletView.tsx

BRAND COLORS: Primary "Table Gold" #C9A84C | Secondary "Midnight" #1A1A2E | Success "Green" #2D8A4E
DESIGN TOKENS: radius 12px for list items, 16px for card graphics.
VARIANT DIRECTIVE: Fintech-luxury, secure, organized.

SUBJECT DETAIL: Payment methods / wallet screen. Ivory background. Header: "Payment" Plus Jakarta Sans 700. Saved cards displayed as stylized card previews: (1) Visa card — dark Midnight #1A1A2E gradient card shape with gold PullUpATL watermark, last four "····4582", exp "09/27", "Default" gold badge. (2) Amex — lighter card. "Add Payment Method" row with plus icon and chevron. Apple Pay / Google Pay toggle rows with their branded icons. Divider. "Transaction History" section: list of recent transactions — each row: venue name, date, amount, status. "Avenue Kitchen & Grill · Mar 8 · $312.00 · Completed ✓" green. "Revel Atlanta · Mar 1 · $2,752.00 · Completed ✓". "Havana Nightclub ATL · Feb 22 · $75.00 · Refunded" amber. "View all transactions" link at bottom.

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
**Agent:** 26 — Venue Owner Dashboard Designer | **Layer:** 23 — Venue Management | **FSD Feature:** F26
**Personas:** B01, B06

```
AGENT CONTEXT: You are the Venue Owner Dashboard Designer. Create a command center for venue owners. Focus on high-level KPIs, real-time revenue tracking, and operational health. The UI must be professional, data-dense, and optimized for desktop dark-mode use.

BRAND PREAMBLE:
BRAND: PullUpATL — Atlanta's nightlife and dining table booking app.
DEMOGRAPHIC: African American professionals, creatives, and socialites aged 22-55 in Atlanta, GA.
PLATFORM: Desktop-first Web Admin (Next.js / Tailwind).
VIBE: Professional, operational, high-status.

SUBJECT: Venue Owner Admin Dashboard (Web).
SCENE: A club owner (like Jay) checking tonight's expected revenue and occupancy at 8 PM.
TARGET PERSONAS: B01 Club Owner, B06 General Manager.
LAYOUT SPEC:
- Desktop width (1440px+).
- Left persistent navigation sidebar.
- Top KPI card row (Covers, Revenue, Tables, Utilization).
- Two-column main content: Left (Reservations Table), Right (Revenue Charts).
- Live occupancy pulse indicators.
RESPONSIVE CONTEXT: Desktop Web.
COMPONENT TARGET: apps/admin/src/app/dashboard/page.tsx

BRAND COLORS: Primary "Table Gold" #C9A84C | Dark BG #0D0D1A | Dark Surface #1E1E35 | Success Green #2D8A4E
DESIGN TOKENS: radius 8px for data cards. Compact data spacing.
VARIANT DIRECTIVE: Industrial-strength business tool.

SUBJECT DETAIL: Venue owner admin dashboard — web view (desktop width, NOT mobile). Dark mode: #0D0D1A background. Left sidebar: PullUpATL logo top, nav items — "Dashboard" (active gold), "Reservations", "Sections & Tables", "Bottle Menu", "Events", "Promoters", "Staff", "Reviews", "Analytics", "Settings" — icons + labels in Slate, active in Ivory with gold left border. Main content: "Good evening, Jay" greeting. KPI card row: "Tonight's Covers: 247" / "Revenue Today: $18,400" / "Tables Available: 3 of 12" / "Section Utilization: 87%" — each card on dark surface #1E1E35, number large in Ivory, label in Slate, trend arrow green/red. Below: two columns — left: "Tonight's Reservations" table (time, name, party, section, status), right: "Revenue This Week" bar chart in gold bars on dark. Bottom: "Live Floor" button with pulse dot — links to real-time floor management.

STYLE: Web dashboard mockup. Dark mode. Data-dense but organized. NOT consumer app aesthetic — this is a business tool. Clean tables, legible charts, functional layout. Presented in a browser window frame (Chrome, dark mode).
NEGATIVE: No stock photography of white people at generic restaurants. No corporate SaaS dashboard aesthetic. No cold blue-gray tech palette. No neon club flyer energy. No hamburger menus. No pure white #FFFFFF backgrounds. No pure black #000000 text. No Roboto or Inter fonts. No cluttered layouts. No wireframes. No clip art or cartoon illustrations. No generic food stock. No white-tablecloth-only imagery. No Silicon Valley startup aesthetic. No gradients that look like Stripe or Linear.
BACKGROUND: Dark surface. Macbook Pro mockup at slight angle. Subtle gold ambient glow.
```

### PROMPT 26-B — Reservations Management Grid
**Agent:** 26 — Venue Owner Dashboard Designer | **Layer:** 23 — Venue Management | **FSD Feature:** F26
**Personas:** B01, B06

```
AGENT CONTEXT: You are the Venue Owner Dashboard Designer. Design a high-density data grid for managing tonight's floor. The UI must replace the traditional "black book" and provide hostess-ready guest data (e.g., whale status).

BRAND PREAMBLE:
BRAND: PullUpATL — Atlanta's nightlife and dining table booking app.
DEMOGRAPHIC: African American professionals, creatives, and socialites aged 22-55 in Atlanta, GA.
PLATFORM: Desktop-first Web Admin (Next.js / Tailwind).
VIBE: Operational, efficient, informed.

SUBJECT: Reservations Management Data Grid.
SCENE: General Manager filtering tonight's reservations to identify VIP arrivals.
TARGET PERSONAS: B06 GM, B01 Club Owner.
LAYOUT SPEC:
- Full-width data table.
- Filter toolbar at top (Date, Status, Section, Search).
- Action-oriented rows (Seat, Cancel, Message).
- Detail sidebar for selected guest (Spend history, notes).
RESPONSIVE CONTEXT: Desktop Web.
COMPONENT TARGET: apps/admin/src/app/bookings/page.tsx

BRAND COLORS: Primary "Table Gold" #C9A84C | Dark BG #0D0D1A | Dark Card #1E1E35 | Status Colors (Green/Amber/Red/Gold)
DESIGN TOKENS: radius 4px for status badges. Monospaced font for confirmation codes.
VARIANT DIRECTIVE: Dense, functional grid.

SUBJECT DETAIL: Reservations management screen (web dashboard). Dark mode. Table/grid view of tonight's reservations: columns — Time, Guest Name, Party Size, Table/Section, Status, Source, Actions. Rows with alternating dark surface shades. Status badges: "Confirmed" green, "Pending" amber, "Seated" gold, "No-Show" red, "Waitlist" blue. Source column: "App" "Walk-in" "Phone" "Promoter: @Dame". Filter bar top: date picker, status dropdown, section filter. Search: "Search by name or confirmation code". Action icons per row: checkmark (seat), X (cancel), pencil (modify), chat bubble (message guest). Right panel: selected reservation detail — guest profile card with booking history "12th visit", spend history "$4,200 lifetime", notes "Regular — prefers Section S3, allergic to shellfish", dietary tags.

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
**Agent:** 27 — Promoter Dashboard Designer | **Layer:** 23 — Venue Management | **FSD Feature:** F31
**Personas:** B02

```
AGENT CONTEXT: You are the Promoter Dashboard Designer. Promoters are always on the move. Your goal is to design a high-status mobile dashboard that makes tracking commissions and guest lists effortless during a live event.

BRAND PREAMBLE:
BRAND: PullUpATL — Atlanta's nightlife and dining table booking app.
DEMOGRAPHIC: African American professionals, creatives, and socialites aged 22-55 in Atlanta, GA.
PLATFORM: Mobile-first iOS/Android app (React Native / Expo).
VIBE: High-energy, professional-promoter, status-driven.

SUBJECT: Mobile Promoter Dashboard.
SCENE: Dame (promoter) checking his commissions and tonight's guest list at the club entrance.
TARGET PERSONAS: B02 Promoter, B03 DJ (referral tracking).
LAYOUT SPEC:
- Dark Mode exclusively.
- Quick-stats row at top.
- Hero attribution link section with copy/share.
- Searchable guest list with "Quick Add" FAB.
- Commission history chart.
RESPONSIVE CONTEXT: Mobile-first 390×844 (iPhone 15 Pro).
COMPONENT TARGET: apps/mobile/app/(tabs)/profile/promoter.tsx

BRAND COLORS: Primary "Table Gold" #C9A84C | Dark BG #0D0D1A | Success Green #2D8A4E
DESIGN TOKENS: radius 12px. Gaps 16px.
VARIANT DIRECTIVE: Fast, mobile-optimized operations.

SUBJECT DETAIL: Promoter-specific dashboard (mobile app view — promoters use phones, not desktops). Dark mode. Top: "Your Dashboard" + promoter name "@Dame" with verified gold checkmark. Stats cards row (horizontal scroll): "Tonight's Guest List: 34" / "This Month Revenue: $12,400" / "Commission Earned: $1,860" / "Conversion Rate: 68%". Below: "Your Link" section — the promoter's unique attribution URL "pullup.atl/dame" with copy button and share button. QR code for the link. "Tonight's Guest List" expandable section: list of names + party size + status (RSVP'd / Confirmed / Arrived with green pulse). "Quick Add" floating action button to add walk-up guests. "Commission History" section: monthly breakdown chart in gold bars. "Active Venues" list: venues the promoter works with, each with tonight's event and guest list count.

STYLE: High-fidelity mobile app UI mockup rendered at Figma presentation quality. Pixel-perfect modern iOS/Android design language with warm editorial touches. Rounded cards with subtle shadow, generous white space, bottom tab navigation. Luxury nightlife meets intuitive booking UX. Photography-forward with warm overlays. Gold foil accent details on dark chrome. Clean data hierarchy. Professional mockup on iPhone 15 Pro device frame (space black).
NEGATIVE: No stock photography of white people at generic restaurants. No corporate SaaS dashboard aesthetic. No cold blue-gray tech palette. No neon club flyer energy. No hamburger menus. No pure white #FFFFFF backgrounds. No pure black #000000 text. No Roboto or Inter fonts. No cluttered layouts. No wireframes. No clip art or cartoon illustrations. No generic food stock. No white-tablecloth-only imagery. No Silicon Valley startup aesthetic. No gradients that look like Stripe or Linear.
BACKGROUND-DARK: Same device frame on #0D0D1A surface. Subtle Velvet #8B2252 ambient glow behind device suggesting VIP energy. Faint gold particle effect in negative space.
```

### PROMPT 27-B — Promoter Attribution Link Sharing
**Agent:** 27 — Promoter Dashboard Designer | **Layer:** 23 — Venue Management | **FSD Feature:** F31
**Personas:** B02

```
AGENT CONTEXT: You are the Promoter Dashboard Designer. The share link is the promoter's "money maker." Design a bottom sheet that makes sharing to Instagram Stories or WhatsApp a one-tap experience.

BRAND PREAMBLE:
BRAND: PullUpATL — Atlanta's nightlife and dining table booking app.
DEMOGRAPHIC: African American professionals, creatives, and socialites aged 22-55 in Atlanta, GA.
PLATFORM: Mobile-first iOS/Android app (React Native / Expo).
VIBE: Shareable, effortless, branded.

SUBJECT: Promoter Link Share Sheet.
SCENE: Promoter preparing a social media blast for a Saturday night event.
TARGET PERSONAS: B02 Promoter.
LAYOUT SPEC:
- Dark bottom sheet overlay (70% height).
- Prominent link display with monospaced gold text.
- Large scannable QR code.
- Icon-based share methods.
- Branded "Link Preview" card.
RESPONSIVE CONTEXT: Mobile-first 390×844 (iPhone 15 Pro).
COMPONENT TARGET: apps/mobile/src/features/promoter/components/ShareLinkSheet.tsx

BRAND COLORS: Primary "Table Gold" #C9A84C | Dark BG #1A1A2E | Ivory #FAF8F5
DESIGN TOKENS: radius 24px for top of sheet.
VARIANT DIRECTIVE: Social-ready, high-contrast UI.

SUBJECT DETAIL: Share sheet for promoter attribution link. Dark bottom sheet overlay. Header: "Share Your Link" with gold link icon. The link "pullup.atl/dame" displayed large in monospaced gold font with copy icon. "Every booking from this link earns you 15% commission" explainer in Slate. QR code: high-contrast, gold corners on white code block — scannable. Share options: large icon buttons for "Instagram Story" "Text Message" "WhatsApp" "Copy Link" "More". Below: "Customize your link" — option to attach to a specific event or venue. Preview of what the shared link shows: a branded card with the promoter's name, venue, event details, and "Book through @Dame" CTA.

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
**Agent:** 28 — Staff View Designer | **Layer:** 23 — Venue Management | **FSD Feature:** F13
**Personas:** B04, B05

```
AGENT CONTEXT: You are the Staff View Designer. Venue staff need information at a glance while juggling service. Prioritize operational data (table IDs, bottle orders, arrival status) and high-visibility action buttons.

BRAND PREAMBLE:
BRAND: PullUpATL — Atlanta's nightlife and dining table booking app.
DEMOGRAPHIC: African American professionals, creatives, and socialites aged 22-55 in Atlanta, GA.
PLATFORM: Mobile-first iOS/Android app (React Native / Expo).
VIBE: Efficient, high-visibility, professional.

SUBJECT: Hostess / VIP Server Live View.
SCENE: A bottle hostess checking which of her tables have arrived and their remaining bottle minimum.
TARGET PERSONAS: B04 Bottle Hostess, B05 Bartender, B06 GM.
LAYOUT SPEC:
- Dark Mode for nighttime venue use.
- Miniature Floor Plan highlighting assigned zones.
- Card list of assigned tables.
- Progress bars for bottle minimum targets.
- Guest profile "peeks" (VIP status, shellfish allergy).
RESPONSIVE CONTEXT: Mobile-first 390×844 (iPhone 15 Pro).
COMPONENT TARGET: apps/mobile/app/venue/[id]/staff.tsx

BRAND COLORS: Primary "Table Gold" #C9A84C | Dark BG #0D0D1A | Dark Card #1E1E35 | Amber/Green for status.
DESIGN TOKENS: radius 12px. High-contrast typography.
VARIANT DIRECTIVE: Glanceable operational tool.

SUBJECT DETAIL: Hostess/VIP server mobile view for tonight. Dark mode. Top: venue name + "Your Sections Tonight" header. Assigned sections: visual mini floor plan showing 3 highlighted sections (S2, S5, S7) in gold — the rest dimmed. Section cards below: each card shows section ID "S5", booking details "Tyler J. · Party of 10 · Arriving 10:30 PM", bottle pre-order "2x Hennessy, 1x Ace of Spades", special notes "Birthday — bring sparklers and cake at 11 PM" with flag icon, spend target "Min: $2,500 · Pre-ordered: $1,800 · Remaining: $700" progress bar in gold. Guest profile peek: "12th visit · VIP Member · Allergic: shellfish" in small text. Quick actions: "Mark as Arrived" green button, "Message Guest" chat icon, "Call Guest" phone icon.

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
**Agent:** 29 — Notifications & Alerts Designer | **Layer:** 18 — Real-Time | **FSD Feature:** F29
**Personas:** All

```
AGENT CONTEXT: You are the Notifications & Alerts Designer. Your goal is to design an "inbox" for the user's social and booking life. Organize notifications by urgency and relevance, using gold accents for active/unread items.

BRAND PREAMBLE:
BRAND: PullUpATL — Atlanta's nightlife and dining table booking app.
DEMOGRAPHIC: African American professionals, creatives, and socialites aged 22-55 in Atlanta, GA.
PLATFORM: Mobile-first iOS/Android app (React Native / Expo).
VIBE: Premium but not pretentious. Nightlife-native. Culturally confident. "Resy meets the group chat."

SUBJECT: In-App Notification Center / Activity Inbox.
SCENE: User reviewing recent activity: booking reminders, friend confirmations, and trending alerts.
TARGET PERSONAS: All users.
LAYOUT SPEC:
- Clean Ivory background.
- Categorized tabs (All, Bookings, Social, Promos).
- Cards grouped by time (Today, Earlier this Week).
- Gold left border for unread notifications.
- Iconography for notification types (Bell, People, Fire).
RESPONSIVE CONTEXT: Mobile-first 390×844 (iPhone 15 Pro).
COMPONENT TARGET: apps/mobile/src/components/screens/NotificationsContent.tsx

BRAND COLORS: Primary "Table Gold" #C9A84C | Background "Ivory" #FAF8F5 | Text "Onyx" #2D2D2D
DESIGN TOKENS: radius 12px for cards. Spacing unit 4px.
VARIANT DIRECTIVE: High information density, organized, clean.

SUBJECT DETAIL: Notification center / inbox screen. Ivory background. Header: "Notifications" with "Mark all read" text link in gold. Toggle: "All" | "Bookings" | "Social" | "Promos". Notification cards grouped by time: "Today" section — (1) gold bell icon + "Reminder: Your table at Avenue Kitchen & Grill is in 2 hours" + "6:30 PM" timestamp, unread gold left border. (2) people icon + "Nicole confirmed the reservation" with avatar, "3h ago". (3) fire icon + "Trending: Seven Midtown just opened reservations for Saturday" + venue thumbnail. "Earlier This Week" section — (4) star icon + "You earned 50 PullUp Points from your last visit" gold text. (5) megaphone icon + "New: Bottle service now available at 12 venues" with Velvet badge "NEW". Read notifications have no left border and slightly dimmed. Unread count badge on top of the screen.

STYLE: High-fidelity mobile app UI mockup rendered at Figma presentation quality. Pixel-perfect modern iOS/Android design language with warm editorial touches. Rounded cards with subtle shadow, generous white space, bottom tab navigation. Luxury nightlife meets intuitive booking UX. Photography-forward with warm overlays. Gold foil accent details on dark chrome. Clean data hierarchy. Professional mockup on iPhone 15 Pro device frame (space black).
NEGATIVE: No stock photography of white people at generic restaurants. No corporate SaaS dashboard aesthetic. No cold blue-gray tech palette. No neon club flyer energy. No hamburger menus. No pure white #FFFFFF backgrounds. No pure black #000000 text. No Roboto or Inter fonts. No cluttered layouts. No wireframes. No clip art or cartoon illustrations. No generic food stock. No white-tablecloth-only imagery. No Silicon Valley startup aesthetic. No gradients that look like Stripe or Linear.
BACKGROUND: Present on dark midnight #0D0D1A surface with subtle ambient glow. iPhone 15 Pro device frame (space black) at 15-degree angle. Soft gold #C9A84C light leak from behind device. Clean editorial presentation. No busy patterns.
```

### PROMPT 29-B — Push Notification Lock Screen Mockup
**Agent:** 29 — Notifications & Alerts Designer | **Layer:** 18 — Real-Time | **FSD Feature:** F29
**Personas:** All

```
AGENT CONTEXT: You are the Notifications & Alerts Designer. Design the "lock screen" experience. These notifications must be high-impact, FOMO-driven, and actionable to drive the user back into the app.

BRAND PREAMBLE:
BRAND: PullUpATL — Atlanta's nightlife and dining table booking app.
DEMOGRAPHIC: African American professionals, creatives, and socialites aged 22-55 in Atlanta, GA.
PLATFORM: Mobile-first iOS/Android app (React Native / Expo).
VIBE: Premium but not pretentious. Nightlife-native. Culturally confident. "Resy meets the group chat."

SUBJECT: Push Notification Stack on Lock Screen.
SCENE: User's phone on their nightstand or at their desk showing activity alerts.
TARGET PERSONAS: All users.
LAYOUT SPEC:
- iPhone 15 Pro lock screen (Portrait).
- Stacked rich notifications.
- Thumbnail previews within notifications.
- Quick action buttons (View Details, Directions).
RESPONSIVE CONTEXT: iOS Lock Screen 390×844.
COMPONENT TARGET: (System Push Service - visual reference only)

BRAND COLORS: Dark BG #0D0D1A | Gold #C9A84C (Icon)
DESIGN TOKENS: radius 12px for system notifications.
VARIANT DIRECTIVE: Realistic, high-contrast, lifestyle context.

SUBJECT DETAIL: Three push notification designs shown on iPhone lock screen. Phone is locked, showing wallpaper (dark, subtle ATL skyline at night). Three PullUpATL notifications stacked: (1) "🔥 Your crew is at Havana Nightclub ATL right now — 5 friends checked in" with PullUpATL icon, (2) "⏰ Your table at Avenue Kitchen & Grill is in 2 hours. Don't forget: dress code is smart casual." with action buttons "View Details" "Get Directions", (3) "🎂 Destiny's birthday section is confirmed! Share the invite with your group." with action button "Share Invite". Each notification shows PullUpATL app icon (gold mark on midnight), app name, timestamp. Rich notification preview with venue thumbnail image.

STYLE: High-fidelity mobile app UI mockup rendered at Figma presentation quality. Pixel-perfect modern iOS/Android design language with warm editorial touches. Rounded cards with subtle shadow, generous white space, bottom tab navigation. Luxury nightlife meets intuitive booking UX. Photography-forward with warm overlays. Gold foil accent details on dark chrome. Clean data hierarchy. Professional mockup on iPhone 15 Pro device frame (space black).
NEGATIVE: No stock photography of white people at generic restaurants. No corporate SaaS dashboard aesthetic. No cold blue-gray tech palette. No neon club flyer energy. No hamburger menus. No pure white #FFFFFF backgrounds. No pure black #000000 text. No Roboto or Inter fonts. No cluttered layouts. No wireframes. No clip art or cartoon illustrations. No generic food stock. No white-tablecloth-only imagery. No Silicon Valley startup aesthetic. No gradients that look like Stripe or Linear.
BACKGROUND: iPhone 15 Pro lock screen, straight-on, dark wallpaper. Realistic notification styling. Time "9:47 PM" visible at top.
```

### PROMPT 29-C — In-App Toast / Alert States
**Agent:** 29 — Notifications & Alerts Designer | **Layer:** 18 — Real-Time | **FSD Feature:** All
**Personas:** All

```
AGENT CONTEXT: You are the Notifications & Alerts Designer. Design the system "feedback" components. Toasts and banners must be highly visible without blocking the core task. Use the brand's Ivory/Gold/Midnight palette with standard status colors.

BRAND PREAMBLE:
BRAND: PullUpATL — Atlanta's nightlife and dining table booking app.
DEMOGRAPHIC: African American professionals, creatives, and socialites aged 22-55 in Atlanta, GA.
PLATFORM: Mobile-first iOS/Android app (React Native / Expo).
VIBE: Premium but not pretentious. Nightlife-native. Culturally confident. "Resy meets the group chat."

SUBJECT: In-app Toast and Alert Component Library.
SCENE: Design system reference sheet showing various feedback states.
TARGET PERSONAS: All users.
LAYOUT SPEC:
- Vertical list of isolated alert components.
- Success, Error, Warning, Info, and Promo variations.
- Top-down vs Bottom-up presentation.
- Clear icon-label association.
RESPONSIVE CONTEXT: 390px width components.
COMPONENT TARGET: apps/mobile/src/shared/ui/Toast.tsx

BRAND COLORS: Success Green #2D8A4E | Error Red #D32F2F | Warning Amber #F59E0B | Info Blue #3B82A0 | Primary Gold #C9A84C
DESIGN TOKENS: radius 12px. Subtle shadows.
VARIANT DIRECTIVE: Clean, component-library style reference.

SUBJECT DETAIL: Reference sheet of in-app alert/toast notification states. Show 6 variations on Ivory background: (1) Success toast: green left border, checkmark icon, "Booking confirmed!" text, slides down from top. (2) Error toast: red left border, X icon, "Payment failed. Try another card." text. (3) Warning banner: amber background full-width, "Only 1 table left tonight — book now" with "Book" button. (4) Info banner: Culture Blue #3B82A0 background, "New feature: Bottle service is live!" with "Try it" link. (5) Gold promotional banner: "PullUp Members get free booking fees" with "Join" gold button. (6) Snackbar at bottom: dark Midnight pill, "Saved to favorites ★" with "Undo" gold text, auto-dismisses.

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
**Agent:** 30 — Empty States, Errors & Loading Designer | **Layer:** 11 — Accessibility | **FSD Feature:** All
**Personas:** All

```
AGENT CONTEXT: You are the Empty States & Errors Designer. Empty states are brand opportunities. Design delightful, minimal illustrations and punchy copy that guides users to the next action instead of a dead end.

BRAND PREAMBLE:
BRAND: PullUpATL — Atlanta's nightlife and dining table booking app.
DEMOGRAPHIC: African American professionals, creatives, and socialites aged 22-55 in Atlanta, GA.
PLATFORM: Mobile-first iOS/Android app (React Native / Expo).
VIBE: Premium but not pretentious. Nightlife-native. Culturally confident. "Resy meets the group chat."

SUBJECT: Empty State Illustration & Copy Library.
SCENE: Reference sheet showing "No Results" or "No Activity" scenarios.
TARGET PERSONAS: All users.
LAYOUT SPEC:
- 4-grid phone frame layout.
- Centered line-art illustrations with gold accents.
- High-contrast primary CTAs.
- Secondary text links.
RESPONSIVE CONTEXT: 390×844 grids.
COMPONENT TARGET: apps/mobile/src/shared/ui/EmptyState.tsx

BRAND COLORS: Primary "Table Gold" #C9A84C | Background "Ivory" #FAF8F5 | Slate #6B7280
DESIGN TOKENS: Spacing 24px/32px. Minimalist line weight.
VARIANT DIRECTIVE: Charming, minimalist, actionable.

SUBJECT DETAIL: Collection of 4 empty states on one reference sheet. Each in its own phone frame: (1) No Bookings: centered illustration (minimalist line art of an empty table with a single chair, gold accent on the chair), "No bookings yet?" in Plus Jakarta Sans 600 Onyx, "Atlanta's too good to eat at home. Let's find your spot." in Slate, "Explore Venues" gold CTA. (2) No Search Results: illustration (magnifier with question mark, gold), "Nothing matched that vibe." text, "Try different filters" gold link. (3) No Reviews: illustration (empty speech bubble, gold star), "Be the first to review." text, "Write a Review" CTA. (4) No Friends Yet: illustration (two people silhouettes reaching toward each other, gold), "Your crew isn't here yet." text, "Invite Friends" gold CTA + "Find Friends" secondary link.

STYLE: High-fidelity mobile app UI mockup rendered at Figma presentation quality. Pixel-perfect modern iOS/Android design language with warm editorial touches. Rounded cards with subtle shadow, generous white space, bottom tab navigation. Luxury nightlife meets intuitive booking UX. Photography-forward with warm overlays. Gold foil accent details on dark chrome. Clean data hierarchy. Professional mockup on iPhone 15 Pro device frame (space black).
NEGATIVE: No stock photography of white people at generic restaurants. No corporate SaaS dashboard aesthetic. No cold blue-gray tech palette. No neon club flyer energy. No hamburger menus. No pure white #FFFFFF backgrounds. No pure black #000000 text. No Roboto or Inter fonts. No cluttered layouts. No wireframes. No clip art or cartoon illustrations. No generic food stock. No white-tablecloth-only imagery. No Silicon Valley startup aesthetic. No gradients that look like Stripe or Linear.
BACKGROUND: Light gray surface. Four phone frames in 2×2 grid with labels.
```

### PROMPT 30-B — Skeleton Loading & Error States
**Agent:** 30 — Empty States, Errors & Loading Designer | **Layer:** 11 — Accessibility | **FSD Feature:** All
**Personas:** All

```
AGENT CONTEXT: You are the Empty States & Errors Designer. Skeleton screens must represent the final layout structure. Shimmer animations should feel smooth and premium. Error messages must be reassuring, not clinical.

BRAND PREAMBLE:
BRAND: PullUpATL — Atlanta's nightlife and dining table booking app.
DEMOGRAPHIC: African American professionals, creatives, and socialites aged 22-55 in Atlanta, GA.
PLATFORM: Mobile-first iOS/Android app (React Native / Expo).
VIBE: Premium but not pretentious. Nightlife-native. Culturally confident. "Resy meets the group chat."

SUBJECT: Skeleton Loading & Error States.
SCENE: Technical states during app load, network failure, or API timeout.
TARGET PERSONAS: All users.
LAYOUT SPEC:
- Frame 1: Skeleton feed (shimmer placeholders matching discovery cards).
- Frame 2: Full-screen error (Retry CTA).
- Frame 3: Offline banner (WiFi icon + local data notice).
RESPONSIVE CONTEXT: Mobile-first 390×844.
COMPONENT TARGET: apps/mobile/src/shared/ui/Skeleton.tsx

BRAND COLORS: Background "Ivory" #FAF8F5 | Fill "Warm Gray" #F0EDE8 | Error Red #D32F2F
DESIGN TOKENS: radius 12px for placeholders. Smooth gradient shim.
VARIANT DIRECTIVE: Technical, reassuring, reliable.

SUBJECT DETAIL: Loading and error state reference sheet. Three phone frames: (1) Skeleton loading screen for discovery feed: animated shimmer (frozen at peak shine) over placeholder shapes — rectangular photo area, two text lines, star rating dots, all in Warm Gray #F0EDE8 pulsing on Ivory. Tab bar visible and functional. Content shapes match the exact card layout of the real feed. (2) Full-page error: centered, large gold exclamation mark icon, "Something went wrong on our end — not on yours." in Plus Jakarta Sans 600, "We're fixing it. Try again in a sec." in Slate, "Retry" gold CTA button, "Go Home" text link. (3) Offline state: WiFi icon with slash in Slate, "You're offline." headline, "Your bookings are still saved. We'll sync when you're back." reassuring text, cached bookings visible below as read-only cards with "Offline" badge.

STYLE: High-fidelity mobile app UI mockup rendered at Figma presentation quality. Pixel-perfect modern iOS/Android design language with warm editorial touches. Rounded cards with subtle shadow, generous white space, bottom tab navigation. Luxury nightlife meets intuitive booking UX. Photography-forward with warm overlays. Gold foil accent details on dark chrome. Clean data hierarchy. Professional mockup on iPhone 15 Pro device frame (space black).
NEGATIVE: No stock photography of white people at generic restaurants. No corporate SaaS dashboard aesthetic. No cold blue-gray tech palette. No neon club flyer energy. No hamburger menus. No pure white #FFFFFF backgrounds. No pure black #000000 text. No Roboto or Inter fonts. No cluttered layouts. No wireframes. No clip art or cartoon illustrations. No generic food stock. No white-tablecloth-only imagery. No Silicon Valley startup aesthetic. No gradients that look like Stripe or Linear.
BACKGROUND: Light gray surface. Three phone frames in a row with labels.
```

### PROMPT 30-C — App Store Screenshot Set
**Agent:** 30 — Empty States, Errors & Loading Designer | **Layer:** 30 — Marketing | **FSD Feature:** All
**Personas:** All potential users

```
AGENT CONTEXT: You are the Empty States & Errors Designer, doubling as the Marketing Visualist. Design the "front door" of the app in the App Store. The screenshots must tell a narrative arc of discovery, booking, and social connection. Use the gold-on-midnight brand palette for maximum prestige.

BRAND PREAMBLE:
BRAND: PullUpATL — Atlanta's nightlife and dining table booking app.
DEMOGRAPHIC: African American professionals, creatives, and socialites aged 22-55 in Atlanta, GA.
PLATFORM: Mobile-first iOS/Android app (React Native / Expo).
VIBE: Premium but not pretentious. Nightlife-native. Culturally confident. "Resy meets the group chat."

SUBJECT: 5-Screen App Store Marketing Set.
SCENE: High-fidelity marketing presentation for potential downloaders.
TARGET PERSONAS: All Atlanta socialites.
LAYOUT SPEC:
- 5 screens in landscape strip.
- Top marketing headline banner on each.
- Device frame (iPhone 15 Pro Space Black).
- Background: Midnight #1A1A2E with gold framing.
RESPONSIVE CONTEXT: 1242×2688 (iPhone Screenshot standard).
COMPONENT TARGET: (Marketing Assets)

BRAND COLORS: Primary "Table Gold" #C9A84C | Dark BG #1A1A2E | Accent "Velvet" #8B2252
DESIGN TOKENS: Elegant typography overlays. Gold foil framing.
VARIANT DIRECTIVE: Bold, premium, conversion-optimized.

SUBJECT DETAIL: App Store screenshot set — 5 screenshots for iPhone 15 Pro in landscape strip. Each screenshot is a real app screen with marketing text overlay at top: (1) Discovery feed with "Find your next spot in ATL" gold headline on Midnight banner. (2) Venue detail page with "Book tables, sections & bottle service" text. (3) Floor plan / section map with "Choose your VIP section" text. (4) Booking confirmation with "Locked in. See you there." text. (5) Social feed with "See where your crew pulls up" text. Each screenshot uses a Midnight #1A1A2E background behind the device frame. PullUpATL wordmark subtly in the bottom corner of each. The screenshots tell a story: discover → detail → book → confirm → connect.

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

**TOTAL: 30 Agents × 68 Prompts × 28 Personas Referenced**

## USAGE INSTRUCTIONS

1. Open Google Stitch (or Stitch / Midjourney / DALL-E)
2. Each prompt is self-contained — brand preamble, style, negative, and background are already inlined
3. Copy the full prompt text from the code block and paste directly into Stitch
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
- Gold is for accents ONLY — never as background fill
- Velvet is rationed to VIP contexts only