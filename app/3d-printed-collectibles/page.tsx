import React from 'react';
import Link from 'next/link';
import { COLLECTIBLES } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import { ArrowRight } from 'lucide-react';

export const metadata = {
  title: '3D Printed Collectibles India — Numbered Editions · Oruky',
  description: 'Limited edition 3D-printed collectibles designed and slow-printed in India.',
};

export default function CollectiblesLandingPage() {
  return (
    <div className="py-12 md:py-20 space-y-16">
      <header className="o-container max-w-4xl text-center space-y-4">
        <span className="o-chip">Numbered Provenance</span>
        <h1 className="o-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.05]">
          3D-printed collectibles with real provenance
        </h1>
        <p className="text-muted text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          Numbered pieces with certificates of authenticity. Made for riders, drivers and desk obsessives.
        </p>
      </header>

      <section className="o-container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {COLLECTIBLES.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}
