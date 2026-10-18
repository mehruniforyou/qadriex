'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function PortalPage() {
  return (
    <div className="portal" style={{ background: 'var(--bg)', color: 'var(--text)' }}>
      {/* Screen-reader H1 */}
      <h1 className="sr-only">Customisable Paper Bags &amp; Rugs for B2B and Brands</h1>

      {/* Mobile-only Header */}
      <header className="md:hidden flex items-center justify-center py-6">
        <Link href="/" aria-label="Home" className="inline-flex">
          <img
            alt="Qadri"
            width={136}
            height={36}
            className="oruky-logo-light align-middle"
            style={{ height: 36, width: 'auto' }}
            src="/qadri-logo-light.svg"
          />
          <img
            alt=""
            aria-hidden={true}
            width={136}
            height={36}
            className="oruky-logo-dark align-middle"
            style={{ height: 36, width: 'auto' }}
            src="/qadri-logo-dark.svg"
          />
        </Link>
      </header>

      {/* Portal Doors */}
      <div className="portal-doors">
        {/* Door 1: Paper Bags */}
        <Link
          href="/frames"
          className="portal-door group overflow-hidden relative"
          style={{
            background: '#1D1D1F',
            color: '#111111',
            ['--aurora' as any]: 'color-mix(in srgb, #A1A1A6 26%, transparent)',
            ['--layer-line' as any]: 'rgba(245,245,247,0.055)',
            ['--plinth-shadow' as any]: 'rgba(0,0,0,0.62)',
            ['--pool' as any]: 'rgba(255,255,255,0.20)',
          }}
        >
          {/* Paper Bags Background Image (No opacity filter) */}
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
            style={{
              backgroundImage: "url('/images/paper-bags-portal-bg.jpg')",
            }}
            aria-hidden="true"
          />

          <span className="portal-aurora" aria-hidden="true" />
          <span className="portal-layers" aria-hidden="true" />
          <div className="relative w-full h-full flex items-center md:items-end p-6 sm:p-8 md:px-12 md:pb-16 md:pt-8">
            <div className="relative z-10 max-w-[34rem]">
              <h2 className="o-display text-5xl lg:text-6xl xl:text-7xl font-bold mt-3 leading-[0.95] tracking-tight whitespace-nowrap text-[#111111] [text-shadow:_0_2px_14px_rgba(255,255,255,0.95)]">
                <span className="pl-char" style={{ ['--i' as any]: 0 }}>P</span>
                <span className="pl-char" style={{ ['--i' as any]: 1 }}>a</span>
                <span className="pl-char" style={{ ['--i' as any]: 2 }}>p</span>
                <span className="pl-char" style={{ ['--i' as any]: 3 }}>e</span>
                <span className="pl-char" style={{ ['--i' as any]: 4 }}>r</span>
                <span className="pl-char" style={{ ['--i' as any]: 5 }}>&nbsp;</span>
                <span className="pl-char" style={{ ['--i' as any]: 6 }}>B</span>
                <span className="pl-char" style={{ ['--i' as any]: 7 }}>a</span>
                <span className="pl-char" style={{ ['--i' as any]: 8 }}>g</span>
                <span className="pl-char" style={{ ['--i' as any]: 9 }}>s</span>
              </h2>
              <p
                className="fg-rise fg-rise-d2 mt-4 max-w-sm text-sm sm:text-base leading-relaxed text-[#111111] font-semibold [text-shadow:_0_1px_10px_rgba(255,255,255,0.95)]"
              >
                Brand customisable branding paper utility bags in B2B for Brands.
              </p>
              <span
                className="fg-rise fg-rise-d3 mt-6 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold shadow-md transition-transform duration-200 group-hover:scale-105"
                style={{ background: '#111111', color: '#FFFFFF' }}
              >
                Explore Paper Bags <ArrowRight className="w-4 h-4 portal-arrow" />
              </span>
            </div>
          </div>
        </Link>

        {/* Door 2: Rugs */}
        <Link
          href="/shop"
          className="portal-door group overflow-hidden relative"
          style={{
            background: 'var(--bg)',
            color: '#111111',
            ['--aurora' as any]: 'color-mix(in srgb, var(--primary) 14%, transparent)',
            ['--layer-line' as any]: 'rgba(0,0,0,0.045)',
            ['--plinth-shadow' as any]: 'rgba(0,0,0,0.28)',
            ['--pool' as any]: 'rgba(0,0,0,0.07)',
          }}
        >
          {/* Rugs Background Image (No opacity filter) */}
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
            style={{
              backgroundImage: "url('/images/rugs-portal-bg.jpg')",
            }}
            aria-hidden="true"
          />

          <span className="portal-aurora" aria-hidden="true" />
          <span className="portal-layers" aria-hidden="true" />
          <div className="relative w-full h-full flex items-center md:items-end p-6 sm:p-8 md:px-12 md:pb-16 md:pt-8">
            <div className="relative z-10 max-w-[34rem]">
              <h2 className="o-display text-5xl lg:text-6xl xl:text-7xl font-bold mt-3 leading-[0.95] tracking-tight whitespace-nowrap text-[#FFFFFF] [text-shadow:_0_2px_14px_rgba(0,0,0,0.85)]">
                <span className="pl-char" style={{ ['--i' as any]: 0 }}>R</span>
                <span className="pl-char" style={{ ['--i' as any]: 1 }}>u</span>
                <span className="pl-char" style={{ ['--i' as any]: 2 }}>g</span>
                <span className="pl-char" style={{ ['--i' as any]: 3 }}>s</span>
              </h2>
              <p
                className="fg-rise fg-rise-d2 mt-4 max-w-sm text-sm sm:text-base leading-relaxed text-[#FFFFFF] font-semibold [text-shadow:_0_1px_10px_rgba(0,0,0,0.85)]"
              >
                Rugs can be customisable and a very large range of rugs can be available for B2B.
              </p>
              <span
                className="fg-rise fg-rise-d3 mt-6 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold shadow-md transition-transform duration-200 group-hover:scale-105"
                style={{ background: '#FFFFFF', color: '#111111' }}
              >
                Explore Rugs <ArrowRight className="w-4 h-4 portal-arrow text-[#111111]" />
              </span>
            </div>
          </div>
        </Link>

        {/* Center Badge Mark */}
        <div className="portal-mark" role="img" aria-label="Qadri" style={{ width: 240, height: 64 }}>
          <img
            alt=""
            aria-hidden={true}
            width={240}
            height={64}
            className="pm-layer"
            style={{ color: 'transparent', objectFit: 'contain' }}
            src="/qadri-logo-dark.svg"
          />
          <img
            alt=""
            aria-hidden={true}
            width={240}
            height={64}
            className="pm-layer pm-split"
            style={{ color: 'transparent', objectFit: 'contain' }}
            src="/qadri-logo-light.svg"
          />
        </div>
      </div>

      {/* Minimal Footer */}
      <footer
        className="shrink-0 flex items-center justify-between gap-4 px-5 sm:px-8 py-3 text-[11px]"
        style={{ color: 'var(--text-muted)', borderTop: '1px solid var(--border)' }}
      >
        <span className="whitespace-nowrap">
          © 2026 Qadri
          <span className="hidden sm:inline"> · Adalwin Commerce™ LLP · Pune &amp; Gurgaon</span>
        </span>
        <nav className="flex gap-4">
          <Link className="hover:underline" href="/about">About</Link>
          <Link className="hover:underline" href="/contact">Contact</Link>
          <Link className="hover:underline" href="/policies/shipping">Shipping</Link>
          <Link className="hover:underline" href="/policies/privacy">Privacy</Link>
        </nav>
      </footer>
    </div>
  );
}
