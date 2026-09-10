import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  ShieldCheck,
  Truck,
  HeartHandshake,
  Syringe,
  PackageCheck,
  Sparkles,
  ExternalLink,
  Phone,
  Clock,
  Eye,
  Camera,
  FileCheck,
  CheckCircle2,
  ArrowUpRight,
} from 'lucide-react';
import { DESIGN_SYSTEM } from '@/lib/design-system';
import { ReviewsSection } from '@/components/home/ReviewsSection';

export default function HomePage() {
  const { business } = DESIGN_SYSTEM;

  return (
    <div className="w-full flex-1">
      {/* 1. HERO SECTION - Confident Editorial Layout */}
      <section className="relative overflow-hidden py-16 sm:py-24 lg:py-28 border-b border-pharmacy-border bg-pharmacy-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pharmacy-forest-light text-pharmacy-forest text-xs font-semibold tracking-wide uppercase mb-6 border border-emerald-900/10">
                <Sparkles className="w-3.5 h-3.5 text-pharmacy-amber" />
                <span>Established 1987 • Riverdale, Bronx</span>
              </div>

              <h1 className="font-serif text-4xl sm:text-6xl lg:text-[4.25rem] font-bold tracking-tight text-pharmacy-forest leading-[1.08]">
                Neighborhood Pharmacy, Trusted Since 1987
              </h1>

              <p className="mt-6 text-lg sm:text-xl text-pharmacy-ink-muted leading-relaxed font-sans max-w-2xl">
                Personalized care, dependable medication supply, and free local delivery right to your door. Experience the attentive care of an independent community pharmacy.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/services#refills"
                  className="interactive-btn inline-flex items-center justify-center gap-2 px-7 py-4 rounded-button text-base font-semibold bg-pharmacy-forest text-white hover:bg-pharmacy-forest-hover shadow-warm-md focus-visible:ring-2 focus-visible:ring-pharmacy-forest focus-visible:ring-offset-2 min-h-[50px]"
                >
                  <span>Transfer / Refill Prescription</span>
                  <ArrowRight className="w-4 h-4 text-pharmacy-amber" />
                </Link>
                <a
                  href={`tel:${business.phone}`}
                  className="interactive-btn inline-flex items-center justify-center gap-2 px-7 py-4 rounded-button text-base font-semibold border border-pharmacy-border-strong text-pharmacy-ink bg-pharmacy-surface hover:bg-pharmacy-surface-subtle shadow-warm min-h-[50px]"
                >
                  <Phone className="w-4 h-4 text-pharmacy-amber" />
                  <span>Call {business.phoneDisplay}</span>
                </a>
              </div>

              <div className="mt-10 pt-8 border-t border-pharmacy-border/80 flex flex-wrap items-center gap-y-3 gap-x-8 text-xs text-pharmacy-ink-muted">
                <span className="inline-flex items-center gap-2 font-medium text-pharmacy-forest">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                  Free local Bronx delivery
                </span>
                <span className="inline-flex items-center gap-2 font-medium text-pharmacy-forest">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                  Walk-in adult vaccines (Age 18+)
                </span>
                <span className="inline-flex items-center gap-2 font-medium text-pharmacy-forest">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                  Same copays as chain stores
                </span>
              </div>
            </div>

            {/* Right Column: Real Storefront Photo */}
            <div className="lg:col-span-5">
              <div className="relative group">
                <div className="relative rounded-card overflow-hidden border border-pharmacy-border bg-pharmacy-surface shadow-warm-lg aspect-[4/3] sm:aspect-[16/11]">
                  <Image
                    src="/images/riverdale-storefront-exterior.jpg"
                    alt="Authentic storefront exterior of Riverdale Pharmacy at 5669 Riverdale Avenue in the Bronx, showing street facade and accessible entrance"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    className="object-cover object-center group-hover:scale-[1.02] transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-pharmacy-forest/80 via-transparent to-transparent opacity-80" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <span className="text-[0.7rem] uppercase tracking-widest text-pharmacy-amber font-semibold block mb-1">
                      5669 Riverdale Ave • Bronx, NY 10471
                    </span>
                    <p className="font-serif text-xl font-bold tracking-tight">
                      Riverdale Pharmacy Storefront
                    </p>
                    <p className="text-xs text-stone-200 mt-1">
                      Open Monday–Friday 9:30 AM – 7 PM • Saturday 9:30 AM – 5 PM
                    </p>
                  </div>
                </div>

                {/* Overlaid Badge */}
                <div className="hidden sm:flex absolute -top-4 -right-4 p-4 rounded-card bg-pharmacy-surface border border-pharmacy-border shadow-warm-md items-center gap-3">
                  <div className="w-9 h-9 rounded-button bg-pharmacy-forest text-white flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-5 h-5 text-pharmacy-amber" />
                  </div>
                  <div>
                    <p className="text-[0.65rem] uppercase tracking-widest text-pharmacy-amber font-semibold">
                      Serving Since
                    </p>
                    <p className="font-serif text-base font-bold text-pharmacy-forest">
                      1987 in the Bronx
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TRUST BAR */}
      <section className="py-7 bg-pharmacy-surface border-b border-pharmacy-border" aria-label="Credentials and verified updates">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            {/* Trust Item 1 */}
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-button bg-pharmacy-forest-light text-pharmacy-forest flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5 text-pharmacy-forest" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-pharmacy-amber font-semibold">
                  Insurance Accepted
                </p>
                <p className="text-sm font-semibold text-pharmacy-forest">
                  Medicare, Medicaid & Major Insurance
                </p>
              </div>
            </div>

            {/* Trust Item 2 */}
            <div className="flex items-center gap-3.5 md:border-l md:border-pharmacy-border md:pl-6">
              <div className="w-10 h-10 rounded-button bg-amber-50 text-amber-700 flex items-center justify-center shrink-0">
                <span className="font-bold text-sm">★</span>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-pharmacy-amber font-semibold">
                  Verified Local Reviews
                </p>
                <a
                  href={business.yelp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-pharmacy-forest hover:text-pharmacy-forest-hover inline-flex items-center gap-1 group"
                >
                  <span>Yelp 3.0★ ({business.yelp.reviewsCount} reviews)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-pharmacy-amber group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </div>

            {/* Trust Item 3 */}
            <div className="flex items-center gap-3.5 md:border-l md:border-pharmacy-border md:pl-6">
              <div className="w-10 h-10 rounded-button bg-pharmacy-forest-light text-pharmacy-forest flex items-center justify-center shrink-0">
                <Sparkles className="w-5 h-5 text-pharmacy-amber" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-pharmacy-amber font-semibold">
                  Modernized Patient Service
                </p>
                <p className="text-xs text-pharmacy-ink-muted leading-snug">
                  Recently under new ownership — modernized service including text/email prescription updates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHY US SECTION - Oversized Confident Typography & Asymmetric Layout */}
      <section className="py-20 sm:py-28 bg-pharmacy-bg" aria-labelledby="why-us-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
            <div className="max-w-2xl">
              <span className="text-xs uppercase tracking-widest text-pharmacy-amber font-semibold block mb-3">
                The Independent Pharmacy Advantage
              </span>
              <h2 id="why-us-heading" className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-pharmacy-forest tracking-tight leading-[1.1]">
                Why Riverdale Neighbors Rely on Us
              </h2>
            </div>
            <p className="text-base text-pharmacy-ink-muted max-w-md leading-relaxed">
              We combine old-school Bronx neighborliness with modern prescription management, automated text notifications, and dependable stock.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="interactive-card p-8 rounded-card border border-pharmacy-border bg-pharmacy-surface flex flex-col justify-between shadow-warm">
              <div>
                <div className="w-12 h-12 rounded-button bg-pharmacy-forest-light text-pharmacy-forest flex items-center justify-center mb-6">
                  <PackageCheck className="w-6 h-6 text-pharmacy-forest" />
                </div>
                <h3 className="font-serif text-xl font-bold text-pharmacy-forest">
                  Reliable Medication Stock
                </h3>
                <p className="mt-3 text-sm text-pharmacy-ink-muted leading-relaxed">
                  In stock when big chains run out. We work proactively with distributors to maintain consistent supplies of daily maintenance drugs and essential therapies.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-pharmacy-border text-[0.7rem] font-semibold text-pharmacy-amber uppercase tracking-wider">
                Reliable Availability
              </div>
            </div>

            {/* Card 2 */}
            <div className="interactive-card p-8 rounded-card border border-pharmacy-border bg-pharmacy-surface flex flex-col justify-between shadow-warm">
              <div>
                <div className="w-12 h-12 rounded-button bg-pharmacy-forest-light text-pharmacy-forest flex items-center justify-center mb-6">
                  <HeartHandshake className="w-6 h-6 text-pharmacy-forest" />
                </div>
                <h3 className="font-serif text-xl font-bold text-pharmacy-forest">
                  Friendly, Knowledgeable Staff
                </h3>
                <p className="mt-3 text-sm text-pharmacy-ink-muted leading-relaxed">
                  Our pharmacists are approachable and never rushed. We take the time to answer your questions, explain side effects, and coordinate directly with your doctors.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-pharmacy-border text-[0.7rem] font-semibold text-pharmacy-amber uppercase tracking-wider">
                Approachable Guidance
              </div>
            </div>

            {/* Card 3 */}
            <div className="interactive-card p-8 rounded-card border border-pharmacy-border bg-pharmacy-surface flex flex-col justify-between shadow-warm">
              <div>
                <div className="w-12 h-12 rounded-button bg-pharmacy-forest-light text-pharmacy-forest flex items-center justify-center mb-6">
                  <Truck className="w-6 h-6 text-pharmacy-forest" />
                </div>
                <h3 className="font-serif text-xl font-bold text-pharmacy-forest">
                  Free Local Delivery
                </h3>
                <p className="mt-3 text-sm text-pharmacy-ink-muted leading-relaxed">
                  Complimentary prescription delivery throughout Riverdale and neighboring Bronx streets, saving you trips during illness, inclement weather, or busy schedules.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-pharmacy-border text-[0.7rem] font-semibold text-pharmacy-amber uppercase tracking-wider">
                Direct to Your Door
              </div>
            </div>

            {/* Card 4 */}
            <div className="interactive-card p-8 rounded-card border border-pharmacy-border bg-pharmacy-surface flex flex-col justify-between shadow-warm">
              <div>
                <div className="w-12 h-12 rounded-button bg-pharmacy-forest-light text-pharmacy-forest flex items-center justify-center mb-6">
                  <Syringe className="w-6 h-6 text-pharmacy-forest" />
                </div>
                <h3 className="font-serif text-xl font-bold text-pharmacy-forest">
                  Walk-In Adult Vaccines
                </h3>
                <p className="mt-3 text-sm text-pharmacy-ink-muted leading-relaxed">
                  Protect yourself and your loved ones. We administer Flu, Pneumonia, Shingles, RSV, and COVID vaccines on a walk-in basis for adults age 18 and older.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-pharmacy-border text-[0.7rem] font-semibold text-pharmacy-amber uppercase tracking-wider">
                No Appointment Needed (18+)
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CLINICAL PHOTO & STORY INTERSTITIAL (Real site photo) */}
      <section className="py-16 sm:py-20 bg-pharmacy-surface border-t border-pharmacy-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative rounded-card overflow-hidden border border-pharmacy-border bg-pharmacy-surface-subtle shadow-warm-lg aspect-square sm:aspect-[4/3] lg:aspect-square">
                <Image
                  src="/images/riverdale-rx-care.png"
                  alt="Pharmacist consultation and prescription medication dispensing counter at Riverdale Pharmacy"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center"
                />
              </div>
            </div>

            <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
              <span className="text-xs uppercase tracking-widest text-pharmacy-amber font-semibold block">
                Responsible Healing
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-pharmacy-forest tracking-tight leading-[1.12]">
                A Pharmacy Dedicated to Your Well-Being
              </h2>
              <p className="text-base sm:text-lg text-pharmacy-ink-muted leading-relaxed">
                We care about the well-being of each customer who walks through our doors. That’s why we’ve dedicated decades to stocking the widest range of medical products, offering the highest quality clinical services, and retaining an approachable, experienced staff.
              </p>
              <div className="pt-2 flex flex-wrap gap-4">
                <Link
                  href="/about"
                  className="interactive-btn inline-flex items-center gap-2 px-6 py-3.5 rounded-button text-sm font-semibold bg-pharmacy-forest text-white hover:bg-pharmacy-forest-hover shadow-sm min-h-[44px]"
                >
                  <span>Learn About Our History</span>
                  <ArrowRight className="w-4 h-4 text-pharmacy-amber" />
                </Link>
                <Link
                  href="/services"
                  className="interactive-btn inline-flex items-center gap-2 px-6 py-3.5 rounded-button text-sm font-semibold border border-pharmacy-border text-pharmacy-ink hover:bg-pharmacy-surface-subtle min-h-[44px]"
                >
                  <span>Explore All Services</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SERVICES PREVIEW GRID */}
      <section className="py-20 sm:py-28 bg-pharmacy-bg border-t border-pharmacy-border" aria-labelledby="services-preview-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-xs uppercase tracking-widest text-pharmacy-amber font-semibold block mb-2">
                Care & Convenience
              </span>
              <h2 id="services-preview-heading" className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-pharmacy-forest tracking-tight">
                Our Core Services
              </h2>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-pharmacy-forest hover:text-pharmacy-forest-hover transition-colors group"
            >
              <span>View All 10 Services</span>
              <ArrowRight className="w-4 h-4 text-pharmacy-amber group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Service 1 */}
            <Link
              href="/services#prescriptions"
              className="interactive-card group p-7 rounded-card border border-pharmacy-border bg-pharmacy-surface shadow-warm"
            >
              <div className="flex items-center justify-between mb-4">
                <PackageCheck className="w-7 h-7 text-pharmacy-forest group-hover:text-pharmacy-forest-hover transition-colors" />
                <ArrowRight className="w-4 h-4 text-pharmacy-amber opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <h3 className="font-serif text-xl font-bold text-pharmacy-forest">
                Prescription Filling & Delivery
              </h3>
              <p className="mt-2 text-sm text-pharmacy-ink-muted leading-relaxed">
                Fast turnarounds, monthly refill synchronization, and reliable free neighborhood delivery.
              </p>
            </Link>

            {/* Service 2 */}
            <Link
              href="/services#vaccines"
              className="interactive-card group p-7 rounded-card border border-pharmacy-border bg-pharmacy-surface shadow-warm"
            >
              <div className="flex items-center justify-between mb-4">
                <Syringe className="w-7 h-7 text-pharmacy-forest group-hover:text-pharmacy-forest-hover transition-colors" />
                <ArrowRight className="w-4 h-4 text-pharmacy-amber opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <h3 className="font-serif text-xl font-bold text-pharmacy-forest">
                Walk-in Vaccines (Age 18+)
              </h3>
              <p className="mt-2 text-sm text-pharmacy-ink-muted leading-relaxed">
                Flu, COVID-19, Pneumonia, Shingles, and RSV vaccines administered without an appointment.
              </p>
            </Link>

            {/* Service 3 */}
            <Link
              href="/services#therapeutics"
              className="interactive-card group p-7 rounded-card border border-pharmacy-border bg-pharmacy-surface shadow-warm"
            >
              <div className="flex items-center justify-between mb-4">
                <ShieldCheck className="w-7 h-7 text-pharmacy-forest group-hover:text-pharmacy-forest-hover transition-colors" />
                <ArrowRight className="w-4 h-4 text-pharmacy-amber opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <h3 className="font-serif text-xl font-bold text-pharmacy-forest">
                COVID Therapeutics
              </h3>
              <p className="mt-2 text-sm text-pharmacy-ink-muted leading-relaxed">
                Consultations and rapid dispensing of authorized COVID antiviral oral medications.
              </p>
            </Link>

            {/* Service 4 */}
            <Link
              href="/services#dmv"
              className="interactive-card group p-7 rounded-card border border-pharmacy-border bg-pharmacy-surface shadow-warm"
            >
              <div className="flex items-center justify-between mb-4">
                <Eye className="w-7 h-7 text-pharmacy-forest group-hover:text-pharmacy-forest-hover transition-colors" />
                <ArrowRight className="w-4 h-4 text-pharmacy-amber opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <h3 className="font-serif text-xl font-bold text-pharmacy-forest">
                DMV Vision Testing
              </h3>
              <p className="mt-2 text-sm text-pharmacy-ink-muted leading-relaxed">
                Official NY DMV eye exams completed in minutes and submitted electronically for license renewal.
              </p>
            </Link>

            {/* Service 5 */}
            <Link
              href="/services#passport"
              className="interactive-card group p-7 rounded-card border border-pharmacy-border bg-pharmacy-surface shadow-warm"
            >
              <div className="flex items-center justify-between mb-4">
                <Camera className="w-7 h-7 text-pharmacy-forest group-hover:text-pharmacy-forest-hover transition-colors" />
                <ArrowRight className="w-4 h-4 text-pharmacy-amber opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <h3 className="font-serif text-xl font-bold text-pharmacy-forest">
                Passport Photos & Notary Public
              </h3>
              <p className="mt-2 text-sm text-pharmacy-ink-muted leading-relaxed">
                Compliant 2x2 passport photos and licensed on-site notary public services for official paperwork.
              </p>
            </Link>

            {/* Service 6 */}
            <Link
              href="/services#transfers"
              className="interactive-card group p-7 rounded-card border border-pharmacy-border bg-pharmacy-surface shadow-warm"
            >
              <div className="flex items-center justify-between mb-4">
                <FileCheck className="w-7 h-7 text-pharmacy-forest group-hover:text-pharmacy-forest-hover transition-colors" />
                <ArrowRight className="w-4 h-4 text-pharmacy-amber opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <h3 className="font-serif text-xl font-bold text-pharmacy-forest">
                Prescription Transfers & Refills
              </h3>
              <p className="mt-2 text-sm text-pharmacy-ink-muted leading-relaxed">
                Hassle-free transfers from any retail or chain pharmacy. We contact your previous pharmacy for you.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* 6. EMBEDDED REVIEWS SECTION (Yelp Data) */}
      <ReviewsSection />

      {/* 7. CALLOUT BANNER: VISIT OR CALL */}
      <section className="py-16 sm:py-20 bg-pharmacy-forest text-white" aria-labelledby="callout-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <span className="text-xs uppercase tracking-widest text-pharmacy-amber font-semibold block mb-2">
                We Are Here For You
              </span>
              <h2 id="callout-heading" className="font-serif text-3xl sm:text-4xl font-bold tracking-tight">
                Ready to switch or need a refill today?
              </h2>
              <p className="mt-3 text-stone-300 text-base leading-relaxed">
                Call our pharmacy team at {business.phoneDisplay} or stop by {business.address.street}. We handle all transfers on your behalf.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4 shrink-0">
              <a
                href={`tel:${business.phone}`}
                className="interactive-btn inline-flex items-center gap-2 px-7 py-4 rounded-button text-base font-semibold bg-pharmacy-amber text-slate-900 hover:bg-pharmacy-amber-hover transition-colors shadow-sm min-h-[48px]"
              >
                <Phone className="w-4 h-4" />
                <span>Call {business.phoneDisplay}</span>
              </a>
              <Link
                href="/contact"
                className="interactive-btn inline-flex items-center gap-2 px-7 py-4 rounded-button text-base font-medium border border-emerald-700 hover:bg-emerald-800/60 transition-colors text-white min-h-[48px]"
              >
                <span>Store Hours & Directions</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
