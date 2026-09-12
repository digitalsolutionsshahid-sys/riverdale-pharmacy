import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowLeft,
  Clock,
  HeartHandshake,
  Sparkles,
  PhoneCall,
  BellRing,
  ShieldCheck,
  CheckCircle2,
  UserCheck,
} from 'lucide-react';
import { DESIGN_SYSTEM } from '@/lib/design-system';

export const metadata: Metadata = {
  title: 'Our History & Community Care Since 1987 | Riverdale Pharmacy',
  description:
    'Learn about Riverdale Pharmacy’s 39-year commitment to independent Bronx healthcare, our approachable pharmacists, and modernized prescription update services.',
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'Our History & Community Care Since 1987 | Riverdale Pharmacy',
    description:
      'Providing continuous, personalized pharmaceutical care to Riverdale and Bronx families since 1987.',
    url: 'https://riverdalepharmacyny.com/about',
    images: ['/images/riverdale-storefront-exterior.webp'],
  },
};

export default function AboutPage() {
  const { business } = DESIGN_SYSTEM;

  return (
    <div className="w-full flex-1 py-16 sm:py-24 bg-pharmacy-bg dark:bg-pharmacy-dark-bg transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-pharmacy-ink-muted dark:text-pharmacy-dark-ink-muted hover:text-pharmacy-forest dark:hover:text-pharmacy-dark-forest transition-colors mb-10"
        >
          <ArrowLeft className="w-4 h-4 text-pharmacy-amber dark:text-pharmacy-dark-amber" />
          <span>Back to Home</span>
        </Link>

        {/* Page Hero Header - Oversized Editorial Typography */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pharmacy-forest-light dark:bg-emerald-950/40 text-pharmacy-forest dark:text-emerald-300 text-xs font-semibold tracking-wide uppercase mb-6 border border-emerald-900/10 dark:border-emerald-700/30">
            <Clock className="w-3.5 h-3.5 text-pharmacy-amber dark:text-pharmacy-dark-amber" />
            <span>Serving the Bronx Community Since 1987</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-[4rem] font-bold text-pharmacy-forest dark:text-pharmacy-dark-forest tracking-tight leading-[1.08]">
            Rooted in Riverdale, Built on Personal Care
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-pharmacy-ink-muted dark:text-pharmacy-dark-ink-muted leading-relaxed font-sans">
            For more than three decades, Riverdale Pharmacy has provided continuous, compassionate pharmaceutical care to families, seniors, and neighbors across the northwest Bronx.
          </p>
        </div>

        {/* 2-Column Story Section with Real Storefront Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          {/* Left Column: Narrative */}
          <div className="lg:col-span-7 space-y-6 text-base text-pharmacy-ink-muted dark:text-pharmacy-dark-ink-muted leading-relaxed">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-pharmacy-forest dark:text-pharmacy-dark-forest tracking-tight">
              Our 1987 Heritage & Community Roots
            </h2>
            <p>
              Riverdale Pharmacy first opened its doors on Riverdale Avenue in 1987. In an era before massive retail corporate conglomerates dominated the healthcare landscape, local neighborhood pharmacies were the bedrock of community health.
            </p>
            <p>
              Decades later, our founding principle remains unaltered: healthcare is personal. When you walk through our doors, you are not an order number or an insurance ID card. You are our neighbor. Our pharmacists take pride in knowing your medical history, your medication preferences, and your family.
            </p>

            <div className="interactive-card p-8 rounded-card border border-pharmacy-border dark:border-pharmacy-dark-border bg-pharmacy-surface dark:bg-pharmacy-dark-surface shadow-warm">
              <h3 className="font-serif text-2xl font-bold text-pharmacy-forest dark:text-pharmacy-dark-forest mb-2">
                Knowledgeable, Approachable & Never Rushed
              </h3>
              <p className="text-sm sm:text-base text-pharmacy-ink-muted dark:text-pharmacy-dark-ink-muted leading-relaxed">
                At corporate mega-chains, pharmacists are pressured to meet high-volume quotas, leaving little time for direct patient consultations. At Riverdale Pharmacy, our team is accessible. We gladly take the time to explain how your medications work, identify potential drug interactions, and help coordinate with your physicians.
              </p>
            </div>
          </div>

          {/* Right Column: Real Storefront Photo */}
          <div className="lg:col-span-5">
            <div className="relative rounded-card overflow-hidden border border-pharmacy-border dark:border-pharmacy-dark-border bg-pharmacy-surface dark:bg-pharmacy-dark-surface shadow-warm-lg aspect-[4/3]">
              <Image
                src="/images/riverdale-storefront-exterior.webp"
                alt="Exterior view of Riverdale Pharmacy storefront at 5669 Riverdale Avenue in Bronx, NY, established 1987"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pharmacy-forest/70 dark:from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="text-xs uppercase tracking-widest text-pharmacy-amber dark:text-pharmacy-dark-amber font-semibold">
                  Bronx Neighborhood Landmark
                </p>
                <p className="font-serif text-lg font-bold">5669 Riverdale Ave</p>
              </div>
            </div>
          </div>
        </div>

        {/* New Ownership & Modernized Service Section */}
        <section className="p-8 sm:p-14 rounded-card bg-pharmacy-surface dark:bg-pharmacy-dark-surface border border-pharmacy-border dark:border-pharmacy-dark-border shadow-warm mb-20 transition-colors duration-200" aria-labelledby="new-ownership-heading">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-12">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-pharmacy-amber dark:text-pharmacy-dark-amber font-semibold mb-3">
                <Sparkles className="w-4 h-4 text-pharmacy-amber dark:text-pharmacy-dark-amber" />
                <span>Modernized Patient Experience</span>
              </div>
              <h2 id="new-ownership-heading" className="font-serif text-3xl sm:text-4xl font-bold text-pharmacy-forest dark:text-pharmacy-dark-forest tracking-tight">
                Recently Under New Ownership
              </h2>
              <p className="mt-4 text-base sm:text-lg text-pharmacy-ink-muted dark:text-pharmacy-dark-ink-muted leading-relaxed">
                Riverdale Pharmacy recently transitioned to new ownership dedicated to preserving the warm neighborhood service our community cherishes while introducing modernized technology to make managing your prescriptions effortless.
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-card overflow-hidden border border-pharmacy-border dark:border-pharmacy-dark-border shadow-warm aspect-[16/10]">
                <Image
                  src="/images/riverdale-pharmacy-counter.webp"
                  alt="Interior counter and dispensing area at Riverdale Pharmacy in Bronx, NY"
                  fill
                  sizes="(max-width: 1024px) 100vw, 35vw"
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Upgrade 1 */}
            <div className="interactive-card p-7 rounded-card bg-pharmacy-bg dark:bg-pharmacy-dark-surface-subtle border border-pharmacy-border dark:border-pharmacy-dark-border shadow-warm">
              <div className="w-11 h-11 rounded-button bg-pharmacy-forest-light dark:bg-emerald-950/40 text-pharmacy-forest dark:text-emerald-300 flex items-center justify-center mb-5">
                <BellRing className="w-6 h-6 text-pharmacy-forest dark:text-emerald-300" />
              </div>
              <h3 className="font-serif text-xl font-bold text-pharmacy-forest dark:text-pharmacy-dark-forest">
                Text & Email Notifications
              </h3>
              <p className="mt-2 text-sm text-pharmacy-ink-muted dark:text-pharmacy-dark-ink-muted leading-relaxed">
                Receive instant status notifications via text or email when your prescription is processed, ready for pickup, or out for free delivery.
              </p>
            </div>

            {/* Upgrade 2 */}
            <div className="interactive-card p-7 rounded-card bg-pharmacy-bg dark:bg-pharmacy-dark-surface-subtle border border-pharmacy-border dark:border-pharmacy-dark-border shadow-warm">
              <div className="w-11 h-11 rounded-button bg-pharmacy-forest-light dark:bg-emerald-950/40 text-pharmacy-forest dark:text-emerald-300 flex items-center justify-center mb-5">
                <PhoneCall className="w-6 h-6 text-pharmacy-forest dark:text-emerald-300" />
              </div>
              <h3 className="font-serif text-xl font-bold text-pharmacy-forest dark:text-pharmacy-dark-forest">
                Automated Phone System
              </h3>
              <p className="mt-2 text-sm text-pharmacy-ink-muted dark:text-pharmacy-dark-ink-muted leading-relaxed">
                Request routine refills 24/7 through our streamlined automated phone service, or press zero during store hours to speak directly with our staff.
              </p>
            </div>

            {/* Upgrade 3 */}
            <div className="interactive-card p-7 rounded-card bg-pharmacy-bg dark:bg-pharmacy-dark-surface-subtle border border-pharmacy-border dark:border-pharmacy-dark-border shadow-warm">
              <div className="w-11 h-11 rounded-button bg-pharmacy-forest-light dark:bg-emerald-950/40 text-pharmacy-forest dark:text-emerald-300 flex items-center justify-center mb-5">
                <ShieldCheck className="w-6 h-6 text-pharmacy-forest dark:text-emerald-300" />
              </div>
              <h3 className="font-serif text-xl font-bold text-pharmacy-forest dark:text-pharmacy-dark-forest">
                Enhanced Stock & Supply
              </h3>
              <p className="mt-2 text-sm text-pharmacy-ink-muted dark:text-pharmacy-dark-ink-muted leading-relaxed">
                Expanded inventory network to ensure essential medications are reliably on hand when larger corporate chains face regional shortages.
              </p>
            </div>
          </div>
        </section>

        {/* Clinical Leadership & Supervising Pharmacist */}
        <section className="mb-20 p-8 sm:p-12 rounded-card bg-pharmacy-surface dark:bg-pharmacy-dark-surface border border-pharmacy-border dark:border-pharmacy-dark-border shadow-warm transition-colors duration-200" aria-labelledby="leadership-heading">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-widest text-pharmacy-amber dark:text-pharmacy-dark-amber font-semibold block mb-2">
              Pharmacy Leadership & Care Standards
            </span>
            <h2 id="leadership-heading" className="font-serif text-3xl sm:text-4xl font-bold text-pharmacy-forest dark:text-pharmacy-dark-forest">
              Clinical Oversight & Supervising Pharmacist
            </h2>
            <p className="mt-4 text-base sm:text-lg text-pharmacy-ink-muted dark:text-pharmacy-dark-ink-muted leading-relaxed font-sans">
              Independent community pharmacy is rooted in accountability. Under our current ownership and clinical management, a licensed Supervising Pharmacist (RPh) is on site and actively overseeing patient safety, pediatric and geriatric dosing, and physician coordination throughout every operating hour.
            </p>
            <div className="mt-8 p-6 rounded-card bg-pharmacy-surface-subtle dark:bg-pharmacy-dark-surface-subtle border border-pharmacy-border dark:border-pharmacy-dark-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-pharmacy-forest dark:bg-emerald-950/60 text-white flex items-center justify-center shrink-0">
                  <UserCheck className="w-7 h-7 text-pharmacy-amber-accent dark:text-pharmacy-dark-amber" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-pharmacy-forest dark:text-pharmacy-dark-forest">
                    Supervising Pharmacist & Pharmacy Manager
                  </h3>
                  <p className="text-xs text-pharmacy-amber dark:text-pharmacy-dark-amber font-semibold uppercase tracking-wider mt-0.5">
                    New York State Registered Pharmacist (RPh)
                  </p>
                  <p className="text-xs text-pharmacy-ink-muted dark:text-pharmacy-dark-ink-muted mt-1">
                    Specialized in Medication Therapy Management, Immunizations & Chronic Disease Support
                  </p>
                </div>
              </div>
              <div className="shrink-0 text-xs text-pharmacy-ink-muted dark:text-pharmacy-dark-ink-muted border-t sm:border-t-0 sm:border-l sm:border-pharmacy-border dark:sm:border-pharmacy-dark-border pt-3 sm:pt-0 sm:pl-6 space-y-1">
                <p className="font-semibold text-pharmacy-forest dark:text-pharmacy-dark-forest">Direct Consultations:</p>
                <p>Mon–Fri: 9:30 AM – 7:00 PM</p>
                <p>Saturday: 9:30 AM – 5:00 PM</p>
                <p className="text-emerald-800 dark:text-emerald-400 font-medium">Walk-ins always welcome</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <div className="p-8 sm:p-12 rounded-card bg-pharmacy-forest dark:bg-[#0c120e] text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-warm-lg border border-emerald-950/60 dark:border-emerald-950/80 transition-colors duration-200">
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold">Have questions or want to meet our team?</h2>
            <p className="text-base text-stone-300 mt-2">
              Visit us at {business.address.street} or call {business.phoneDisplay}.
            </p>
          </div>
          <div className="flex items-center gap-4 shrink-0">
            <Link
              href="/contact"
              className="interactive-btn px-6 py-3.5 rounded-button text-base font-semibold bg-pharmacy-amber hover:bg-pharmacy-amber-hover dark:bg-pharmacy-dark-amber dark:text-pharmacy-dark-bg dark:hover:bg-pharmacy-dark-amber-hover transition-colors min-h-[44px] flex items-center shadow-sm"
            >
              Store Hours & Map
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
