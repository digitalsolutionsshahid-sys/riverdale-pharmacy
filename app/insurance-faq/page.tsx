import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowLeft,
  ShieldCheck,
  HelpCircle,
  Clock,
  Phone,
  FileCheck2,
} from 'lucide-react';
import { DESIGN_SYSTEM } from '@/lib/design-system';

export const metadata: Metadata = {
  title: 'Insurance Plans, Transfers & Copay FAQ | Riverdale Pharmacy',
  description:
    'Get clear answers on prescription transfers, accepted Medicare, Medicaid, and commercial plans, mail-order options, and everyday fill timelines at Riverdale Pharmacy.',
  alternates: {
    canonical: '/insurance-faq',
  },
  openGraph: {
    title: 'Insurance Plans, Transfers & Copay FAQ | Riverdale Pharmacy',
    description:
      'Clear, straightforward answers about prescription copays, insurance networks, and fast pharmacy-to-pharmacy transfers.',
    url: 'https://riverdalepharmacyny.com/insurance-faq',
    images: ['/images/riverdale-rx-care.webp'],
  },
};

export default function InsuranceFaqPage() {
  const { business } = DESIGN_SYSTEM;

  const FAQ_SECTIONS = [
    {
      category: 'Prescription Transfers',
      questions: [
        {
          q: 'How does transferring a prescription to Riverdale Pharmacy work?',
          a: 'Transferring your prescriptions is simple and stress-free. You do not need to call your old pharmacy. Just provide us with your medication name (or Rx number from your current bottle) and the name and phone number of your previous pharmacy. Our pharmacists contact them directly to securely transfer your remaining refills. Alternatively, you can ask your doctor to send new e-prescriptions directly to "Riverdale Pharmacy, 5669 Riverdale Ave, Bronx NY 10471".',
        },
        {
          q: 'What should I expect timeline-wise for a prescription transfer?',
          a: 'Most standard pharmacy-to-pharmacy transfers take between 30 to 60 minutes once our team connects with the transferring pharmacy. If your prescription has no remaining refills and requires authorization from your physician, it typically takes 24 to 48 hours depending on how quickly your doctor responds. We will notify you via text or email the moment it is ready.',
        },
      ],
    },
    {
      category: 'Insurance Coverage & Copays',
      questions: [
        {
          q: 'Which insurance plans does Riverdale Pharmacy accept?',
          a: 'We accept Medicare Part D, New York State Medicaid, and nearly all major commercial insurance carriers, including CVS Caremark, Express Scripts, OptumRx, Empire BlueCross BlueShield, Aetna, Cigna, UnitedHealthcare, EmblemHealth, and union prescription plans. If you are unsure about your specific network, bring your card or call us at (718) 543-7500 and we will verify your coverage instantly.',
        },
        {
          q: 'Will my copay be more expensive than at a big retail chain?',
          a: 'No. Your prescription copays are determined entirely by your insurance company and Pharmacy Benefit Manager (PBM), not by our counter. In the vast majority of cases, your copay at Riverdale Pharmacy is identical to what you would pay at large chain stores, while providing faster service, free local delivery, and direct pharmacist consultations.',
        },
        {
          q: 'Do you accept manufacturer savings coupons and discount cards?',
          a: 'Yes. We process manufacturer copay assistance cards for brand-name medications, as well as recognized prescription discount cards, ensuring you receive the lowest eligible out-of-pocket price for your therapy.',
        },
      ],
    },
    {
      category: 'Mail-Order Limitations & Options',
      questions: [
        {
          q: 'My insurance plan suggests mail order. Can I still use Riverdale Pharmacy?',
          a: 'Yes, in most cases! Many insurance companies promote mail-order pharmacies by default, but their plan rules still allow you to fill your 30-day and 90-day maintenance supplies at an in-network retail pharmacy for the exact same copay. If your employer or insurer has a strict "mandatory mail-order" policy for specific specialty drugs, our team will review your formulary and guide you on your choices.',
        },
        {
          q: 'Why choose local delivery over standard mail order?',
          a: 'Unlike postal mail-order programs that can subject temperature-sensitive medications to heat, freezing conditions, or package delivery delays, Riverdale Pharmacy delivers directly to your door in Riverdale with local drivers, same-day coordination, and zero risk of medications sitting lost in the mail.',
        },
      ],
    },
    {
      category: 'Fulfillment & Daily Timelines',
      questions: [
        {
          q: 'When is the busiest time at the pharmacy counter, and how can I avoid waiting?',
          a: 'Peak in-store rush is 4:30–6:30 PM as commuters return home. Call ahead or use our automated refill line and your prescription will be ready at the register when you arrive. You can also request free home delivery.',
        },
        {
          q: 'How long does it take to fill a regular refill?',
          a: 'Routine refills of in-stock medications are typically filled in 15 to 20 minutes. If you call ahead or request a refill through our 24/7 automated phone system, your prescription will be ready waiting for you, and you will receive an automatic text or email confirmation.',
        },
        {
          q: 'How does free neighborhood delivery work and when does it arrive?',
          a: 'We offer free delivery across Riverdale and nearby Bronx neighborhoods. Prescriptions ordered by early afternoon are delivered the same day. Our delivery team ensures you receive your medications directly, securely, and without extra fees.',
        },
      ],
    },
  ];

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

        {/* Page Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <span className="text-xs uppercase tracking-widest text-pharmacy-amber font-semibold block mb-3">
            Clear Insurance & Prescription Answers
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-[4rem] font-bold text-pharmacy-forest tracking-tight leading-[1.08]">
            Insurance Coverage & Transfers FAQ
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-pharmacy-ink-muted leading-relaxed font-sans">
            Navigating insurance plans, transfer timelines, and mail-order rules should not be frustrating. Here is straightforward guidance on how prescription care works at Riverdale Pharmacy.
          </p>
        </div>

        {/* Insurance Overview Banner */}
        <div className="p-8 sm:p-10 rounded-card border border-pharmacy-border bg-pharmacy-surface shadow-warm mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-button bg-pharmacy-forest-light text-pharmacy-forest flex items-center justify-center shrink-0">
                <ShieldCheck className="w-6 h-6 text-pharmacy-forest" />
              </div>
              <div>
                <h2 className="font-serif text-xl font-bold text-pharmacy-forest">
                  Medicare & Medicaid
                </h2>
                <p className="text-xs text-pharmacy-ink-muted mt-1 leading-relaxed">
                  Full coverage acceptance for Medicare Part D and New York State Medicaid plans.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 md:border-l md:border-pharmacy-border md:pl-8">
              <div className="w-12 h-12 rounded-button bg-pharmacy-forest-light text-pharmacy-forest flex items-center justify-center shrink-0">
                <FileCheck2 className="w-6 h-6 text-pharmacy-forest" />
              </div>
              <div>
                <h2 className="font-serif text-xl font-bold text-pharmacy-forest">
                  Major Commercial Plans
                </h2>
                <p className="text-xs text-pharmacy-ink-muted mt-1 leading-relaxed">
                  Caremark, Express Scripts, OptumRx, BlueCross, Aetna, Cigna, and UnitedHealthcare.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 md:border-l md:border-pharmacy-border md:pl-8">
              <div className="w-12 h-12 rounded-button bg-pharmacy-forest-light text-pharmacy-forest flex items-center justify-center shrink-0">
                <Clock className="w-6 h-6 text-pharmacy-forest" />
              </div>
              <div>
                <h2 className="font-serif text-xl font-bold text-pharmacy-forest">
                  Text / Email Alerts
                </h2>
                <p className="text-xs text-pharmacy-ink-muted mt-1 leading-relaxed">
                  Real-time status updates when your refill or transfer is filled, bagged, or out for delivery.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Sections */}
        <div className="space-y-16 mb-20">
          {FAQ_SECTIONS.map((section) => (
            <div key={section.category} className="space-y-8">
              <div className="border-b border-pharmacy-border pb-4">
                <span className="text-xs uppercase tracking-widest text-pharmacy-amber font-semibold">
                  Category
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-pharmacy-forest">
                  {section.category}
                </h2>
              </div>

              <div className="grid grid-cols-1 gap-6">
                {section.questions.map((faq, idx) => (
                  <div
                    key={idx}
                    className="interactive-card p-8 rounded-card border border-pharmacy-border bg-pharmacy-surface shadow-warm"
                  >
                    <div className="flex items-start gap-4">
                      <HelpCircle className="w-6 h-6 text-pharmacy-amber shrink-0 mt-1" />
                      <div className="space-y-3">
                        <h3 className="font-serif text-xl font-bold text-pharmacy-forest leading-snug">
                          {faq.q}
                        </h3>
                        <p className="text-base text-pharmacy-ink-muted leading-relaxed font-sans">
                          {faq.a}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Real Photo & Callout Card */}
        <div className="rounded-card border border-pharmacy-border bg-pharmacy-surface-subtle overflow-hidden shadow-warm-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 sm:p-12">
            <div className="lg:col-span-8 space-y-3">
              <span className="text-xs uppercase tracking-widest text-pharmacy-amber font-semibold block">
                Direct Insurance Verification
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-pharmacy-forest">
                Still have questions about your specific plan?
              </h2>
              <p className="text-sm sm:text-base text-pharmacy-ink-muted leading-relaxed max-w-xl">
                Call our pharmacy team at {business.phoneDisplay} or bring your insurance card to 5669 Riverdale Ave. We are glad to check copays and formulary tiers for you on the spot.
              </p>
              <div className="pt-2">
                <a
                  href={`tel:${business.phone}`}
                  className="interactive-btn inline-flex items-center gap-2 px-7 py-3.5 rounded-button text-base font-semibold bg-pharmacy-forest text-white hover:bg-pharmacy-forest-hover transition-colors shadow-sm min-h-[48px]"
                >
                  <Phone className="w-4 h-4 text-pharmacy-amber-accent" />
                  <span>Call {business.phoneDisplay}</span>
                </a>
              </div>
            </div>
            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              <div className="relative rounded-card overflow-hidden border border-pharmacy-border w-full max-w-xs aspect-square shadow-warm">
                <Image
                  src="/images/riverdale-rx-care.webp"
                  alt="Pharmacist checking insurance prescription formulary details at Riverdale Pharmacy counter in Bronx, NY"
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
