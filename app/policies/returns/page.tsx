import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Returns & Quality Assurance · QADRI',
  description: 'Quality guarantee, transit protection, and return policies for QADRI custom paper bags and bespoke handcrafted rugs.',
};

export default function ReturnsPolicyPage() {
  return (
    <div className="py-12 md:py-20">
      <header className="o-container pt-4 pb-8 max-w-3xl">
        <span className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] font-bold text-primary">
          <span className="block h-px w-7 bg-primary" />
          Client Assurance
        </span>
        <h1 className="o-display text-4xl md:text-6xl font-bold tracking-tight mt-4 leading-[1.05]">
          Returns &amp; Quality Guarantee
        </h1>
        <p className="text-lg text-muted mt-4 leading-relaxed">
          At QADRI, we stand behind the craftsmanship of every hand-tufted rug and the structural integrity of every paper bag run that leaves our manufacturing facilities.
        </p>
      </header>

      <div className="o-container max-w-3xl pb-24 leading-relaxed space-y-10 text-muted">
        <div>
          <h2 className="o-display text-2xl md:text-3xl font-bold text-text mb-3">
            Custom Manufacturing &amp; Change-of-Mind Policy
          </h2>
          <p>
            Because every paper bag order is tailored with specific dimensions, handle choices, and corporate artwork, and every luxury rug is woven or tufted to commissioned colorways and room dimensions, items are non-cancellable and non-returnable for change of mind once production is authorized.
          </p>
          <p className="mt-3">
            To guarantee complete satisfaction before volume runs commence, we offer pre-production digital die-line proofs, paper swatch samples, and yarn pom-pom color match kits for corporate sign-off.
          </p>
        </div>

        <div>
          <h2 className="o-display text-2xl md:text-3xl font-bold text-text mb-3">
            1. Transit Damage Protection (100% Covered)
          </h2>
          <p>
            All QADRI shipments travel under cargo insurance. If your consignment arrives with evident transit damage, wet cartons, or crushed packaging:
          </p>
          <ol className="list-decimal pl-6 space-y-2 mt-3">
            <li>Note the damage clearly on the carrier&apos;s physical Proof of Delivery (POD) or digital acceptance terminal.</li>
            <li>Take high-resolution photographs of the outer carton condition and the affected products inside.</li>
            <li>Email our logistics desk at{' '}
              <a href="mailto:contact@qadriex.com" className="text-primary font-semibold hover:underline">
                contact@qadriex.com
              </a>{' '}
              within <strong className="text-text">48 hours of receipt</strong>, citing your invoice and consignment tracking number.
            </li>
          </ol>
          <p className="mt-3">
            We will immediately review the claim and expedite replacement manufacturing or issue an agreed credit note for the affected units.
          </p>
        </div>

        <div>
          <h2 className="o-display text-2xl md:text-3xl font-bold text-text mb-3">
            2. Manufacturing Defect &amp; Specification Guarantee
          </h2>
          <p>
            We adhere to rigorous quality benchmarks across our production lines:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>
              <strong className="text-text">Paper Packaging Quality:</strong> Bags are evaluated for handle adhesion tensile strength, precise bottom fold glue integrity, and paper GSM accuracy.
            </li>
            <li>
              <strong className="text-text">Artisanal Rug Quality:</strong> Rugs undergo secondary latex inspection, edge-binding verification, and pile shear finishing.
            </li>
          </ul>
          <p className="mt-3">
            In the rare event that delivered items deviate materially from the signed pre-production proof (such as incorrect ink Pantone, incorrect dimensions exceeding tolerance, or structural glue failure), notify us within 7 business days. We will dispatch a quality inspection team or arrange priority replacement at zero additional expense to your company.
          </p>
        </div>

        <div>
          <h2 className="o-display text-2xl md:text-3xl font-bold text-text mb-3">
            3. Pre-Shipment Inspection (PSI) for Bulk Accounts
          </h2>
          <p>
            For large-volume corporate packaging contracts (over 50,000 units) and hospitality rug orders, client procurement representatives or third-party inspection firms (e.g. SGS, Bureau Veritas) are welcomed to conduct pre-dispatch factory inspections at our facilities upon scheduled notice.
          </p>
        </div>

        <div>
          <h2 className="o-display text-2xl md:text-3xl font-bold text-text mb-3">
            4. Dedicated Account Assistance
          </h2>
          <p>
            Need assistance with a delivered batch or want to discuss sample revisions? Reach out to your assigned key account manager or contact us directly:
          </p>
          <div className="mt-4 p-5 rounded-2xl bg-surface border border-border flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
            <div>
              <p className="font-bold text-text">QADRI Client Relations Desk</p>
              <p className="text-sm text-muted">Email: contact@qadriex.com · Mon–Sat 10:00 AM – 7:00 PM IST</p>
            </div>
            <Link href="/contact" className="o-btn-primary text-xs shrink-0">
              Contact Support
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
