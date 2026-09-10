import React from 'react';
import Link from 'next/link';
import { MapPin, Phone, Clock, Mail, ShieldCheck } from 'lucide-react';
import { DESIGN_SYSTEM } from '@/lib/design-system';

export function Footer() {
  const { business } = DESIGN_SYSTEM;

  return (
    <footer className="bg-pharmacy-forest text-stone-200 border-t border-emerald-950/60 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Col 1: Heritage & Identity */}
          <div className="space-y-4">
            <div>
              <span className="font-serif text-2xl font-bold text-white tracking-tight block">
                {business.name}
              </span>
              <span className="text-xs tracking-widest uppercase text-pharmacy-amber font-semibold block mt-0.5">
                ESTABLISHED 1987 • BRONX, NY
              </span>
            </div>
            <p className="text-sm text-stone-300 leading-relaxed">
              Serving the families, seniors, and neighbors of Riverdale and the greater Bronx for over 35 years with personalized pharmaceutical care, consultations, and free local delivery.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-pharmacy-amber">
              <ShieldCheck className="w-4 h-4 text-pharmacy-amber" />
              <span>Licensed NYS Board of Pharmacy</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-4">
            <h3 className="text-xs uppercase tracking-wider font-semibold text-pharmacy-amber">
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
                  Our Story & Pharmacists
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Prescription Services & Compounding
                </Link>
              </li>
              <li>
                <Link href="/insurance-faq" className="hover:text-white transition-colors">
                  Insurance Plans & Copay FAQ
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
            <h3 className="text-xs uppercase tracking-wider font-semibold text-pharmacy-amber">
              Store & Pharmacy Hours
            </h3>
            <div className="space-y-2 text-sm text-stone-300">
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-pharmacy-amber mt-0.5 shrink-0" />
                <div>
                  <p className="font-medium text-white">Monday – Friday</p>
                  <p className="text-xs text-stone-300">8:30 AM – 7:30 PM</p>
                </div>
              </div>
              <div className="flex items-start gap-2 pt-1">
                <div className="w-4 h-4 shrink-0" />
                <div>
                  <p className="font-medium text-white">Saturday</p>
                  <p className="text-xs text-stone-300">9:00 AM – 5:00 PM</p>
                </div>
              </div>
              <div className="flex items-start gap-2 pt-1">
                <div className="w-4 h-4 shrink-0" />
                <div>
                  <p className="font-medium text-white">Sunday</p>
                  <p className="text-xs text-stone-300">10:00 AM – 3:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Col 4: Location & Contact */}
          <div className="space-y-4">
            <h3 className="text-xs uppercase tracking-wider font-semibold text-pharmacy-amber">
              Contact & Location
            </h3>
            <div className="space-y-3 text-sm text-stone-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-pharmacy-amber mt-0.5 shrink-0" />
                <span>
                  {business.address.street}
                  <br />
                  {business.address.neighborhood}, {business.address.city}, {business.address.state} {business.address.zip}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-pharmacy-amber shrink-0" />
                <a href={`tel:${business.phone.replace(/[^0-9]/g, '')}`} className="hover:text-white font-medium">
                  {business.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-pharmacy-amber shrink-0" />
                <span className="text-xs text-stone-300">care@riverdalepharmacy.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 mt-12 border-t border-emerald-900/60 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-stone-400">
          <p>© {new Date().getFullYear()} Riverdale Pharmacy Inc. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>HIPAA Compliant Care</span>
            <span>•</span>
            <span>Bronx, New York</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
