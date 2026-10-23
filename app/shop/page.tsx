'use client';

import React, { useState, useMemo, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { COLLECTIBLES } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import {
  Sparkles,
  Truck,
  ShieldCheck,
  CheckCircle2,
  ChevronDown,
  ArrowRight,
} from 'lucide-react';

const RUG_FAQS = [
  {
    q: 'Can I order custom sizes or organic shapes for my space?',
    a: 'Yes! Every rug in our catalog can be commissioned to your room’s exact dimensions, runner lengths, or unique organic silhouette. Contact our studio with your floor plan or dimensions to receive a tailored digital proof.',
  },
  {
    q: 'How are QADRI luxury rugs crafted?',
    a: 'Our pieces are artisan hand-tufted by master weavers using imported New Zealand wool blends, hand-sheared for relief depth, and finished with reinforced natural latex and heavy cotton canvas backings.',
  },
  {
    q: 'What is the delivery timeline for bespoke rugs?',
    a: 'Ready-to-dispatch catalog designs ship within 3–5 days. Bespoke commissioned colorways and custom dimensional pieces dispatch within 14–21 business days with free Pan-India freight and express tracking.',
  },
  {
    q: 'Do you offer trade discounts for interior designers and architects?',
    a: 'Yes. We collaborate closely with architecture firms, interior stylists, and hospitality procurement teams, providing exclusive B2B volume pricing, yarn pom-pom match kits, and dedicated project management.',
  },
];

function ShopContent() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams?.get('c') || 'all';
  const queryParam = searchParams?.get('q') || '';

  const [selectedCategory, setSelectedCategory] = useState(categoryParam);
  const [searchFilter, setSearchFilter] = useState(queryParam);
  const [sortBy, setSortBy] = useState('featured');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    if (categoryParam) setSelectedCategory(categoryParam);
  }, [categoryParam]);

  useEffect(() => {
    if (queryParam) setSearchFilter(queryParam);
  }, [queryParam]);

  const counts = useMemo(() => {
    return {
      all: COLLECTIBLES.length,
      cafe: COLLECTIBLES.filter((p) => p.category === 'cafe').length,
      deskmate: COLLECTIBLES.filter((p) => p.category === 'deskmate').length,
      keychains: COLLECTIBLES.filter((p) => p.category === 'keychains').length,
    };
  }, []);

  const filteredProducts = useMemo(() => {
    let list = [...COLLECTIBLES];

    // Filter by category
    if (selectedCategory !== 'all') {
      list = list.filter((p) => p.category === selectedCategory);
    }

    // Filter by search query
    if (searchFilter.trim()) {
      const q = searchFilter.toLowerCase();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.tagline.toLowerCase().includes(q) ||
          p.story.toLowerCase().includes(q) ||
          (p.themes && p.themes.some((t) => t.toLowerCase().includes(q))) ||
          (p.colorways && p.colorways.some((c) => c.toLowerCase().includes(q)))
      );
    }

    // Sort
    if (sortBy === 'name-asc') {
      list.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === 'name-desc') {
      list.sort((a, b) => b.name.localeCompare(a.name));
    } else if (sortBy === 'newest') {
      list.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    }

    return list;
  }, [selectedCategory, searchFilter, sortBy]);

  return (
    <div className="py-10 md:py-16 space-y-16">
      {/* Hero Section */}
      <section className="o-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-center">
          {/* Left Column: Title, Subtitle, Trust Badges & CTAs */}
          <div className="lg:col-span-7">
            <span className="o-chip">Bespoke &amp; Handcrafted Luxury Rugs</span>
            <h1 className="o-display text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 leading-[1.08] tracking-tight">
              All Rugs
            </h1>
            <p className="text-muted text-base md:text-lg mt-3 leading-relaxed max-w-2xl">
              Bespoke handcrafted and premium commercial rugs. Custom sizes, artisanal tufting, and high-durability weaves tailored for luxury interiors and commercial spaces.
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
                <span className="font-semibold text-foreground">100% Pure Wool &amp; Artisanal Tufting</span>
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
                <span className="font-semibold text-foreground">Bespoke Quality &amp; Dimensional Guarantee</span>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 mt-7">
              <a
                href="https://wa.me/919829062390?text=Hi%20QADRI,%20I%20would%20like%20to%20customise%20a%20luxury%20bespoke%20rug."
                target="_blank"
                rel="noopener noreferrer"
                className="o-btn-primary inline-flex items-center gap-2 shadow-sm font-semibold text-sm !px-5 !py-2.5 hover:scale-[1.02] transition-transform"
              >
                Customise Your Rug <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                href="/bulk-orders"
                className="o-chip !py-2.5 !px-4 text-xs font-semibold hover:bg-surface-2 transition-colors inline-flex items-center gap-1.5"
              >
                Commercial &amp; B2B Projects
              </Link>
            </div>
          </div>

          {/* Right Column: Atelier & Bespoke Studio Card */}
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
                    Bespoke Rug Atelier
                  </span>
                  <h3 className="text-base sm:text-lg font-bold mt-0.5">
                    Custom Dimension &amp; Shape Studio
                  </h3>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-medium bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 shrink-0">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Commissions Active</span>
                </div>
              </div>

              {/* Craftsmanship Specs Matrix */}
              <div className="mt-4 grid grid-cols-2 gap-2.5 text-xs">
                <div className="p-3 rounded-xl bg-surface-2/60 border border-app" style={{ borderColor: 'var(--border)' }}>
                  <span className="text-muted block text-[11px]">Material Grade</span>
                  <span className="font-bold text-foreground text-xs sm:text-sm mt-0.5 block">100% NZ Wool &amp; Silk</span>
                </div>
                <div className="p-3 rounded-xl bg-surface-2/60 border border-app" style={{ borderColor: 'var(--border)' }}>
                  <span className="text-muted block text-[11px]">Custom Dimensions</span>
                  <span className="font-bold text-foreground text-xs sm:text-sm mt-0.5 block">Any Size or Shape</span>
                </div>
                <div className="p-3 rounded-xl bg-surface-2/60 border border-app" style={{ borderColor: 'var(--border)' }}>
                  <span className="text-muted block text-[11px]">Dispatch Timeline</span>
                  <span className="font-bold text-foreground text-xs sm:text-sm mt-0.5 block">10–14 Days Tailored Run</span>
                </div>
                <div className="p-3 rounded-xl bg-surface-2/60 border border-app" style={{ borderColor: 'var(--border)' }}>
                  <span className="text-muted block text-[11px]">Pan-India Logistics</span>
                  <span className="font-bold text-foreground text-xs sm:text-sm mt-0.5 block">Free Insured Freight</span>
                </div>
              </div>

              {/* Floor Plan Consultation CTA */}
              <div
                className="mt-5 pt-4 border-t border-app flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                style={{ borderColor: 'var(--border)' }}
              >
                <div className="text-xs text-muted">
                  Have a room layout or floor plan?
                  <span className="block font-semibold text-foreground">Get a complimentary design proof</span>
                </div>
                <a
                  href="https://wa.me/919829062390?text=Hi%20QADRI,%20I%20have%20a%20floor%20plan%20or%20room%20photo%20for%20a%20custom%20rug."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-full text-xs font-bold bg-primary text-white hover:opacity-95 transition-all shadow-sm shrink-0"
                >
                  Send Room Photo <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Filter Pills & Sort Row */}
        <div
          className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-10 pb-4 border-b border-app"
          style={{ borderColor: 'var(--border)' }}
        >
          {/* Category Tabs: smooth horizontal swipe on mobile, wrap on desktop */}
          <div className="flex items-center gap-2 overflow-x-auto scrollbar-none pb-2 sm:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0 flex-nowrap sm:flex-wrap">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`o-chip !py-2 !px-4 cursor-pointer whitespace-nowrap transition-colors shrink-0 ${
                selectedCategory === 'all' ? 'bg-primary text-white font-bold' : 'hover:bg-surface-2'
              }`}
            >
              All Rugs ({counts.all})
            </button>
            <button
              onClick={() => setSelectedCategory('cafe')}
              className={`o-chip !py-2 !px-4 cursor-pointer whitespace-nowrap transition-colors shrink-0 ${
                selectedCategory === 'cafe' ? 'bg-primary text-white font-bold' : 'hover:bg-surface-2'
              }`}
            >
              Custom &amp; Tufted ({counts.cafe})
            </button>
            <button
              onClick={() => setSelectedCategory('deskmate')}
              className={`o-chip !py-2 !px-4 cursor-pointer whitespace-nowrap transition-colors shrink-0 ${
                selectedCategory === 'deskmate' ? 'bg-primary text-white font-bold' : 'hover:bg-surface-2'
              }`}
            >
              Luxury &amp; Area ({counts.deskmate})
            </button>
            <button
              onClick={() => setSelectedCategory('keychains')}
              className={`o-chip !py-2 !px-4 cursor-pointer whitespace-nowrap transition-colors shrink-0 ${
                selectedCategory === 'keychains' ? 'bg-primary text-white font-bold' : 'hover:bg-surface-2'
              }`}
            >
              Commercial &amp; B2B ({counts.keychains})
            </button>
          </div>

          {/* Sort dropdown */}
          <div className="flex items-center gap-2 self-end sm:self-auto shrink-0">
            <span className="text-xs text-muted">Sort:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="o-chip !py-1.5 !px-3 text-xs bg-surface-2 border border-app cursor-pointer"
              style={{ borderColor: 'var(--border)' }}
            >
              <option value="featured">Featured designs</option>
              <option value="name-asc">Name: A to Z</option>
              <option value="name-desc">Name: Z to A</option>
              <option value="newest">Latest additions</option>
            </select>
          </div>
        </div>

        {/* Search Feedback */}
        {searchFilter && (
          <div className="flex items-center gap-2 text-sm text-muted mt-4">
            <span>
              Showing results for &quot;<b>{searchFilter}</b>&quot;
            </span>
            <button
              onClick={() => setSearchFilter('')}
              className="text-xs text-primary underline cursor-pointer"
            >
              Clear
            </button>
          </div>
        )}
      </section>

      {/* Product Grid */}
      <section className="o-container">
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product, idx) => (
              <ProductCard key={product.id} product={product} priority={idx < 4} />
            ))}
          </div>
        ) : (
          <div className="o-card p-12 text-center max-w-md mx-auto space-y-3">
            <p className="text-base font-bold">No rugs found</p>
            <p className="text-xs text-muted">Try clearing your filters or search term to see all available rugs.</p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchFilter('');
              }}
              className="o-btn-primary !text-xs mt-2"
            >
              Reset Filters
            </button>
          </div>
        )}
      </section>

      {/* Trade & Bulk Commissions Banner - matching oruky.com/frames placing */}
      <section className="o-container">
        <a
          href="https://wa.me/919829062390?text=Hi%20QADRI,%20I%20would%20like%20to%20inquire%20about%20a%20bespoke%20rug%20trade%20commission%20or%20hospitality%20project."
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
                Bespoke &amp; Trade Commissions
              </span>
              <h2 className="o-display text-2xl md:text-3xl lg:text-4xl font-bold mt-2">
                Architectural &amp; Hospitality Projects
              </h2>
              <p className="text-sm md:text-base text-muted mt-2 leading-relaxed">
                Custom dimensions, yarn pom-pom color matching, and volume trade savings for interior design firms, luxury hotels, and corporate spaces.
              </p>
            </div>
            <span className="o-btn-primary inline-flex items-center gap-2 shrink-0 group-hover:scale-105 transition-transform">
              Inquire Trade Commission <ArrowRight className="w-4 h-4" />
            </span>
          </div>
        </a>
      </section>

      {/* Craftsmanship & Artisanal Standards - matching oruky.com/frames placing */}
      <section className="o-container">
        <div className="o-card p-8 md:p-12">
          <div className="max-w-2xl">
            <span className="o-chip">Artisanal Standards</span>
            <h2 className="o-display text-2xl md:text-3xl font-bold mt-3">
              Crafted for Enduring Tactile Luxury
            </h2>
            <p className="text-muted text-sm md:text-base mt-2 leading-relaxed">
              Every QADRI rug is individually tufted and hand-sheared by master artisans using premium wool yarns, reinforced woven backings, and precision sculptural carving.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            <div className="p-4 rounded-xl bg-surface-2 space-y-2">
              <CheckCircle2 className="w-5 h-5 text-primary" />
              <h3 className="font-bold text-sm">Pure New Zealand Wool</h3>
              <p className="text-xs text-muted leading-relaxed">
                Hand-spun yarn blends delivering rich lanolin luster, natural soil resistance, and cloud-soft underfoot comfort.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-surface-2 space-y-2">
              <CheckCircle2 className="w-5 h-5 text-primary" />
              <h3 className="font-bold text-sm">Reinforced Woven Canvas</h3>
              <p className="text-xs text-muted leading-relaxed">
                Dual-layer latexed cotton duck backing ensuring dimensional stability and slip resistance on all flooring types.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-surface-2 space-y-2">
              <CheckCircle2 className="w-5 h-5 text-primary" />
              <h3 className="font-bold text-sm">Precision Sculptural Carving</h3>
              <p className="text-xs text-muted leading-relaxed">
                Master artisans hand-shear every contour with variable pile depths for striking three-dimensional relief.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-surface-2 space-y-2">
              <CheckCircle2 className="w-5 h-5 text-primary" />
              <h3 className="font-bold text-sm">High-Traffic Longevity</h3>
              <p className="text-xs text-muted leading-relaxed">
                Commercial-grade fiber density engineered to retain vibrancy and pile memory in executive suites and luxury residences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section - matching oruky.com/frames placing */}
      <section className="o-container max-w-3xl">
        <div className="text-center mb-8">
          <span className="o-chip">Have questions?</span>
          <h2 className="o-display text-2xl md:text-3xl font-bold mt-2">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-3">
          {RUG_FAQS.map((faq, idx) => (
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

export default function ShopPage() {
  return (
    <Suspense fallback={<div className="py-20 text-center"><div className="o-container animate-pulse">Loading rugs...</div></div>}>
      <ShopContent />
    </Suspense>
  );
}
