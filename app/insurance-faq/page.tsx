import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ShieldCheck, HelpCircle, CheckCircle, CreditCard } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Insurance & FAQ | Accepted Plans & Copay Assistance',
  description: 'Find accepted insurance plans, Medicare Part D guidance, Medicaid coverage, and answers to common prescription questions at Riverdale Pharmacy.',
};

export default function InsuranceFaqPage() {
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
            Coverage & Answers
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-pharmacy-forest tracking-tight leading-[1.2]">
            Insurance Plans & Frequently Asked Questions
          </h1>
          <p className="mt-4 text-lg text-pharmacy-ink-muted leading-relaxed font-sans">
            Page scaffold initialized. In the next step, our complete insurance acceptance list (Medicare, Medicaid, commercial plans) and interactive FAQ accordions will be populated.
          </p>
        </div>

        {/* Insurance & FAQ scaffold cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 rounded-card border border-pharmacy-border bg-pharmacy-surface shadow-warm">
            <div className="w-10 h-10 rounded-button bg-pharmacy-forest-light text-pharmacy-forest flex items-center justify-center mb-6">
              <ShieldCheck className="w-5 h-5 text-pharmacy-forest" />
            </div>
            <h2 className="font-serif text-2xl font-bold text-pharmacy-forest">
              Accepted Insurance Plans
            </h2>
            <p className="text-sm text-pharmacy-ink-muted mt-3 leading-relaxed">
              We accept Medicare Part D, New York State Medicaid, CVS Caremark, Express Scripts, OptumRx, Empire BlueCross BlueShield, Aetna, Cigna, UnitedHealthcare, and union prescription plans.
            </p>
            <div className="mt-6 pt-6 border-t border-pharmacy-border flex items-center gap-2 text-xs font-semibold text-pharmacy-amber uppercase tracking-wider">
              <CheckCircle className="w-4 h-4" />
              <span>Same Copays as Chain Pharmacies</span>
            </div>
          </div>

          <div className="p-8 rounded-card border border-pharmacy-border bg-pharmacy-surface shadow-warm">
            <div className="w-10 h-10 rounded-button bg-pharmacy-amber-light text-pharmacy-amber flex items-center justify-center mb-6">
              <HelpCircle className="w-5 h-5 text-pharmacy-amber" />
            </div>
            <h2 className="font-serif text-2xl font-bold text-pharmacy-forest">
              Common Questions
            </h2>
            <p className="text-sm text-pharmacy-ink-muted mt-3 leading-relaxed">
              Learn how easy it is to transfer existing prescriptions, request refills online or via phone, obtain doctor authorizations, and schedule free local delivery to your home.
            </p>
            <div className="mt-6 pt-6 border-t border-pharmacy-border flex items-center gap-2 text-xs font-semibold text-pharmacy-forest uppercase tracking-wider">
              <CreditCard className="w-4 h-4" />
              <span>Copay Assistance & Manufacturer Cards Supported</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
