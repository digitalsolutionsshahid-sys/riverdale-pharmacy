import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { DESIGN_SYSTEM } from '@/lib/design-system';

export const metadata: Metadata = {
  title: 'Contact & Store Hours | Riverdale Pharmacy (Bronx, NY)',
  description: 'Visit Riverdale Pharmacy at 5645 Riverdale Ave, Bronx, NY. Call (718) 543-7000 or view our store hours and prescription drop-off schedule.',
};

export default function ContactPage() {
  const { business } = DESIGN_SYSTEM;

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
            Get in Touch
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-pharmacy-forest tracking-tight leading-[1.2]">
            Contact & Store Hours
          </h1>
          <p className="mt-4 text-lg text-pharmacy-ink-muted leading-relaxed font-sans">
            Page scaffold initialized. In the next step, the interactive contact form, embedded neighborhood map, and instant click-to-call direct lines will be added.
          </p>
        </div>

        {/* Contact info cards */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Card 1: Visit */}
          <div className="p-8 rounded-card border border-pharmacy-border bg-pharmacy-surface shadow-warm">
            <div className="w-10 h-10 rounded-button bg-pharmacy-forest-light text-pharmacy-forest flex items-center justify-center mb-6">
              <MapPin className="w-5 h-5 text-pharmacy-forest" />
            </div>
            <h2 className="font-serif text-xl font-bold text-pharmacy-forest">
              Store Location
            </h2>
            <p className="text-sm text-pharmacy-ink-muted mt-3 leading-relaxed">
              {business.address.street}
              <br />
              {business.address.neighborhood}, {business.address.city}, {business.address.state} {business.address.zip}
            </p>
            <p className="text-xs text-pharmacy-amber font-medium mt-3">
              Near 259th Street • Bus Bx7, Bx10, BxM1
            </p>
          </div>

          {/* Card 2: Call / Fax */}
          <div className="p-8 rounded-card border border-pharmacy-border bg-pharmacy-surface shadow-warm">
            <div className="w-10 h-10 rounded-button bg-pharmacy-amber-light text-pharmacy-amber flex items-center justify-center mb-6">
              <Phone className="w-5 h-5 text-pharmacy-amber" />
            </div>
            <h2 className="font-serif text-xl font-bold text-pharmacy-forest">
              Phone & Direct Lines
            </h2>
            <div className="mt-3 space-y-2 text-sm text-pharmacy-ink-muted">
              <p>
                <span className="font-medium text-pharmacy-forest">Main Phone:</span>{' '}
                <a href="tel:7185437000" className="text-pharmacy-forest font-semibold hover:underline">
                  {business.phone}
                </a>
              </p>
              <p>
                <span className="font-medium text-pharmacy-forest">Fax:</span> {business.fax}
              </p>
              <p>
                <span className="font-medium text-pharmacy-forest">Email:</span> care@riverdalepharmacy.com
              </p>
            </div>
          </div>

          {/* Card 3: Hours */}
          <div className="p-8 rounded-card border border-pharmacy-border bg-pharmacy-surface shadow-warm">
            <div className="w-10 h-10 rounded-button bg-pharmacy-forest-light text-pharmacy-forest flex items-center justify-center mb-6">
              <Clock className="w-5 h-5 text-pharmacy-forest" />
            </div>
            <h2 className="font-serif text-xl font-bold text-pharmacy-forest">
              Operating Hours
            </h2>
            <div className="mt-3 space-y-1.5 text-sm text-pharmacy-ink-muted">
              <p className="font-medium text-pharmacy-ink">{business.hours.weekday}</p>
              <p className="font-medium text-pharmacy-ink">{business.hours.saturday}</p>
              <p className="font-medium text-pharmacy-ink">{business.hours.sunday}</p>
              <p className="text-xs text-pharmacy-forest font-semibold mt-2 pt-2 border-t border-pharmacy-border">
                Pharmacist Always On Duty
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
