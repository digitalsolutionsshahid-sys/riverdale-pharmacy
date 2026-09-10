import React from 'react';
import type { Metadata } from 'next';
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
    <div className="w-full flex-1 py-16 sm:py-20 bg-pharmacy-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-pharmacy-ink-muted hover:text-pharmacy-forest transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4 text-pharmacy-amber" />
          <span>Back to Home</span>
        </Link>

        {/* Hero Section */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pharmacy-forest-light text-pharmacy-forest text-xs font-semibold tracking-wide uppercase mb-4 border border-emerald-900/10">
            <Clock className="w-3.5 h-3.5 text-pharmacy-amber" />
            <span>Serving the Bronx Community Since 1987</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-pharmacy-forest tracking-tight leading-[1.15]">
            Rooted in Riverdale, Built on Personal Care
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-pharmacy-ink-muted leading-relaxed font-sans">
            For more than three decades, Riverdale Pharmacy has provided continuous, compassionate pharmaceutical care to families, seniors, and neighbors across the northwest Bronx.
          </p>
        </div>

        {/* 2-Column Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          {/* Left: Narrative */}
          <div className="lg:col-span-7 space-y-6 text-base text-pharmacy-ink-muted leading-relaxed">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-pharmacy-forest tracking-tight">
              Our 1987 Heritage & Community Roots
            </h2>
            <p>
              Riverdale Pharmacy first opened its doors on Riverdale Avenue in 1987. In an era before massive retail corporate conglomerates dominated the healthcare landscape, local neighborhood pharmacies were the bedrock of community health.
            </p>
            <p>
              Decades later, our founding principle remains unaltered: healthcare is personal. When you walk through our doors, you are not an order number or an insurance ID card. You are our neighbor. Our pharmacists take pride in knowing your medical history, your medication preferences, and your family.
            </p>

            <div className="p-6 rounded-card border border-pharmacy-border bg-pharmacy-surface shadow-warm">
              <h3 className="font-serif text-xl font-bold text-pharmacy-forest mb-2">
                Knowledgeable, Approachable & Never Rushed
              </h3>
              <p className="text-sm text-pharmacy-ink-muted leading-relaxed">
                At corporate mega-chains, pharmacists are pressured to meet high-volume quotas, leaving little time for direct patient consultations. At Riverdale Pharmacy, our team is accessible. We gladly take the time to explain how your medications work, identify potential drug interactions, and help coordinate with your physicians.
              </p>
            </div>
          </div>

          {/* Right: Historic & Store Visual Placeholder */}
          <div className="lg:col-span-5">
            <div
              className="rounded-card border border-pharmacy-border bg-pharmacy-surface-subtle p-8 shadow-warm-md flex flex-col justify-between"
              role="img"
              aria-label="Illustration depicting the history of Riverdale Pharmacy in Bronx, NY, highlighting three decades of community service and customer relationships since 1987"
            >
              <div className="space-y-4">
                <span className="text-xs uppercase tracking-widest text-pharmacy-amber font-semibold block">
                  Preserving Independent Care
                </span>
                <h3 className="font-serif text-2xl font-bold text-pharmacy-forest">
                  35+ Years of Dedicated Service
                </h3>
                <p className="text-sm text-pharmacy-ink-muted leading-relaxed">
                  Located at 5669 Riverdale Avenue, our pharmacy stands as an enduring neighborhood institution, balancing time-honored personal attention with modern clinical convenience.
                </p>
                <div className="pt-4 space-y-2 text-xs text-pharmacy-forest font-medium">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                    <span>Independent Bronx neighborhood apothecary</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                    <span>Direct pharmacist accessibility on every visit</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                    <span>Free local delivery for all prescriptions</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-8 border-t border-pharmacy-border text-xs text-pharmacy-ink-subtle flex justify-between items-center">
                <span>5669 Riverdale Ave, Bronx NY 10471</span>
                <span className="font-bold text-pharmacy-forest">Est. 1987</span>
              </div>
            </div>
          </div>
        </div>

        {/* New Ownership & Modernized Service Section */}
        <section className="p-8 sm:p-12 rounded-card bg-pharmacy-surface border border-pharmacy-border shadow-warm mb-16" aria-labelledby="new-ownership-heading">
          <div className="max-w-3xl mb-8">
            <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-pharmacy-amber font-semibold mb-2">
              <Sparkles className="w-4 h-4 text-pharmacy-amber" />
              <span>Modernized Patient Experience</span>
            </div>
            <h2 id="new-ownership-heading" className="font-serif text-2xl sm:text-3xl font-bold text-pharmacy-forest">
              Recently Under New Ownership
            </h2>
            <p className="mt-3 text-base text-pharmacy-ink-muted leading-relaxed">
              Riverdale Pharmacy recently transitioned to new ownership dedicated to preserving the warm neighborhood service our community cherishes while introducing modernized technology to make managing your prescriptions effortless.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Upgrade 1 */}
            <div className="p-6 rounded-card bg-pharmacy-bg border border-pharmacy-border">
              <div className="w-10 h-10 rounded-button bg-pharmacy-forest-light text-pharmacy-forest flex items-center justify-center mb-4">
                <BellRing className="w-5 h-5 text-pharmacy-forest" />
              </div>
              <h3 className="font-serif text-lg font-bold text-pharmacy-forest">
                Text & Email Notifications
              </h3>
              <p className="mt-2 text-sm text-pharmacy-ink-muted leading-relaxed">
                Receive instant status notifications via text or email when your prescription is processed, ready for pickup, or out for free delivery.
              </p>
            </div>

            {/* Upgrade 2 */}
            <div className="p-6 rounded-card bg-pharmacy-bg border border-pharmacy-border">
              <div className="w-10 h-10 rounded-button bg-pharmacy-forest-light text-pharmacy-forest flex items-center justify-center mb-4">
                <PhoneCall className="w-5 h-5 text-pharmacy-forest" />
              </div>
              <h3 className="font-serif text-lg font-bold text-pharmacy-forest">
                Automated Phone System
              </h3>
              <p className="mt-2 text-sm text-pharmacy-ink-muted leading-relaxed">
                Request routine refills 24/7 through our streamlined automated phone service, or press zero during store hours to speak directly with our staff.
              </p>
            </div>

            {/* Upgrade 3 */}
            <div className="p-6 rounded-card bg-pharmacy-bg border border-pharmacy-border">
              <div className="w-10 h-10 rounded-button bg-pharmacy-forest-light text-pharmacy-forest flex items-center justify-center mb-4">
                <ShieldCheck className="w-5 h-5 text-pharmacy-forest" />
              </div>
              <h3 className="font-serif text-lg font-bold text-pharmacy-forest">
                Enhanced Stock & Supply
              </h3>
              <p className="mt-2 text-sm text-pharmacy-ink-muted leading-relaxed">
                Expanded inventory network to ensure essential medications are reliably on hand when larger corporate chains face regional shortages.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <div className="p-8 sm:p-10 rounded-card bg-pharmacy-forest text-white flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="font-serif text-2xl font-bold">Have questions or want to meet our team?</h2>
            <p className="text-sm text-stone-300 mt-1">
              Visit us at {business.address.street} or call {business.phoneDisplay}.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="px-5 py-3 rounded-button text-sm font-semibold bg-pharmacy-amber text-slate-900 hover:bg-pharmacy-amber-hover transition-colors min-h-[44px] flex items-center"
            >
              Store Hours & Map
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
