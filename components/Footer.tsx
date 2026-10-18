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
            Made for the obsession. Enthusiast collectibles — numbered, made-to-order on Bambu Lab P2S, hand-finished and shipped from{' '}
            <b style={{ color: 'var(--text)' }}>Pune &amp; Gurgaon</b>.
          </p>
          <div className="flex gap-3 mt-5">
            <a href="https://instagram.com/orukyhq" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="o-chip">
              <Instagram className="w-3.5 h-3.5" />
            </a>
            <a href="https://twitter.com/orukyhq" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="o-chip">
              <Twitter className="w-3.5 h-3.5" />
            </a>
            <a href="https://youtube.com/@orukyhq" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="o-chip">
              <Youtube className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Tribes column */}
        <div>
          <h2 className="o-display text-sm font-semibold mb-4">Tribes</h2>
          <ul className="space-y-2 text-sm text-muted">
            <li><Link href="/shop?c=cafe" className="hover:underline">The Café · motorcycles</Link></li>
            <li><Link href="/shop?c=garage" className="hover:underline">The Garage · cars</Link></li>
            <li><Link href="/shop?c=wall" className="hover:underline">The Wall · pop culture</Link></li>
            <li><Link href="/shop?c=studio-classics" className="hover:underline">Studio Classics</Link></li>
            <li><Link href="/shop?c=bespoke" className="hover:underline">Bespoke commissions</Link></li>
            <li><Link href="/shop?c=gifts" className="hover:underline">Gift bundles</Link></li>
          </ul>
        </div>

        {/* 3D printing column */}
        <div>
          <h2 className="o-display text-sm font-semibold mb-4">3D printing</h2>
          <ul className="space-y-2 text-sm text-muted">
            <li><Link href="/3d-printed-gifts" className="hover:underline">3D-printed gifts</Link></li>
            <li><Link href="/3d-printed-collectibles" className="hover:underline">3D-printed collectibles</Link></li>
            <li><Link href="/3d-printed-home-decor" className="hover:underline">3D-printed home decor</Link></li>
            <li><Link href="/3d-printing-india" className="hover:underline">3D printing in India</Link></li>
          </ul>
        </div>

        {/* Studio column */}
        <div>
          <h2 className="o-display text-sm font-semibold mb-4">Studio</h2>
          <ul className="space-y-2 text-sm text-muted">
            <li><Link href="/about" className="hover:underline">About Oruky</Link></li>
            <li><Link href="/universe" className="hover:underline">The tribes</Link></li>
            <li><Link href="/custom-print" className="hover:underline">Custom print · upload your STL</Link></li>
            <li><Link href="/b2b" className="hover:underline">For brands &amp; clubs</Link></li>
            <li><Link href="/journal" className="hover:underline">Journal</Link></li>
            <li><Link href="/printers" className="hover:underline">The studio (live)</Link></li>
            <li><Link href="/contact" className="hover:underline">Contact</Link></li>
          </ul>
        </div>

        {/* Drop notifications column */}
        <div>
          <h2 className="o-display text-sm font-semibold mb-4">Drop notifications</h2>
          <p className="text-sm text-muted mb-3">
            One email per drop. Subscribers get the link 12h before everyone else. No noise.
          </p>
          {subscribed ? (
            <p className="text-xs font-semibold text-mint py-2">✓ You&apos;re on the early access list.</p>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-2">
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="you@desk.com"
                  required
                  autoComplete="email"
                  className="o-input"
                  aria-label="Email for newsletter"
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

      {/* Legal Bar */}
      <div className="border-t border-app py-6" style={{ borderColor: 'var(--border)' }}>
        <div className="o-container grid gap-4 md:grid-cols-[1fr_auto] items-start text-xs text-muted">
          <div className="space-y-1.5 leading-relaxed">
            <div>
              <b style={{ color: 'var(--text)' }}>Adalwin Commerce LLP</b> — registered office:{' '}
              <span>
                302, Unity Paradise, Behind Krome Mall, BT Kawade Road, Raskar Nagar, Pune 411013, Maharashtra, India
              </span>
            </div>
            <div className="flex flex-wrap gap-x-4 gap-y-1">
              <span>
                <span className="font-semibold" style={{ color: 'var(--text)' }}>GSTIN:</span>{' '}
                <span className="font-mono">27ABZFA4553G1ZZ</span>
              </span>
              <span>
                <span className="font-semibold" style={{ color: 'var(--text)' }}>PAN:</span>{' '}
                <span className="font-mono">ABZFA4553G</span>
              </span>
              <a href="mailto:oruky@adalwin.com" className="inline-flex items-center gap-1.5 hover:underline">
                <Mail className="w-3 h-3" /> oruky@adalwin.com
              </a>
              <a href="tel:+918521122231" className="inline-flex items-center gap-1.5 hover:underline">
                <Phone className="w-3 h-3" /> +91-85211-22231
              </a>
            </div>
          </div>
          <div className="flex flex-wrap gap-4 md:justify-end">
            <Link href="/policies/shipping" className="hover:underline">Shipping</Link>
            <Link href="/policies/returns" className="hover:underline">Returns</Link>
            <Link href="/policies/privacy" className="hover:underline">Privacy</Link>
            <Link href="/policies/terms" className="hover:underline">Terms</Link>
            <Link href="/contact" className="hover:underline">Contact</Link>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-app py-3" style={{ borderColor: 'var(--border)' }}>
        <div className="o-container text-[11px] text-muted text-center">
          © 2026 <b style={{ color: 'var(--text)' }}>Qadri</b> · operated by{' '}
          <a
            href="https://adalwin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
            style={{ color: 'var(--text)', fontWeight: 600 }}
          >
            Adalwin Commerce LLP
          </a>{' '}
          · part of{' '}
          <a
            href="https://adalwingroup.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
            style={{ color: 'var(--text)', fontWeight: 600 }}
          >
            Adalwin Group
          </a>
        </div>
      </div>
    </footer>
  );
}
