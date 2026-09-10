'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { DESIGN_SYSTEM } from '@/lib/design-system';

export function ContactForm() {
  const { business } = DESIGN_SYSTEM;
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: 'Prescription Refill / Transfer',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Unable to deliver message right now. Please call us directly.');
      }

      setSubmitted(true);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Connection error. Please call our team at (718) 543-7500.';
      setErrorMessage(msg);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div
        className="p-8 rounded-card border border-emerald-800/20 bg-emerald-50/60 text-pharmacy-forest space-y-4 animate-in fade-in duration-300"
        role="status"
        aria-live="polite"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-button bg-emerald-800 text-white flex items-center justify-center shrink-0">
            <CheckCircle2 className="w-6 h-6 text-pharmacy-amber" />
          </div>
          <h3 className="font-serif text-2xl font-bold text-pharmacy-forest">
            Message Received
          </h3>
        </div>
        <p className="text-sm text-pharmacy-ink-muted leading-relaxed">
          Thank you, <span className="font-semibold text-pharmacy-forest">{formData.fullName}</span>. Your message has been sent to our pharmacy team at 5669 Riverdale Ave. A staff member will follow up with you promptly.
        </p>
        <p className="text-xs text-pharmacy-ink-subtle">
          For urgent prescription matters or immediate same-day delivery requests, please call us directly at{' '}
          <a href={`tel:${business.phone}`} className="font-bold text-pharmacy-forest underline">
            {business.phoneDisplay}
          </a>.
        </p>
        <button
          type="button"
          onClick={() => {
            setSubmitted(false);
            setFormData({
              fullName: '',
              email: '',
              phone: '',
              subject: 'Prescription Refill / Transfer',
              message: '',
            });
          }}
          className="mt-2 text-xs font-semibold uppercase tracking-wider text-pharmacy-forest hover:text-pharmacy-forest-hover underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      {/* Urgent Notice Banner */}
      <div className="p-4 rounded-button bg-amber-50/80 border border-amber-300/80 text-amber-950 text-xs leading-relaxed flex items-start gap-2.5">
        <AlertCircle className="w-4 h-4 text-amber-800 shrink-0 mt-0.5" />
        <div>
          <span className="font-semibold block mb-0.5 text-amber-900">General Inquiries Only</span>
          <span>
            For urgent prescription matters, please call us directly at{' '}
            <a href={`tel:${business.phone}`} className="font-bold underline text-pharmacy-forest hover:text-black">
              {business.phoneDisplay}
            </a>{' '}
            — the form is for general inquiries only.
          </span>
        </div>
      </div>

      {/* Error Message */}
      {errorMessage && (
        <div
          role="alert"
          className="p-4 rounded-button bg-red-50 border border-red-200 text-red-900 text-xs leading-relaxed flex items-start gap-2"
        >
          <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* Full Name */}
      <div>
        <label htmlFor="contact-name" className="block text-sm font-semibold text-pharmacy-forest mb-1.5">
          Full Name <span className="text-red-700" aria-hidden="true">*</span>
        </label>
        <input
          id="contact-name"
          name="fullName"
          type="text"
          required
          aria-required="true"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="e.g. Eleanor Vance"
          className="w-full px-4 py-3 rounded-button border border-pharmacy-border bg-white text-pharmacy-ink placeholder:text-pharmacy-ink-subtle/70 focus-visible:ring-2 focus-visible:ring-pharmacy-forest focus-visible:outline-none transition-shadow text-sm min-h-[44px]"
        />
      </div>

      {/* Email & Phone Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="contact-email" className="block text-sm font-semibold text-pharmacy-forest mb-1.5">
            Email Address <span className="text-red-700" aria-hidden="true">*</span>
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            aria-required="true"
            value={formData.email}
            onChange={handleChange}
            placeholder="you@example.com"
            className="w-full px-4 py-3 rounded-button border border-pharmacy-border bg-white text-pharmacy-ink placeholder:text-pharmacy-ink-subtle/70 focus-visible:ring-2 focus-visible:ring-pharmacy-forest focus-visible:outline-none transition-shadow text-sm min-h-[44px]"
          />
        </div>

        <div>
          <label htmlFor="contact-phone" className="block text-sm font-semibold text-pharmacy-forest mb-1.5">
            Phone Number <span className="text-xs font-normal text-pharmacy-ink-muted">(Optional)</span>
          </label>
          <input
            id="contact-phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="(718) 555-0123"
            className="w-full px-4 py-3 rounded-button border border-pharmacy-border bg-white text-pharmacy-ink placeholder:text-pharmacy-ink-subtle/70 focus-visible:ring-2 focus-visible:ring-pharmacy-forest focus-visible:outline-none transition-shadow text-sm min-h-[44px]"
          />
        </div>
      </div>

      {/* Inquiry Subject */}
      <div>
        <label htmlFor="contact-subject" className="block text-sm font-semibold text-pharmacy-forest mb-1.5">
          Subject / Inquiry Type
        </label>
        <select
          id="contact-subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-button border border-pharmacy-border bg-white text-pharmacy-ink focus-visible:ring-2 focus-visible:ring-pharmacy-forest focus-visible:outline-none transition-shadow text-sm min-h-[44px]"
        >
          <option value="Prescription Refill / Transfer">Prescription Refill / Transfer</option>
          <option value="Free Neighborhood Delivery Question">Free Neighborhood Delivery Question</option>
          <option value="Insurance Coverage & Copays">Insurance Coverage & Copays</option>
          <option value="Adult Vaccines (Flu, Shingles, COVID)">Adult Vaccines (Flu, Shingles, COVID)</option>
          <option value="DMV Eye Test / Passport Photo / Notary">DMV Eye Test / Passport Photo / Notary</option>
          <option value="General Pharmacy Inquiry">General Pharmacy Inquiry</option>
        </select>
      </div>

      {/* Message Textarea */}
      <div>
        <label htmlFor="contact-message" className="block text-sm font-semibold text-pharmacy-forest mb-1.5">
          How can our pharmacists assist you? <span className="text-red-700" aria-hidden="true">*</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          aria-required="true"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          placeholder="Please share your question, medication details, or request..."
          className="w-full px-4 py-3 rounded-button border border-pharmacy-border bg-white text-pharmacy-ink placeholder:text-pharmacy-ink-subtle/70 focus-visible:ring-2 focus-visible:ring-pharmacy-forest focus-visible:outline-none transition-shadow text-sm"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting || !formData.fullName || !formData.email || !formData.message}
        className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-button text-base font-semibold bg-pharmacy-forest text-white hover:bg-pharmacy-forest-hover active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-sm focus-visible:ring-2 focus-visible:ring-pharmacy-forest min-h-[48px]"
      >
        <Send className="w-4 h-4 text-pharmacy-amber" />
        <span>{isSubmitting ? 'Sending Message...' : 'Send Message to Pharmacy'}</span>
      </button>

      <p className="text-xs text-pharmacy-ink-subtle text-center">
        Your information is kept strictly confidential. For immediate medication assistance, please call{' '}
        <a href={`tel:${business.phone}`} className="text-pharmacy-forest font-semibold underline">
          {business.phoneDisplay}
        </a>.
      </p>
    </form>
  );
}
