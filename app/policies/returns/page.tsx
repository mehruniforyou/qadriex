import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Returns & Reprints · Oruky',
  description: 'Returns and lifetime reprint policies for Oruky pieces.',
};

export default function ReturnsPolicyPage() {
  return (
    <div className="py-12 md:py-20">
      <header className="o-container pt-4 pb-8 max-w-3xl">
        <span className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] font-bold text-primary">
          <span className="block h-px w-7 bg-primary" />
          After the sale
        </span>
        <h1 className="o-display text-4xl md:text-6xl font-bold tracking-tight mt-4 leading-[1.05]">
          Returns &amp; reprints
        </h1>
        <p className="text-lg text-muted mt-4 leading-relaxed">
          Most Orukys are made to order, so we don&apos;t take back items for change of mind. But we do stand behind every print — for the lifetime of the product.
        </p>
      </header>

      <div className="o-container max-w-3xl pb-24 leading-relaxed space-y-8 text-muted">
        <div>
          <h2 className="o-display text-2xl md:text-3xl font-bold text-text mb-3">
            Made-to-order means no change-of-mind returns
          </h2>
          <p>
            Almost every Oruky character is printed after you order it. That&apos;s how we ship limited editions of 50–300 without ever overproducing. It also means we cannot accept returns for &quot;I changed my mind&quot; — there&apos;s no warehouse to return it to, and the print is unique to your order.
          </p>
          <p className="mt-3">
            Please use the product page details, dimensions, and photos to make sure it&apos;s the right fit before ordering. If you&apos;re unsure, email{' '}
            <a href="mailto:oruky@adalwin.com" className="text-primary font-semibold hover:underline">
              oruky@adalwin.com
            </a>{' '}
            — we reply in under 4 hours during launch week.
          </p>
        </div>

        <div>
          <h2 className="o-display text-2xl md:text-3xl font-bold text-text mb-3">
            Damaged in transit (we cover it)
          </h2>
          <p>
            If your Oruky arrives damaged, send a photo to{' '}
            <a href="mailto:oruky@adalwin.com" className="text-primary font-semibold hover:underline">
              oruky@adalwin.com
            </a>{' '}
            within <strong className="text-text">48 hours of delivery</strong>. We&apos;ll queue a reprint and ship a replacement at no charge — usually back in your hands within 5-7 business days.
          </p>
        </div>

        <div>
          <h2 className="o-display text-2xl md:text-3xl font-bold text-text mb-3">
            Manufacturing defects (we cover those too)
          </h2>
          <p>
            Layer separation, warping, missing details, or cosmetic flaws we should have caught at QA — same deal. Photo, 30-day window, free replacement.
          </p>
        </div>

        <div>
          <h2 className="o-display text-2xl md:text-3xl font-bold text-text mb-3">
            Wrong item shipped
          </h2>
          <p>
            On us. Email a photo, we&apos;ll send the correct character and a return label for the wrong one (you don&apos;t pay return shipping).
          </p>
        </div>

        <div>
          <h2 className="o-display text-2xl md:text-3xl font-bold text-text mb-3">
            The Lifetime Reprint Guarantee
          </h2>
          <p>
            This is the one we&apos;re proudest of. <strong className="text-text">If your Oruky breaks, ever, we&apos;ll reprint it.</strong> Drop, fall, dog ate it, kid sat on it — doesn&apos;t matter. You pay only for materials and shipping (₹150 + actual shipping, typically ₹99-₹249 within India).
          </p>
          <p className="mt-3 font-semibold text-text">To claim a lifetime reprint:</p>
          <ol className="list-decimal pl-6 space-y-2 mt-2">
            <li>Email <a href="mailto:oruky@adalwin.com" className="text-primary font-semibold hover:underline">oruky@adalwin.com</a> with a photo of the broken Oruky and your original order number.</li>
            <li>We confirm the design is still on file (everything from April 2026 onwards is).</li>
            <li>You pay ₹150 + shipping via the link we send.</li>
          </ol>
        </div>
      </div>
    </div>
  );
}
