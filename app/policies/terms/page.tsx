import React from 'react';

export const metadata = {
  title: 'Terms & Conditions · QADRI',
  description: 'Terms and conditions governing B2B quotations, custom paper packaging manufacturing, and bespoke rug commissions with QADRI.',
};

export default function TermsPolicyPage() {
  return (
    <div className="py-12 md:py-20">
      <header className="o-container pt-4 pb-8 max-w-3xl">
        <span className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] font-bold text-primary">
          <span className="block h-px w-7 bg-primary" />
          Legal Terms
        </span>
        <h1 className="o-display text-4xl md:text-6xl font-bold tracking-tight mt-4 leading-[1.05]">
          Terms &amp; Conditions
        </h1>
        <p className="text-lg text-muted mt-4 leading-relaxed">
          Last updated: October 2026. These commercial terms govern every quotation request, pre-production proof approval, and manufacturing order placed with QADRI.
        </p>
      </header>

      <div className="o-container max-w-3xl pb-24 leading-relaxed space-y-10 text-muted">
        <div>
          <h2 className="o-display text-2xl md:text-3xl font-bold text-text mb-3">
            1. Contracting Entity &amp; Scope
          </h2>
          <p>
            The brand <strong className="text-text">QADRI</strong> operates as a specialized manufacturing and export atelier with operations in India, dedicated to high-volume custom utility paper bags and bespoke handcrafted luxury rugs. By requesting quotations, approving pro-forma invoices, or issuing purchase orders, the client agrees to be bound by these Terms &amp; Conditions.
          </p>
        </div>

        <div>
          <h2 className="o-display text-2xl md:text-3xl font-bold text-text mb-3">
            2. B2B Quotations &amp; Order Confirmation
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong className="text-text">Quotation Validity:</strong> All official quotations and pro-forma invoices issued by QADRI are valid for 15 calendar days from the date of issue, unless otherwise specified in writing, due to prevailing paper pulp, cotton yarn, and imported wool raw-material market fluctuations.
            </li>
            <li>
              <strong className="text-text">Order Confirmation:</strong> An order is deemed accepted only after receipt of written client confirmation (purchase order or signed pro-forma invoice) alongside the agreed advance deposit.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="o-display text-2xl md:text-3xl font-bold text-text mb-3">
            3. Digital Proofs &amp; Pre-Production Approval
          </h2>
          <p>
            For custom printed paper bags and bespoke commissioned rugs:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>
              <strong className="text-text">Custom Packaging:</strong> QADRI will submit digital die-line proofs detailing dimensions, gusset folds, print layout, and Pantone/CMYK color values. Client approval must be provided in writing before printing cylinder engraving or offset plate production begins.
            </li>
            <li>
              <strong className="text-text">Bespoke Rugs:</strong> We provide 2D design schematics, pile height specifications, and yarn color swatches. Once approved, the master weavers commence hand-tufting or knotting to those exact parameters.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="o-display text-2xl md:text-3xl font-bold text-text mb-3">
            4. Manufacturing Tolerances &amp; Craft Variations
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong className="text-text">Paper Bag Production:</strong> As with all commercial high-speed converting machinery, an industry-standard dimensional tolerance of ±2mm to ±3mm and printing registration variance of ±1mm is recognized. Slight shade variance in virgin and recycled kraft paper rolls is inherent to unbleached plant fibers.
            </li>
            <li>
              <strong className="text-text">Artisanal Rugs:</strong> Genuine hand-knotted and hand-tufted textiles exhibit natural nuances in pile texture, subtle yarn dye-lot variations, and dimension variance (typically ±2% to ±3%). These characteristics reflect individual artisan craftsmanship rather than manufacturing defects.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="o-display text-2xl md:text-3xl font-bold text-text mb-3">
            5. Payment Terms &amp; Taxes
          </h2>
          <p>
            Standard commercial orders require a 50% advance deposit upon digital proof approval, with the remaining 50% balance payable prior to factory dispatch, unless corporate credit terms have been formally executed in writing. All prices are denominated in Indian Rupees (INR) and are subject to applicable GST (Goods and Services Tax) as per statutory HSN classifications.
          </p>
        </div>

        <div>
          <h2 className="o-display text-2xl md:text-3xl font-bold text-text mb-3">
            6. Cancellations &amp; Modifications
          </h2>
          <p>
            Because all products are custom manufactured to the client&apos;s exact dimensions, branding, or color requirements, orders cannot be cancelled once production plates, paper slitting, or wool dyeing has commenced. Any approved modification requests submitted after proof sign-off may incur supplementary tooling and material setup fees.
          </p>
        </div>

        <div>
          <h2 className="o-display text-2xl md:text-3xl font-bold text-text mb-3">
            7. Client Intellectual Property Warranty
          </h2>
          <p>
            The client represents and warrants that they possess full intellectual property rights, trademarks, or authorized licenses for all corporate logos, brand emblems, and artwork submitted to QADRI for reproduction. The client agrees to indemnify and hold harmless QADRI against any third-party claims or copyright infringements arising from submitted graphics.
          </p>
        </div>

        <div>
          <h2 className="o-display text-2xl md:text-3xl font-bold text-text mb-3">
            8. Governing Law &amp; Jurisdiction
          </h2>
          <p>
            These Terms &amp; Conditions are governed by and construed in accordance with the substantive laws of India. Any dispute, claim, or controversy arising under or in connection with business transactions with QADRI shall be subject to the exclusive jurisdiction of the competent courts in Pune, Maharashtra, India.
          </p>
        </div>
      </div>
    </div>
  );
}
