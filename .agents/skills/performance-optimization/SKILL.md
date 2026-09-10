---
name: performance-optimization
description: Optimize Next.js and Tailwind web applications for 90+ Lighthouse performance scores, Core Web Vitals (LCP, CLS, INP), modern image formats (WebP/AVIF), lazy loading, and asset compression.
---

# Performance & Image Optimization Skill

Checklist and architectural guidelines for maintaining 90+ Lighthouse scores and optimal Core Web Vitals.

## 1. Core Web Vitals Targets

- **LCP (Largest Contentful Paint)**: < 2.5 seconds (Good)
- **CLS (Cumulative Layout Shift)**: < 0.1 (Good)
- **INP (Interaction to Next Paint)**: < 200 milliseconds (Good)

## 2. Next.js Image Component Best Practices

- Always use `next/image` rather than plain `<img>` tags.
- **Hero / Above-the-fold Image (LCP element)**:
  - Add `priority={true}` so Next.js preloads the image in the `<head>`:
    ```tsx
    <Image
      src="/hero-pharmacy.jpg"
      alt="Friendly pharmacist handing prescription to patient"
      fill
      priority
      sizes="(max-width: 768px) 100vw, 50vw"
      className="object-cover"
    />
    ```
- **Below-the-fold Images**:
  - Keep default lazy loading (`loading="lazy"`).
  - Explicit dimensions (`width={600} height={400}`) or aspect-ratio wrappers to prevent layout shifts (`aspect-video`, `aspect-[4/3]`).
- **Responsive `sizes` Attribute**:
  - Never omit `sizes` when using `fill`. Omission causes Next.js to serve full-width images to mobile devices.
- **Modern Format Negotiation**:
  - In `next.config.js` or `next.config.ts`, ensure AVIF and WebP are enabled:
    ```js
    module.exports = {
      images: {
        formats: ['image/avif', 'image/webp'],
        deviceSizes: [640, 750, 828, 1080, 1200, 1920],
      },
    };
    ```

## 3. Font Optimization (`next/font`)

- Use `next/font/google` in `app/layout.tsx`.
- Next.js automatically self-hosts fonts at build time, eliminating external Google Fonts network calls and layout shift:
  ```tsx
  import { Plus_Jakarta_Sans } from 'next/font/google';

  const jakarta = Plus_Jakarta_Sans({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-sans',
  });
  ```

## 4. Script & Third-Party Performance

- **`next/script`**:
  - Analytics and non-critical scripts: `strategy="afterInteractive"` or `strategy="lazyOnload"`.
- **Heavy Client Components**:
  - Use dynamic imports (`next/dynamic`) for interactive maps (e.g., Google Maps/Leaflet) or review carousels that appear lower down the page:
    ```tsx
    const LocationMap = dynamic(() => import('@/components/sections/LocationMap'), {
      ssr: false,
      loading: () => <div className="h-96 bg-slate-100 animate-pulse rounded-xl" />,
    });
    ```

## 5. CSS & Bundle Discipline

- TailwindCSS purges unused classes automatically in production.
- Avoid importing entire component libraries when only one or two icons/utilities are needed (use `lucide-react` with named tree-shakeable imports).
