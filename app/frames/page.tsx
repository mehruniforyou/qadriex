'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, Truck, Sparkles, CheckCircle2, ChevronDown } from 'lucide-react';
import { FRAMES } from '@/data/products';
import ProductCard from '@/components/ProductCard';

const FAQS = [
  {
    q: 'What is the minimum order quantity (MOQ) for custom branded paper bags?',
    a: 'Ready-to-dispatch plain catalog sizes can be ordered in carton quantities starting at 250–500 units. Custom single-color printed runs start at 1,000 units, and full multi-color flexo/offset branded runs start at 3,000 to 5,000 units with volume tier discounts.',
  },
  {
    q: 'Can I order custom sizes, paper colors, and handle types?',
    a: 'Yes! Under our "Customise Your Bag Completely" program, we manufacture bags to your exact millimeter dimensions. You can choose natural virgin brown kraft, bleached white kraft, or coated art paper (100–350 GSM), and select twisted paper cords, flat tape, herringbone cotton ribbons, or die-cut handles.',
  },
  {
    q: 'How long does delivery take for bulk commercial orders?',
    a: 'Ready catalog units ship within 24–48 hours. Custom printed and bespoke size runs typically dispatch in 7–12 business days with express freight tracking across India and international cargo export.',
  },
  {
    q: 'Are your paper bags food-grade and eco-friendly?',
    a: 'Yes! All QADRI paper bags are manufactured using 100% recyclable, biodegradable, sustainably harvested wood pulp and non-toxic water-based food-safe inks, meeting strict Indian and international environmental standards.',
  },
];

export default function FramesPage() {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const counts = useMemo(() => {
    return {
      all: FRAMES.length,
      twisted: FRAMES.filter((f) => f.category === 'twisted-handle').length,
      flat: FRAMES.filter((f) => f.category === 'flat-handle').length,
      handleless: FRAMES.filter((f) => f.category === 'handleless').length,
      customise: FRAMES.filter((f) => f.category === 'customise-completely').length,
    };
  }, []);

  const filteredFrames = useMemo(() => {
    if (selectedFilter === 'all') return FRAMES;
    return FRAMES.filter((f) => f.category === selectedFilter);
  }, [selectedFilter]);

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
            Brand-customisable utility paper bags for retail, events, and commercial B2B. Premium kraft stocks, durable twisted handles, flat tape handles, and block bottom food bags with precision custom printing.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-6 text-xs text-muted">
            <span className="inline-flex items-center gap-1.5 font-medium">
              <Sparkles className="w-4 h-4 text-primary" /> Custom Brand Logo Printing
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
        <div
          className="flex flex-wrap items-center gap-2 mt-10 pb-4 border-b border-app"
          style={{ borderColor: 'var(--border)' }}
        >
          <button
            onClick={() => setSelectedFilter('all')}
            className={`o-chip !py-2 !px-4 cursor-pointer transition-colors ${
              selectedFilter === 'all' ? 'bg-primary text-white font-bold' : 'hover:bg-surface-2'
            }`}
          >
            All Paper Bags ({counts.all})
          </button>
          <button
            onClick={() => setSelectedFilter('twisted-handle')}
            className={`o-chip !py-2 !px-4 cursor-pointer transition-colors ${
              selectedFilter === 'twisted-handle' ? 'bg-primary text-white font-bold' : 'hover:bg-surface-2'
            }`}
          >
            Twisted Handle Bags ({counts.twisted})
          </button>
          <button
            onClick={() => setSelectedFilter('flat-handle')}
            className={`o-chip !py-2 !px-4 cursor-pointer transition-colors ${
              selectedFilter === 'flat-handle' ? 'bg-primary text-white font-bold' : 'hover:bg-surface-2'
            }`}
          >
            Flat Handle Bags ({counts.flat})
          </button>
          <button
            onClick={() => setSelectedFilter('handleless')}
            className={`o-chip !py-2 !px-4 cursor-pointer transition-colors ${
              selectedFilter === 'handleless' ? 'bg-primary text-white font-bold' : 'hover:bg-surface-2'
            }`}
          >
            Handleless Block Bottom ({counts.handleless})
          </button>
          <button
            onClick={() => setSelectedFilter('customise-completely')}
            className={`o-chip !py-2 !px-4 cursor-pointer transition-colors ${
              selectedFilter === 'customise-completely' ? 'bg-primary text-white font-bold' : 'hover:bg-surface-2'
            }`}
          >
            Customise Your Bag Completely ({counts.customise})
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

      {/* Wholesale & Custom Program Banner */}
      <section className="o-container">
        <a
          href="https://wa.me/919829062390?text=Hi%20QADRI,%20I%20would%20like%20to%20discuss%20a%20bulk%20custom%20paper%20bag%20order."
          target="_blank"
          rel="noopener noreferrer"
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
                Bulk Wholesale &amp; Customization
              </span>
              <h2 className="o-display text-2xl md:text-3xl lg:text-4xl font-bold mt-2">
                Wholesale Volume Savings for Brands &amp; Retailers
              </h2>
              <p className="text-sm md:text-base text-muted mt-2 leading-relaxed">
                Factory-direct volume pricing on custom printed bags. Complete flexibility on dimensions, paper GSM, handle styles, and Pantone branding.
              </p>
            </div>
            <span className="o-btn-primary inline-flex items-center gap-2 shrink-0 group-hover:scale-105 transition-transform">
              Inquire Wholesale Pricing <ArrowRight className="w-4 h-4" />
            </span>
          </div>
        </a>
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
              Every QADRI paper bag is manufactured with tear-resistant virgin kraft paper stocks, reinforced handles, and razor-sharp print quality.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            <div className="p-4 rounded-xl bg-surface-2 space-y-2">
              <CheckCircle2 className="w-5 h-5 text-primary" />
              <h3 className="font-bold text-sm">Heavy-Duty GSM Paper</h3>
              <p className="text-xs text-muted leading-relaxed">
                Engineered from 100–350 GSM virgin &amp; recycled kraft to ensure optimal load capacity without stretching.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-surface-2 space-y-2">
              <CheckCircle2 className="w-5 h-5 text-primary" />
              <h3 className="font-bold text-sm">Reinforced Handles</h3>
              <p className="text-xs text-muted leading-relaxed">
                Twisted paper cords, internal flat tape handles, and luxury cotton ribbons secured with reinforced top folds.
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
                <div
                  className="px-5 pb-5 text-xs text-muted leading-relaxed border-t border-app pt-3"
                  style={{ borderColor: 'var(--border)' }}
                >
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
