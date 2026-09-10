import type { Metadata, Viewport } from 'next';
import { Playfair_Display, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { PharmacyJsonLd } from '@/components/seo/PharmacyJsonLd';

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-serif',
  weight: ['400', '600', '700'],
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
  weight: ['400', '500', '600', '700'],
});

export const viewport: Viewport = {
  themeColor: '#1B3B2B',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://riverdalepharmacy.com'),
  title: {
    default: 'Riverdale Pharmacy | Neighborhood Healthcare Trusted Since 1987 (Bronx, NY)',
    template: '%s | Riverdale Pharmacy',
  },
  description:
    'Riverdale Pharmacy has provided personalized prescription care, dependable medication supply, and free local delivery to Bronx neighbors since 1987.',
  alternates: {
    canonical: './',
  },
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://riverdalepharmacy.com',
    siteName: 'Riverdale Pharmacy',
    title: 'Riverdale Pharmacy | Neighborhood Healthcare Trusted Since 1987',
    description:
      'Providing personalized prescription care, dependable medication supplies, walk-in adult vaccines, and free neighborhood delivery in Riverdale, Bronx, NY.',
    images: [
      {
        url: '/images/riverdale-storefront-exterior.webp',
        width: 1600,
        height: 1200,
        alt: 'Riverdale Pharmacy storefront on Riverdale Avenue in the Bronx',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Riverdale Pharmacy | Neighborhood Healthcare Trusted Since 1987',
    description:
      'Independent Bronx community pharmacy providing reliable medication supply, walk-in vaccines, and free local delivery.',
    images: ['/images/riverdale-storefront-exterior.webp'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${jakarta.variable}`}>
      <head>
        <PharmacyJsonLd />
      </head>
      <body className="font-sans min-h-screen flex flex-col bg-pharmacy-bg text-pharmacy-ink antialiased">
        {/* Accessibility: High contrast keyboard skip link */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 px-4 py-2 bg-pharmacy-forest text-white rounded-button font-medium shadow-warm-md focus:outline-none focus:ring-2 focus:ring-pharmacy-amber"
        >
          Skip to main content
        </a>

        {/* Sticky Base Navigation */}
        <Navbar />

        {/* Main Content Area */}
        <main id="main-content" className="flex-1 flex flex-col">
          {children}
        </main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
