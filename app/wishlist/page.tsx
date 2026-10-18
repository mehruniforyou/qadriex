'use client';

import React from 'react';
import Link from 'next/link';
import { Heart, ArrowRight } from 'lucide-react';
import { PRODUCTS } from '@/data/products';
import ProductCard from '@/components/ProductCard';

export default function WishlistPage() {
  // Showcase popular collectibles and frames as recommendations
  const featured = PRODUCTS.slice(0, 4);

  return (
    <div className="py-12 md:py-20 space-y-12">
      <header className="o-container max-w-4xl text-center space-y-3">
        <div className="size-16 rounded-full bg-surface-2 flex items-center justify-center mx-auto text-primary">
          <Heart className="w-7 h-7" />
        </div>
        <h1 className="o-display text-3xl sm:text-4xl md:text-5xl font-bold">Your Wishlist</h1>
        <p className="text-sm text-muted max-w-md mx-auto">
          Save your favourite pieces and drops to review later.
        </p>
      </header>

      <section className="o-container max-w-5xl">
        <div className="space-y-6">
          <h2 className="o-display text-xl font-bold">Trending Studio Drops</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featured.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
