/**
 * Riverdale Pharmacy - Design System
 * 
 * Aesthetic: Warm Editorial Healthcare (Established 1987)
 * Principles:
 * 1. Warmth over sterility — off-white canvas, deep botanical green, apothecary amber.
 * 2. Typographic authority — dignified serif display paired with accessible humanist sans.
 * 3. 4px/8px spatial rhythm — generous breathing room and senior-accessible touch targets (>= 44px).
 */

export const DESIGN_SYSTEM = {
  name: 'Riverdale Pharmacy Design System',
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
      amber: '#C28E47', // Warm apothecary amber
      amberHover: '#AA7938',
      amberTint: '#FAF3E8',
    },
    ink: {
      primary: '#1D201E', // Warm charcoal body
      muted: '#5A635E', // Secondary guidance text
      subtle: '#818B85', // Metadata, timestamps
    },
    border: {
      light: '#E8E3DA',
      strong: '#D3CBC0',
    },
  },

  // Typography Scale (in rem and line-height)
  typography: {
    displayLg: { size: '3.5rem', lineHeight: '1.1', tracking: '-0.02em', weight: '700' },
    displayMd: { size: '2.75rem', lineHeight: '1.15', tracking: '-0.02em', weight: '700' },
    displaySm: { size: '2.25rem', lineHeight: '1.2', tracking: '-0.015em', weight: '600' },
    headingLg: { size: '1.75rem', lineHeight: '1.25', tracking: '-0.01em', weight: '600' },
    headingMd: { size: '1.375rem', lineHeight: '1.3', tracking: '-0.01em', weight: '600' },
    headingSm: { size: '1.125rem', lineHeight: '1.4', weight: '600' },
    bodyLg: { size: '1.125rem', lineHeight: '1.65' },
    bodyBase: { size: '1rem', lineHeight: '1.6' },
    bodySm: { size: '0.875rem', lineHeight: '1.5' },
    caption: { size: '0.75rem', lineHeight: '1.4', tracking: '0.04em' },
  },

  // Spacing Discipline (Multiples of 4px)
  spacing: {
    touchTargetMin: '44px',
    sectionVerticalSm: '48px', // py-12
    sectionVerticalMd: '80px', // py-20
    sectionVerticalLg: '96px', // py-24
    containerMax: '1280px', // max-w-7xl
  },

  // Business Essentials
  business: {
    name: 'Riverdale Pharmacy',
    tagline: 'Neighborhood Healthcare & Community Care Since 1987',
    phone: '(718) 543-7000',
    fax: '(718) 543-7002',
    address: {
      street: '5645 Riverdale Avenue',
      neighborhood: 'Riverdale',
      borough: 'Bronx',
      city: 'New York',
      state: 'NY',
      zip: '10471',
    },
    hours: {
      weekday: 'Monday – Friday: 8:30 AM – 7:30 PM',
      saturday: 'Saturday: 9:00 AM – 5:00 PM',
      sunday: 'Sunday: 10:00 AM – 3:00 PM',
    },
  },
} as const;
