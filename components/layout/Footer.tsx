import React from 'react';
import Link from 'next/link';
import { MapPin, Phone, Clock, ExternalLink, ShieldCheck } from 'lucide-react';
import { DESIGN_SYSTEM } from '@/lib/design-system';

export function Footer() {
  const { business } = DESIGN_SYSTEM;

  return (
    <footer className="bg-pharmacy-forest dark:bg-[#0c120e] text-stone-200 border-t border-emerald-950/60 dark:border-emerald-950/80 mt-auto transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Col 1: Heritage & Identity */}
          <div className="space-y-4">
            <div>
              <span className="font-serif text-2xl font-bold text-white tracking-tight block">
                {business.name}
              </span>
              <span className="text-xs tracking-widest uppercase text-pharmacy-amber-accent font-semibold block mt-0.5">
                ESTABLISHED 1987 • BRONX, NY
              </span>
            </div>
            <p className="text-sm text-stone-300 leading-relaxed">
              Serving the Riverdale and Bronx community since 1987. Recently under new ownership with modernized automated phone services, text/email prescription updates, and dependable free neighborhood delivery.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-pharmacy-amber-accent">
              <ShieldCheck className="w-4 h-4 text-pharmacy-amber-accent shrink-0" />
              <span>Licensed NYS Pharmacy • Medicare & Medicaid</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-4">
            <h3 className="text-xs uppercase tracking-wider font-semibold text-pharmacy-amber-accent">
              Pharmacy & Services
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  Our History & Care Team
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Prescription Services & Free Delivery
                </Link>
              </li>
              <li>
                <Link href="/insurance-faq" className="hover:text-white transition-colors">
                  Insurance Plans & Transfers FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Store Hours & Directions
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Operating Hours */}
          <div className="space-y-4">
            <h3 className="text-xs uppercase tracking-wider font-semibold text-pharmacy-amber-accent">
              Store & Pharmacy Hours
            </h3>
            <div className="space-y-2.5 text-sm text-stone-300">
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-pharmacy-amber-accent mt-0.5 shrink-0" />
                <div>
                  <p className="font-medium text-white">Monday – Friday</p>
                  <p className="text-xs text-stone-300">9:30 AM – 7:00 PM</p>
                </div>
              </div>
              <div className="flex items-start gap-2 pt-1">
                <div className="w-4 h-4 shrink-0" />
                <div>
                  <p className="font-medium text-white">Saturday</p>
                  <p className="text-xs text-stone-300">9:30 AM – 5:00 PM</p>
                </div>
              </div>
              <div className="flex items-start gap-2 pt-1">
                <div className="w-4 h-4 shrink-0" />
                <div>
                  <p className="font-medium text-white">Sunday</p>
                  <p className="text-xs text-stone-300">Closed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Col 4: Location & Contact */}
          <div className="space-y-4">
            <h3 className="text-xs uppercase tracking-wider font-semibold text-pharmacy-amber-accent">
              Contact & Location
            </h3>
            <div className="space-y-3 text-sm text-stone-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-pharmacy-amber-accent mt-0.5 shrink-0" />
                <span>
                  {business.address.street}
                  <br />
                  {business.address.neighborhood}, {business.address.city}, {business.address.state} {business.address.zip}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-pharmacy-amber-accent shrink-0" />
                <a href={`tel:${business.phone}`} className="hover:text-white font-medium">
                  {business.phoneDisplay}
                </a>
              </div>
              <div className="pt-2">
                <a
                  href={business.yelp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-stone-300 hover:text-white transition-colors"
                >
                  <span>Yelp: {business.yelp.rating}★ ({business.yelp.reviewsCount} reviews)</span>
                  <ExternalLink className="w-3 h-3 text-pharmacy-amber-accent" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 mt-12 border-t border-emerald-900/60 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-stone-400">
          <p>© {new Date().getFullYear()} Riverdale Pharmacy. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span>5669 Riverdale Ave, Bronx NY 10471</span>
            <span>•</span>
            <a href={`tel:${business.phone}`} className="hover:text-stone-200">
              {business.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
