import React from 'react';

export const metadata = {
  title: 'Privacy Policy · Oruky',
  description: 'Plain-English explanation of what we collect, why, and what we do with it.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="py-12 md:py-20">
      <header className="o-container pt-4 pb-8 max-w-3xl">
        <span className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] font-bold text-primary">
          <span className="block h-px w-7 bg-primary" />
          Legal
        </span>
        <h1 className="o-display text-4xl md:text-6xl font-bold tracking-tight mt-4 leading-[1.05]">
          Privacy Policy
        </h1>
        <p className="text-lg text-muted mt-4 leading-relaxed">
          Last updated: 27 April 2026. Plain-English explanation of what we collect, why, and what we do with it.
        </p>
      </header>

      <div className="o-container max-w-3xl pb-24 leading-relaxed space-y-8 text-muted">
        <div>
          <h2 className="o-display text-2xl md:text-3xl font-bold text-text mb-3">
            The short version
          </h2>
          <p>
            We collect the bare minimum needed to ship your Oruky and (if you opted in) tell you when the next drop happens. We never sell your data, we never run third-party ad retargeting pixels, and we store everything in compliant, encrypted cloud databases.
          </p>
        </div>

        <div>
          <h2 className="o-display text-2xl md:text-3xl font-bold text-text mb-3">
            1. Information we collect
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong className="text-text">Order details:</strong> Name, shipping address, phone number (for courier dispatch and delivery updates), and email address.</li>
            <li><strong className="text-text">Payment details:</strong> We do not see or store your full card number or UPI MPIN. All transactions are processed through RBI-authorized payment gateways.</li>
            <li><strong className="text-text">Drop notifications:</strong> If you subscribe, we store your email address to send drop announcements. You can unsubscribe anytime with one click.</li>
          </ul>
        </div>

        <div>
          <h2 className="o-display text-2xl md:text-3xl font-bold text-text mb-3">
            2. How we use your data
          </h2>
          <p>
            Your information is used strictly to fulfill your order, provide customer support, generate GST invoices, and notify you about new limited editions if you subscribed.
          </p>
        </div>

        <div>
          <h2 className="o-display text-2xl md:text-3xl font-bold text-text mb-3">
            3. Third-party services
          </h2>
          <p>
            We share only essential delivery data with logistics partners (Delhivery, BlueDart, DTDC) to get your package to your doorstep.
          </p>
        </div>

        <div>
          <h2 className="o-display text-2xl md:text-3xl font-bold text-text mb-3">
            4. Your rights
          </h2>
          <p>
            You have the right to request access to the personal data we hold about you, or ask us to delete your customer profile, by emailing{' '}
            <a href="mailto:contact@qadriex.com" className="text-primary font-semibold hover:underline">
              contact@qadriex.com
            </a>.
          </p>
        </div>
      </div>
    </div>
  );
}
