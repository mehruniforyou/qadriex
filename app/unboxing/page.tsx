import React from 'react';
import Link from 'next/link';
import { Package, Shield, Sparkles, Check, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'The unboxing · Oruky',
  description: 'The physical unboxing experience of every Oruky 3D frame and collectible.',
};

export default function UnboxingPage() {
  const steps = [
    {
      num: '01',
      title: 'Matte Black Rigid Box',
      desc: 'Crafted from 1200gsm heavyweight board with magnetic closure and subtle debossed spot-UV Oruky emblem.',
    },
    {
      num: '02',
      title: 'Wax-Sealed Quality Envelope',
      desc: 'Hand-stamped with our Pune workshop seal, containing your studio QA certificate and maker signature.',
    },
    {
      num: '03',
      title: 'Numbered Metal Authenticity Card',
      desc: 'Solid brushed aluminum certificate laser-etched with your exact piece number (e.g. #042/150).',
    },
    {
      num: '04',
      title: 'Laser-Cut Precision Foam',
      desc: 'High-density closed-cell foam contour-cut to the exact millimeter silhouette of your collectible.',
    },
  ];

  return (
    <div className="py-12 md:py-20 space-y-16">
      <header className="o-container max-w-3xl text-center space-y-3">
        <span className="o-chip">Studio Experience</span>
        <h1 className="o-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.05]">
          Open it before it arrives.
        </h1>
        <p className="text-muted text-base md:text-lg max-w-xl mx-auto leading-relaxed">
          We treat packaging as part of the piece. Unboxing an Oruky should feel like taking delivery of an enthusiast timepiece.
        </p>
      </header>

      {/* Steps Grid */}
      <section className="o-container max-w-5xl">
        <div className="grid sm:grid-cols-2 gap-6">
          {steps.map((s) => (
            <div key={s.num} className="o-card p-8 space-y-3 relative overflow-hidden group hover:shadow-lift transition-all">
              <span className="o-display text-4xl font-bold text-muted/30 group-hover:text-primary/20 transition-colors">
                {s.num}
              </span>
              <h3 className="o-display text-xl font-bold">{s.title}</h3>
              <p className="text-xs md:text-sm text-muted leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Assurance banner */}
      <section className="o-container max-w-4xl">
        <div className="o-card p-8 md:p-10 text-center space-y-4 bg-surface-2">
          <Shield className="w-8 h-8 text-primary mx-auto" />
          <h2 className="o-display text-2xl font-bold">Transit Zero-Damage Guarantee</h2>
          <p className="text-xs md:text-sm text-muted max-w-lg mx-auto leading-relaxed">
            Our multi-layer packaging is tested to survive drops up to 1.8 meters. If any piece arrives with even a hairline fracture, send us a photo and we dispatch an instant reprint.
          </p>
          <div className="pt-2">
            <Link href="/frames" className="o-btn-primary gap-2 inline-flex">
              Browse 3D Frames <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
