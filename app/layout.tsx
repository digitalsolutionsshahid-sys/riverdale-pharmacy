import type { Metadata } from 'next';
import { Playfair_Display, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

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

export const metadata: Metadata = {
  title: {
    default: 'Riverdale Pharmacy | Neighborhood Pharmacy, Trusted Since 1987 (Bronx, NY)',
    template: '%s | Riverdale Pharmacy',
  },
  description:
    'Riverdale Pharmacy has served Bronx neighbors since 1987. Personalized care, reliable medication stock, walk-in vaccines, and free neighborhood delivery. Located at 5669 Riverdale Ave.',
  keywords: [
    'Riverdale Pharmacy',
    'Bronx pharmacy 10471',
    '5669 Riverdale Ave',
    'free prescription delivery Bronx',
    'walk-in vaccines Bronx',
    'prescription transfers Bronx',
  ],
  authors: [{ name: 'Riverdale Pharmacy' }],
  creator: 'Riverdale Pharmacy',
  metadataBase: new URL('https://riverdalepharmacy.com'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${jakarta.variable}`}>
      <body className="font-sans min-h-screen flex flex-col bg-pharmacy-bg text-pharmacy-ink antialiased">
        {/* Accessibility Skip Link */}
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
