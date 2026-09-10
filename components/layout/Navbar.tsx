'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Phone, Clock, MapPin, Menu, X, ArrowUpRight } from 'lucide-react';
import { DESIGN_SYSTEM } from '@/lib/design-system';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Services' },
  { href: '/insurance-faq', label: 'Insurance & FAQ' },
  { href: '/contact', label: 'Contact & Hours' },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { business } = DESIGN_SYSTEM;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* 1. Top Heritage & Operational Bar */}
      <div className="bg-pharmacy-forest text-pharmacy-surface text-xs font-sans tracking-wide py-2 px-4 sm:px-6 lg:px-8 border-b border-emerald-950/40">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-3 sm:gap-4 text-emerald-100/90 font-medium text-center sm:text-left">
            <span className="inline-flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-pharmacy-amber animate-pulse" />
              Serving Riverdale & the Bronx Since 1987
            </span>
            <span className="hidden md:inline text-emerald-400/40">•</span>
            <span className="hidden md:inline-flex items-center gap-1 text-emerald-200/80">
              <MapPin className="w-3.5 h-3.5 text-pharmacy-amber" />
              {business.address.street}, Bronx, NY
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="hidden sm:inline-flex items-center gap-1 text-emerald-200/80">
              <Clock className="w-3.5 h-3.5 text-pharmacy-amber" />
              Mon–Fri 9:30 AM – 7 PM
            </span>
            <a
              href={`tel:${business.phone}`}
              className="inline-flex items-center gap-1.5 font-semibold text-white hover:text-pharmacy-amber transition-colors min-h-[32px]"
            >
              <Phone className="w-3.5 h-3.5 text-pharmacy-amber" />
              {business.phoneDisplay}
            </a>
          </div>
        </div>
      </div>

      {/* 2. Sticky Navigation Bar */}
      <nav
        className={`bg-pharmacy-surface/95 backdrop-blur-md transition-shadow duration-200 border-b border-pharmacy-border ${
          isScrolled ? 'shadow-warm-md' : 'shadow-warm'
        }`}
        aria-label="Main Navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Brand Logo & Heritage Title */}
            <Link
              href="/"
              className="group flex flex-col focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pharmacy-forest rounded-sm"
            >
              <span className="font-serif text-2xl sm:text-[1.65rem] font-bold tracking-tight text-pharmacy-forest group-hover:text-pharmacy-forest-hover transition-colors">
                Riverdale Pharmacy
              </span>
              <span className="text-[0.68rem] tracking-[0.18em] font-sans uppercase text-pharmacy-amber font-semibold">
                Neighborhood Pharmacy • Trusted Since 1987
              </span>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-8">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative text-sm font-medium py-2 transition-colors duration-150 ${
                      isActive
                        ? 'text-pharmacy-forest font-semibold'
                        : 'text-pharmacy-ink-muted hover:text-pharmacy-forest'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-pharmacy-forest rounded-full" />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Header Right Action CTA */}
            <div className="hidden sm:flex items-center gap-3">
              <Link
                href="/services#refills"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-button text-sm font-semibold bg-pharmacy-forest text-white hover:bg-pharmacy-forest-hover active:scale-[0.98] transition-all shadow-sm focus-visible:ring-2 focus-visible:ring-pharmacy-forest focus-visible:ring-offset-2 min-h-[44px]"
              >
                <span>Refill / Transfer Rx</span>
                <ArrowUpRight className="w-4 h-4 text-pharmacy-amber" />
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex lg:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-button text-pharmacy-forest hover:bg-pharmacy-surface-subtle focus-visible:ring-2 focus-visible:ring-pharmacy-forest transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
                aria-label={mobileMenuOpen ? 'Close menu' : 'Open navigation menu'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* 3. Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-pharmacy-surface border-b border-pharmacy-border shadow-warm-lg animate-in slide-in-from-top-2 duration-200">
            <div className="px-4 pt-3 pb-6 space-y-2 max-w-7xl mx-auto">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`block px-3 py-3 rounded-md text-base font-medium transition-colors min-h-[44px] flex items-center ${
                      isActive
                        ? 'bg-pharmacy-surface-subtle text-pharmacy-forest font-semibold'
                        : 'text-pharmacy-ink hover:bg-pharmacy-surface-subtle hover:text-pharmacy-forest'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <div className="pt-4 mt-2 border-t border-pharmacy-border flex flex-col gap-3">
                <Link
                  href="/services#refills"
                  className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-button text-base font-semibold bg-pharmacy-forest text-white hover:bg-pharmacy-forest-hover active:scale-[0.98] transition-all min-h-[44px]"
                >
                  <span>Refill / Transfer Prescription</span>
                  <ArrowUpRight className="w-4 h-4 text-pharmacy-amber" />
                </Link>
                <a
                  href={`tel:${business.phone}`}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-button text-base font-medium border border-pharmacy-border text-pharmacy-ink hover:bg-pharmacy-surface-subtle transition-all min-h-[44px]"
                >
                  <Phone className="w-4 h-4 text-pharmacy-amber" />
                  Call {business.phoneDisplay}
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
