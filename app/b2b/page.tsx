'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ShieldCheck,
  Layers,
  Package,
  Send,
  Sparkles,
  Building2,
  Globe2,
  CheckCircle2,
  Truck,
  ArrowRight,
} from 'lucide-react';

function WhatsAppIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        maxWidth: `${size}px`,
        maxHeight: `${size}px`,
        minWidth: `${size}px`,
        minHeight: `${size}px`,
        display: 'inline-block',
        verticalAlign: 'middle',
        flexShrink: 0,
      }}
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.711 1.457h.004c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.414z" />
    </svg>
  );
}

export default function B2BPage() {
  const [formData, setFormData] = useState({
    company: '',
    contactName: '',
    email: '',
    phone: '',
    division: 'paper-bags',
    quantity: '1000-5000',
    details: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.company && (formData.email || formData.phone)) {
      setSubmitted(true);
    }
  };

  return (
    <div className="py-12 md:py-20 space-y-16">
      {/* Hero */}
      <section className="o-container max-w-4xl text-center space-y-4">
        <span className="o-chip">B2B Manufacturing &amp; Global Supply</span>
        <h1 className="o-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.05]">
          Factory-Direct Manufacturing for Brands, Retailers &amp; Global Trade.
        </h1>
        <p className="text-muted text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          We partner with retail chains, luxury brands, corporate clients, and international importers to manufacture custom-branded utility paper bags and bespoke handcrafted rugs with factory-direct economics and global export compliance.
        </p>
      </section>

      {/* 4 Pillars */}
      <section className="o-container">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="o-card p-6 space-y-3">
            <span className="size-10 rounded-xl bg-surface-2 grid place-items-center text-primary">
              <Layers className="w-5 h-5" />
            </span>
            <h3 className="font-bold text-base">Custom Dielines &amp; Sizing</h3>
            <p className="text-xs text-muted leading-relaxed">
              Every millimeter tailored to your merchandise. From mini jewelry pouches to heavy catering totes and oversized area rugs.
            </p>
          </div>

          <div className="o-card p-6 space-y-3">
            <span className="size-10 rounded-xl bg-surface-2 grid place-items-center text-primary">
              <Sparkles className="w-5 h-5" />
            </span>
            <h3 className="font-bold text-base">Vivid Pantone Fidelity</h3>
            <p className="text-xs text-muted leading-relaxed">
              High-speed flexo and precision offset printing for paper bags, combined with exact yarn dyeing for hand-tufted carpets.
            </p>
          </div>

          <div className="o-card p-6 space-y-3">
            <span className="size-10 rounded-xl bg-surface-2 grid place-items-center text-primary">
              <Package className="w-5 h-5" />
            </span>
            <h3 className="font-bold text-base">Export-Grade Packing</h3>
            <p className="text-xs text-muted leading-relaxed">
              Weatherproof master cartons with moisture absorbers for bags, and heavy woven protective casing for export rugs.
            </p>
          </div>

          <div className="o-card p-6 space-y-3">
            <span className="size-10 rounded-xl bg-surface-2 grid place-items-center text-primary">
              <Globe2 className="w-5 h-5" />
            </span>
            <h3 className="font-bold text-base">End-to-End Freight</h3>
            <p className="text-xs text-muted leading-relaxed">
              Pan-India logistics and international container shipping (FOB, CIF, DDP) across North America, Europe, UAE, and APAC.
            </p>
          </div>
        </div>
      </section>

      {/* Direct Contact & WhatsApp */}
      <section className="o-container max-w-4xl">
        <div className="o-card p-8 md:p-12 space-y-8">
          <div className="text-center space-y-2 max-w-xl mx-auto">
            <Building2 className="w-8 h-8 text-primary mx-auto" />
            <h2 className="o-display text-2xl md:text-3xl font-bold">Request a B2B Partnership Proposal</h2>
            <p className="text-xs md:text-sm text-muted">
              Connect directly with our commercial desk. We provide formal quotations, digital proofs, and material swatches within 4 business hours.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/919829062390?text=Hello%20QADRI%20Team,%20I%20would%20like%20to%20discuss%20a%20B2B%20commercial%20order."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-full font-bold text-sm bg-[#25D366] text-black hover:bg-[#20ba5a] transition-all shadow-md cursor-pointer"
            >
              <WhatsAppIcon size={18} /> Chat with Commercial Team (+91 9829062390)
            </a>

            <Link
              href="/bulk-orders"
              className="w-full sm:w-auto o-btn-ghost py-3.5 px-6 font-bold text-sm justify-center gap-2"
            >
              View Bulk Tiers &amp; Export Specs <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {submitted ? (
            <div className="p-8 rounded-2xl bg-surface-2 text-center space-y-3">
              <CheckCircle2 className="w-10 h-10 text-primary mx-auto" />
              <h3 className="font-bold text-xl">Inquiry Submitted</h3>
              <p className="text-xs text-muted max-w-md mx-auto">
                Thank you, {formData.contactName}. We have received your proposal request for {formData.company}. Our B2B commercial lead will connect with you via email or WhatsApp within 4 business hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-4 pt-4 border-t border-app" style={{ borderColor: 'var(--border)' }}>
              <div>
                <label className="block text-xs font-semibold mb-1 text-muted">Company / Brand Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Zara Retail / Taj Hotels / Luxe Studio"
                  className="o-input !rounded-xl"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-xs font-semibold mb-1 text-muted">Contact Person *</label>
                <input
                  type="text"
                  required
                  placeholder="Your Full Name"
                  className="o-input !rounded-xl"
                  value={formData.contactName}
                  onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-xs font-semibold mb-1 text-muted">Work Email *</label>
                <input
                  type="email"
                  required
                  placeholder="purchasing@company.com"
                  className="o-input !rounded-xl"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-xs font-semibold mb-1 text-muted">WhatsApp / Phone *</label>
                <input
                  type="tel"
                  required
                  placeholder="+91 / +1 ..."
                  className="o-input !rounded-xl"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-xs font-semibold mb-1 text-muted">Product Division</label>
                <select
                  className="o-input !rounded-xl"
                  value={formData.division}
                  onChange={(e) => setFormData({ ...formData, division: e.target.value })}
                >
                  <option value="paper-bags">Custom Utility Paper Bags (Retail / F&amp;B / Events)</option>
                  <option value="rugs">Handcrafted Artisan Rugs (Hotel / Decor / Interior)</option>
                  <option value="both">Both Paper Bags &amp; Rugs (Consolidated Export)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold mb-1 text-muted">Estimated Volume</label>
                <select
                  className="o-input !rounded-xl"
                  value={formData.quantity}
                  onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                >
                  <option value="1000-5000">1,000 – 5,000 units</option>
                  <option value="5000-25000">5,000 – 25,000 units</option>
                  <option value="25000+">25,000+ units (Container Load)</option>
                  <option value="rugs-contract">Custom Rug Contract (5–50+ pieces)</option>
                </select>
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-semibold mb-1 text-muted">Project Brief &amp; Dimensions</label>
                <textarea
                  rows={3}
                  required
                  placeholder="Tell us about desired dimensions, paper GSM, print colors, rug sizes, delivery destination..."
                  className="o-input !rounded-xl resize-none"
                  value={formData.details}
                  onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                />
              </div>

              <div className="sm:col-span-2 pt-2">
                <button type="submit" className="o-btn-primary w-full justify-center py-3.5 gap-2 cursor-pointer font-bold">
                  <Send className="w-4 h-4" /> Submit Commercial Inquiry
                </button>
              </div>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
