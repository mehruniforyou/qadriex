'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Instagram, Twitter, Youtube, Mail, Phone } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="site-footer mt-24">
      <div className="o-container py-16 grid gap-10 md:grid-cols-3 lg:grid-cols-5">
        {/* Brand column */}
        <div>
          <Link href="/" aria-label="Qadri home" className="inline-block">
            <img
              alt="Qadri"
              loading="lazy"
              width={136}
              height={36}
              className="oruky-logo-light align-middle"
              style={{ height: 36, width: 'auto' }}
              src="/qadri-logo-light.svg"
            />
            <img
              alt=""
              aria-hidden={true}
              loading="lazy"
              width={136}
              height={36}
              className="oruky-logo-dark align-middle"
              style={{ height: 36, width: 'auto' }}
              src="/qadri-logo-dark.svg"
            />
          </Link>
          <p className="mt-3 text-sm text-muted max-w-xs">
            Premium custom-branded utility paper bags and bespoke handcrafted luxury rugs. Crafted for retail brands, corporate gifting, and fine interiors.
          </p>
          <div className="flex gap-3 mt-5">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="o-chip">
              <Instagram className="w-3.5 h-3.5" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="o-chip">
              <Twitter className="w-3.5 h-3.5" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="o-chip">
              <Youtube className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Paper Bags column */}
        <div>
          <h2 className="o-display text-sm font-semibold mb-4">Paper Bags</h2>
          <ul className="space-y-2 text-sm text-muted">
            <li><Link href="/frames" className="hover:underline">All Paper Bags</Link></li>
            <li><Link href="/frames" className="hover:underline">Kraft &amp; Retail Bags</Link></li>
            <li><Link href="/frames" className="hover:underline">Luxury Matte Bags</Link></li>
            <li><Link href="/frames" className="hover:underline">B2B Bulk Utility</Link></li>
            <li><Link href="/frames/bundles" className="hover:underline">Bulk &amp; Wholesale</Link></li>
          </ul>
        </div>

        {/* Rugs column */}
        <div>
          <h2 className="o-display text-sm font-semibold mb-4">Rugs</h2>
          <ul className="space-y-2 text-sm text-muted">
            <li><Link href="/shop" className="hover:underline">All Luxury Rugs</Link></li>
            <li><Link href="/shop?c=cafe" className="hover:underline">Custom &amp; Tufted</Link></li>
            <li><Link href="/shop?c=deskmate" className="hover:underline">Luxury &amp; Area</Link></li>
            <li><Link href="/shop?c=keychains" className="hover:underline">Commercial &amp; B2B</Link></li>
          </ul>
        </div>

        {/* Company column */}
        <div>
          <h2 className="o-display text-sm font-semibold mb-4">Company</h2>
          <ul className="space-y-2 text-sm text-muted">
            <li><Link href="/about" className="hover:underline">About QADRI</Link></li>
            <li><Link href="/b2b" className="hover:underline">B2B &amp; Bulk Orders</Link></li>
            <li><Link href="/b2b" className="hover:underline">Custom Branding</Link></li>
            <li><Link href="/contact" className="hover:underline">Contact</Link></li>
          </ul>
        </div>

        {/* Drop notifications column */}
        <div>
          <h2 className="o-display text-sm font-semibold mb-4">Updates &amp; Inquiries</h2>
          <p className="text-sm text-muted mb-3">
            Subscribe for new collection drops, material swatches, and wholesale volume pricing. No noise.
          </p>
          {subscribed ? (
            <p className="text-xs font-semibold text-mint py-2">✓ You&apos;re on the early access list.</p>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-2">
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="you@company.com"
                  required
                  autoComplete="email"
                  className="o-input"
                  aria-label="Email for updates"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button type="submit" className="o-btn-primary disabled:opacity-60 whitespace-nowrap">
                  Join
                </button>
              </div>
            </form>
          )}
        </div>
      </div>

      {/* Bottom Legal Bar */}
      <div className="border-t border-app py-6 relative z-20" style={{ borderColor: 'var(--border)' }}>
        <div className="o-container flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted">
          <div>
            © {new Date().getFullYear()} <b style={{ color: 'var(--text)' }}>Qadri</b>. All rights reserved. Pan-India Delivery &amp; Custom Manufacturing.
          </div>
          <nav aria-label="Legal and Policy Links" className="flex flex-wrap gap-x-6 gap-y-2 items-center pointer-events-auto">
            <Link
              href="/policies/shipping"
              className="text-[13px] font-medium transition-colors hover:text-text hover:underline py-1"
            >
              Shipping
            </Link>
            <Link
              href="/policies/returns"
              className="text-[13px] font-medium transition-colors hover:text-text hover:underline py-1"
            >
              Returns
            </Link>
            <Link
              href="/policies/privacy"
              className="text-[13px] font-medium transition-colors hover:text-text hover:underline py-1"
            >
              Privacy
            </Link>
            <Link
              href="/policies/terms"
              className="text-[13px] font-medium transition-colors hover:text-text hover:underline py-1"
            >
              Terms
            </Link>
            <Link
              href="/contact"
              className="text-[13px] font-medium transition-colors hover:text-text hover:underline py-1"
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
