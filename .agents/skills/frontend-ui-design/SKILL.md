---
name: frontend-ui-design
description: Apply rigorous design tokens, typography scales, spacing discipline, and TailwindCSS component patterns when designing or reviewing UI for local business and healthcare/pharmacy websites.
---

# Frontend UI Design Skill

Guidance for professional, high-converting, and trustworthy UI design using Next.js and TailwindCSS.

## 1. Design Token Architecture

- **Color Palette (Healthcare / Local Business)**:
  - Primary: Deep, trustworthy blue/teal (e.g., `brand-blue`: `#0284c7` / `slate-900` for contrast).
  - Secondary / Accent: Fresh vitality green (e.g., `emerald-600`: `#059669`) for positive cues, CTAs, open indicators.
  - Neutral Base: Slate/zinc spectrum (`slate-50` background, `slate-100` card backings, `slate-200` borders, `slate-600` secondary text, `slate-900` primary text).
  - Status Indicators: Emerald (Open/In Stock), Amber (Limited Hours), Rose (Emergency/Closed).
- **Elevation & Depth**:
  - Favor clean borders (`border border-slate-200`) over heavy drop shadows.
  - Subtle interactive shadows: `shadow-sm` resting, `hover:shadow-md transition-shadow duration-200`.
  - Rounded corners: Standardize on `rounded-xl` for cards, `rounded-lg` for buttons and inputs.

## 2. Spacing Discipline (4px / 8px Grid)

- Strictly use Tailwind's default spacing scale:
  - Micro: `gap-1.5` (6px), `gap-2` (8px), `gap-3` (12px)
  - Component padding: `p-3` (12px), `p-4` (16px), `p-6` (24px)
  - Section vertical rhythm: `py-12` (48px) on mobile, `py-20` (80px) or `py-24` (96px) on desktop.
- Never use arbitrary ad-hoc pixel values like `p-[13px]` or `gap-[19px]`.
- Container boundaries:
  - Use standard wrapper: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`.

## 3. Typography Scale & Hierarchy

- **Font Pairing**:
  - Primary: Clean modern sans-serif (e.g., Plus Jakarta Sans or Inter) with `font-sans`.
  - Display/Headings: Crisp, professional weight with tight tracking (`tracking-tight font-bold`).
- **Type Scale**:
  - Hero Display: `text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900`
  - Section Title (H2): `text-3xl font-bold tracking-tight text-slate-900`
  - Card Title (H3): `text-xl font-semibold text-slate-900`
  - Lead Paragraph: `text-lg sm:text-xl text-slate-600 leading-relaxed`
  - Body Copy: `text-base text-slate-600 leading-normal`
  - Meta / Caption: `text-xs sm:text-sm font-medium text-slate-500`

## 4. Component Design Standards

- **Buttons**:
  - Primary CTA: High-contrast, prominent padding (`px-5 py-2.5 rounded-lg font-semibold bg-emerald-600 text-white hover:bg-emerald-700 active:scale-[0.98] transition`).
  - Secondary Action: Clean outline (`px-5 py-2.5 rounded-lg font-semibold border border-slate-300 text-slate-700 hover:bg-slate-50 transition`).
  - Always provide explicit `focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:outline-none`.
- **Cards & Service Tiles**:
  - Padding: `p-6 rounded-xl bg-white border border-slate-200/80 shadow-sm hover:border-slate-300 transition-all`.
  - Icon containers: Light colored background badge (e.g., `w-12 h-12 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4`).
- **Emergency / Quick Info Bar**:
  - Prominently feature phone, address, operating hours, and "Open Now" badge above or within the hero.
