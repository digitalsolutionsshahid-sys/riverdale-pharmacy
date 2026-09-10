import React from 'react';
import type { Metadata } from 'next';
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
  title: 'Pharmacy Services | Full Clinical & Neighborhood Services',
  description:
    'Comprehensive services at Riverdale Pharmacy: prescription filling & free delivery, walk-in adult vaccines (age 18+), COVID therapeutics, DMV eye exams, passport photos, notary, and prescription transfers.',
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

        {/* Page Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs uppercase tracking-widest text-pharmacy-amber font-semibold block mb-2">
            Complete Pharmacy Services
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-pharmacy-forest tracking-tight leading-[1.15]">
            Clinical Excellence & Everyday Convenience
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-pharmacy-ink-muted leading-relaxed font-sans">
            From critical medication dispensing and walk-in vaccines to official DMV eye exams and notary services, Riverdale Pharmacy is your complete neighborhood healthcare hub.
          </p>
        </div>

        {/* Transfer / Refill Action Callout */}
        <div id="refills" className="p-8 rounded-card bg-pharmacy-surface border border-pharmacy-border shadow-warm mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <span className="text-xs uppercase tracking-widest text-pharmacy-amber font-semibold block mb-1">
                Prescription Refill & Transfer Guide
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-pharmacy-forest">
                Ready to refill or transfer your prescriptions?
              </h2>
              <p className="text-sm sm:text-base text-pharmacy-ink-muted mt-2 leading-relaxed">
                You can call us directly at <span className="font-semibold text-pharmacy-forest">{business.phoneDisplay}</span> with your Rx numbers, use our 24/7 automated phone line, or bring in your existing bottles. We handle the rest.
              </p>
              <div className="mt-4 flex flex-wrap gap-4 text-xs font-medium text-pharmacy-forest">
                <span className="inline-flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                  We contact your doctor or previous pharmacy
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                  Same copays as major retail chains
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                  Free delivery right to your door
                </span>
              </div>
            </div>
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <a
                href={`tel:${business.phone}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-button text-base font-semibold bg-pharmacy-forest text-white hover:bg-pharmacy-forest-hover transition-colors shadow-sm min-h-[44px]"
              >
                <Phone className="w-4 h-4 text-pharmacy-amber" />
                <span>Call {business.phoneDisplay}</span>
              </a>
              <Link
                href="/insurance-faq"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-button text-sm font-medium border border-pharmacy-border text-pharmacy-ink hover:bg-pharmacy-surface-subtle transition-colors min-h-[44px]"
              >
                <span>View Insurance Details</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Services Grid (Full 10 Services) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                id={service.id}
                className="p-6 rounded-card border border-pharmacy-border bg-pharmacy-surface shadow-warm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-button bg-pharmacy-forest-light text-pharmacy-forest flex items-center justify-center">
                      <Icon className="w-5 h-5 text-pharmacy-forest" />
                    </div>
                    <span className="text-[0.7rem] uppercase tracking-wider font-semibold px-2.5 py-1 rounded-full bg-pharmacy-surface-subtle text-pharmacy-ink-muted border border-pharmacy-border">
                      {service.tag}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-pharmacy-forest">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm text-pharmacy-ink-muted leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-pharmacy-border flex items-center justify-between text-xs text-pharmacy-ink-subtle">
                  <span>Available on-site</span>
                  <span className="font-medium text-pharmacy-forest">5669 Riverdale Ave</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Informational Graphic & Support Card */}
        <div
          className="p-8 rounded-card border border-pharmacy-border bg-pharmacy-forest text-white"
          role="img"
          aria-label="Illustration depicting Riverdale Pharmacy clinical service counter in Bronx, NY, highlighting on-site immunization administration, prescription consultations, and customer care"
        >
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-widest text-pharmacy-amber font-semibold block mb-2">
              Pharmacist on Duty
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight">
              Questions regarding medications, vaccines, or copays?
            </h2>
            <p className="mt-2 text-stone-300 text-sm leading-relaxed">
              Visit us during business hours (Monday–Friday 9:30 AM–7 PM, Saturday 9:30 AM–5 PM) or call {business.phoneDisplay}. No appointment is ever needed for clinical advice or vaccines.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
