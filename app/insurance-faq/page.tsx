import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowLeft,
  ShieldCheck,
  HelpCircle,
  Clock,
  Phone,
  ArrowRight,
  FileCheck2,
  Mail,
  AlertCircle,
} from 'lucide-react';
import { DESIGN_SYSTEM } from '@/lib/design-system';

export const metadata: Metadata = {
  title: 'Insurance Plans & Prescription FAQ | Riverdale Pharmacy',
  description:
    'Clear answers on prescription transfers, accepted insurance plans (Medicare, Medicaid, major carriers), mail-order limitations, and turnaround timelines at Riverdale Pharmacy in Bronx, NY.',
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
            Clear Insurance & Prescription Answers
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-pharmacy-forest tracking-tight leading-[1.15]">
            Insurance Coverage & Transfers FAQ
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-pharmacy-ink-muted leading-relaxed font-sans">
            Navigating insurance plans, transfer timelines, and mail-order rules should not be frustrating. Here is straightforward guidance on how prescription care works at Riverdale Pharmacy.
          </p>
        </div>

        {/* Insurance Overview Card */}
        <div className="p-8 rounded-card border border-pharmacy-border bg-pharmacy-surface shadow-warm mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-button bg-pharmacy-forest-light text-pharmacy-forest flex items-center justify-center shrink-0 mt-1">
                <ShieldCheck className="w-5 h-5 text-pharmacy-forest" />
              </div>
              <div>
                <h2 className="font-serif text-lg font-bold text-pharmacy-forest">
                  Medicare & Medicaid
                </h2>
                <p className="text-xs text-pharmacy-ink-muted mt-1 leading-relaxed">
                  Full coverage acceptance for Medicare Part D and New York State Medicaid plans.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5 md:border-l md:border-pharmacy-border md:pl-6">
              <div className="w-10 h-10 rounded-button bg-pharmacy-forest-light text-pharmacy-forest flex items-center justify-center shrink-0 mt-1">
                <FileCheck2 className="w-5 h-5 text-pharmacy-forest" />
              </div>
              <div>
                <h2 className="font-serif text-lg font-bold text-pharmacy-forest">
                  Major Commercial Plans
                </h2>
                <p className="text-xs text-pharmacy-ink-muted mt-1 leading-relaxed">
                  Caremark, Express Scripts, OptumRx, BlueCross, Aetna, Cigna, and UnitedHealthcare.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5 md:border-l md:border-pharmacy-border md:pl-6">
              <div className="w-10 h-10 rounded-button bg-pharmacy-forest-light text-pharmacy-forest flex items-center justify-center shrink-0 mt-1">
                <Clock className="w-5 h-5 text-pharmacy-forest" />
              </div>
              <div>
                <h2 className="font-serif text-lg font-bold text-pharmacy-forest">
                  Text / Email Alerts
                </h2>
                <p className="text-xs text-pharmacy-ink-muted mt-1 leading-relaxed">
                  Real-time status updates when your refill or transfer is filled, bagged, or out for delivery.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Accordion-like Sections */}
        <div className="space-y-12 mb-16">
          {FAQ_SECTIONS.map((section) => (
            <div key={section.category} className="space-y-6">
              <div className="border-b border-pharmacy-border pb-3">
                <span className="text-xs uppercase tracking-widest text-pharmacy-amber font-semibold">
                  Category
                </span>
                <h2 className="font-serif text-2xl font-bold text-pharmacy-forest">
                  {section.category}
                </h2>
              </div>

              <div className="grid grid-cols-1 gap-6">
                {section.questions.map((faq, idx) => (
                  <div
                    key={idx}
                    className="p-6 sm:p-8 rounded-card border border-pharmacy-border bg-pharmacy-surface shadow-warm"
                  >
                    <div className="flex items-start gap-3">
                      <HelpCircle className="w-5 h-5 text-pharmacy-amber shrink-0 mt-1" />
                      <div className="space-y-3">
                        <h3 className="font-serif text-lg sm:text-xl font-bold text-pharmacy-forest">
                          {faq.q}
                        </h3>
                        <p className="text-sm sm:text-base text-pharmacy-ink-muted leading-relaxed font-sans">
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

        {/* Accessible Image Placeholder */}
        <div
          className="p-8 rounded-card border border-pharmacy-border bg-pharmacy-surface-subtle mb-16"
          role="img"
          aria-label="Illustration depicting pharmacist verifying patient insurance coverage and prescription details at Riverdale Pharmacy counter in Bronx, NY"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-widest text-pharmacy-amber font-semibold block">
                Insurance Check Assistance
              </span>
              <h2 className="font-serif text-2xl font-bold text-pharmacy-forest">
                Still have questions about your specific plan?
              </h2>
              <p className="text-sm text-pharmacy-ink-muted leading-relaxed">
                Call our pharmacy team at {business.phoneDisplay} or bring your insurance card to 5669 Riverdale Ave. We are glad to check copays and formulary tiers for you.
              </p>
            </div>
            <a
              href={`tel:${business.phone}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-button text-sm font-semibold bg-pharmacy-forest text-white hover:bg-pharmacy-forest-hover transition-colors shadow-sm shrink-0 min-h-[44px]"
            >
              <Phone className="w-4 h-4 text-pharmacy-amber" />
              <span>Call {business.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
