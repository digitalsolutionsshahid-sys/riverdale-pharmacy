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
    default: 'Riverdale Pharmacy | Neighborhood Healthcare Since 1987 (Bronx, NY)',
    template: '%s | Riverdale Pharmacy (Bronx, NY)',
  },
  description:
    'Riverdale Pharmacy has served Bronx families and seniors since 1987. Personalized prescriptions, immunizations, compounding, and free neighborhood delivery.',
  keywords: [
    'Riverdale Pharmacy',
    'Bronx pharmacy',
    'Riverdale Ave pharmacy',
    'prescription refill Bronx',
    'local compounding pharmacy',
    'vaccines and flu shots Bronx',
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
