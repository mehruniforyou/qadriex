'use client';

import React, { useState } from 'react';
import { FRAMES, Product } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { Check, ShoppingBag, Sparkles, ArrowRight } from 'lucide-react';

export default function FrameBundlesPage() {
  const { addToCart } = useCart();
  const [selectedIds, setSelectedIds] = useState<string[]>([FRAMES[0]?.id, FRAMES[1]?.id].filter(Boolean));

  const toggleSelect = (id: string) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const selectedProducts = FRAMES.filter((f) => selectedIds.includes(f.id));
  const rawTotal = selectedProducts.reduce((sum, p) => sum + p.pricePaise, 0);

  let discountPercent = 0;
  if (selectedIds.length === 2) discountPercent = 15;
  else if (selectedIds.length >= 3) discountPercent = 25;

  const discountAmount = Math.round((rawTotal * discountPercent) / 100);
  const bundleTotal = rawTotal - discountAmount;

  const handleAddBundle = () => {
    selectedProducts.forEach((p) => {
      addToCart(p, 1);
    });
  };

  return (
    <div className="py-10 md:py-16 space-y-12">
      <section className="o-container max-w-4xl">
        <div className="text-center space-y-3">
          <span className="o-chip">Bundle builder</span>
          <h1 className="o-display text-4xl sm:text-5xl md:text-6xl font-bold">
            One is a piece. Two is a collection.
          </h1>
          <p className="text-muted text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            Select 2 frames for <b>15% off</b>, or 3+ frames for <b>25% off</b>. The set discount applies automatically.
          </p>
        </div>

        {/* Live Set Summary Bar */}
        <div
          className="mt-10 o-card p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 sticky top-20 z-20 backdrop-blur-xl"
          style={{ background: 'color-mix(in srgb, var(--surface) 92%, transparent)' }}
        >
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs uppercase tracking-wider font-bold text-muted">Your Selection</span>
              {discountPercent > 0 && (
                <span className="o-badge bg-mint/20 text-mint text-xs">
                  {discountPercent}% Bundle Discount Active
                </span>
              )}
            </div>
            <div className="flex items-baseline gap-3 mt-1">
              <span className="o-display text-3xl font-bold">₹{bundleTotal / 100}</span>
              {discountAmount > 0 && (
                <span className="text-sm text-muted line-through">
                  ₹{rawTotal / 100}
                </span>
              )}
              <span className="text-xs text-muted">
                ({selectedIds.length} {selectedIds.length === 1 ? 'frame' : 'frames'} chosen)
              </span>
            </div>
          </div>

          <button
            onClick={handleAddBundle}
            disabled={selectedIds.length === 0}
            className="o-btn-primary !py-3.5 !px-8 gap-2 w-full md:w-auto justify-center cursor-pointer disabled:opacity-50"
          >
            <ShoppingBag className="w-4 h-4" />
            Add Complete Set to Cart
          </button>
        </div>

        {/* Frames Selection Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {FRAMES.map((frame) => {
            const isSelected = selectedIds.includes(frame.id);
            return (
              <div
                key={frame.id}
                onClick={() => toggleSelect(frame.id)}
                className={`o-card overflow-hidden cursor-pointer transition-all duration-300 relative ${
                  isSelected ? 'ring-2 ring-primary shadow-lift' : 'opacity-90 hover:opacity-100'
                }`}
              >
                <div className="relative aspect-square bg-surface-2">
                  <img
                    src={frame.localImageUrl || frame.imageUrl}
                    alt={frame.name}
                    className="w-full h-full object-cover"
                  />
                  <div
                    className={`absolute top-3 right-3 w-7 h-7 rounded-full flex items-center justify-center transition-all ${
                      isSelected ? 'bg-primary text-white scale-110' : 'bg-surface/80 border border-app text-transparent'
                    }`}
                  >
                    <Check className="w-4 h-4" />
                  </div>
                </div>

                <div className="p-4 flex items-center justify-between">
                  <div className="min-w-0 pr-2">
                    <h3 className="font-bold text-sm truncate">{frame.name}</h3>
                    <p className="text-xs text-muted truncate">{frame.tagline}</p>
                  </div>
                  <span className="font-bold text-sm whitespace-nowrap">
                    ₹{frame.pricePaise / 100}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
