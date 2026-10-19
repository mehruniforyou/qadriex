import React from 'react';

export const metadata = {
  title: 'Shipping & Delivery Policy · QADRI',
  description: 'Logistics, bulk cargo freight, and delivery timelines for QADRI custom paper bags and handcrafted luxury rugs across India and worldwide.',
};

export default function ShippingPolicyPage() {
  return (
    <div className="py-12 md:py-20">
      <header className="o-container pt-4 pb-8 max-w-3xl">
        <span className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] font-bold text-primary">
          <span className="block h-px w-7 bg-primary" />
          Logistics &amp; Fulfillment
        </span>
        <h1 className="o-display text-4xl md:text-6xl font-bold tracking-tight mt-4 leading-[1.05]">
          Shipping &amp; Freight Policy
        </h1>
        <p className="text-lg text-muted mt-4 leading-relaxed">
          Comprehensive freight logistics, production turnarounds, and Pan-India / global export shipping guidelines for QADRI commercial packaging and bespoke rugs.
        </p>
      </header>

      <div className="o-container max-w-3xl pb-24 leading-relaxed space-y-10 text-muted">
        <div>
          <h2 className="o-display text-2xl md:text-3xl font-bold text-text mb-3">
            Manufacturing &amp; Fulfillment Timelines
          </h2>
          <p>
            Because QADRI specializes in tailored industrial converting and artisanal craftsmanship, production schedules depend on project scope and custom specifications:
          </p>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div className="p-5 rounded-2xl bg-surface border border-border">
              <h3 className="font-bold text-text text-base">Custom Paper Packaging</h3>
              <ul className="text-sm space-y-2 mt-2">
                <li><strong className="text-text">Standard Catalog Bags:</strong> 3–5 business days dispatch.</li>
                <li><strong className="text-text">Custom Printed Runs:</strong> 7–12 business days following final die-line approval and plate setup.</li>
                <li><strong className="text-text">High-Volume Runs (25K+):</strong> Phased dispatch scheduled per client contract.</li>
              </ul>
            </div>
            <div className="p-5 rounded-2xl bg-surface border border-border">
              <h3 className="font-bold text-text text-base">Bespoke Artisan Rugs</h3>
              <ul className="text-sm space-y-2 mt-2">
                <li><strong className="text-text">Hand-Tufted Wool Rugs:</strong> 14–21 business days for weaving, latex backing, and precision carving.</li>
                <li><strong className="text-text">Hand-Knotted Collector Rugs:</strong> 4–8 weeks depending on knot density (KPSI) and dimensions.</li>
                <li><strong className="text-text">Sample Swatches &amp; Pom-Poms:</strong> 4–6 business days dispatch.</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h2 className="o-display text-2xl md:text-3xl font-bold text-text mb-3">
            Pan-India Domestic Logistics
          </h2>
          <p>
            We manage nationwide delivery across Tier 1, 2, and 3 industrial hubs through dedicated logistics channels:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>
              <strong className="text-text">Express Air Courier (Samples &amp; Compact Rugs):</strong> Dispatched via BlueDart, DTDC Air, or Delhivery Express with guaranteed 1–3 business day transit to metro cities (Mumbai, Delhi-NCR, Bengaluru, Hyderabad, Chennai, Kolkata, Pune).
            </li>
            <li>
              <strong className="text-text">Palletized Surface Freight (Bulk Paper Bags &amp; Oversized Rugs):</strong> High-volume carton shipments are shrink-wrapped on wooden pallets and transported via reputable surface cargo networks (TCI Freight, V-Trans, Safechem, Spoton) with full consignment tracking.
            </li>
            <li>
              <strong className="text-text">Statutory E-Way Bills:</strong> Every commercial shipment is dispatched with an official GST invoice and statutory government E-Way bill to ensure frictionless transit across state checkposts.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="o-display text-2xl md:text-3xl font-bold text-text mb-3">
            Global Export &amp; International Shipping
          </h2>
          <p>
            QADRI supplies retail chains, luxury hospitality groups, and interior architecture studios across the Middle East, Europe, North America, and Southeast Asia.
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>
              <strong className="text-text">Air Express (DHL / FedEx):</strong> Door-to-door delivery within 5–9 business days with customs clearance assistance.
            </li>
            <li>
              <strong className="text-text">Sea Freight (FCL / LCL):</strong> Dispatched from Nhava Sheva (JNPT) or Mundra ports for cost-effective 20ft/40ft container movements.
            </li>
            <li>
              <strong className="text-text">Incoterms:</strong> International quotes are generally provided on FOB, CIF, or DAP basis. Destination customs duties and regional import taxes are payable by the consignee in accordance with local national laws.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="o-display text-2xl md:text-3xl font-bold text-text mb-3">
            Consignment Tracking &amp; Receiving Protocol
          </h2>
          <p>
            Upon factory dispatch, tracking manifests and consignment notes (LR copy / AWB) are emailed directly to your procurement team.
          </p>
          <p className="mt-3">
            <strong className="text-text">Important Receiving Note:</strong> Please ensure your facility receiving staff inspect the integrity of outer strapping and weatherproofing before signing proof of delivery (POD). In the unlikely event of visible carton damage, annotate the delivery receipt and contact our dispatch desk at{' '}
            <a href="mailto:contact@qadriex.com" className="text-primary font-semibold hover:underline">
              contact@qadriex.com
            </a>{' '}
            within 48 hours.
          </p>
        </div>
      </div>
    </div>
  );
}
