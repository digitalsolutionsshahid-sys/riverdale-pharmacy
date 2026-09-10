import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowLeft,
  MapPin,
  Phone,
  Clock,
  ExternalLink,
  ShieldCheck,
  Bus,
} from 'lucide-react';
import { DESIGN_SYSTEM } from '@/lib/design-system';
import { ContactForm } from '@/components/contact/ContactForm';

export const metadata: Metadata = {
  title: 'Contact & Store Hours | Riverdale Pharmacy (Bronx, NY)',
  description:
    'Contact Riverdale Pharmacy at 5669 Riverdale Ave, Bronx NY 10471. Call (718) 543-7500 or send us a message. Open Monday–Friday 9:30 AM–7 PM, Saturday 9:30 AM–5 PM.',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact & Store Hours | Riverdale Pharmacy (Bronx, NY)',
    description:
      'Visit Riverdale Pharmacy at 5669 Riverdale Ave in the northwest Bronx or call (718) 543-7500 for prescription questions and free local delivery.',
    url: 'https://riverdalepharmacy.com/contact',
    images: ['/images/riverdale-storefront-exterior.webp'],
  },
};

export default function ContactPage() {
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

        {/* Page Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <span className="text-xs uppercase tracking-widest text-pharmacy-amber font-semibold block mb-3">
            Neighborhood Pharmacy Location & Hours
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-[4rem] font-bold text-pharmacy-forest tracking-tight leading-[1.08]">
            Contact & Directions
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-pharmacy-ink-muted leading-relaxed font-sans">
            We are conveniently located on Riverdale Avenue in the northwest Bronx. Visit our store, call our pharmacists directly, or send us a message below.
          </p>
        </div>

        {/* 3-Column Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {/* Card 1: Address & Transit */}
          <div className="interactive-card p-8 rounded-card border border-pharmacy-border bg-pharmacy-surface shadow-warm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-button bg-pharmacy-forest-light text-pharmacy-forest flex items-center justify-center mb-6">
                <MapPin className="w-6 h-6 text-pharmacy-forest" />
              </div>
              <h2 className="font-serif text-2xl font-bold text-pharmacy-forest">
                Store Address
              </h2>
              <p className="mt-3 text-base text-pharmacy-ink-muted leading-relaxed">
                {business.address.street}
                <br />
                {business.address.neighborhood}, {business.address.city}, {business.address.state} {business.address.zip}
              </p>
              <div className="mt-6 pt-4 border-t border-pharmacy-border space-y-2 text-xs text-pharmacy-ink-muted">
                <div className="flex items-center gap-2">
                  <Bus className="w-4 h-4 text-pharmacy-amber shrink-0" />
                  <span className="font-medium text-pharmacy-forest">MTA Bus: Bx7, Bx10, BxM1, BxM2</span>
                </div>
                <p className="text-stone-500">Located between 259th & 260th Streets</p>
              </div>
            </div>
            <div className="mt-8 pt-4 border-t border-pharmacy-border">
              <a
                href="https://maps.google.com/?q=5669+Riverdale+Ave,+Bronx,+NY+10471"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-pharmacy-forest hover:text-pharmacy-forest-hover group"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 text-pharmacy-amber group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* Card 2: Phone & Refills */}
          <div className="interactive-card p-8 rounded-card border border-pharmacy-border bg-pharmacy-surface shadow-warm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-button bg-pharmacy-forest-light text-pharmacy-forest flex items-center justify-center mb-6">
                <Phone className="w-6 h-6 text-pharmacy-forest" />
              </div>
              <h2 className="font-serif text-2xl font-bold text-pharmacy-forest">
                Telephone & Refills
              </h2>
              <p className="mt-3 text-sm text-pharmacy-ink-muted leading-relaxed">
                Speak directly with our pharmacy team or access our 24/7 automated refill system:
              </p>
              <div className="mt-6 pt-4 border-t border-pharmacy-border space-y-2">
                <div>
                  <span className="text-xs uppercase tracking-wider text-pharmacy-amber font-semibold block">
                    Direct Line (Tap to Call)
                  </span>
                  <a
                    href={`tel:${business.phone}`}
                    className="font-serif text-2xl sm:text-3xl font-bold text-pharmacy-forest hover:text-pharmacy-forest-hover transition-colors inline-block mt-1"
                  >
                    {business.phoneDisplay}
                  </a>
                </div>
                <p className="text-xs text-pharmacy-ink-subtle">
                  24/7 automated refill line available on the same number.
                </p>
              </div>
            </div>
            <div className="mt-8 pt-4 border-t border-pharmacy-border">
              <span className="text-xs font-semibold text-emerald-800">
                Direct pharmacist line during store hours
              </span>
            </div>
          </div>

          {/* Card 3: Store & Delivery Hours */}
          <div className="interactive-card p-8 rounded-card border border-pharmacy-border bg-pharmacy-surface shadow-warm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-button bg-pharmacy-forest-light text-pharmacy-forest flex items-center justify-center mb-6">
                <Clock className="w-6 h-6 text-pharmacy-forest" />
              </div>
              <h2 className="font-serif text-2xl font-bold text-pharmacy-forest">
                Store Hours
              </h2>
              <div className="mt-4 space-y-3 text-sm">
                <div className="flex justify-between items-center py-1.5 border-b border-pharmacy-border/60">
                  <span className="font-medium text-pharmacy-forest">Monday – Friday</span>
                  <span className="text-pharmacy-ink font-semibold">9:30 AM – 7:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-1.5 border-b border-pharmacy-border/60">
                  <span className="font-medium text-pharmacy-forest">Saturday</span>
                  <span className="text-pharmacy-ink font-semibold">9:30 AM – 5:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-1.5">
                  <span className="font-medium text-stone-500">Sunday</span>
                  <span className="text-stone-500 font-semibold">Closed</span>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-4 border-t border-pharmacy-border">
              <span className="text-xs text-pharmacy-amber font-semibold uppercase tracking-wider block">
                Free Delivery Mon – Sat
              </span>
            </div>
          </div>
        </div>

        {/* 2-Column: Real Google Maps Embed + Contact Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          {/* Left: Real Google Maps Embed with Storefront Photo */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-xs uppercase tracking-widest text-pharmacy-amber font-semibold block mb-2">
                Interactive Neighborhood Map
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-pharmacy-forest">
                Find Us on Riverdale Avenue
              </h2>
              <p className="text-sm sm:text-base text-pharmacy-ink-muted mt-2">
                Located at 5669 Riverdale Ave, Bronx, NY 10471. Street parking and transit nearby.
              </p>
            </div>

            <div className="rounded-card overflow-hidden border border-pharmacy-border bg-pharmacy-surface shadow-warm-md h-[400px] relative">
              <iframe
                title="Google Map showing Riverdale Pharmacy location at 5669 Riverdale Ave, Bronx NY 10471"
                src="https://maps.google.com/maps?q=5669+Riverdale+Ave,+Bronx,+NY+10471&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>

            <div className="p-5 rounded-card bg-pharmacy-surface-subtle border border-pharmacy-border flex items-center justify-between text-xs text-pharmacy-ink-muted">
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-5 h-5 text-pharmacy-forest shrink-0" />
                <span>Street-level accessible entrance for wheelchairs and strollers</span>
              </div>
            </div>
          </div>

          {/* Right: Working Contact Form */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-xs uppercase tracking-widest text-pharmacy-amber font-semibold block mb-2">
                Direct Communication
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-pharmacy-forest">
                Send a Message to Our Team
              </h2>
              <p className="text-sm sm:text-base text-pharmacy-ink-muted mt-2">
                Have a non-urgent prescription question, delivery inquiry, or insurance question? We respond promptly.
              </p>
            </div>

            <div className="p-8 sm:p-10 rounded-card border border-pharmacy-border bg-pharmacy-surface shadow-warm-md">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
