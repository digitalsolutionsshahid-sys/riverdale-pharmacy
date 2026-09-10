---
name: seo-audit
description: Implement and audit technical and local SEO, including Next.js Metadata API, Open Graph/Twitter cards, Schema.org JSON-LD structured data, sitemaps, and robots.txt.
---

# SEO Audit Skill

Technical, structural, and local business SEO standards for Next.js web applications.

## 1. Next.js Metadata API

- **Root Layout (`app/layout.tsx`)**:
  Configure `metadataBase` to ensure relative URLs in OpenGraph and canonicals resolve correctly:
  ```typescript
  import type { Metadata } from 'next';

  export const metadata: Metadata = {
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://example-pharmacy.com'),
    title: {
      default: 'CarePlus Pharmacy | Local Prescriptions & Healthcare',
      template: '%s | CarePlus Pharmacy',
    },
    description: 'Community pharmacy offering prescription refills, immunizations, and wellness consultations in Springfield. Fast drive-thru and free local delivery.',
    keywords: ['pharmacy Springfield', 'prescription refill', 'immunizations', 'flu shots', 'local chemist'],
    authors: [{ name: 'CarePlus Pharmacy' }],
    creator: 'CarePlus Pharmacy',
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: '/',
      siteName: 'CarePlus Pharmacy',
      title: 'CarePlus Pharmacy | Trusted Community Healthcare',
      description: 'Your neighborhood pharmacy in Springfield. Fast prescription transfers, vaccines, and friendly care.',
      images: [
        {
          url: '/og-image.jpg',
          width: 1200,
          height: 630,
          alt: 'CarePlus Pharmacy Storefront and Team',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'CarePlus Pharmacy | Local Prescriptions & Healthcare',
      description: 'Fast prescription refills, vaccines, and expert care.',
      images: ['/og-image.jpg'],
    },
    alternates: {
      canonical: './',
    },
  };
  ```

## 2. Structured Data (Schema.org JSON-LD)

- Embed `LocalBusiness` / `Pharmacy` schema in root or home page (`<script type="application/ld+json">`):
  ```tsx
  const pharmacySchema = {
    '@context': 'https://schema.org',
    '@type': 'Pharmacy',
    name: 'CarePlus Pharmacy',
    image: 'https://example-pharmacy.com/storefront.jpg',
    telephone: '+1-555-0199',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 Main Street',
      addressLocality: 'Springfield',
      addressRegion: 'IL',
      postalCode: '62701',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 39.7817,
      longitude: -89.6501,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '20:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '09:00',
        closes: '18:00',
      },
    ],
    sameAs: [
      'https://facebook.com/CarePlusPharmacy',
      'https://instagram.com/CarePlusPharmacy',
    ],
  };

  export function PharmacyJsonLd() {
    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pharmacySchema) }}
      />
    );
  }
  ```

## 3. Dynamic Sitemap & Robots.txt

- **`app/sitemap.ts`**:
  ```typescript
  import { MetadataRoute } from 'next';

  export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://example-pharmacy.com';
    return [
      { url: baseUrl, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
      { url: `${baseUrl}/services`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
      { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
      { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    ];
  }
  ```
- **`app/robots.ts`**:
  ```typescript
  import { MetadataRoute } from 'next';

  export default function robots(): MetadataRoute.Robots {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://example-pharmacy.com';
    return {
      rules: {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
      sitemap: `${baseUrl}/sitemap.xml`,
    };
  }
  ```
