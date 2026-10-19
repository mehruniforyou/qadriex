import React from 'react';

export const metadata = {
  title: 'Terms & Conditions · Oruky',
  description: 'Terms and conditions governing orders and use of oruky.com.',
};

export default function TermsPolicyPage() {
  return (
    <div className="py-12 md:py-20">
      <header className="o-container pt-4 pb-8 max-w-3xl">
        <span className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] font-bold text-primary">
          <span className="block h-px w-7 bg-primary" />
          Legal
        </span>
        <h1 className="o-display text-4xl md:text-6xl font-bold tracking-tight mt-4 leading-[1.05]">
          Terms &amp; Conditions
        </h1>
        <p className="text-lg text-muted mt-4 leading-relaxed">
          Last updated: 27 April 2026. These terms apply to every visit to oruky.com and every order you place with us.
        </p>
      </header>

      <div className="o-container max-w-3xl pb-24 leading-relaxed space-y-8 text-muted">
        <div>
          <h2 className="o-display text-2xl md:text-3xl font-bold text-text mb-3">
            1. Who you&apos;re dealing with
          </h2>
          <p>
            The brand <strong className="text-text">Qadri</strong> specializes in custom manufacturing of utility paper bags and bespoke luxury rugs in India.
          </p>
        </div>

        <div>
          <h2 className="o-display text-2xl md:text-3xl font-bold text-text mb-3">
            2. Made-to-order manufacturing
          </h2>
          <p>
            Unless explicitly designated as &quot;in-stock,&quot; items ordered on Oruky are manufactured individually on our 3D printers following order placement. Minor cosmetic variations in 3D-layer textures or hand-finishing are characteristic of craft manufacturing and are not considered flaws.
          </p>
        </div>

        <div>
          <h2 className="o-display text-2xl md:text-3xl font-bold text-text mb-3">
            3. Pricing &amp; Taxes
          </h2>
          <p>
            All prices listed on the website are in Indian Rupees (INR) and are inclusive of all applicable Goods and Services Tax (GST).
          </p>
        </div>

        <div>
          <h2 className="o-display text-2xl md:text-3xl font-bold text-text mb-3">
            4. Cancellation policy
          </h2>
          <p>
            Standard orders may be cancelled within 12 hours of placement before production commences on our print queue. Bespoke or customized commissions cannot be cancelled once 3D CAD modeling or slicing has been approved.
          </p>
        </div>

        <div>
          <h2 className="o-display text-2xl md:text-3xl font-bold text-text mb-3">
            5. Governing law &amp; Jurisdiction
          </h2>
          <p>
            These terms are governed by the laws of India. Any disputes arising in connection with orders placed on Oruky shall be subject to the exclusive jurisdiction of the competent courts in Pune, Maharashtra.
          </p>
        </div>
      </div>
    </div>
  );
}
