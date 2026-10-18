import React from 'react';

export const metadata = {
  title: 'Shipping Policy · Oruky',
  description: 'Shipping & delivery timelines and policies for Oruky pieces across India and internationally.',
};

export default function ShippingPolicyPage() {
  return (
    <div className="py-12 md:py-20">
      <header className="o-container pt-4 pb-8 max-w-3xl">
        <span className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] font-bold text-primary">
          <span className="block h-px w-7 bg-primary" />
          Logistics
        </span>
        <h1 className="o-display text-4xl md:text-6xl font-bold tracking-tight mt-4 leading-[1.05]">
          Shipping &amp; delivery
        </h1>
        <p className="text-lg text-muted mt-4 leading-relaxed">
          Most Oruky products are made to order — meaning we print yours after you order it. Here&apos;s exactly how long that takes and what it costs.
        </p>
      </header>

      <div className="o-container max-w-3xl pb-24 leading-relaxed space-y-8 text-muted">
        <div>
          <h2 className="o-display text-2xl md:text-3xl font-bold text-text mb-3">
            Production time
          </h2>
          <p>
            Every order spends 3–5 business days in our studio before it ships. This is the actual print + post-processing + QA + packing time. Limited-edition drops occasionally take up to 7 business days when print queues are full — we&apos;ll always email you the day your order goes onto the printer.
          </p>
        </div>

        <div>
          <h2 className="o-display text-2xl md:text-3xl font-bold text-text mb-3">
            Shipping inside India
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong className="text-text">Standard, free</strong> — 3-5 business days · free on all orders across India.</li>
            <li><strong className="text-text">Express (metros only)</strong> — 1-2 business days · priority courier queue.</li>
            <li><strong className="text-text">Insurance</strong> — automatically added on all orders (no charge).</li>
          </ul>
          <p className="mt-4">
            We ship via DTDC, Delhivery, and Bluedart, picking the carrier with the best track record for your PIN code. You&apos;ll receive a tracking link the day your package leaves our studio.
          </p>
        </div>

        <div>
          <h2 className="o-display text-2xl md:text-3xl font-bold text-text mb-3">
            Shipping internationally
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong className="text-text">Asia-Pacific</strong> — 7-10 business days · from ₹1,400.</li>
            <li><strong className="text-text">Europe / UK</strong> — 8-14 business days · from ₹1,800.</li>
            <li><strong className="text-text">North America</strong> — 8-14 business days · from ₹2,100.</li>
            <li><strong className="text-text">Rest of world</strong> — 10-21 business days · from ₹2,400.</li>
          </ul>
          <p className="mt-4">
            All international shipments go via DHL Express with full tracking and insurance. Import duties and taxes are payable by the recipient on delivery, per local customs rules.
          </p>
        </div>

        <div>
          <h2 className="o-display text-2xl md:text-3xl font-bold text-text mb-3">
            Cash on delivery
          </h2>
          <p>
            COD is available across India on most orders, with a handling fee that scales with the order value and is shown at checkout before you pay. It isn’t offered on bespoke commissions or personalised pieces — those are modelled to your brief and can’t be resold if a parcel is refused.
          </p>
          <p className="mt-3">
            For larger COD orders we may send a short confirmation code to your WhatsApp number before the piece goes on the printer. Nothing is printed until you confirm, and your order waits safely until you do.
          </p>
        </div>
      </div>
    </div>
  );
}
