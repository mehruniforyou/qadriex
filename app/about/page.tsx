import React from 'react';
import Link from 'next/link';
import { ArrowRight, Globe2, ShieldCheck, Sparkles, Building2 } from 'lucide-react';

export const metadata = {
  title: 'About QADRI · Artisan Rugs & Custom Paper Packaging · India',
  description: 'QADRI is an Indian manufacturing enterprise and export house specializing in bespoke handcrafted luxury rugs and custom branded utility paper bags.',
};

export default function AboutPage() {
  return (
    <div className="py-12 md:py-20">
      <section className="o-container max-w-3xl space-y-6">
        <span className="o-chip">About QADRI</span>

        <div className="mt-4">
          <img
            alt="Qadri"
            width={136}
            height={36}
            className="oruky-logo-light align-middle"
            style={{ height: 36, width: 'auto' }}
            src="/qadri-logo-light.svg"
          />
          <img
            alt=""
            aria-hidden={true}
            width={136}
            height={36}
            className="oruky-logo-dark align-middle"
            style={{ height: 36, width: 'auto' }}
            src="/qadri-logo-dark.svg"
          />
        </div>

        <h1 className="o-display text-4xl md:text-5xl lg:text-6xl font-bold mt-4 leading-tight">
          Two Master Crafts. One Global Standard.
        </h1>
        <p className="text-xl text-primary font-medium">
          Manufacturer &amp; Exporter of Handcrafted Luxury Rugs &amp; Custom Utility Paper Packaging — Jaipur &amp; Pan-India.
        </p>

        <div className="space-y-6 mt-8 leading-relaxed text-muted text-base">
          <p>
            <b>QADRI</b> is an Indian manufacturing enterprise and certified export house uniting two complementary disciplines under one standard of excellence: <b>artisan-crafted luxury rugs</b> and <b>sustainable, brand-customised utility paper bags</b>.
          </p>

          <p>
            Founded on the conviction that tactile craftsmanship and commercial utility must go hand in hand, we serve retail chains, luxury hospitality groups, architectural studios, and international importers across India, North America, the United Kingdom, Europe, the Middle East, and Australia.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 py-4">
            <div className="o-card p-5 space-y-2">
              <Sparkles className="w-5 h-5 text-primary" />
              <h3 className="font-bold text-sm text-text">Artisanal Textile Division</h3>
              <p className="text-xs text-muted leading-relaxed">
                Hand-tufted, hand-knotted, and flat-weave carpets crafted in Jaipur, Rajasthan, using 100% pure New Zealand wool, organic dyes, and precision hand-carved relief.
              </p>
            </div>
            <div className="o-card p-5 space-y-2">
              <Building2 className="w-5 h-5 text-primary" />
              <h3 className="font-bold text-sm text-text">Packaging Converting Division</h3>
              <p className="text-xs text-muted leading-relaxed">
                Heavy-duty virgin kraft paper bags, twisted cord handles, flat handles, and self-opening block-bottom grocery bags manufactured with food-safe inks and export-grade cartons.
              </p>
            </div>
          </div>

          <p>
            Our manufacturing operations are built around factory-direct transparency. Whether executing a boutique run of 10 bespoke hotel rugs or delivering an export container of 100,000 custom-printed kraft shopping bags, we maintain rigorous quality audits at every stage of converting, weaving, dyeing, and dispatch.
          </p>

          <p>
            As a registered Indian exporter (IEC certified), we handle end-to-end trade logistics, sea freight containerization (FCL/LCL), expedited air cargo, and complete export documentation to ensure seamless customs clearance at destination ports worldwide.
          </p>

          <div className="pt-6 border-t border-app flex flex-wrap gap-4 items-center justify-between" style={{ borderColor: 'var(--border)' }}>
            <div>
              <h4 className="font-bold text-text text-sm">Commercial Inquiries &amp; Trade Desks</h4>
              <p className="text-xs text-muted">Email: contact@qadriex.com · Phone/WhatsApp: +91 9829062390</p>
            </div>
            <Link href="/bulk-orders" className="o-btn-primary gap-2 text-xs font-bold py-2.5 px-5">
              Explore Bulk Orders <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
