'use client';

import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';

interface ThemeToggleProps {
  className?: string;
  showLabel?: boolean;
}

export function ThemeToggle({ className = '', showLabel = false }: ThemeToggleProps) {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent hydration mismatch by rendering a stable placeholder until mounted
  if (!mounted) {
    return (
      <button
        type="button"
        disabled
        aria-label="Toggle color theme"
        className={`inline-flex items-center justify-center gap-2 p-2.5 rounded-button min-h-[44px] min-w-[44px] border border-pharmacy-border dark:border-pharmacy-dark-border bg-pharmacy-surface dark:bg-pharmacy-dark-surface text-pharmacy-ink-muted opacity-60 ${className}`}
      >
        <span className="w-5 h-5 block" aria-hidden="true" />
        {showLabel && <span className="text-sm font-medium">Theme</span>}
      </button>
    );
  }

  const isDark = resolvedTheme === 'dark';
  const toggleLabel = isDark ? 'Switch to light mode' : 'Switch to dark mode';

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      aria-label={toggleLabel}
      title={toggleLabel}
      className={`group inline-flex items-center justify-center gap-2.5 px-3 py-2 sm:p-2.5 rounded-button min-h-[44px] min-w-[44px] border border-pharmacy-border dark:border-pharmacy-dark-border bg-pharmacy-surface dark:bg-pharmacy-dark-surface hover:bg-pharmacy-surface-subtle dark:hover:bg-pharmacy-dark-surface-subtle text-pharmacy-forest dark:text-pharmacy-dark-amber shadow-warm hover:shadow-warm-md transition-all duration-200 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pharmacy-forest dark:focus-visible:ring-pharmacy-dark-forest ${className}`}
    >
      <div className="relative w-5 h-5 flex items-center justify-center">
        {isDark ? (
          <Sun className="w-5 h-5 text-pharmacy-dark-amber transform transition-transform duration-300 group-hover:rotate-45" />
        ) : (
          <Moon className="w-5 h-5 text-pharmacy-forest transform transition-transform duration-300 group-hover:-rotate-12" />
        )}
      </div>

      {showLabel && (
        <span className="text-sm font-medium text-pharmacy-ink dark:text-pharmacy-dark-ink">
          {isDark ? 'Light Mode' : 'Dark Mode'}
        </span>
      )}
    </button>
  );
}
