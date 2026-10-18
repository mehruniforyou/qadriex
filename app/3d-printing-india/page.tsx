import React from 'react';
import Link from 'next/link';
import { ArrowRight, Cpu, CheckCircle2, ShieldCheck, Truck } from 'lucide-react';

export const metadata = {
  title: '3D Printing in India — Oruky Studio, Pune & Gurgaon · Oruky',
  description: 'Additive manufacturing craft studio based out of Pune and Gurgaon, India.',
};

export default function PrintingIndiaPage() {
  return (
    <div className="py-12 md:py-20 space-y-16">
      <header className="o-container max-w-4xl text-center space-y-4">
        <span className="o-chip">Additive Manufacturing Craft</span>
        <h1 className="o-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.05]">
          3D printing in India, done as a craft
        </h1>
        <p className="text-muted text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          Operating high-speed CoreXY Bambu Lab P2S printers in Pune &amp; Gurgaon with sub-0.12mm precision, automated multi-filament feeding, and human hand-finishing.
        </p>
      </header>

      <section className="o-container max-w-4xl space-y-8">
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="o-card p-6 space-y-3">
            <h3 className="font-bold text-lg">Pune Innovation Workshop</h3>
            <p className="text-xs text-muted leading-relaxed">
              Design studio, CAD prototyping, custom frame engineering, and specialized matte post-finishing.
            </p>
          </div>
          <div className="o-card p-6 space-y-3">
            <h3 className="font-bold text-lg">Gurgaon Production Hub</h3>
            <p className="text-xs text-muted leading-relaxed">
              Continuous multi-color AMS print farm executing limited-edition drop queues and turnkey national shipping.
            </p>
          </div>
        </div>

        <div className="o-card p-8 md:p-10 bg-surface-2 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h3 className="o-display text-2xl font-bold">Have your own 3D design to print?</h3>
            <p className="text-xs text-muted">Upload your STL/OBJ file for free slicing inspection and immediate quotes.</p>
          </div>
          <Link href="/custom-print" className="o-btn-primary gap-2 inline-flex shrink-0">
            Upload Model <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
