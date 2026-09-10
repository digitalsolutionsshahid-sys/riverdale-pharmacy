---
name: nextjs-react-scaffolding
description: Guide project structure, App Router conventions, routing rules, server/client component separation, and clean directory layout when creating or refactoring Next.js and React applications.
---

# Next.js & React Scaffolding Skill

Conventions and architecture for building scalable Next.js App Router applications.

## 1. Directory Structure

```text
Pharmacy/
├── .agents/skills/          # Workspace-scoped skills
├── app/                     # Next.js App Router
│   ├── (routes)/            # Organizational route groups
│   │   ├── about/
│   │   │   └── page.tsx
│   │   ├── services/
│   │   │   └── page.tsx
│   │   └── contact/
│   │       └── page.tsx
│   ├── layout.tsx           # Root layout (fonts, metadataBase, navbar, footer)
│   ├── page.tsx             # Home page (Hero, Services, Testimonials, Map)
│   ├── loading.tsx          # Instant loading skeletons
│   ├── error.tsx            # Client error boundary
│   ├── not-found.tsx        # Custom 404 page
│   ├── robots.ts            # Dynamic robots.txt
│   ├── sitemap.ts           # Dynamic sitemap.xml
│   └── globals.css          # Tailwind directives & CSS variables
├── components/
│   ├── ui/                  # Primitives (button, card, badge, dialog)
│   ├── sections/            # Page-level sections (Hero, HoursBanner, ContactForm)
│   └── layout/              # Header, Navigation, MobileMenu, Footer
├── lib/
│   ├── utils.ts             # cn helper (clsx + tailwind-merge)
│   ├── constants.ts         # Business info (NAP, hours, phone, services)
│   └── schema.ts            # LocalBusiness JSON-LD generator
├── public/                  # Static assets (images, icons, favicons)
├── next.config.ts / .js     # Next.js config (images, security headers)
└── tailwind.config.ts / .js # Theme extensions & design tokens
```

## 2. Server vs. Client Component Boundaries

- **Default to Server Components (RSC)**:
  - All pages and layouts should be Server Components by default.
  - Data fetching and metadata generation happen on the server.
- **Isolate Client Components (`'use client'`)**:
  - Keep `'use client'` strictly at the leaf nodes:
    - Mobile navigation dropdown toggle (`HeaderMenu.tsx`).
    - Interactive contact/prescription refill forms (`PrescriptionForm.tsx`).
    - Client-side tabs, accordions, or modal triggers.
  - Pass server data to client components as serializable props.

## 3. Routing Conventions

- Route groups `(marketing)` or `(site)` can be used to organize routes without adding segments to URLs.
- Always implement:
  - `loading.tsx`: Prevents Cumulative Layout Shift (CLS) during navigation.
  - `error.tsx`: Must be a client component (`'use client'`) with a `reset()` button.
  - `not-found.tsx`: Clean UI allowing visitors to return to home or call the pharmacy.
