'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, Truck, Sparkles, CheckCircle2, ChevronDown } from 'lucide-react';
import { FRAMES } from '@/data/products';
import ProductCard from '@/components/ProductCard';

const FAQS = [
  {
    q: 'How are custom branded paper bags manufactured?',
    a: 'Each batch is precision cut, folded, and printed using high-speed automated equipment with water-based eco-friendly inks and reinforced adhesives for dependable load-bearing strength.'
  },
  {
    q: 'What handle styles and finishes do you offer?',
    a: 'We offer twisted kraft handles, flat tape handles, premium woven cotton cords, and die-cut handles with matte, gloss, or textured finishes.'
  },
  {
    q: 'How long does delivery take for bulk commercial orders?',
    a: 'Ready catalog units ship within 24–48 hours. Custom printed and bespoke size runs typically dispatch in 5–8 business days with express tracking across India.'
  },
  {
    q: 'Can I get custom dimensions and branded samples?',
    a: 'Yes! We manufacture custom sizes tailored precisely to your retail merchandise, takeaway food containers, or luxury gift boxes. Reach out to our B2B team for sample packs.'
  }
];

export default function FramesPage() {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const filteredFrames = FRAMES.filter((f) => {
    if (selectedFilter === 'all') return true;
    if (selectedFilter === 'treks') return f.slug.includes('kedar');
    if (selectedFilter === 'circuits') return f.slug.includes('grid') || f.slug.includes('gta');
    if (selectedFilter === 'sports') return !f.slug.includes('kedar') && !f.slug.includes('grid');
    return true;
  });

  return (
    <div className="py-10 md:py-16 space-y-16">
      {/* Hero Section */}
      <section className="o-container">
        <div className="max-w-3xl">
          <span className="o-chip">Custom Utility &amp; Retail Packaging</span>
          <h1 className="o-display text-4xl sm:text-5xl md:text-6xl font-bold mt-4 leading-tight">
            All Paper Bags
          </h1>
          <p className="text-muted text-base md:text-lg mt-3 leading-relaxed max-w-2xl">
            Brand-customisable utility paper bags for retail, events, and commercial B2B. Premium kraft stocks, durable twisted handles, and precision custom printing.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-6 text-xs text-muted">
            <span className="inline-flex items-center gap-1.5 font-medium">
              <Sparkles className="w-4 h-4 text-primary" /> Custom Brand Printing
            </span>
            <span className="inline-flex items-center gap-1.5 font-medium">
              <Truck className="w-4 h-4 text-primary" /> Free Pan-India Delivery
            </span>
            <span className="inline-flex items-center gap-1.5 font-medium">
              <ShieldCheck className="w-4 h-4 text-primary" /> High-GSM Durability Guarantee
            </span>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mt-10 pb-4 border-b border-app" style={{ borderColor: 'var(--border)' }}>
          <button
            onClick={() => setSelectedFilter('all')}
            className={`o-chip !py-2 !px-4 cursor-pointer transition-colors ${
              selectedFilter === 'all' ? 'bg-primary text-white font-bold' : 'hover:bg-surface-2'
            }`}
          >
            All Paper Bags ({FRAMES.length})
          </button>
          <button
            onClick={() => setSelectedFilter('treks')}
            className={`o-chip !py-2 !px-4 cursor-pointer transition-colors ${
              selectedFilter === 'treks' ? 'bg-primary text-white font-bold' : 'hover:bg-surface-2'
            }`}
          >
            Kraft &amp; Retail
          </button>
          <button
            onClick={() => setSelectedFilter('circuits')}
            className={`o-chip !py-2 !px-4 cursor-pointer transition-colors ${
              selectedFilter === 'circuits' ? 'bg-primary text-white font-bold' : 'hover:bg-surface-2'
            }`}
          >
            Luxury Matte Bags
          </button>
          <button
            onClick={() => setSelectedFilter('sports')}
            className={`o-chip !py-2 !px-4 cursor-pointer transition-colors ${
              selectedFilter === 'sports' ? 'bg-primary text-white font-bold' : 'hover:bg-surface-2'
            }`}
          >
            B2B Bulk Utility
          </button>
        </div>
      </section>

      {/* Product Grid */}
      <section className="o-container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredFrames.map((frame, idx) => (
            <ProductCard key={frame.id} product={frame} priority={idx < 4} />
          ))}
        </div>
      </section>

      {/* Bundle Banner */}
      <section className="o-container">
        <Link
          href="/frames/bundles"
          className="group block rounded-[24px] p-8 md:p-12 transition-all duration-300 hover:shadow-lift"
          style={{
            background: 'color-mix(in srgb, var(--heat, #1D1D1F) 8%, var(--surface))',
            boxShadow: 'var(--shadow-card, none)',
            border: '1px solid var(--border)',
          }}
        >
          <div className="flex items-center justify-between gap-6 flex-wrap">
            <div className="max-w-xl">
              <span className="text-[11px] uppercase tracking-[0.22em] font-bold text-primary">
                Bulk &amp; Wholesale
              </span>
              <h2 className="o-display text-2xl md:text-3xl lg:text-4xl font-bold mt-2">
                Wholesale Volume Savings for Brands
              </h2>
              <p className="text-sm md:text-base text-muted mt-2 leading-relaxed">
                Tiered volume pricing on commercial bag orders. Automatically applied at checkout for bulk quantities.
              </p>
            </div>
            <span className="o-btn-primary inline-flex items-center gap-2 shrink-0 group-hover:scale-105 transition-transform">
              Explore Wholesale <ArrowRight className="w-4 h-4" />
            </span>
          </div>
        </Link>
      </section>

      {/* Craftsmanship Section */}
      <section className="o-container">
        <div className="o-card p-8 md:p-12">
          <div className="max-w-2xl">
            <span className="o-chip">Manufacturing Standards</span>
            <h2 className="o-display text-2xl md:text-3xl font-bold mt-3">
              Engineered for Strength &amp; Presentation
            </h2>
            <p className="text-muted text-sm md:text-base mt-2 leading-relaxed">
              Every Qadri paper bag is manufactured with tear-resistant kraft and art paper stocks, reinforced handles, and razor-sharp print quality.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            <div className="p-4 rounded-xl bg-surface-2 space-y-2">
              <CheckCircle2 className="w-5 h-5 text-primary" />
              <h3 className="font-bold text-sm">Heavy-Duty GSM Paper</h3>
              <p className="text-xs text-muted leading-relaxed">
                Engineered from 150–350 GSM virgin &amp; recycled kraft to ensure optimal load capacity without stretching.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-surface-2 space-y-2">
              <CheckCircle2 className="w-5 h-5 text-primary" />
              <h3 className="font-bold text-sm">Reinforced Handles</h3>
              <p className="text-xs text-muted leading-relaxed">
                Twisted paper cords and luxury cotton ribbons secured with reinforced top folds for maximum carry strength.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-surface-2 space-y-2">
              <CheckCircle2 className="w-5 h-5 text-primary" />
              <h3 className="font-bold text-sm">Vivid Pantone Fidelity</h3>
              <p className="text-xs text-muted leading-relaxed">
                Precision offset and flexographic printing delivering exact brand identity and crisp typography.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-surface-2 space-y-2">
              <CheckCircle2 className="w-5 h-5 text-primary" />
              <h3 className="font-bold text-sm">100% Recyclable &amp; Eco-Safe</h3>
              <p className="text-xs text-muted leading-relaxed">
                Biodegradable, sustainably sourced materials meeting strict environmental and food-grade packaging standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="o-container max-w-3xl">
        <div className="text-center mb-8">
          <span className="o-chip">Have questions?</span>
          <h2 className="o-display text-2xl md:text-3xl font-bold mt-2">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, idx) => (
            <div key={idx} className="o-card overflow-hidden">
              <button
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full p-5 text-left font-bold text-sm flex items-center justify-between gap-4 cursor-pointer"
              >
                <span>{faq.q}</span>
                <ChevronDown
                  className={`w-4 h-4 shrink-0 transition-transform duration-200 ${
                    openFaq === idx ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openFaq === idx && (
                <div className="px-5 pb-5 text-xs text-muted leading-relaxed border-t border-app pt-3" style={{ borderColor: 'var(--border)' }}>
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
