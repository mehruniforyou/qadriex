'use client';

import React, { useState, useMemo, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { COLLECTIBLES } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import { Sparkles, SlidersHorizontal, Check } from 'lucide-react';

function ShopContent() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams?.get('c') || 'all';
  const queryParam = searchParams?.get('q') || '';

  const [selectedCategory, setSelectedCategory] = useState(categoryParam);
  const [searchFilter, setSearchFilter] = useState(queryParam);
  const [sortBy, setSortBy] = useState('featured');

  useEffect(() => {
    if (categoryParam) setSelectedCategory(categoryParam);
  }, [categoryParam]);

  useEffect(() => {
    if (queryParam) setSearchFilter(queryParam);
  }, [queryParam]);

  const counts = useMemo(() => {
    return {
      all: COLLECTIBLES.length,
      cafe: COLLECTIBLES.filter(p => p.category === 'cafe').length,
      deskmate: COLLECTIBLES.filter(p => p.category === 'deskmate').length,
      keychains: COLLECTIBLES.filter(p => p.category === 'keychains').length,
    };
  }, []);

  const filteredProducts = useMemo(() => {
    let list = [...COLLECTIBLES];

    // Filter by category
    if (selectedCategory !== 'all') {
      list = list.filter(p => p.category === selectedCategory);
    }

    // Filter by search query
    if (searchFilter.trim()) {
      const q = searchFilter.toLowerCase();
      list = list.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.tagline.toLowerCase().includes(q) ||
        p.story.toLowerCase().includes(q) ||
        (p.themes && p.themes.some(t => t.toLowerCase().includes(q))) ||
        (p.colorways && p.colorways.some(c => c.toLowerCase().includes(q)))
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
    <div className="py-10 md:py-16 space-y-12">
      {/* Hero Header */}
      <section className="o-container">
        <div className="max-w-3xl">
          <span className="o-chip">Bespoke &amp; Handcrafted Rugs</span>
          <h1 className="o-display text-4xl sm:text-5xl md:text-6xl font-bold mt-4 leading-tight">
            All Rugs
          </h1>
          <p className="text-muted text-base md:text-lg mt-3 leading-relaxed max-w-2xl">
            Bespoke handcrafted and premium commercial rugs. Custom sizes, artisanal tufting, and high-durability weaves tailored for luxury interiors and commercial spaces.
          </p>
        </div>

        {/* Filter Controls Row */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-10 pb-4 border-b border-app" style={{ borderColor: 'var(--border)' }}>
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`o-chip !py-2 !px-4 cursor-pointer transition-colors ${
                selectedCategory === 'all' ? 'bg-primary text-white font-bold' : 'hover:bg-surface-2'
              }`}
            >
              All Rugs ({counts.all})
            </button>
            <button
              onClick={() => setSelectedCategory('cafe')}
              className={`o-chip !py-2 !px-4 cursor-pointer transition-colors ${
                selectedCategory === 'cafe' ? 'bg-primary text-white font-bold' : 'hover:bg-surface-2'
              }`}
            >
              Custom &amp; Tufted ({counts.cafe})
            </button>
            <button
              onClick={() => setSelectedCategory('deskmate')}
              className={`o-chip !py-2 !px-4 cursor-pointer transition-colors ${
                selectedCategory === 'deskmate' ? 'bg-primary text-white font-bold' : 'hover:bg-surface-2'
              }`}
            >
              Luxury &amp; Area ({counts.deskmate})
            </button>
            <button
              onClick={() => setSelectedCategory('keychains')}
              className={`o-chip !py-2 !px-4 cursor-pointer transition-colors ${
                selectedCategory === 'keychains' ? 'bg-primary text-white font-bold' : 'hover:bg-surface-2'
              }`}
            >
              Commercial &amp; B2B ({counts.keychains})
            </button>
          </div>

          {/* Sort dropdown */}
          <div className="flex items-center gap-2 self-start sm:self-auto">
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
            <span>Showing results for &quot;<b>{searchFilter}</b>&quot;</span>
            <button
              onClick={() => setSearchFilter('')}
              className="text-xs text-primary underline cursor-pointer"
            >
              Clear
            </button>
          </div>
        )}
      </section>

      {/* Products Grid */}
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

      {/* Craft Note Callout */}
      <section className="o-container">
        <div className="o-card p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-xs font-bold uppercase tracking-wider">The Qadri Promise</span>
            </div>
            <h3 className="o-display text-xl md:text-2xl font-bold">Artisan Craftsmanship &amp; Longevity.</h3>
            <p className="text-xs md:text-sm text-muted max-w-xl leading-relaxed">
              Every rug is crafted with premium wool blends and durable woven backings, inspected individually, and delivered directly to your doorstep across India.
            </p>
          </div>
          <div className="flex items-center gap-4 shrink-0 text-xs font-semibold">
            <div className="flex items-center gap-1.5"><Check className="w-4 h-4 text-mint" /> Free Pan-India Delivery</div>
            <div className="flex items-center gap-1.5"><Check className="w-4 h-4 text-mint" /> Bespoke Quality Guarantee</div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function ShopPage() {
  return (
    <Suspense fallback={<div className="py-20 text-center"><div className="o-container animate-pulse">Loading shop...</div></div>}>
      <ShopContent />
    </Suspense>
  );
}
