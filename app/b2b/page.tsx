'use client';

import React, { useState } from 'react';
import { ShieldCheck, Layers, Package, Send, Sparkles, Building2 } from 'lucide-react';

export default function B2BPage() {
  const [formData, setFormData] = useState({
    company: '',
    contactName: '',
    email: '',
    quantity: '50-100',
    details: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.company && formData.email) {
      setSubmitted(true);
    }
  };

  return (
    <div className="py-12 md:py-20 space-y-16">
      {/* Hero */}
      <section className="o-container max-w-4xl text-center space-y-4">
        <span className="o-chip">B2B &amp; Custom Drops</span>
        <h1 className="o-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.05]">
          Physical collectibles for brands that people obsess over.
        </h1>
        <p className="text-muted text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          Forget cheap corporate swag. We partner with automotive brands, motorcycle clubs, and tech studios to design, 3D print, and number limited-edition pieces that members actually keep on their desks forever.
        </p>
      </section>

      {/* 4 Pillars */}
      <section className="o-container">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="o-card p-6 space-y-3">
            <span className="size-10 rounded-xl bg-surface-2 grid place-items-center text-primary">
              <Layers className="w-5 h-5" />
            </span>
            <h3 className="font-bold text-base">In-House CAD Design</h3>
            <p className="text-xs text-muted leading-relaxed">
              We translate your vehicles, logos, or mascots into print-optimized 3D geometry with stunning physical detail.
            </p>
          </div>

          <div className="o-card p-6 space-y-3">
            <span className="size-10 rounded-xl bg-surface-2 grid place-items-center text-primary">
              <Sparkles className="w-5 h-5" />
            </span>
            <h3 className="font-bold text-base">Multi-Material Print Farm</h3>
            <p className="text-xs text-muted leading-relaxed">
              Our synchronized Bambu Lab P2S farm prints up to 4 exact Pantone-matched colors per piece with automated AI inspection.
            </p>
          </div>

          <div className="o-card p-6 space-y-3">
            <span className="size-10 rounded-xl bg-surface-2 grid place-items-center text-primary">
              <Package className="w-5 h-5" />
            </span>
            <h3 className="font-bold text-base">Custom Numbered Unboxing</h3>
            <p className="text-xs text-muted leading-relaxed">
              Bespoke foil-stamped rigid boxes, serial numbered metal certificates, and custom laser-cut protective foam.
            </p>
          </div>

          <div className="o-card p-6 space-y-3">
            <span className="size-10 rounded-xl bg-surface-2 grid place-items-center text-primary">
              <ShieldCheck className="w-5 h-5" />
            </span>
            <h3 className="font-bold text-base">Turnkey Delivery</h3>
            <p className="text-xs text-muted leading-relaxed">
              We handle direct-to-recipient courier dispatch across India and overseas, with real-time tracking links.
            </p>
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="o-container max-w-3xl">
        <div className="o-card p-8 md:p-12">
          <div className="text-center mb-8 space-y-2">
            <Building2 className="w-8 h-8 text-primary mx-auto" />
            <h2 className="o-display text-2xl md:text-3xl font-bold">Request a Brand Drop Proposal</h2>
            <p className="text-xs text-muted max-w-md mx-auto">
              Tell us about your brand and what piece you envision. We respond within 24 hours with conceptual sketches and batch pricing.
            </p>
          </div>

          {submitted ? (
            <div className="p-8 rounded-2xl bg-surface-2 text-center space-y-3">
              <h3 className="text-mint font-bold text-xl">Proposal Request Submitted</h3>
              <p className="text-xs text-muted max-w-md mx-auto">
                Thank you, {formData.contactName}. We have sent a confirmation to {formData.email} and our lead designer will reach out shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold mb-1 text-muted">Brand / Club Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Royal Enfield Riders Club or TechCorp"
                  className="o-input"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-xs font-semibold mb-1 text-muted">Contact Person</label>
                <input
                  type="text"
                  required
                  placeholder="Sameer Rao"
                  className="o-input"
                  value={formData.contactName}
                  onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-xs font-semibold mb-1 text-muted">Work Email</label>
                <input
                  type="email"
                  required
                  placeholder="name@company.com"
                  className="o-input"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-xs font-semibold mb-1 text-muted">Estimated Edition Size</label>
                <select
                  className="o-input"
                  value={formData.quantity}
                  onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                >
                  <option value="25-50">25 – 50 pieces (Small drop)</option>
                  <option value="50-100">50 – 100 pieces (Standard club drop)</option>
                  <option value="100-500">100 – 500 pieces (Full brand campaign)</option>
                  <option value="500+">500+ pieces (Large scale launch)</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="block text-xs font-semibold mb-1 text-muted">Brief Description of What You Want Made</label>
                <textarea
                  rows={4}
                  required
                  placeholder="Describe the vehicle, emblem, gift set, or timeline..."
                  className="o-input resize-y"
                  value={formData.details}
                  onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                />
              </div>
              <div className="sm:col-span-2 pt-2">
                <button type="submit" className="o-btn-primary w-full justify-center py-3.5 gap-2 cursor-pointer">
                  <Send className="w-4 h-4" /> Request Custom Drop Proposal
                </button>
              </div>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
