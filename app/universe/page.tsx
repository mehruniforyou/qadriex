import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { COLLECTIBLES } from '@/data/products';
import ProductCard from '@/components/ProductCard';

export const metadata = {
  title: 'The tribes · who Oruky makes for · Oruky',
  description: 'The enthusiast circles and tribes Oruky designs for — riders, drivers, desk obsessives.',
};

export default function UniversePage() {
  const cafeProducts = COLLECTIBLES.filter(p => p.category === 'cafe' || p.slug.includes('drift') || p.slug.includes('pitstop')).slice(0, 3);
  const deskProducts = COLLECTIBLES.filter(p => p.category === 'deskmate' || p.slug.includes('vault') || p.slug.includes('clock') || p.slug.includes('organizer')).slice(0, 3);
  const miniProducts = COLLECTIBLES.filter(p => p.category === 'keychains' || p.slug.includes('lazy') || p.slug.includes('zip') || p.slug.includes('shelldon')).slice(0, 3);

  return (
    <div className="py-12 md:py-20 space-y-20">
      {/* Header */}
      <section className="o-container text-center max-w-2xl mx-auto space-y-4">
        <span className="o-chip">The Oruky Universe</span>
        <h1 className="o-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.05]">
          The tribes we make for.
        </h1>
        <p className="text-muted text-base md:text-lg leading-relaxed">
          Mass-market collectibles are made for algorithms. We make numbered pieces for the real enthusiast circles we ride, drive, and work in every single day.
        </p>
      </section>

      {/* Tribe 1: The Café */}
      <section id="cafe" className="o-container">
        <div className="grid lg:grid-cols-[360px_1fr] gap-10 lg:gap-16 items-start">
          <div className="space-y-4 lg:sticky lg:top-28">
            <span className="o-chip bg-primary text-white">Tribe · 01</span>
            <h2 className="o-display text-3xl md:text-4xl font-bold">The Café</h2>
            <p className="o-hand text-xl text-primary">— for the riders &amp; racers</p>
            <p className="text-sm text-muted leading-relaxed">
              Café-racer silhouettes, vintage motorcycle engines, helmet stands, and ride-club pieces. Made for riders who recognize the era a cylinder angle came from and want tangible pieces of road history on their shelf.
            </p>
            <Link href="/shop?c=cafe" className="o-btn-ghost !text-xs gap-2 inline-flex">
              Shop The Café collection <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {cafeProducts.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Tribe 2: The Deskmates */}
      <section id="deskmate" className="o-container">
        <div className="grid lg:grid-cols-[360px_1fr] gap-10 lg:gap-16 items-start border-t border-app pt-16" style={{ borderColor: 'var(--border)' }}>
          <div className="space-y-4 lg:sticky lg:top-28">
            <span className="o-chip bg-primary text-white">Tribe · 02</span>
            <h2 className="o-display text-3xl md:text-4xl font-bold">The Deskmates</h2>
            <p className="o-hand text-xl text-primary">— work companions with character</p>
            <p className="text-sm text-muted leading-relaxed">
              Engineered desk organizers, perpetual calendars, suspension-spring pen stands, and mechanical desk clocks. Crafted to make long focus sessions feel tactile and inspiring.
            </p>
            <Link href="/shop?c=deskmate" className="o-btn-ghost !text-xs gap-2 inline-flex">
              Shop Deskmates <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {deskProducts.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Tribe 3: Mini Vibes */}
      <section id="keychains" className="o-container">
        <div className="grid lg:grid-cols-[360px_1fr] gap-10 lg:gap-16 items-start border-t border-app pt-16" style={{ borderColor: 'var(--border)' }}>
          <div className="space-y-4 lg:sticky lg:top-28">
            <span className="o-chip bg-primary text-white">Tribe · 03</span>
            <h2 className="o-display text-3xl md:text-4xl font-bold">Mini Vibes</h2>
            <p className="o-hand text-xl text-primary">— everyday pocket collectibles</p>
            <p className="text-sm text-muted leading-relaxed">
              Pocket-sized drops, playful cable winders, AirPods sofa lounges, and tactile key companions designed to bring personality everywhere you go.
            </p>
            <Link href="/shop?c=keychains" className="o-btn-ghost !text-xs gap-2 inline-flex">
              Shop Mini Vibes <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {miniProducts.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
