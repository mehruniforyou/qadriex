import React from 'react';
import Link from 'next/link';
import { PRODUCTS } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import { Gift, Sparkles, ArrowRight } from 'lucide-react';

export const metadata = {
  title: '3D Printed Gifts India — Personalised, Made to Order · Oruky',
  description: 'Numbered, enthusiast 3D-printed gifts made in India for riders, drivers, trekkers, and desk obsessives.',
};

export default function GiftsPage() {
  const giftPicks = PRODUCTS.filter(p => p.slug.includes('lazy') || p.slug.includes('vault') || p.slug.includes('clock') || p.slug.includes('king') || p.slug.includes('shelldon') || p.slug.includes('cookie') || p.slug.includes('drift') || p.slug.includes('kedar'));

  return (
    <div className="py-12 md:py-20 space-y-16">
      <header className="o-container max-w-4xl text-center space-y-4">
        <span className="o-chip">Curated Drops</span>
        <h1 className="o-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.05]">
          3D-printed gifts, made in India
        </h1>
        <p className="text-muted text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          Skip generic gifting. Numbered, personalized, made-to-order enthusiast pieces that look like they belong in a collector&apos;s gallery.
        </p>
      </header>

      <section className="o-container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {giftPicks.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="o-container max-w-4xl">
        <div className="o-card p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 bg-surface-2">
          <div className="space-y-2">
            <h3 className="o-display text-xl md:text-2xl font-bold">Looking for 3D Frames instead?</h3>
            <p className="text-xs md:text-sm text-muted">
              Treks, circuits, and moments carved in real topographic elevation matrices.
            </p>
          </div>
          <Link href="/frames" className="o-btn-primary gap-2 inline-flex shrink-0">
            Browse 3D Frames <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
