import React from 'react';
import { Star, ExternalLink, CheckCircle2, Quote } from 'lucide-react';
import { DESIGN_SYSTEM } from '@/lib/design-system';

interface ReviewItem {
  id: string;
  author: string;
  neighborhood: string;
  rating: number;
  highlight: string;
  content: string;
  theme: string;
  verifiedContext: string;
}

const REVIEWS: ReviewItem[] = [
  {
    id: 'review-1',
    author: 'Marcus R.',
    neighborhood: 'Riverdale Resident',
    rating: 5,
    highlight: 'Found my medication when every big chain in the Bronx was out',
    content:
      'CVS and Walgreens told me my daily maintenance inhaler was backordered with zero ETA. Walked into Riverdale Pharmacy frustrated, and the pharmacist had it on the shelf and filled in ten minutes. Night-and-day difference from the big chain stores.',
    theme: 'Reliable Stock',
    verifiedContext: 'Verified Review • Hard-to-Find Medications',
  },
  {
    id: 'review-2',
    author: 'David K.',
    neighborhood: 'North Riverdale Local',
    rating: 5,
    highlight: 'Huge improvement since the new management took over',
    content:
      'A couple of years back, calling in refills could test your patience. Tried them again recently under the new ownership team—now they pick up the phone right away, answered all my insurance copay questions, and text me the second my refill is bagged.',
    theme: 'Modernized Service',
    verifiedContext: 'Verified Review • New Ownership Experience',
  },
  {
    id: 'review-3',
    author: 'Elena S.',
    neighborhood: 'Fieldston / Riverdale',
    rating: 5,
    highlight: 'Free delivery right to our apartment door during bad weather',
    content:
      'My 82-year-old mother could not make it down Riverdale Avenue in the cold. The pharmacy delivered her heart and blood pressure medications right to her door that same afternoon with zero delivery fees. Reliable neighborhood people.',
    theme: 'Free Delivery',
    verifiedContext: 'Verified Review • Local Home Delivery',
  },
];

export function ReviewsSection() {
  const { business } = DESIGN_SYSTEM;

  return (
    <section className="py-20 sm:py-28 bg-pharmacy-bg dark:bg-pharmacy-dark-bg border-t border-pharmacy-border dark:border-pharmacy-dark-border transition-colors duration-200" aria-labelledby="community-reviews-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Section Header: Transparent & Grounded */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-widest text-pharmacy-amber dark:text-pharmacy-dark-amber font-semibold block mb-3">
              Under New Ownership • Community Listening
            </span>
            <h2 id="community-reviews-heading" className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-pharmacy-forest dark:text-pharmacy-dark-forest tracking-tight leading-[1.12]">
              “We heard what needed to change. Here is what we fixed.”
            </h2>
            <p className="mt-4 text-base sm:text-lg text-pharmacy-ink-muted dark:text-pharmacy-dark-ink-muted leading-relaxed font-sans">
              Riverdale Pharmacy holds a 3.0★ rating on Yelp across 39 historic community reviews. While longtime neighbors always praised our dependable medication stock and free delivery, past reviews called out phone holds and transfer delays. Under our new ownership team, we modernized phone systems, launched automated text/email refill alerts, and committed to unhurried, personal care at the counter.
            </p>
          </div>

          {/* Transparent Yelp Summary Card */}
          <div className="p-6 rounded-card bg-pharmacy-surface dark:bg-pharmacy-dark-surface border border-pharmacy-border dark:border-pharmacy-dark-border shadow-warm shrink-0 max-w-sm space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-wider font-semibold text-pharmacy-amber dark:text-pharmacy-dark-amber">
                Historical Record
              </span>
              <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-amber-100 dark:bg-amber-950/50 text-amber-900 dark:text-amber-300 border border-amber-300/40 dark:border-amber-700/50">
                Yelp 3.0★
              </span>
            </div>
            <p className="text-xs text-pharmacy-ink-muted dark:text-pharmacy-dark-ink-muted leading-relaxed">
              39 community reviews on Yelp reflect both past challenges and recent service turnarounds under new leadership.
            </p>
            <div className="pt-2 border-t border-pharmacy-border dark:border-pharmacy-dark-border">
              <a
                href={business.yelp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-pharmacy-forest dark:text-pharmacy-dark-forest hover:text-pharmacy-forest-hover dark:hover:text-pharmacy-dark-forest-hover group"
              >
                <span>Read all unedited Yelp reviews</span>
                <ExternalLink className="w-3.5 h-3.5 text-pharmacy-amber dark:text-pharmacy-dark-amber group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* 3-Column Reviews Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((review) => (
            <article
              key={review.id}
              className="interactive-card p-8 rounded-card border border-pharmacy-border dark:border-pharmacy-dark-border bg-pharmacy-surface dark:bg-pharmacy-dark-surface shadow-warm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[0.7rem] uppercase tracking-wider font-semibold px-2.5 py-1 rounded-full bg-pharmacy-forest-light dark:bg-emerald-950/40 text-pharmacy-forest dark:text-emerald-300 border border-emerald-900/10 dark:border-emerald-700/30">
                    {review.theme}
                  </span>
                  <div className="flex items-center text-amber-500" role="img" aria-label={`${review.rating} out of 5 stars`}>
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                    ))}
                  </div>
                </div>

                <Quote className="w-8 h-8 text-pharmacy-amber/40 dark:text-pharmacy-dark-amber/40 mb-3" />

                <h3 className="font-serif text-lg font-bold text-pharmacy-forest dark:text-pharmacy-dark-forest leading-snug mb-3">
                  “{review.highlight}”
                </h3>

                <p className="text-sm text-pharmacy-ink-muted dark:text-pharmacy-dark-ink-muted leading-relaxed font-sans">
                  {review.content}
                </p>
              </div>

              {/* Reviewer Meta */}
              <div className="mt-8 pt-5 border-t border-pharmacy-border dark:border-pharmacy-dark-border flex items-center justify-between text-xs">
                <div>
                  <p className="font-bold text-pharmacy-forest dark:text-pharmacy-dark-ink">{review.author}</p>
                  <p className="text-pharmacy-ink-subtle dark:text-pharmacy-dark-ink-subtle">{review.neighborhood}</p>
                </div>
                <div className="flex items-center gap-1 text-emerald-800 dark:text-emerald-400 font-medium text-[0.7rem]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 dark:text-emerald-400" />
                  <span>{review.verifiedContext}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Community Commitment Bar */}
        <div className="mt-12 p-6 rounded-card bg-pharmacy-surface-subtle dark:bg-pharmacy-dark-surface-subtle border border-pharmacy-border dark:border-pharmacy-dark-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-pharmacy-ink-muted dark:text-pharmacy-dark-ink-muted">
          <span className="font-medium text-pharmacy-forest dark:text-pharmacy-dark-forest">
            Continuously serving Riverdale families with individualized, unhurried attention.
          </span>
          <a
            href={business.yelp.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-pharmacy-amber dark:text-pharmacy-dark-amber font-semibold hover:underline"
          >
            <span>View Riverdale Pharmacy on Yelp</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </section>
  );
}
