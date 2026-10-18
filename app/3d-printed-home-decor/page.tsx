import React from 'react';
import Link from 'next/link';
import { FRAMES, COLLECTIBLES } from '@/data/products';
import ProductCard from '@/components/ProductCard';

export const metadata = {
  title: '3D Printed Home Decor India — Frames & Desk Pieces · Oruky',
  description: 'Topographic wall frames and architectural desk pieces made in India.',
};

export default function HomeDecorPage() {
  const decorItems = [...FRAMES.slice(0, 4), ...COLLECTIBLES.slice(0, 4)];

  return (
    <div className="py-12 md:py-20 space-y-16">
      <header className="o-container max-w-4xl text-center space-y-4">
        <span className="o-chip">Home &amp; Studio Decor</span>
        <h1 className="o-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.05]">
          3D-printed home decor, made to order in India
        </h1>
        <p className="text-muted text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          Tactile topographic wall relief and architectural desk accessories that start conversations in any space.
        </p>
      </header>

      <section className="o-container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {decorItems.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}
