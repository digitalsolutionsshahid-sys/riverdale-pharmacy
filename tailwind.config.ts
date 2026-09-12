import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        pharmacy: {
          bg: '#FBF9F5', // Warm linen ground
          surface: '#FFFFFF', // Crisp card surface
          'surface-subtle': '#F4F0E8', // Muted cream background
          border: '#E8E3DA', // Soft warm border
          'border-strong': '#D3CBC0', // Defined border
          forest: {
            DEFAULT: '#1B3B2B', // Deep heritage botanical green
            hover: '#132B20',
            light: '#EBF2EE', // Soft green badge background
          },
          amber: {
            DEFAULT: '#8B5A16', // Rich apothecary amber - WCAG AA compliant on light backgrounds (≥ 5.1:1)
            hover: '#734A10',
            light: '#FAF3E8', // Soft amber badge background
            accent: '#E5B869', // Bright warm amber - WCAG AA compliant on dark forest green (≥ 6.6:1)
          },
          ink: {
            DEFAULT: '#1D201E', // Warm charcoal body text
            muted: '#5A635E', // Secondary muted text (≥ 6.2:1)
            subtle: '#626C66', // Captions & metadata (≥ 5.4:1)
          },
          // Dark Theme: Editorial Botanical Charcoal
          dark: {
            bg: '#101412', // Deep botanical charcoal ground
            surface: '#161C19', // Elevated card surface
            'surface-subtle': '#1F2723', // Muted container / hover panel
            border: '#26332C', // Subtle warm division border
            'border-strong': '#36473E', // Defined active input/card border
            forest: {
              DEFAULT: '#52B788', // Luminous sage/emerald text & accents (≥ 7.5:1)
              hover: '#74C69D',
              light: 'rgba(82, 183, 136, 0.12)', // Subtle badge background
              bg: '#1B3B2B', // Deep button base
            },
            amber: {
              DEFAULT: '#E5B869', // Glowing apothecary gold (≥ 8.8:1)
              hover: '#F3C77C',
              light: 'rgba(229, 184, 105, 0.14)',
            },
            ink: {
              DEFAULT: '#F4F2ED', // Warm linen white (≥ 15.2:1)
              muted: '#B2BDB6', // Soft sage-gray (≥ 8.2:1)
              subtle: '#8B968F', // Captions & metadata (≥ 5.1:1)
            },
          },
        },
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-lg': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
        'display-md': ['2.75rem', { lineHeight: '1.15', letterSpacing: '-0.02em', fontWeight: '700' }],
        'display-sm': ['2.25rem', { lineHeight: '1.2', letterSpacing: '-0.015em', fontWeight: '600' }],
        'heading-lg': ['1.75rem', { lineHeight: '1.25', letterSpacing: '-0.01em', fontWeight: '600' }],
        'heading-md': ['1.375rem', { lineHeight: '1.3', letterSpacing: '-0.01em', fontWeight: '600' }],
        'heading-sm': ['1.125rem', { lineHeight: '1.4', fontWeight: '600' }],
        'body-lg': ['1.125rem', { lineHeight: '1.65' }],
        'body-base': ['1rem', { lineHeight: '1.6' }],
        'body-sm': ['0.875rem', { lineHeight: '1.5' }],
        caption: ['0.75rem', { lineHeight: '1.4', letterSpacing: '0.04em' }],
      },
      boxShadow: {
        warm: '0 2px 10px -2px rgba(27, 32, 29, 0.05)',
        'warm-md': '0 4px 20px -4px rgba(27, 32, 29, 0.08)',
        'warm-lg': '0 12px 32px -6px rgba(27, 32, 29, 0.1)',
      },
      borderRadius: {
        card: '12px',
        button: '8px',
      },
    },
  },
  plugins: [],
};

export default config;
