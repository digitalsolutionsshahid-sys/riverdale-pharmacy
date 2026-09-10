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
    author: 'M. R.',
    neighborhood: 'Riverdale Resident',
    rating: 5,
    highlight: 'In stock when the big chains were completely out',
    content:
      'I spent two days trying to fill a critical daily medication that every major chain pharmacy in the area had backordered. I called Riverdale Pharmacy, spoke to an actual pharmacist immediately who had it in stock and filled within thirty minutes. Essential neighborhood staple.',
    theme: 'Reliable Stock',
    verifiedContext: 'Maintenance Prescription Fulfillment',
  },
  {
    id: 'review-2',
    author: 'David K.',
    neighborhood: 'Bronx Local',
    rating: 5,
    highlight: 'Caring, knowledgeable staff that never rushes you',
    content:
      'Under the new management and pharmacy team, the level of care is fantastic. They took extra time to review interactions with my other prescriptions and set me up with automated text updates. It is refreshing to deal with pharmacists who treat you like a neighbor.',
    theme: 'Attentive Staff',
    verifiedContext: 'Consultation & Prescription Transfer',
  },
  {
    id: 'review-3',
    author: 'Elena S.',
    neighborhood: 'Fieldston / Riverdale',
    rating: 5,
    highlight: 'Dependable, free local delivery right to our apartment',
    content:
      'Their free delivery service is a blessing when managing prescriptions for elderly family members. The driver was courteous, verified the delivery in person, and everything arrived packaged securely. Cannot recommend them enough.',
    theme: 'Delivery Quality',
    verifiedContext: 'Free Local Home Delivery',
  },
];

export function ReviewsSection() {
  const { business } = DESIGN_SYSTEM;

  return (
    <section className="py-20 sm:py-28 bg-pharmacy-bg border-t border-pharmacy-border" aria-labelledby="community-reviews-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-widest text-pharmacy-amber font-semibold block mb-3">
              Community Voices • Verified Local Feedback
            </span>
            <h2 id="community-reviews-heading" className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-pharmacy-forest tracking-tight leading-[1.12]">
              What Bronx Neighbors Say About Our Care
            </h2>
            <p className="mt-4 text-base sm:text-lg text-pharmacy-ink-muted leading-relaxed">
              Reflecting real patient experiences on stock reliability, attentive pharmacist consultations, and seamless free home delivery.
            </p>
          </div>

          {/* Yelp Summary Badge */}
          <div className="p-5 rounded-card bg-pharmacy-surface border border-pharmacy-border shadow-warm shrink-0 max-w-sm">
            <div className="flex items-center gap-3 mb-2">
              <div className="flex items-center text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                ))}
              </div>
              <span className="text-sm font-bold text-pharmacy-forest">
                Yelp {business.yelp.rating}★
              </span>
            </div>
            <p className="text-xs text-pharmacy-ink-muted">
              Based on {business.yelp.reviewsCount} verified community reviews on Yelp.
            </p>
            <a
              href={business.yelp.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-pharmacy-forest hover:text-pharmacy-forest-hover group"
            >
              <span>Read reviews on Yelp</span>
              <ExternalLink className="w-3.5 h-3.5 text-pharmacy-amber group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        </div>

        {/* 3-Column Reviews Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((review) => (
            <article
              key={review.id}
              className="interactive-card p-8 rounded-card border border-pharmacy-border bg-pharmacy-surface flex flex-col justify-between relative shadow-warm"
            >
              <div>
                {/* Top Theme Badge & Stars */}
                <div className="flex items-center justify-between gap-2 mb-6">
                  <span className="text-[0.7rem] uppercase tracking-wider font-semibold px-2.5 py-1 rounded-full bg-pharmacy-forest-light text-pharmacy-forest border border-emerald-900/10">
                    {review.theme}
                  </span>
                  <div className="flex items-center text-amber-500" aria-label={`${review.rating} out of 5 stars`}>
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                    ))}
                  </div>
                </div>

                <Quote className="w-8 h-8 text-pharmacy-amber/40 mb-3" />

                <h3 className="font-serif text-lg font-bold text-pharmacy-forest leading-snug mb-3">
                  “{review.highlight}”
                </h3>

                <p className="text-sm text-pharmacy-ink-muted leading-relaxed font-sans">
                  {review.content}
                </p>
              </div>

              {/* Reviewer Meta */}
              <div className="mt-8 pt-5 border-t border-pharmacy-border flex items-center justify-between text-xs">
                <div>
                  <p className="font-bold text-pharmacy-forest">{review.author}</p>
                  <p className="text-pharmacy-ink-subtle">{review.neighborhood}</p>
                </div>
                <div className="flex items-center gap-1 text-emerald-800 font-medium text-[0.7rem]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
                  <span>{review.verifiedContext}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Community Commitment Bar */}
        <div className="mt-12 p-6 rounded-card bg-pharmacy-surface-subtle border border-pharmacy-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-pharmacy-ink-muted">
          <span className="font-medium text-pharmacy-forest">
            Continuously serving Riverdale families with individualized, unhurried attention.
          </span>
          <a
            href={business.yelp.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-pharmacy-amber font-semibold hover:underline"
          >
            <span>View Riverdale Pharmacy on Yelp</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </section>
  );
}
