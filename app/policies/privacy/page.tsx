import React from 'react';

export const metadata = {
  title: 'Privacy Policy · QADRI',
  description: 'Privacy Policy and client data protection practices for QADRI B2B manufacturing and client commissions.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="py-12 md:py-20">
      <header className="o-container pt-4 pb-8 max-w-3xl">
        <span className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] font-bold text-primary">
          <span className="block h-px w-7 bg-primary" />
          Legal &amp; Privacy
        </span>
        <h1 className="o-display text-4xl md:text-6xl font-bold tracking-tight mt-4 leading-[1.05]">
          Privacy Policy
        </h1>
        <p className="text-lg text-muted mt-4 leading-relaxed">
          Last updated: October 2026. Plain-English overview of how QADRI collects, secures, and safeguards client information, corporate branding files, and quotation requests.
        </p>
      </header>

      <div className="o-container max-w-3xl pb-24 leading-relaxed space-y-10 text-muted">
        <div>
          <h2 className="o-display text-2xl md:text-3xl font-bold text-text mb-3">
            Our Commitment to Client Privacy
          </h2>
          <p>
            QADRI operates as an enterprise B2B manufacturer and bespoke atelier providing custom utility paper bags and handcrafted luxury rugs. We respect the confidentiality of our corporate clients, interior designers, retail partners, and private buyers. We never sell, rent, or trade your data or proprietary designs with third-party advertisers.
          </p>
        </div>

        <div>
          <h2 className="o-display text-2xl md:text-3xl font-bold text-text mb-3">
            1. Information We Collect
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong className="text-text">B2B Quote &amp; Account Information:</strong> Your business name, contact person, corporate email, phone number, and delivery pin-code provided when requesting catalogue quotations or placing sample orders.
            </li>
            <li>
              <strong className="text-text">Tax &amp; Billing Records:</strong> Company GSTIN, billing address, and official invoicing details required for statutory compliance under Indian tax laws.
            </li>
            <li>
              <strong className="text-text">Artwork &amp; Specifications:</strong> Vector graphics, brand logos, Pantone references, bespoke rug dimensions, and custom packaging die-lines submitted for digital proofing and production.
            </li>
            <li>
              <strong className="text-text">Transactional Security:</strong> We do not store raw credit card numbers or UPI MPINs. All transactions and invoice settlements are processed through PCI-DSS certified, RBI-authorized payment processors or direct verified bank wire transfers (NEFT / RTGS).
            </li>
          </ul>
        </div>

        <div>
          <h2 className="o-display text-2xl md:text-3xl font-bold text-text mb-3">
            2. Proprietary Design Protection &amp; Confidentiality
          </h2>
          <p>
            We recognize that custom packaging die-lines and bespoke rug designs represent critical intellectual property for your brand or architectural project. Any vector assets, brand guides, or custom colorways shared with QADRI are handled under strict internal confidentiality and used solely for the fabrication and quality assurance of your commissioned order.
          </p>
        </div>

        <div>
          <h2 className="o-display text-2xl md:text-3xl font-bold text-text mb-3">
            3. How We Use Collected Data
          </h2>
          <p>
            Your information is utilized exclusively to:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>Calculate customized volume quotations and prepare digital pre-production proofs.</li>
            <li>Fabricate, package, and dispatch orders to your commercial premises or client sites.</li>
            <li>Issue GST-compliant e-way bills, commercial invoices, and export manifests.</li>
            <li>Coordinate milestone updates during artisanal weaving or large-run printing.</li>
            <li>Provide dedicated after-sales client service and order re-ordering assistance.</li>
          </ul>
        </div>

        <div>
          <h2 className="o-display text-2xl md:text-3xl font-bold text-text mb-3">
            4. Third-Party Disclosures &amp; Freight Logistics
          </h2>
          <p>
            We share only essential consignee details (consignee name, shipping facility address, contact phone, and commercial invoice) with our audited freight and logistics partners—including BlueDart, Delhivery, DTDC, surface cargo carriers, and international couriers like DHL Express—to ensure prompt and secure delivery.
          </p>
        </div>

        <div>
          <h2 className="o-display text-2xl md:text-3xl font-bold text-text mb-3">
            5. Data Retention &amp; Security Measures
          </h2>
          <p>
            All quote submissions and communication logs are stored on encrypted cloud infrastructure. Commercial records and invoices are archived in accordance with standard statutory tax retention requirements. Technical safeguards, including firewalls and TLS 1.3 encryption, are maintained across our digital infrastructure.
          </p>
        </div>

        <div>
          <h2 className="o-display text-2xl md:text-3xl font-bold text-text mb-3">
            6. Your Rights &amp; Contact Information
          </h2>
          <p>
            You have the right to request a copy of the corporate data we have on file, update your business information, or request deletion of contact records once commercial transactions and legal requirements have concluded.
          </p>
          <p className="mt-3">
            For inquiries or data privacy requests, contact our legal and privacy team at:{' '}
            <a href="mailto:contact@qadriex.com" className="text-primary font-semibold hover:underline">
              contact@qadriex.com
            </a>.
          </p>
        </div>
      </div>
    </div>
  );
}
