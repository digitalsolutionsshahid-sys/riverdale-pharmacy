/**
 * Riverdale Pharmacy - Design System & Real Business Data
 * 
 * Aesthetic: Warm Editorial Healthcare (Established 1987)
 * Principles:
 * 1. Warmth over sterility — off-white canvas, deep botanical forest green, apothecary amber.
 * 2. Typographic authority — dignified serif display paired with accessible humanist sans.
 * 3. 4px/8px spatial rhythm — generous breathing room and senior-accessible touch targets (>= 44px).
 */

export const DESIGN_SYSTEM = {
  name: 'Riverdale Pharmacy',
  established: 1987,
  location: 'Riverdale, Bronx, NY',

  // Colors
  colors: {
    canvas: {
      bg: '#FBF9F5', // Off-white linen ground
      surface: '#FFFFFF', // Clean card surface
      subtle: '#F4F0E8', // Light cream panel
    },
    primary: {
      forest: '#1B3B2B', // Deep botanical green
      forestHover: '#132B20',
      forestTint: '#EBF2EE',
    },
    accent: {
      amber: '#8B5A16', // Rich apothecary amber (≥ 5.1:1 on light)
      amberHover: '#734A10',
      amberTint: '#FAF3E8',
      amberAccent: '#E5B869', // High-contrast amber on forest green (≥ 6.6:1)
    },
    ink: {
      primary: '#1D201E', // Warm charcoal body
      muted: '#5A635E', // Secondary guidance text
      subtle: '#626C66', // Metadata, timestamps (≥ 5.4:1)
    },
    border: {
      light: '#E8E3DA',
      strong: '#D3CBC0',
    },
  },

  // Spacing Discipline
  spacing: {
    touchTargetMin: '44px',
    sectionVerticalSm: '48px',
    sectionVerticalMd: '80px',
    sectionVerticalLg: '96px',
    containerMax: '1280px',
  },

  // Real Business Data (Strictly grounded)
  business: {
    name: 'Riverdale Pharmacy',
    tagline: 'Neighborhood Pharmacy, Trusted Since 1987',
    subhead: 'Personalized care, dependable medication supply, and free local delivery.',
    phone: '718-543-7500',
    phoneDisplay: '(718) 543-7500',
    address: {
      street: '5669 Riverdale Ave',
      neighborhood: 'Riverdale',
      borough: 'Bronx',
      city: 'Bronx',
      state: 'NY',
      zip: '10471',
      full: '5669 Riverdale Ave, Bronx, NY 10471',
    },
    hours: {
      weekday: 'Monday – Friday: 9:30 AM – 7:00 PM',
      saturday: 'Saturday: 9:30 AM – 5:00 PM',
      sunday: 'Sunday: Closed',
    },
    yelp: {
      rating: '3.0',
      reviewsCount: 39,
      url: 'https://www.yelp.com/biz/riverdale-pharmacy-bronx-2',
    },
    newOwnership: {
      status: 'Recently Under New Ownership',
      details: 'Modernized service including automated phone services and text/email prescription notifications.',
    },
    insurance: 'Medicare, Medicaid, and most major insurance carriers accepted with standard copays.',
    vaccines: 'Flu, Pneumonia, Shingles, RSV, and COVID vaccines (Age 18+ on a walk-in basis).',
  },
} as const;
