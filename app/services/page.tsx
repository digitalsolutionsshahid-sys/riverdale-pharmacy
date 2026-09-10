import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Pill, Truck, Syringe, Sparkles, Stethoscope, FileText } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Pharmacy Services | Prescription Refills & Care',
  description: 'Explore Riverdale Pharmacy services: prescription refills, medication synchronizing, immunizations, compounding, and free neighborhood delivery.',
};

export default function ServicesPage() {
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
            Clinical Care & Convenience
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-pharmacy-forest tracking-tight leading-[1.2]">
            Comprehensive Pharmacy Services
          </h1>
          <p className="mt-4 text-lg text-pharmacy-ink-muted leading-relaxed font-sans">
            Page scaffold initialized. In the next step, our complete service catalogue—refills, synchronization, compounding, and consultations—will be fully detailed.
          </p>
        </div>

        {/* Services scaffold grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 rounded-card border border-pharmacy-border bg-pharmacy-surface shadow-warm">
            <Pill className="w-8 h-8 text-pharmacy-forest mb-4" />
            <h2 className="font-serif text-xl font-bold text-pharmacy-forest">Prescription Management</h2>
            <p className="text-sm text-pharmacy-ink-muted mt-2">
              Swift refills, automatic renewals, and simplified prescription transfers from any pharmacy.
            </p>
          </div>

          <div className="p-6 rounded-card border border-pharmacy-border bg-pharmacy-surface shadow-warm">
            <Truck className="w-8 h-8 text-pharmacy-forest mb-4" />
            <h2 className="font-serif text-xl font-bold text-pharmacy-forest">Free Local Delivery</h2>
            <p className="text-sm text-pharmacy-ink-muted mt-2">
              Complimentary same-day and next-day delivery throughout Riverdale, Kingsbridge, and Fieldston.
            </p>
          </div>

          <div className="p-6 rounded-card border border-pharmacy-border bg-pharmacy-surface shadow-warm">
            <Syringe className="w-8 h-8 text-pharmacy-forest mb-4" />
            <h2 className="font-serif text-xl font-bold text-pharmacy-forest">Immunizations & Vaccines</h2>
            <p className="text-sm text-pharmacy-ink-muted mt-2">
              Flu shots, RSV, COVID-19, Shingles, and travel vaccines administered by certified pharmacists.
            </p>
          </div>

          <div className="p-6 rounded-card border border-pharmacy-border bg-pharmacy-surface shadow-warm">
            <Sparkles className="w-8 h-8 text-pharmacy-forest mb-4" />
            <h2 className="font-serif text-xl font-bold text-pharmacy-forest">Custom Compounding</h2>
            <p className="text-sm text-pharmacy-ink-muted mt-2">
              Custom dosage forms, pediatric formulations, hormone therapy, and veterinary compounds.
            </p>
          </div>

          <div className="p-6 rounded-card border border-pharmacy-border bg-pharmacy-surface shadow-warm">
            <Stethoscope className="w-8 h-8 text-pharmacy-forest mb-4" />
            <h2 className="font-serif text-xl font-bold text-pharmacy-forest">Health Consultations</h2>
            <p className="text-sm text-pharmacy-ink-muted mt-2">
              Medication therapy reviews, diabetes education, and blood pressure monitoring.
            </p>
          </div>

          <div className="p-6 rounded-card border border-pharmacy-border bg-pharmacy-surface shadow-warm">
            <FileText className="w-8 h-8 text-pharmacy-forest mb-4" />
            <h2 className="font-serif text-xl font-bold text-pharmacy-forest">Blister & Pill Packaging</h2>
            <p className="text-sm text-pharmacy-ink-muted mt-2">
              Pre-sorted compliance packaging organized by date and time for effortless adherence.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
