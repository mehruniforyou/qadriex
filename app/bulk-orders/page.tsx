'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ShieldCheck,
  Truck,
  Sparkles,
  Package,
  ArrowRight,
  CheckCircle2,
  Globe2,
  FileText,
  Building2,
  Layers,
  ChevronDown,
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

const BULK_FAQS = [
  {
    q: 'What are the volume tiers and MOQs for bulk paper bags?',
    a: 'Ready-stock unprinted carton dispatch starts at 500 units. Custom single-color screen/flexo printed runs start at 1,000 units. Full multi-color high-speed flexo and offset custom packaging runs offer tiered wholesale pricing at 3,000, 5,000, 10,000, and 50,000+ units with significant factory-direct economies of scale.',
  },
  {
    q: 'What countries does QADRI export to and what are the shipping terms?',
    a: 'We export worldwide including the United States, United Kingdom, European Union, UAE, Saudi Arabia, Qatar, Canada, and Australia. We support FOB (Free on Board), CIF (Cost, Insurance & Freight), and door-to-door DDP (Delivered Duty Paid) via ocean container freight (FCL & LCL) and expedited DHL/FedEx air cargo.',
  },
  {
    q: 'Can we order combined consignments of both Rugs and Paper Bags?',
    a: 'Yes! International commercial buyers, lifestyle brands, and hotel developers frequently consolidate consignments of custom-woven rugs and branded packaging bags into a single export shipment to maximize container space and reduce customs clearance costs.',
  },
  {
    q: 'How are samples and proofs handled prior to full production runs?',
    a: 'For custom paper bags, we provide digital dieline proofs within 24 hours and can dispatch physical plain mockups or printed sample swatches. For custom tufted rugs, we prepare digital color renders and miniature 1ft × 1ft physical tufted sample swatches for client approval before executing full batch production.',
  },
  {
    q: 'What export certifications and documentation do you provide?',
    a: 'Every export shipment is backed by a registered Indian Importer-Exporter Code (IEC), Certificate of Origin, Commercial Invoice, detailed Packing List, Bill of Lading / Airway Bill, and fumigation/phytosanitary certificates where mandated by destination customs.',
  },
];

