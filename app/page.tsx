import React from 'react';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, HeartPulse, Clock, Sparkles } from 'lucide-react';
import { DESIGN_SYSTEM } from '@/lib/design-system';

export default function HomePage() {
  return (
    <div className="w-full flex-1">
      {/* Editorial Scaffold Hero */}
      <section className="relative overflow-hidden py-16 sm:py-24 border-b border-pharmacy-border bg-pharmacy-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-pharmacy-forest-light text-pharmacy-forest text-xs font-semibold tracking-wide uppercase mb-6 border border-emerald-800/10">
              <Sparkles className="w-3.5 h-3.5 text-pharmacy-amber" />
              <span>Riverdale Pharmacy • Est. 1987</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-pharmacy-forest leading-[1.15]">
              Personalized healthcare rooted in your neighborhood.
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-pharmacy-ink-muted leading-relaxed font-sans">
              Welcome to the foundation of Riverdale Pharmacy. This scaffold establishes our warm editorial design system, typography hierarchy, and sticky navigation before full page content is populated.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-button text-base font-semibold bg-pharmacy-forest text-white hover:bg-pharmacy-forest-hover shadow-sm transition-all focus-visible:ring-2 focus-visible:ring-pharmacy-forest"
              >
                <span>Explore Services</span>
                <ArrowRight className="w-4 h-4 text-pharmacy-amber" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-button text-base font-medium border border-pharmacy-border-strong text-pharmacy-ink hover:bg-pharmacy-surface transition-all"
              >
                <span>Our 1987 Story</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Design System & Token Demonstration Section */}
      <section className="py-16 bg-pharmacy-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <span className="text-xs uppercase tracking-widest text-pharmacy-amber font-semibold block">
              Design Authority & Taste Skill Verification
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-pharmacy-forest mt-1">
              Active Design Tokens (Warm Editorial Healthcare)
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Token Card 1 */}
            <div className="p-6 rounded-card border border-pharmacy-border bg-pharmacy-bg shadow-warm">
              <div className="w-10 h-10 rounded-button bg-pharmacy-forest text-white flex items-center justify-center mb-4">
                <ShieldCheck className="w-5 h-5 text-pharmacy-amber" />
              </div>
              <h3 className="font-serif text-lg font-bold text-pharmacy-forest">
                Heritage Forest Green
              </h3>
              <p className="text-xs font-mono text-pharmacy-ink-subtle mt-0.5">#1B3B2B</p>
              <p className="text-sm text-pharmacy-ink-muted mt-2 leading-relaxed">
                Primary anchor for headings, navigation elements, and trusted actions.
              </p>
            </div>

            {/* Token Card 2 */}
            <div className="p-6 rounded-card border border-pharmacy-border bg-pharmacy-bg shadow-warm">
              <div className="w-10 h-10 rounded-button bg-pharmacy-amber text-white flex items-center justify-center mb-4">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-serif text-lg font-bold text-pharmacy-forest">
                Apothecary Amber
              </h3>
              <p className="text-xs font-mono text-pharmacy-ink-subtle mt-0.5">#C28E47</p>
              <p className="text-sm text-pharmacy-ink-muted mt-2 leading-relaxed">
                Secondary accent for badges, microcopy, and warm vintage highlights.
              </p>
            </div>

            {/* Token Card 3 */}
            <div className="p-6 rounded-card border border-pharmacy-border bg-pharmacy-surface-subtle shadow-warm">
              <div className="w-10 h-10 rounded-button bg-white border border-pharmacy-border text-pharmacy-forest flex items-center justify-center mb-4">
                <HeartPulse className="w-5 h-5 text-pharmacy-forest" />
              </div>
              <h3 className="font-serif text-lg font-bold text-pharmacy-forest">
                Linen & Cream Ground
              </h3>
              <p className="text-xs font-mono text-pharmacy-ink-subtle mt-0.5">#FBF9F5</p>
              <p className="text-sm text-pharmacy-ink-muted mt-2 leading-relaxed">
                Warm off-white background rejecting cold, generic clinical sterility.
              </p>
            </div>

            {/* Token Card 4 */}
            <div className="p-6 rounded-card border border-pharmacy-border bg-pharmacy-bg shadow-warm">
              <div className="w-10 h-10 rounded-button bg-pharmacy-forest-light text-pharmacy-forest flex items-center justify-center mb-4">
                <Clock className="w-5 h-5 text-pharmacy-forest" />
              </div>
              <h3 className="font-serif text-lg font-bold text-pharmacy-forest">
                Warm Charcoal Ink
              </h3>
              <p className="text-xs font-mono text-pharmacy-ink-subtle mt-0.5">#1D201E</p>
              <p className="text-sm text-pharmacy-ink-muted mt-2 leading-relaxed">
                High-contrast, accessible typography scale with WCAG 2.1 AA compliance.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
