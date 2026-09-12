'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Phone, Clock, MapPin, Menu, X, ArrowUpRight } from 'lucide-react';
import { DESIGN_SYSTEM } from '@/lib/design-system';
import { ThemeToggle } from '@/components/theme/ThemeToggle';

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
  const drawerRef = React.useRef<HTMLDivElement>(null);
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

  // Focus trap and Escape key listener for accessible mobile drawer
  useEffect(() => {
    if (!mobileMenuOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Focus the first item in drawer on open
    const focusTimer = setTimeout(() => {
      if (drawerRef.current) {
        const firstFocusable = drawerRef.current.querySelector<HTMLElement>(
          'a[href], button:not([disabled])'
        );
        firstFocusable?.focus();
      }
    }, 50);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
        return;
      }

      if (e.key === 'Tab' && drawerRef.current) {
        const focusable = drawerRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled])'
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      clearTimeout(focusTimer);
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileMenuOpen]);

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* 1. Top Heritage & Operational Bar */}
      <div className="bg-pharmacy-forest text-pharmacy-surface text-xs font-sans tracking-wide py-2 px-4 sm:px-6 lg:px-8 border-b border-emerald-950/40">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-3 sm:gap-4 text-emerald-100/90 font-medium text-center sm:text-left">
            <span className="inline-flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-pharmacy-amber-accent animate-pulse" />
              Serving Riverdale & the Bronx Since 1987
            </span>
            <span className="hidden md:inline text-emerald-400/40">•</span>
            <span className="hidden md:inline-flex items-center gap-1 text-emerald-100">
              <MapPin className="w-3.5 h-3.5 text-pharmacy-amber-accent" />
              {business.address.street}, Bronx, NY
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="hidden sm:inline-flex items-center gap-1 text-emerald-100">
              <Clock className="w-3.5 h-3.5 text-pharmacy-amber-accent" />
              Mon–Fri 9:30 AM – 7 PM
            </span>
            <a
              href={`tel:${business.phone}`}
              className="inline-flex items-center gap-1.5 font-semibold text-white hover:text-pharmacy-amber-accent transition-colors min-h-[32px]"
            >
              <Phone className="w-3.5 h-3.5 text-pharmacy-amber-accent" />
              {business.phoneDisplay}
            </a>
          </div>
        </div>
      </div>

      {/* 2. Sticky Navigation Bar */}
      <nav
        className={`bg-pharmacy-surface/95 dark:bg-pharmacy-dark-surface/95 backdrop-blur-md transition-all duration-200 border-b border-pharmacy-border dark:border-pharmacy-dark-border ${
          isScrolled ? 'shadow-warm-md' : 'shadow-warm'
        }`}
        aria-label="Main Navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Brand Logo & Heritage Title */}
            <Link
              href="/"
              className="group flex flex-col focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pharmacy-forest dark:focus-visible:ring-pharmacy-dark-forest rounded-sm"
            >
              <span className="font-serif text-2xl sm:text-[1.65rem] font-bold tracking-tight text-pharmacy-forest dark:text-pharmacy-dark-forest group-hover:text-pharmacy-forest-hover dark:group-hover:text-pharmacy-dark-forest-hover transition-colors">
                Riverdale Pharmacy
              </span>
              <span className="text-[0.68rem] tracking-[0.18em] font-sans uppercase text-pharmacy-amber dark:text-pharmacy-dark-amber font-semibold">
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
                        ? 'text-pharmacy-forest dark:text-pharmacy-dark-forest font-semibold'
                        : 'text-pharmacy-ink-muted dark:text-pharmacy-dark-ink-muted hover:text-pharmacy-forest dark:hover:text-pharmacy-dark-forest'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-pharmacy-forest dark:bg-pharmacy-dark-forest rounded-full" />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Header Right Action CTA & Theme Toggle */}
            <div className="hidden sm:flex items-center gap-3">
              <ThemeToggle />
              <Link
                href="/services#refills"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-button text-sm font-semibold bg-pharmacy-forest dark:bg-pharmacy-dark-forest dark:text-pharmacy-dark-bg text-white hover:bg-pharmacy-forest-hover dark:hover:bg-pharmacy-dark-forest-hover active:scale-[0.98] transition-all shadow-sm focus-visible:ring-2 focus-visible:ring-pharmacy-forest dark:focus-visible:ring-pharmacy-dark-forest focus-visible:ring-offset-2 min-h-[44px]"
              >
                <span>Refill / Transfer Rx</span>
                <ArrowUpRight className="w-4 h-4 text-pharmacy-amber dark:text-pharmacy-dark-bg" />
              </Link>
            </div>

            {/* Mobile Header Right Actions: Toggle + Hamburger */}
            <div className="flex lg:hidden items-center gap-2">
              <ThemeToggle className="sm:hidden" />
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-button text-pharmacy-forest dark:text-pharmacy-dark-forest hover:bg-pharmacy-surface-subtle dark:hover:bg-pharmacy-dark-surface-subtle focus-visible:ring-2 focus-visible:ring-pharmacy-forest dark:focus-visible:ring-pharmacy-dark-forest transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center border border-pharmacy-border/60 dark:border-pharmacy-dark-border"
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
          <div
            ref={drawerRef}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation Menu"
            className="lg:hidden bg-pharmacy-surface dark:bg-pharmacy-dark-surface border-b border-pharmacy-border dark:border-pharmacy-dark-border shadow-warm-lg animate-in slide-in-from-top-2 duration-200"
          >
            <div className="px-4 pt-3 pb-6 space-y-2 max-w-7xl mx-auto">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-3 py-3 rounded-md text-base font-medium transition-colors min-h-[44px] flex items-center ${
                      isActive
                        ? 'bg-pharmacy-surface-subtle dark:bg-pharmacy-dark-surface-subtle text-pharmacy-forest dark:text-pharmacy-dark-forest font-semibold'
                        : 'text-pharmacy-ink dark:text-pharmacy-dark-ink hover:bg-pharmacy-surface-subtle dark:hover:bg-pharmacy-dark-surface-subtle hover:text-pharmacy-forest dark:hover:text-pharmacy-dark-forest'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}

              {/* Theme Toggle row inside Drawer */}
              <div className="pt-3 pb-1 border-t border-pharmacy-border dark:border-pharmacy-dark-border flex items-center justify-between">
                <span className="text-sm font-medium text-pharmacy-ink-muted dark:text-pharmacy-dark-ink-muted px-3">
                  Appearance
                </span>
                <ThemeToggle showLabel={true} />
              </div>

              <div className="pt-3 border-t border-pharmacy-border dark:border-pharmacy-dark-border flex flex-col gap-3">
                <Link
                  href="/services#refills"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-button text-base font-semibold bg-pharmacy-forest dark:bg-pharmacy-dark-forest dark:text-pharmacy-dark-bg text-white hover:bg-pharmacy-forest-hover dark:hover:bg-pharmacy-dark-forest-hover active:scale-[0.98] transition-all min-h-[44px]"
                >
                  <span>Refill / Transfer Prescription</span>
                  <ArrowUpRight className="w-4 h-4 text-pharmacy-amber-accent dark:text-pharmacy-dark-bg" />
                </Link>
                <a
                  href={`tel:${business.phone}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-button text-base font-medium border border-pharmacy-border dark:border-pharmacy-dark-border text-pharmacy-ink dark:text-pharmacy-dark-ink hover:bg-pharmacy-surface-subtle dark:hover:bg-pharmacy-dark-surface-subtle transition-all min-h-[44px]"
                >
                  <Phone className="w-4 h-4 text-pharmacy-amber-accent" />
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
