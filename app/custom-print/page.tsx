'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { UploadCloud, Layers, CheckCircle2, ArrowRight, ShieldCheck, Sparkles, Building2 } from 'lucide-react';

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

export default function CustomManufacturingPage() {
  const [craft, setCraft] = useState<'paper-bags' | 'rugs'>('paper-bags');
  const [fileName, setFileName] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    specs: '',
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.email || formData.phone) {
      setSubmitted(true);
    }
  };

  return (
    <div className="py-12 md:py-20 space-y-16">
      {/* Hero */}
      <section className="o-container max-w-4xl text-center space-y-4">
        <span className="o-chip">Bespoke Manufacturing on Demand</span>
        <h1 className="o-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.05]">
          Custom Branding &amp; Bespoke Specs
        </h1>
        <p className="text-muted text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          Upload your brand logo, dieline, or rug artwork. We review specifications, optimize materials, and prepare digital proofs with volume pricing within 24 hours.
        </p>
      </section>

      {/* Craft Toggle */}
      <section className="o-container max-w-xl">
        <div className="flex rounded-full p-1 bg-surface-2 border border-app" style={{ borderColor: 'var(--border)' }}>
          <button
            onClick={() => setCraft('paper-bags')}
            className={`flex-1 py-2.5 px-4 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              craft === 'paper-bags' ? 'bg-primary text-white shadow-md' : 'text-muted hover:text-text'
            }`}
          >
            Custom Paper Bags
          </button>
          <button
            onClick={() => setCraft('rugs')}
            className={`flex-1 py-2.5 px-4 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              craft === 'rugs' ? 'bg-primary text-white shadow-md' : 'text-muted hover:text-text'
            }`}
          >
            Bespoke Handcrafted Rugs
          </button>
        </div>
      </section>

      {/* 3 Step Workflow */}
      <section className="o-container">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="o-card p-6 space-y-3">
            <span className="o-display text-xs font-bold tracking-widest text-muted">01</span>
            <h3 className="o-display font-bold text-lg">Define Dimensions &amp; Stock</h3>
            <p className="text-xs text-muted leading-relaxed">
              {craft === 'paper-bags'
                ? 'Specify your exact Width × Depth × Height in mm and select unbleached virgin kraft, white kraft, or art paper (100–350 GSM).'
                : 'Choose custom width and length in meters, pile height (10–25mm), and yarn density (pure New Zealand wool or cotton blend).'}
            </p>
          </div>
          <div className="o-card p-6 space-y-3">
            <span className="o-display text-xs font-bold tracking-widest text-muted">02</span>
            <h3 className="o-display font-bold text-lg">Upload Artwork &amp; Pantone Codes</h3>
            <p className="text-xs text-muted leading-relaxed">
              {craft === 'paper-bags'
                ? 'Provide vector logo or dieline in PDF, AI, or EPS format with Pantone (PMS) color references for razor-sharp flexo/offset print.'
                : 'Upload digital designs, vector patterns, or floorplans. We match exact color swatches and tufting directions.'}
            </p>
          </div>
          <div className="o-card p-6 space-y-3">
            <span className="o-display text-xs font-bold tracking-widest text-muted">03</span>
            <h3 className="o-display font-bold text-lg">Sample Approval &amp; Mass Dispatch</h3>
            <p className="text-xs text-muted leading-relaxed">
              {craft === 'paper-bags'
                ? 'Review digital dieline proof or physical mockup before mass automated converting, inspection, and export carton packaging.'
                : 'Inspect digital 3D renders or miniature 1ft × 1ft tufted sample swatch prior to complete loom weaving.'}
            </p>
          </div>
        </div>
      </section>

      {/* Upload & RFQ Form */}
      <section className="o-container max-w-3xl">
        <div className="o-card p-8 md:p-12 space-y-8">
          <div className="text-center space-y-2">
            <UploadCloud className="w-8 h-8 text-primary mx-auto" />
            <h2 className="o-display text-2xl md:text-3xl font-bold">
              Submit Custom {craft === 'paper-bags' ? 'Packaging' : 'Rug'} Specs
            </h2>
            <p className="text-xs text-muted max-w-md mx-auto">
              Attach your artwork or share requirements. Direct factory quote within 4 business hours.
            </p>
          </div>

          {submitted ? (
            <div className="p-8 rounded-2xl bg-surface-2 text-center space-y-3">
              <CheckCircle2 className="w-10 h-10 text-primary mx-auto" />
              <h3 className="font-bold text-xl">Custom Spec Request Logged</h3>
              <p className="text-xs text-muted max-w-md mx-auto leading-relaxed">
                Thank you, {formData.name}. Our technical studio has received your brief and will review the specifications and reply to {formData.email || formData.phone} with dieline confirmation and volume quotation.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold mb-1 text-muted">Your Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Full Name"
                    className="o-input !rounded-xl"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold mb-1 text-muted">Company / Brand</label>
                  <input
                    type="text"
                    placeholder="Brand or Studio Name"
                    className="o-input !rounded-xl"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold mb-1 text-muted">Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
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
              </div>

              {/* File Upload Box */}
              <div>
                <label className="block text-xs font-semibold mb-1 text-muted">Attach Dieline / Logo / Artwork</label>
                <label className="border-2 border-dashed border-app rounded-2xl p-6 text-center block cursor-pointer hover:bg-surface-2 transition-colors">
                  <input
                    type="file"
                    className="hidden"
                    accept=".pdf,.ai,.eps,.png,.jpg,.jpeg,.svg"
                    onChange={handleFileChange}
                  />
                  <UploadCloud className="w-6 h-6 text-muted mx-auto mb-2" />
                  <span className="text-xs font-bold block">
                    {fileName ? fileName : 'Click to upload PDF, AI, EPS, SVG or high-res image'}
                  </span>
                  <span className="text-[10px] text-muted block mt-1">Maximum file size: 25 MB</span>
                </label>
              </div>

              <div>
                <label className="block text-xs font-semibold mb-1 text-muted">Detailed Specifications *</label>
                <textarea
                  rows={4}
                  required
                  placeholder={
                    craft === 'paper-bags'
                      ? 'Describe bag dimensions (W×D×H mm), paper GSM (e.g. 150 GSM Kraft), handle type (twisted/flat/ribbon), print colors, and estimated quantity...'
                      : 'Describe rug dimensions (e.g. 2m × 3m), shape, preferred colors, pile height, and delivery destination...'
                  }
                  className="o-input !rounded-xl resize-none"
                  value={formData.specs}
                  onChange={(e) => setFormData({ ...formData, specs: e.target.value })}
                />
              </div>

              <button type="submit" className="o-btn-primary w-full py-3.5 font-bold cursor-pointer">
                Submit Custom Specification Request <ArrowRight className="w-4 h-4 ml-1" />
              </button>
            </form>
          )}

          <div className="text-center pt-2">
            <a
              href="https://wa.me/919829062390?text=Hello%20QADRI,%20I%20have%20a%20custom%20manufacturing%20inquiry."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-semibold text-[#128C7E] dark:text-[#25D366] hover:underline"
            >
              <WhatsAppIcon size={16} /> Or send dieline directly via WhatsApp (+91 9829062390)
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
