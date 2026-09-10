import React from 'react';
import { DESIGN_SYSTEM } from '@/lib/design-system';

export function PharmacyJsonLd() {
  const { business } = DESIGN_SYSTEM;

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Pharmacy',
    '@id': 'https://riverdalepharmacy.com/#pharmacy',
    name: business.name,
    legalName: 'Riverdale Pharmacy',
    url: 'https://riverdalepharmacy.com',
    logo: 'https://riverdalepharmacy.com/images/riverdale-pharmacy-logo.png',
    image: 'https://riverdalepharmacy.com/images/riverdale-storefront-exterior.webp',
    description:
      'Independent neighborhood community pharmacy in Riverdale, Bronx, NY, established in 1987. Providing personalized prescriptions, free local delivery, walk-in vaccines, and COVID therapeutics.',
    telephone: '+1-718-543-7500',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '5669 Riverdale Ave',
      addressLocality: 'Bronx',
      addressRegion: 'NY',
      postalCode: '10471',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 40.9038,
      longitude: -73.9056,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:30',
        closes: '19:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '09:30',
        closes: '17:00',
      },
    ],
    hasMap: 'https://maps.google.com/?q=5669+Riverdale+Ave,+Bronx,+NY+10471',
    sameAs: [business.yelp.url],
    paymentAccepted: 'Cash, Credit Card, Debit Card, Medicare, Medicaid',
    currenciesAccepted: 'USD',
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
