'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, Truck, Sparkles, CheckCircle2, ChevronDown } from 'lucide-react';
import { FRAMES } from '@/data/products';
import ProductCard from '@/components/ProductCard';

const FAQS = [
  {
    q: 'How are the frames made?',
    a: 'Each piece is precision-printed layer by layer on our Bambu Lab P2S printers using custom high-definition elevation data. The relief model is then hand-finished, inspected for perfection, and mounted in a custom matte aluminum frame behind high-clarity archival acrylic.'
  },
  {
    q: 'What is included in the box?',
    a: 'You receive the assembled 3D frame, an individual metal certificate of authenticity stamped with your piece number, premium pre-installed wall-mounting brackets, and protective microfiber cloth.'
  },
  {
    q: 'How long does shipping take?',
    a: 'Every piece is made to order in our Pune and Gurgaon workshops. Printing and curing takes 2–4 days, followed by 3–5 days express courier delivery via BlueDart or Delhivery across India. Shipping is completely free.'
  },
  {
    q: 'Can I request a custom trek or circuit?',
    a: 'Yes! We create bespoke 1-of-1 frames for personal treks, marathons, or favourite circuits. Head to our Custom Journey page or WhatsApp us directly.'
  }
];

export default function FramesPage() {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const filteredFrames = FRAMES.filter((f) => {
    if (selectedFilter === 'all') return true;
    if (selectedFilter === 'treks') return f.slug.includes('kedar');
    if (selectedFilter === 'circuits') return f.slug.includes('grid') || f.slug.includes('gta');
    if (selectedFilter === 'sports') return !f.slug.includes('kedar') && !f.slug.includes('grid');
    return true;
  });

  return (
    <div className="py-10 md:py-16 space-y-16">
      {/* Hero Section */}
      <section className="o-container">
        <div className="max-w-3xl">
          <span className="o-chip">3D journey frames</span>
          <h1 className="o-display text-4xl sm:text-5xl md:text-6xl font-bold mt-4 leading-tight">
            Journeys carved in relief.
          </h1>
          <p className="text-muted text-base md:text-lg mt-3 leading-relaxed max-w-2xl">
            Treks, racetracks and iconic moments as numbered wall pieces. Designed with real topographic relief data, precision-printed, and framed by hand.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-6 text-xs text-muted">
            <span className="inline-flex items-center gap-1.5 font-medium">
              <Sparkles className="w-4 h-4 text-primary" /> Numbered editions
            </span>
            <span className="inline-flex items-center gap-1.5 font-medium">
              <Truck className="w-4 h-4 text-primary" /> Free shipping across India
            </span>
            <span className="inline-flex items-center gap-1.5 font-medium">
              <ShieldCheck className="w-4 h-4 text-primary" /> Transit damage guarantee
            </span>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mt-10 pb-4 border-b border-app" style={{ borderColor: 'var(--border)' }}>
          <button
            onClick={() => setSelectedFilter('all')}
            className={`o-chip !py-2 !px-4 cursor-pointer transition-colors ${
              selectedFilter === 'all' ? 'bg-primary text-white font-bold' : 'hover:bg-surface-2'
            }`}
          >
            All frames ({FRAMES.length})
          </button>
          <button
            onClick={() => setSelectedFilter('treks')}
            className={`o-chip !py-2 !px-4 cursor-pointer transition-colors ${
              selectedFilter === 'treks' ? 'bg-primary text-white font-bold' : 'hover:bg-surface-2'
            }`}
          >
            Treks &amp; Summits
          </button>
          <button
            onClick={() => setSelectedFilter('circuits')}
            className={`o-chip !py-2 !px-4 cursor-pointer transition-colors ${
              selectedFilter === 'circuits' ? 'bg-primary text-white font-bold' : 'hover:bg-surface-2'
            }`}
          >
            Racetracks &amp; Circuits
          </button>
          <button
            onClick={() => setSelectedFilter('sports')}
            className={`o-chip !py-2 !px-4 cursor-pointer transition-colors ${
              selectedFilter === 'sports' ? 'bg-primary text-white font-bold' : 'hover:bg-surface-2'
            }`}
          >
            Legends &amp; Moments
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

      {/* Bundle Banner */}
      <section className="o-container">
        <Link
          href="/frames/bundles"
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
                Build a set
              </span>
              <h2 className="o-display text-2xl md:text-3xl lg:text-4xl font-bold mt-2">
                One is a piece. Two is a collection.
              </h2>
              <p className="text-sm md:text-base text-muted mt-2 leading-relaxed">
                Any 2 frames — 15% off. Three or more — 25% off. Applied automatically at checkout, no coupon code required.
              </p>
            </div>
            <span className="o-btn-primary inline-flex items-center gap-2 shrink-0 group-hover:scale-105 transition-transform">
              Start your set <ArrowRight className="w-4 h-4" />
            </span>
          </div>
        </Link>
      </section>

      {/* Craftsmanship Section */}
      <section className="o-container">
        <div className="o-card p-8 md:p-12">
          <div className="max-w-2xl">
            <span className="o-chip">Studio craft</span>
            <h2 className="o-display text-2xl md:text-3xl font-bold mt-3">
              Precision 3D Craftsmanship
            </h2>
            <p className="text-muted text-sm md:text-base mt-2 leading-relaxed">
              Every Oruky frame is crafted with obsession. Real high-elevation topography translated into layered physical relief.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            <div className="p-4 rounded-xl bg-surface-2 space-y-2">
              <CheckCircle2 className="w-5 h-5 text-primary" />
              <h3 className="font-bold text-sm">Real Topographic Relief</h3>
              <p className="text-xs text-muted leading-relaxed">
                Carved from geographic elevation matrices for tactile micro-ridges you can feel with your fingertips.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-surface-2 space-y-2">
              <CheckCircle2 className="w-5 h-5 text-primary" />
              <h3 className="font-bold text-sm">Matte Aluminum Frame</h3>
              <p className="text-xs text-muted leading-relaxed">
                Sleek, architectural grade aluminum profile with seamless corners and scratch-resistant matte coat.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-surface-2 space-y-2">
              <CheckCircle2 className="w-5 h-5 text-primary" />
              <h3 className="font-bold text-sm">Certificate Included</h3>
              <p className="text-xs text-muted leading-relaxed">
                Each piece comes with an individually numbered metal certificate of authenticity.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-surface-2 space-y-2">
              <CheckCircle2 className="w-5 h-5 text-primary" />
              <h3 className="font-bold text-sm">Archival Glazing</h3>
              <p className="text-xs text-muted leading-relaxed">
                High-clarity optical grade acrylic protects the 3D relief while minimizing glare.
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
                <div className="px-5 pb-5 text-xs text-muted leading-relaxed border-t border-app pt-3" style={{ borderColor: 'var(--border)' }}>
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
