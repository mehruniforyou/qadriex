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

export default function PaperBagsPage() {
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-center">
          {/* Left Column: Title, Subtitle, Trust Badges & CTAs */}
          <div className="lg:col-span-7">
            <span className="o-chip">Custom Utility &amp; Retail Packaging</span>
            <h1 className="o-display text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 leading-[1.08] tracking-tight">
              All Paper Bags
            </h1>
            <p className="text-muted text-base md:text-lg mt-3 leading-relaxed max-w-2xl">
              Brand-customisable utility paper bags for retail, events, and commercial B2B. Premium kraft stocks, durable twisted handles, flat tape handles, and block bottom food bags with precision custom printing.
            </p>

            {/* Trust Badges Matrix */}
            <div
              className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mt-6 pt-6 border-t border-app"
              style={{ borderColor: 'var(--border)' }}
            >
              <div className="flex items-center gap-2.5 text-xs text-muted">
                <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 bg-primary/10 text-primary">
                  <Sparkles className="w-4 h-4" />
                </div>
                <span className="font-semibold text-foreground">Custom Brand Logo Printing</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-muted">
                <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 bg-primary/10 text-primary">
                  <Truck className="w-4 h-4" />
                </div>
                <span className="font-semibold text-foreground">Free Pan-India Delivery</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-muted">
                <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 bg-primary/10 text-primary">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <span className="font-semibold text-foreground">High-GSM Durability Guarantee</span>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 mt-7">
              <a
                href="https://wa.me/919829062390?text=Hi%20QADRI,%20I%20would%20like%20to%20customise%20paper%20bags%20for%20my%20brand."
                target="_blank"
                rel="noopener noreferrer"
                className="o-btn-primary inline-flex items-center gap-2 shadow-sm font-semibold text-sm !px-5 !py-2.5 hover:scale-[1.02] transition-transform"
              >
                Customise Your Bag <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                href="/bulk-orders"
                className="o-chip !py-2.5 !px-4 text-xs font-semibold hover:bg-surface-2 transition-colors inline-flex items-center gap-1.5"
              >
                Wholesale &amp; Bulk Program
              </Link>
            </div>
          </div>

          {/* Right Column: Factory-Direct Packaging Specs Card */}
          <div className="lg:col-span-5">
            <div
              className="relative rounded-2xl md:rounded-3xl p-6 sm:p-7 overflow-hidden border border-app shadow-card transition-all"
              style={{
                background: 'color-mix(in srgb, var(--surface) 90%, var(--surface-2))',
                borderColor: 'var(--border)',
              }}
            >
              {/* Card Header with Status */}
              <div
                className="flex items-center justify-between gap-4 pb-4 border-b border-app"
                style={{ borderColor: 'var(--border)' }}
              >
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-primary">
                    Factory-Direct Packaging
                  </span>
                  <h3 className="text-base sm:text-lg font-bold mt-0.5">
                    Wholesale Specifications &amp; Branding
                  </h3>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-medium bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 shrink-0">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Production Active</span>
                </div>
              </div>

              {/* Packaging Specs Matrix */}
              <div className="mt-4 grid grid-cols-2 gap-2.5 text-xs">
                <div className="p-3 rounded-xl bg-surface-2/60 border border-app" style={{ borderColor: 'var(--border)' }}>
                  <span className="text-muted block text-[11px]">Handle Variations</span>
                  <span className="font-bold text-foreground text-xs sm:text-sm mt-0.5 block">Twisted, Flat Tape &amp; SOS</span>
                </div>
                <div className="p-3 rounded-xl bg-surface-2/60 border border-app" style={{ borderColor: 'var(--border)' }}>
                  <span className="text-muted block text-[11px]">Paper Stocks</span>
                  <span className="font-bold text-foreground text-xs sm:text-sm mt-0.5 block">100–350 GSM Kraft &amp; White</span>
                </div>
                <div className="p-3 rounded-xl bg-surface-2/60 border border-app" style={{ borderColor: 'var(--border)' }}>
                  <span className="text-muted block text-[11px]">Precision Printing</span>
                  <span className="font-bold text-foreground text-xs sm:text-sm mt-0.5 block">1–6 Color Flexo &amp; Pantone</span>
                </div>
                <div className="p-3 rounded-xl bg-surface-2/60 border border-app" style={{ borderColor: 'var(--border)' }}>
                  <span className="text-muted block text-[11px]">Minimum Order (MOQ)</span>
                  <span className="font-bold text-foreground text-xs sm:text-sm mt-0.5 block">From 500 pcs (Tier Savings)</span>
                </div>
              </div>

              {/* Wholesale Quote CTA */}
              <div
                className="mt-5 pt-4 border-t border-app flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                style={{ borderColor: 'var(--border)' }}
              >
                <div className="text-xs text-muted">
                  Need custom dimensions or bulk tiers?
                  <span className="block font-semibold text-foreground">Direct factory estimate via WhatsApp</span>
                </div>
                <a
                  href="https://wa.me/919829062390?text=Hi%20QADRI,%20please%20send%20me%20a%20wholesale%20quote%20for%20paper%20bags."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-full text-xs font-bold bg-primary text-white hover:opacity-95 transition-all shadow-sm shrink-0"
                >
                  Get Instant Quote <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Filter Pills: smooth horizontal swipe on mobile, wrap on desktop */}
        <div
          className="flex items-center gap-2 mt-10 pb-4 border-b border-app overflow-x-auto scrollbar-none pb-2 sm:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0 flex-nowrap sm:flex-wrap"
          style={{ borderColor: 'var(--border)' }}
        >
          <button
            onClick={() => setSelectedFilter('all')}
            className={`o-chip !py-2 !px-4 cursor-pointer whitespace-nowrap transition-colors shrink-0 ${
              selectedFilter === 'all' ? 'bg-primary text-white font-bold' : 'hover:bg-surface-2'
            }`}
          >
            All Paper Bags ({counts.all})
          </button>
          <button
            onClick={() => setSelectedFilter('twisted-handle')}
            className={`o-chip !py-2 !px-4 cursor-pointer whitespace-nowrap transition-colors shrink-0 ${
              selectedFilter === 'twisted-handle' ? 'bg-primary text-white font-bold' : 'hover:bg-surface-2'
            }`}
          >
            Twisted Handle Bags ({counts.twisted})
          </button>
          <button
            onClick={() => setSelectedFilter('flat-handle')}
            className={`o-chip !py-2 !px-4 cursor-pointer whitespace-nowrap transition-colors shrink-0 ${
              selectedFilter === 'flat-handle' ? 'bg-primary text-white font-bold' : 'hover:bg-surface-2'
            }`}
          >
            Flat Handle Bags ({counts.flat})
          </button>
          <button
            onClick={() => setSelectedFilter('handleless')}
            className={`o-chip !py-2 !px-4 cursor-pointer whitespace-nowrap transition-colors shrink-0 ${
              selectedFilter === 'handleless' ? 'bg-primary text-white font-bold' : 'hover:bg-surface-2'
            }`}
          >
            Handleless Block Bottom ({counts.handleless})
          </button>
          <button
            onClick={() => setSelectedFilter('customise-completely')}
            className={`o-chip !py-2 !px-4 cursor-pointer whitespace-nowrap transition-colors shrink-0 ${
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
