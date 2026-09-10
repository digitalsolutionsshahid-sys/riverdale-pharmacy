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
  MapPin,
  Phone,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';
import { DESIGN_SYSTEM } from '@/lib/design-system';

export const metadata: Metadata = {
  title: 'About Us | Neighborhood Healthcare Since 1987',
  description:
    'Learn about Riverdale Pharmacy: serving the Riverdale and Bronx community since 1987. Recently under new ownership with modernized phone and text/email refill services.',
};

export default function AboutPage() {
  const { business } = DESIGN_SYSTEM;

  return (
    <div className="w-full flex-1 py-16 sm:py-24 bg-pharmacy-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-pharmacy-ink-muted hover:text-pharmacy-forest transition-colors mb-10"
        >
          <ArrowLeft className="w-4 h-4 text-pharmacy-amber" />
          <span>Back to Home</span>
        </Link>

        {/* Page Hero Header - Oversized Editorial Typography */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pharmacy-forest-light text-pharmacy-forest text-xs font-semibold tracking-wide uppercase mb-6 border border-emerald-900/10">
            <Clock className="w-3.5 h-3.5 text-pharmacy-amber" />
            <span>Serving the Bronx Community Since 1987</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-[4rem] font-bold text-pharmacy-forest tracking-tight leading-[1.08]">
            Rooted in Riverdale, Built on Personal Care
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-pharmacy-ink-muted leading-relaxed font-sans">
            For more than three decades, Riverdale Pharmacy has provided continuous, compassionate pharmaceutical care to families, seniors, and neighbors across the northwest Bronx.
          </p>
        </div>

        {/* 2-Column Story Section with Real Storefront Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          {/* Left Column: Narrative */}
          <div className="lg:col-span-7 space-y-6 text-base text-pharmacy-ink-muted leading-relaxed">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-pharmacy-forest tracking-tight">
              Our 1987 Heritage & Community Roots
            </h2>
            <p>
              Riverdale Pharmacy first opened its doors on Riverdale Avenue in 1987. In an era before massive retail corporate conglomerates dominated the healthcare landscape, local neighborhood pharmacies were the bedrock of community health.
            </p>
            <p>
              Decades later, our founding principle remains unaltered: healthcare is personal. When you walk through our doors, you are not an order number or an insurance ID card. You are our neighbor. Our pharmacists take pride in knowing your medical history, your medication preferences, and your family.
            </p>

            <div className="interactive-card p-8 rounded-card border border-pharmacy-border bg-pharmacy-surface shadow-warm">
              <h3 className="font-serif text-2xl font-bold text-pharmacy-forest mb-2">
                Knowledgeable, Approachable & Never Rushed
              </h3>
              <p className="text-sm sm:text-base text-pharmacy-ink-muted leading-relaxed">
                At corporate mega-chains, pharmacists are pressured to meet high-volume quotas, leaving little time for direct patient consultations. At Riverdale Pharmacy, our team is accessible. We gladly take the time to explain how your medications work, identify potential drug interactions, and help coordinate with your physicians.
              </p>
            </div>
          </div>

          {/* Right Column: Real Storefront Photo */}
          <div className="lg:col-span-5">
            <div className="relative rounded-card overflow-hidden border border-pharmacy-border bg-pharmacy-surface shadow-warm-lg aspect-[4/3]">
              <Image
                src="/images/riverdale-storefront-exterior.jpg"
                alt="Exterior view of Riverdale Pharmacy storefront at 5669 Riverdale Avenue in Bronx, NY, established 1987"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pharmacy-forest/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="text-xs uppercase tracking-widest text-pharmacy-amber font-semibold">
                  Bronx Neighborhood Landmark
                </p>
                <p className="font-serif text-lg font-bold">5669 Riverdale Ave</p>
              </div>
            </div>
          </div>
        </div>

        {/* New Ownership & Modernized Service Section */}
        <section className="p-8 sm:p-14 rounded-card bg-pharmacy-surface border border-pharmacy-border shadow-warm mb-20" aria-labelledby="new-ownership-heading">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-12">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-pharmacy-amber font-semibold mb-3">
                <Sparkles className="w-4 h-4 text-pharmacy-amber" />
                <span>Modernized Patient Experience</span>
              </div>
              <h2 id="new-ownership-heading" className="font-serif text-3xl sm:text-4xl font-bold text-pharmacy-forest tracking-tight">
                Recently Under New Ownership
              </h2>
              <p className="mt-4 text-base sm:text-lg text-pharmacy-ink-muted leading-relaxed">
                Riverdale Pharmacy recently transitioned to new ownership dedicated to preserving the warm neighborhood service our community cherishes while introducing modernized technology to make managing your prescriptions effortless.
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-card overflow-hidden border border-pharmacy-border shadow-warm aspect-[16/10]">
                <Image
                  src="/images/riverdale-pharmacy-counter.png"
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
            <div className="interactive-card p-7 rounded-card bg-pharmacy-bg border border-pharmacy-border shadow-warm">
              <div className="w-11 h-11 rounded-button bg-pharmacy-forest-light text-pharmacy-forest flex items-center justify-center mb-5">
                <BellRing className="w-6 h-6 text-pharmacy-forest" />
              </div>
              <h3 className="font-serif text-xl font-bold text-pharmacy-forest">
                Text & Email Notifications
              </h3>
              <p className="mt-2 text-sm text-pharmacy-ink-muted leading-relaxed">
                Receive instant status notifications via text or email when your prescription is processed, ready for pickup, or out for free delivery.
              </p>
            </div>

            {/* Upgrade 2 */}
            <div className="interactive-card p-7 rounded-card bg-pharmacy-bg border border-pharmacy-border shadow-warm">
              <div className="w-11 h-11 rounded-button bg-pharmacy-forest-light text-pharmacy-forest flex items-center justify-center mb-5">
                <PhoneCall className="w-6 h-6 text-pharmacy-forest" />
              </div>
              <h3 className="font-serif text-xl font-bold text-pharmacy-forest">
                Automated Phone System
              </h3>
              <p className="mt-2 text-sm text-pharmacy-ink-muted leading-relaxed">
                Request routine refills 24/7 through our streamlined automated phone service, or press zero during store hours to speak directly with our staff.
              </p>
            </div>

            {/* Upgrade 3 */}
            <div className="interactive-card p-7 rounded-card bg-pharmacy-bg border border-pharmacy-border shadow-warm">
              <div className="w-11 h-11 rounded-button bg-pharmacy-forest-light text-pharmacy-forest flex items-center justify-center mb-5">
                <ShieldCheck className="w-6 h-6 text-pharmacy-forest" />
              </div>
              <h3 className="font-serif text-xl font-bold text-pharmacy-forest">
                Enhanced Stock & Supply
              </h3>
              <p className="mt-2 text-sm text-pharmacy-ink-muted leading-relaxed">
                Expanded inventory network to ensure essential medications are reliably on hand when larger corporate chains face regional shortages.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <div className="p-8 sm:p-12 rounded-card bg-pharmacy-forest text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-warm-lg">
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold">Have questions or want to meet our team?</h2>
            <p className="text-base text-stone-300 mt-2">
              Visit us at {business.address.street} or call {business.phoneDisplay}.
            </p>
          </div>
          <div className="flex items-center gap-4 shrink-0">
            <Link
              href="/contact"
              className="interactive-btn px-6 py-3.5 rounded-button text-base font-semibold bg-pharmacy-amber text-slate-900 hover:bg-pharmacy-amber-hover transition-colors min-h-[44px] flex items-center shadow-sm"
            >
              Store Hours & Map
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
