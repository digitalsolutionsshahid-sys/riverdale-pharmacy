import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowLeft,
  PackageCheck,
  Truck,
  Syringe,
  ShieldCheck,
  Eye,
  Camera,
  FileCheck,
  Copy,
  Gift,
  RefreshCw,
  Phone,
  CheckCircle2,
} from 'lucide-react';
import { DESIGN_SYSTEM } from '@/lib/design-system';

export const metadata: Metadata = {
  title: 'Clinical & Neighborhood Pharmacy Services | Riverdale Pharmacy',
  description:
    'Explore our comprehensive services including prescription refills, free local Bronx delivery, walk-in adult vaccines, COVID antivirals, and DMV vision tests.',
  alternates: {
    canonical: '/services',
  },
  openGraph: {
    title: 'Clinical & Neighborhood Pharmacy Services | Riverdale Pharmacy',
    description:
      'Complete prescription management, walk-in adult immunizations, and essential community services in the Bronx.',
    url: 'https://riverdalepharmacyny.com/services',
    images: ['/images/riverdale-pharmacy-counter.webp'],
  },
};

export default function ServicesPage() {
  const { business } = DESIGN_SYSTEM;

  const SERVICES = [
    {
      id: 'prescriptions',
      icon: PackageCheck,
      title: 'Prescription Filling & Medication Management',
      tag: 'Core Care',
      description:
        'Fast, accurate prescription dispensing by experienced licensed pharmacists. We review your complete medication regimen for safety, efficacy, and drug-drug interactions, coordinating directly with your physicians.',
    },
    {
      id: 'delivery',
      icon: Truck,
      title: 'Free Local Neighborhood Delivery',
      tag: 'Convenience',
      description:
        'Complimentary same-day and scheduled prescription delivery throughout Riverdale, Kingsbridge, and neighboring Bronx communities. Your medications arrive safely and discreetly at your home.',
    },
    {
      id: 'vaccines',
      icon: Syringe,
      title: 'Walk-In Adult Vaccines (Age 18+)',
      tag: 'Immunizations',
      description:
        'No appointment needed. Our certified pharmacists administer seasonal Flu shots, Pneumonia, Shingles (Shingrix), RSV, and COVID-19 vaccines for adults age 18 and older. Most insurance plans cover preventative vaccines at $0 copay.',
    },
    {
      id: 'therapeutics',
      icon: ShieldCheck,
      title: 'COVID Therapeutics & Antivirals',
      tag: 'Clinical Support',
      description:
        'Rapid dispensing and pharmacist consultations for authorized COVID-19 oral antiviral medications (such as Paxlovid) with an eligible prescription to reduce illness severity.',
    },
    {
      id: 'transfers',
      icon: RefreshCw,
      title: 'Hassle-Free Prescription Transfers',
      tag: 'Switching Made Simple',
      description:
        'Transferring to Riverdale Pharmacy is effortless. Simply provide us with your current medication name or bottle, and previous pharmacy information. We handle all pharmacy-to-pharmacy contact on your behalf.',
    },
    {
      id: 'refills',
      icon: RefreshCw,
      title: 'Prescription Refills & Automated Reminders',
      tag: 'Continuity',
      description:
        'Request refills 24/7 through our automated phone system, speak directly with our counter staff during business hours, or sign up for automated text and email notifications when renewals are due.',
    },
    {
      id: 'dmv',
      icon: Eye,
      title: 'DMV Vision Testing',
      tag: 'On-Site Service',
      description:
        'Need to renew your New York State Driver License? We provide official, certified DMV eye examinations in under five minutes and transmit your passing results directly to the NYS DMV database.',
    },
    {
      id: 'passport',
      icon: Camera,
      title: 'Passport Photos',
      tag: 'On-Site Service',
      description:
        'Professional, regulation-compliant 2x2 inch passport photos printed on-site in minutes for U.S. and international passports, visa applications, and official government credentials.',
    },
    {
      id: 'notary',
      icon: FileCheck,
      title: 'Notary Public Services',
      tag: 'Administrative',
      description:
        'Licensed Notary Public on duty during regular business hours to notarize healthcare proxies, medical directives, affidavits, powers of attorney, and legal documents.',
    },
    {
      id: 'photocopying',
      icon: Copy,
      title: 'Photocopying & Printing',
      tag: 'Community Utility',
      description:
        'Quick on-site photocopying and document reproduction for insurance forms, medical records, identification cards, and personal paperwork.',
    },
    {
      id: 'cards',
      icon: Gift,
      title: 'Greeting & Gift Cards',
      tag: 'Retail & Convenience',
      description:
        'A thoughtfully curated selection of greeting cards for birthdays, recovery, holidays, and milestones, along with gift cards and everyday convenience essentials.',
    },
  ];

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

        {/* Page Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <span className="text-xs uppercase tracking-widest text-pharmacy-amber dark:text-pharmacy-dark-amber font-semibold block mb-3">
            Complete Pharmacy Services
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-[4rem] font-bold text-pharmacy-forest dark:text-pharmacy-dark-forest tracking-tight leading-[1.08]">
            Clinical Care & Everyday Convenience
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-pharmacy-ink-muted dark:text-pharmacy-dark-ink-muted leading-relaxed font-sans">
            From critical medication dispensing and walk-in vaccines to official DMV eye exams and notary services, Riverdale Pharmacy is your complete neighborhood healthcare hub.
          </p>
        </div>

        {/* Transfer / Refill Action Callout */}
        <div id="refills" className="p-8 sm:p-12 rounded-card bg-pharmacy-surface dark:bg-pharmacy-dark-surface border border-pharmacy-border dark:border-pharmacy-dark-border shadow-warm-md mb-20 transition-colors duration-200">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <span className="text-xs uppercase tracking-widest text-pharmacy-amber dark:text-pharmacy-dark-amber font-semibold block mb-2">
                Prescription Refill & Transfer Guide
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-pharmacy-forest dark:text-pharmacy-dark-forest leading-snug">
                Ready to refill or transfer your prescriptions?
              </h2>
              <p className="text-base text-pharmacy-ink-muted dark:text-pharmacy-dark-ink-muted mt-3 leading-relaxed">
                You can call us directly at <span className="font-semibold text-pharmacy-forest dark:text-pharmacy-dark-forest">{business.phoneDisplay}</span> with your Rx numbers, use our 24/7 automated phone line, or bring in your existing bottles. We handle the rest.
              </p>
              <div className="mt-6 flex flex-wrap gap-4 text-xs font-medium text-pharmacy-forest dark:text-pharmacy-dark-forest">
                <span className="inline-flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 dark:text-emerald-400" />
                  We contact your doctor or previous pharmacy
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 dark:text-emerald-400" />
                  Same copays as major retail chains
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 dark:text-emerald-400" />
                  Free delivery right to your door
                </span>
              </div>
            </div>
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <a
                href={`tel:${business.phone}`}
                className="interactive-btn inline-flex items-center justify-center gap-2 px-7 py-4 rounded-button text-base font-semibold bg-pharmacy-forest dark:bg-pharmacy-dark-forest dark:text-pharmacy-dark-bg text-white hover:bg-pharmacy-forest-hover dark:hover:bg-pharmacy-dark-forest-hover transition-colors shadow-sm min-h-[48px]"
              >
                <Phone className="w-4 h-4 text-pharmacy-amber dark:text-pharmacy-dark-bg" />
                <span>Call {business.phoneDisplay}</span>
              </a>
              <Link
                href="/insurance-faq"
                className="interactive-btn inline-flex items-center justify-center gap-2 px-7 py-4 rounded-button text-sm font-semibold border border-pharmacy-border dark:border-pharmacy-dark-border text-pharmacy-ink dark:text-pharmacy-dark-ink hover:bg-pharmacy-surface-subtle dark:hover:bg-pharmacy-dark-surface-subtle transition-colors min-h-[48px]"
              >
                <span>View Insurance Details</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Services Grid (Full 10 Services) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {SERVICES.map((service, index) => {
            const indexStr = (index + 1).toString().padStart(2, '0');
            return (
              <div
                key={service.id}
                id={service.id}
                className="interactive-card p-8 rounded-card border border-pharmacy-border dark:border-pharmacy-dark-border bg-pharmacy-surface dark:bg-pharmacy-dark-surface shadow-warm flex flex-col justify-between scroll-mt-28 transition-colors duration-200"
              >
                <div>
                  <div className="flex items-baseline justify-between mb-5 pb-3 border-b border-pharmacy-border/60 dark:border-pharmacy-dark-border">
                    <span className="font-serif text-3xl font-bold text-pharmacy-amber dark:text-pharmacy-dark-amber tracking-tight">
                      {indexStr}
                    </span>
                    <span className="text-[0.68rem] tracking-[0.14em] uppercase font-semibold px-2.5 py-1 rounded-full bg-pharmacy-surface-subtle dark:bg-pharmacy-dark-surface-subtle text-pharmacy-forest dark:text-emerald-300 border border-pharmacy-border dark:border-pharmacy-dark-border">
                      {service.tag}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-pharmacy-forest dark:text-pharmacy-dark-forest leading-snug">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm text-pharmacy-ink-muted dark:text-pharmacy-dark-ink-muted leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-pharmacy-border dark:border-pharmacy-dark-border flex items-center justify-between text-xs text-pharmacy-ink-subtle dark:text-pharmacy-dark-ink-subtle">
                  <span>Available on-site</span>
                  <span className="font-medium text-pharmacy-forest dark:text-pharmacy-dark-forest">5669 Riverdale Ave</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Real Photo & Information Banner */}
        <div className="rounded-card border border-pharmacy-border dark:border-emerald-950/80 bg-pharmacy-forest dark:bg-[#0c120e] text-white overflow-hidden shadow-warm-lg transition-colors duration-200">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 sm:p-12">
            <div className="lg:col-span-8 space-y-3">
              <span className="text-xs uppercase tracking-widest text-pharmacy-amber-accent font-semibold block">
                Pharmacist on Duty
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight">
                Questions regarding medications, vaccines, or copays?
              </h2>
              <p className="text-stone-300 text-base leading-relaxed max-w-xl">
                Visit us during business hours (Monday–Friday 9:30 AM–7 PM, Saturday 9:30 AM–5 PM) or call {business.phoneDisplay}. No appointment is ever needed for clinical consultations or adult walk-in vaccines.
              </p>
            </div>
            <div className="lg:col-span-4 flex justify-end">
              <div className="relative rounded-card overflow-hidden border border-emerald-800 dark:border-emerald-900/60 w-full max-w-xs aspect-[4/3]">
                <Image
                  src="/images/riverdale-pharmacy-counter.webp"
                  alt="Customer service and prescription intake counter at Riverdale Pharmacy in the Bronx"
                  fill
                  sizes="(max-width: 1024px) 100vw, 30vw"
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