export default function BulkOrdersPage() {
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    productType: 'paper-bags',
    quantity: '1000-5000',
    destination: 'India',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.companyName && (formData.email || formData.phone)) {
      setSubmitted(true);
    }
  };

  const whatsappInquiryUrl = `https://wa.me/919829062390?text=${encodeURIComponent(
    `Hello QADRI Export Team, I would like to inquire about a bulk wholesale/export order for ${formData.productType}. Company: ${formData.companyName || 'Corporate Client'}, Destination: ${formData.destination}.`
  )}`;

  return (
    <div className="py-10 md:py-16 space-y-16">
      {/* Hero Section */}
      <section className="o-container">
        <div className="max-w-3xl">
          <span className="o-chip">B2B Wholesale &amp; Global Trade</span>
          <h1 className="o-display text-4xl sm:text-5xl md:text-6xl font-bold mt-4 leading-tight">
            Bulk Orders &amp; Global Exports
          </h1>
          <p className="text-muted text-base md:text-lg mt-3 leading-relaxed max-w-2xl">
            Direct-from-factory volume manufacturing for retail brands, corporate partners, and international importers. High-capacity custom paper bags and luxury handcrafted rugs exported worldwide.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-6 text-xs text-muted">
            <span className="inline-flex items-center gap-1.5 font-medium">
              <Globe2 className="w-4 h-4 text-primary" /> Worldwide Ocean &amp; Air Freight
            </span>
            <span className="inline-flex items-center gap-1.5 font-medium">
              <ShieldCheck className="w-4 h-4 text-primary" /> Certified IEC Exporter
            </span>
            <span className="inline-flex items-center gap-1.5 font-medium">
              <FileText className="w-4 h-4 text-primary" /> FOB, CIF &amp; DDP Terms
            </span>
          </div>
        </div>
      </section>

      {/* Two Pillars: Paper Bags & Rugs */}
      <section className="o-container">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Paper Bags Pillar */}
          <div className="o-card p-8 md:p-10 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <span className="o-chip !text-xs !bg-surface-2">Packaging Division</span>
              <h2 className="o-display text-2xl md:text-3xl font-bold">
                Custom Branded Paper Bags
              </h2>
              <p className="text-sm text-muted leading-relaxed">
                Engineered for fashion retail, cloud kitchens, luxury boutiques, FMCG, and corporate events. Fully customizable dimensions, handle styles, and Pantone branding.
              </p>

              <div className="space-y-2.5 pt-2 text-xs">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span><b>Volume Capacities:</b> 1,000 to 100,000+ units per production run</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span><b>Paper Grades:</b> 100–350 GSM virgin brown kraft, bleached white &amp; art paper</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span><b>Handle Styles:</b> Twisted paper cords, flat tape, cotton ribbons &amp; handleless block bottom</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span><b>Print Methods:</b> High-speed flexographic, precision offset, and foil stamping</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span><b>Export Packaging:</b> Weatherproof corrugated master cartons with silica moisture absorbers</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-app" style={{ borderColor: 'var(--border)' }}>
              <Link
                href="/paper-bags"
                className="o-btn-ghost w-full justify-center gap-2 font-bold"
              >
                Browse Bag SKUs <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Rugs Pillar */}
          <div className="o-card p-8 md:p-10 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <span className="o-chip !text-xs !bg-surface-2">Artisanal Textile Division</span>
              <h2 className="o-display text-2xl md:text-3xl font-bold">
                Handcrafted Luxury Rugs &amp; Carpets
              </h2>
              <p className="text-sm text-muted leading-relaxed">
                Hand-tufted and artisanal woven rugs crafted from pure New Zealand wool, botanical silk, and cotton foundation. Custom contract production for hospitality, luxury residential, and decor brands.
              </p>

              <div className="space-y-2.5 pt-2 text-xs">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span><b>Volume Capacities:</b> Boutique runs of 5–50 pieces up to large hotel suites</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span><b>Yarn Specs:</b> 100% pure wool, high-density tufting, custom pile heights (10–25 mm)</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span><b>Bespoke Flexibility:</b> Custom geometric shapes, irregular contours, and Pantone color matching</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span><b>Finishing:</b> Artisan relief carving, hand-shearing, and non-slip cotton latex backing</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span><b>Export Packaging:</b> Heavy moisture-barrier plastic wrap and reinforced woven canvas casing</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-app" style={{ borderColor: 'var(--border)' }}>
              <Link
                href="/shop"
                className="o-btn-ghost w-full justify-center gap-2 font-bold"
              >
                Browse Rug Catalog <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Global Export Capabilities Banner */}
      <section className="o-container">
        <div
          className="rounded-[24px] p-8 md:p-12 space-y-8"
          style={{
            background: 'color-mix(in srgb, var(--heat, #1D1D1F) 8%, var(--surface))',
            border: '1px solid var(--border)',
          }}
        >
          <div className="max-w-2xl space-y-2">
            <span className="text-[11px] uppercase tracking-[0.22em] font-bold text-primary">
              International Trade Logistics
            </span>
            <h2 className="o-display text-2xl md:text-3xl lg:text-4xl font-bold">
              Seamless Exports to Over 35 Countries
            </h2>
            <p className="text-sm md:text-base text-muted leading-relaxed">
              We manage the complete end-to-end export lifecycle from our production hubs in India to your commercial warehouses or retail stores worldwide.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-4 rounded-xl bg-surface space-y-2 border border-app" style={{ borderColor: 'var(--border)' }}>
              <Globe2 className="w-5 h-5 text-primary" />
              <h3 className="font-bold text-sm">Sea Container Freight</h3>
              <p className="text-xs text-muted leading-relaxed">
                Full Container Load (FCL) &amp; Less than Container Load (LCL) dispatches from Nhava Sheva &amp; Mundra ports.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-surface space-y-2 border border-app" style={{ borderColor: 'var(--border)' }}>
              <Truck className="w-5 h-5 text-primary" />
              <h3 className="font-bold text-sm">Air Cargo Expedited</h3>
              <p className="text-xs text-muted leading-relaxed">
                Express air delivery via DHL, FedEx, and international airline cargo for time-sensitive launches (5–7 days).
              </p>
            </div>

            <div className="p-4 rounded-xl bg-surface space-y-2 border border-app" style={{ borderColor: 'var(--border)' }}>
              <FileText className="w-5 h-5 text-primary" />
              <h3 className="font-bold text-sm">Full Customs Clearance</h3>
              <p className="text-xs text-muted leading-relaxed">
                Accurate HS Code classifications, commercial invoices, packing lists, and Certificates of Origin for smooth clearance.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-surface space-y-2 border border-app" style={{ borderColor: 'var(--border)' }}>
              <ShieldCheck className="w-5 h-5 text-primary" />
              <h3 className="font-bold text-sm">Consignment Insurance</h3>
              <p className="text-xs text-muted leading-relaxed">
                Comprehensive marine transit cargo insurance protecting goods door-to-door against all transit eventualities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* RFQ Form & Direct WhatsApp */}
      <section className="o-container max-w-4xl">
        <div className="o-card p-8 md:p-12 space-y-8">
          <div className="text-center space-y-2 max-w-xl mx-auto">
            <Building2 className="w-8 h-8 text-primary mx-auto" />
            <h2 className="o-display text-2xl md:text-3xl font-bold">Request Bulk Quotation</h2>
            <p className="text-xs md:text-sm text-muted">
              Submit your project specifications or desired quantities below. Our export commercial desk prepares quotations within 4 business hours.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/919829062390?text=Hi%20QADRI%20Team,%20I%20would%20like%20to%20discuss%20a%20bulk%20order%20and%20request%20pricing."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-full font-bold text-sm bg-[#25D366] text-black hover:bg-[#20ba5a] transition-all shadow-md cursor-pointer"
            >
              <WhatsAppIcon size={18} /> Chat Directly on WhatsApp (+91 9829062390)
            </a>

            <a
              href="mailto:contact@qadriex.com?subject=Bulk%20Order%20Inquiry%20-%20QADRI&body=Hello%20QADRI%20Team,%0A%0AWe%20are%20interested%20in%20a%20bulk%20wholesale%20order%20for:%0A-%20Product%20Type:%0A-%20Estimated%20Quantity:%0A-%20Delivery%20Destination:%0A%0APlease%20provide%20catalog%20and%20volume%20pricing.%0A%0AThank%20you!"
              className="w-full sm:w-auto o-btn-ghost py-3.5 px-6 font-bold text-sm justify-center"
            >
              Email Us: contact@qadriex.com
            </a>
          </div>

          <div className="relative flex py-2 items-center">
            <div className="flex-grow border-t border-app" style={{ borderColor: 'var(--border)' }}></div>
            <span className="flex-shrink mx-4 text-xs text-muted uppercase font-semibold">Or Submit RFQ Form</span>
            <div className="flex-grow border-t border-app" style={{ borderColor: 'var(--border)' }}></div>
          </div>

          {submitted ? (
            <div className="p-8 rounded-2xl bg-surface-2 text-center space-y-3">
              <CheckCircle2 className="w-10 h-10 text-primary mx-auto" />
              <h3 className="font-bold text-xl">RFQ Received Successfully</h3>
              <p className="text-xs text-muted max-w-md mx-auto leading-relaxed">
                Thank you, {formData.contactName}. We have logged your request for {formData.companyName} and our export division will reply to {formData.email || formData.phone} within 4 business hours with itemized volume rates.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-semibold text-muted">Company / Brand Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Acme Retail or Studio Luxe"
                  className="o-input !rounded-xl"
                  value={formData.companyName}
                  onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-muted">Contact Person *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. John Doe / Sarah Smith"
                  className="o-input !rounded-xl"
                  value={formData.contactName}
                  onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-muted">Work Email *</label>
                <input
                  type="email"
                  required
                  placeholder="purchasing@company.com"
                  className="o-input !rounded-xl"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-muted">WhatsApp / Phone Number</label>
                <input
                  type="tel"
                  placeholder="+91 / +1 ..."
                  className="o-input !rounded-xl"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-muted">Product Division *</label>
                <select
                  className="o-input !rounded-xl"
                  value={formData.productType}
                  onChange={(e) => setFormData({ ...formData, productType: e.target.value })}
                >
                  <option value="paper-bags">Custom Utility Paper Bags (Wholesale)</option>
                  <option value="handcrafted-rugs">Handcrafted Artisan Rugs &amp; Carpets</option>
                  <option value="both">Both Packaging &amp; Rugs (Consolidated)</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-muted">Order Volume</label>
                <select
                  className="o-input !rounded-xl"
                  value={formData.quantity}
                  onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                >
                  <option value="1000-5000">1,000 – 5,000 units (Standard Bulk)</option>
                  <option value="5000-25000">5,000 – 25,000 units (Volume Tier)</option>
                  <option value="25000+">25,000+ units (Container Load)</option>
                  <option value="rugs-small">5 – 20 Custom Rugs</option>
                  <option value="rugs-hotel">20+ Custom Rugs / Hotel Contract</option>
                </select>
              </div>

              <div className="sm:col-span-2 space-y-1">
                <label className="text-xs font-semibold text-muted">Delivery Destination Country / City *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Mumbai, India / London, UK / New York, USA"
                  className="o-input !rounded-xl"
                  value={formData.destination}
                  onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                />
              </div>

              <div className="sm:col-span-2 space-y-1">
                <label className="text-xs font-semibold text-muted">Additional Specifications or Notes</label>
                <textarea
                  rows={3}
                  placeholder="Desired bag dimensions, paper GSM, handle types, rug pile heights, or launch timeline..."
                  className="o-input !rounded-xl resize-none"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <div className="sm:col-span-2 pt-2">
                <button type="submit" className="o-btn-primary w-full !py-3.5 font-bold cursor-pointer">
                  Submit Bulk RFQ Inquiry <ArrowRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="o-container max-w-3xl">
        <div className="text-center mb-8">
          <span className="o-chip">Have questions?</span>
          <h2 className="o-display text-2xl md:text-3xl font-bold mt-2">Bulk Orders &amp; Export FAQs</h2>
        </div>

        <div className="space-y-3">
          {BULK_FAQS.map((faq, idx) => (
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
                <div
                  className="px-5 pb-5 text-xs text-muted leading-relaxed border-t border-app pt-3"
                  style={{ borderColor: 'var(--border)' }}
                >
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
