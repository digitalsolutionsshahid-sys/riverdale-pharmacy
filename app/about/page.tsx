import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Clock, Award, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us | 35+ Years of Riverdale Care',
  description: 'Learn about Riverdale Pharmacy, founded in 1987 in the Bronx, and our commitment to personalized community care.',
};

export default function AboutPage() {
  return (
    <div className="w-full flex-1 py-16 sm:py-20 bg-pharmacy-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-pharmacy-ink-muted hover:text-pharmacy-forest transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4 text-pharmacy-amber" />
          <span>Back to Home</span>
        </Link>

        <div className="max-w-3xl">
          <span className="text-xs uppercase tracking-widest text-pharmacy-amber font-semibold block mb-2">
            Established 1987 • Riverdale, Bronx
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-pharmacy-forest tracking-tight leading-[1.2]">
            About Riverdale Pharmacy
          </h1>
          <p className="mt-4 text-lg text-pharmacy-ink-muted leading-relaxed font-sans">
            Page scaffold initialized. In the next step, our history, family pharmacy roots, pharmacist profiles, and community testimonials will be detailed here.
          </p>
        </div>

        {/* Section placeholder grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-card border border-pharmacy-border bg-pharmacy-surface shadow-warm">
            <Clock className="w-8 h-8 text-pharmacy-forest mb-4" />
            <h2 className="font-serif text-xl font-bold text-pharmacy-forest">Our History</h2>
            <p className="text-sm text-pharmacy-ink-muted mt-2">
              Serving generations of families across Riverdale Avenue and the northwest Bronx since 1987.
            </p>
          </div>

          <div className="p-6 rounded-card border border-pharmacy-border bg-pharmacy-surface shadow-warm">
            <Users className="w-8 h-8 text-pharmacy-forest mb-4" />
            <h2 className="font-serif text-xl font-bold text-pharmacy-forest">Our Team</h2>
            <p className="text-sm text-pharmacy-ink-muted mt-2">
              Licensed supervising pharmacists and certified technicians dedicated to patient advocacy.
            </p>
          </div>

          <div className="p-6 rounded-card border border-pharmacy-border bg-pharmacy-surface shadow-warm">
            <Award className="w-8 h-8 text-pharmacy-forest mb-4" />
            <h2 className="font-serif text-xl font-bold text-pharmacy-forest">Our Philosophy</h2>
            <p className="text-sm text-pharmacy-ink-muted mt-2">
              A healthcare relationship that treats you like family, not a barcode in a retail conglomerate.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
