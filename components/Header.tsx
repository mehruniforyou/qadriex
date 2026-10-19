'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Search, Sun, Moon, Heart, ShoppingBag, Menu, X, ArrowLeftRight } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';
import { useCart } from '@/context/CartContext';
import { PRODUCTS } from '@/data/products';

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const { theme, toggleTheme } = useTheme();
  const { itemCount, setIsCartOpen } = useCart();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);

  const isPaperBags = pathname?.startsWith('/paper-bags') || pathname?.startsWith('/frames');

  // Handle scroll to collapse sub-navigation rail
  useEffect(() => {
    function handleScroll() {
      const headerEl = headerRef.current;
      if (!headerEl) return;
      const t = window.scrollY;
      const isScrolled = headerEl.classList.contains('is-scrolled');
      if (!isScrolled && t > 50) {
        headerEl.classList.add('is-scrolled');
      } else if (isScrolled && t < 16) {
        headerEl.classList.remove('is-scrolled');
      }
    }
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle Cmd+K / Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        const input = document.querySelector('input[type="search"]') as HTMLInputElement;
        if (input) input.focus();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Filter products for quick search
  const filteredProducts = searchQuery.trim()
    ? PRODUCTS.filter(p =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase())
      ).slice(0, 5)
    : [];

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/shop?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchOpen(false);
    }
  };

  return (
    <header
      ref={headerRef}
      className="site-header sticky top-0 z-50 backdrop-blur-xl"
      style={{
        background: 'color-mix(in srgb, var(--bg) 86%, transparent)',
        borderBottom: '1px solid var(--border)',
      }}
    >
      <div className="o-container">
        {/* Top Header Row */}
        <div className="header-top-row flex items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" aria-label="Qadri home" className="flex items-center shrink-0">
            <img
              alt="Qadri"
              width={136}
              height={36}
              className="oruky-logo-light align-middle"
              style={{ height: 36, width: 'auto' }}
              src="/qadri-logo-light.svg"
            />
            <img
              alt="Qadri"
              aria-hidden={true}
              width={136}
              height={36}
              className="oruky-logo-dark align-middle"
              style={{ height: 36, width: 'auto' }}
              src="/qadri-logo-dark.svg"
            />
          </Link>

          {/* Search Bar (Desktop) */}
          <div ref={searchRef} className="hidden md:block flex-1 max-w-xl mx-6 lg:mx-10 relative">
            <form onSubmit={handleSearchSubmit} role="search" className="relative transition-shadow duration-200">
              <Search className="lucide lucide-search absolute left-4 top-1/2 -translate-y-1/2 text-muted pointer-events-none w-4 h-4" />
              <input
                type="search"
                placeholder="Search products, categories, pages…"
                className="o-input !rounded-full pl-11 pr-20 h-11 text-[15px]"
                aria-label="Search"
                autoComplete="off"
                spellCheck="false"
                name="q"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setSearchOpen(true);
                }}
                onFocus={() => setSearchOpen(true)}
              />
              <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1">
                <kbd
                  className="hidden lg:inline-flex items-center gap-1 px-1.5 h-6 rounded border text-[10px] font-mono"
                  style={{
                    borderColor: 'var(--border)',
                    color: 'var(--text-muted)',
                    background: 'var(--surface-2)',
                  }}
                  aria-hidden="true"
                >
                  ⌘K
                </kbd>
              </div>
            </form>

            {/* Live Search Popup */}
            {searchOpen && searchQuery.trim() && (
              <div
                className="absolute top-full left-0 right-0 mt-2 bg-surface border border-app rounded-2xl shadow-lift overflow-hidden z-50 p-2"
                style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}
              >
                {filteredProducts.length > 0 ? (
                  <div className="divide-y divide-[var(--border)]">
                    {filteredProducts.map(p => (
                      <Link
                        key={p.id}
                        href={p.categoryType === 'frames' ? `/frames/product/${p.slug}` : `/product/${p.slug}`}
                        className="flex items-center gap-3 p-2.5 hover:bg-surface-2 rounded-xl transition-colors"
                        onClick={() => {
                          setSearchOpen(false);
                          setSearchQuery('');
                        }}
                      >
                        <img
                          src={p.localImageUrl || p.imageUrl}
                          alt={p.name}
                          className="w-10 h-10 rounded-lg object-cover bg-surface-2"
                        />
                        <div className="flex-1 min-w-0">
                          <p className="font-semibold text-sm truncate">{p.name}</p>
                          <p className="text-xs text-muted truncate">{p.tagline}</p>
                        </div>
                        <span className="text-sm font-semibold whitespace-nowrap">
                          ₹{p.pricePaise / 100}
                        </span>
                      </Link>
                    ))}
                    <Link
                      href={`/shop?q=${encodeURIComponent(searchQuery)}`}
                      className="block p-2 text-center text-xs font-semibold text-muted hover:underline"
                      onClick={() => setSearchOpen(false)}
                    >
                      View all results for &quot;{searchQuery}&quot; →
                    </Link>
                  </div>
                ) : (
                  <div className="p-4 text-center text-sm text-muted">
                    No collectibles found matching &quot;{searchQuery}&quot;
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            {/* Theme Toggle Button */}
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={`${theme} mode. Switch to ${theme === 'light' ? 'night' : 'day'} mode.`}
              className="o-chip !h-10 !px-4 hover:scale-105 transition-transform cursor-pointer"
            >
              {theme === 'dark' ? (
                <Moon className="w-3.5 h-3.5" />
              ) : (
                <Sun className="w-3.5 h-3.5" />
              )}
              <span className="capitalize">{theme === 'light' ? 'day' : 'night'}</span>
            </button>

            {/* Mobile Search Button */}
            <Link
              aria-label="Search"
              className="md:hidden o-chip !h-10 !w-10 !px-0 !py-0 grid place-items-center"
              href="/shop"
            >
              <Search className="w-4 h-4" />
            </Link>

            {/* Wishlist Link */}
            <Link
              aria-label="Wishlist"
              className="o-chip !h-10 !px-3.5 hidden sm:inline-flex"
              href="/wishlist"
            >
              <Heart className="w-3.5 h-3.5" />
            </Link>

            {/* Cart Button */}
            <button
              type="button"
              onClick={() => setIsCartOpen(true)}
              aria-label={`Cart, ${itemCount} items`}
              className="o-chip !h-10 !px-4 cursor-pointer"
              style={{
                background: 'var(--primary)',
                color: 'var(--primary-contrast, #fff)',
                borderColor: 'transparent',
              }}
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span className="font-semibold tabular-nums">{itemCount}</span>
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              className="md:hidden o-chip !h-10 !w-10 !px-0 !py-0 grid place-items-center cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Sub-Navigation Rail */}
        <div className="header-nav-outer">
          <nav aria-label="Primary" className="header-nav-rail hidden md:flex items-center justify-center">
            {isPaperBags ? (
              <ul className="flex items-center gap-7 lg:gap-9 text-[13px] font-semibold tracking-tight">
                <li>
                  <Link
                    className="relative inline-block py-1 group transition-colors duration-200"
                    style={{ color: pathname === '/paper-bags' || pathname === '/frames' ? 'var(--text)' : 'var(--text-muted)' }}
                    href="/paper-bags"
                  >
                    <span className="group-hover:text-app transition-colors duration-200">All Paper Bags</span>
                    <span
                      aria-hidden="true"
                      className={`pointer-events-none absolute left-0 right-0 -bottom-0.5 h-[1.5px] origin-left transition-transform duration-300 ${
                        pathname === '/paper-bags' || pathname === '/frames' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                      }`}
                      style={{ background: 'var(--primary)' }}
                    />
                  </Link>
                </li>
                <li>
                  <Link
                    className="relative inline-block py-1 group transition-colors duration-200"
                    style={{ color: pathname === '/bulk-orders' ? 'var(--text)' : 'var(--text-muted)' }}
                    href="/bulk-orders"
                  >
                    <span className="group-hover:text-app transition-colors duration-200">Bulk &amp; Custom</span>
                    <span
                      aria-hidden="true"
                      className={`pointer-events-none absolute left-0 right-0 -bottom-0.5 h-[1.5px] origin-left transition-transform duration-300 ${
                        pathname === '/bulk-orders' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                      }`}
                      style={{ background: 'var(--primary)' }}
                    />
                  </Link>
                </li>
                <li>
                  <Link
                    className="relative inline-block py-1 group transition-colors duration-200"
                    style={{ color: pathname === '/b2b' ? 'var(--text)' : 'var(--text-muted)' }}
                    href="/b2b"
                  >
                    <span className="group-hover:text-app transition-colors duration-200">Export &amp; B2B</span>
                    <span
                      aria-hidden="true"
                      className={`pointer-events-none absolute left-0 right-0 -bottom-0.5 h-[1.5px] origin-left transition-transform duration-300 ${
                        pathname === '/b2b' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                      }`}
                      style={{ background: 'var(--primary)' }}
                    />
                  </Link>
                </li>
                <li className="ml-1">
                  <Link
                    className="o-chip !h-8 !px-3 !text-[12px] transition font-semibold"
                    style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}
                    href="/shop"
                  >
                    <ArrowLeftRight className="w-3 h-3 mr-1" aria-hidden="true" />
                    Rugs
                  </Link>
                </li>
              </ul>
            ) : (
              <ul className="flex items-center gap-7 lg:gap-9 text-[13px] font-semibold tracking-tight">
                <li>
                  <Link
                    className="relative inline-block py-1 group transition-colors duration-200"
                    style={{ color: pathname === '/shop' ? 'var(--text)' : 'var(--text-muted)' }}
                    href="/shop"
                  >
                    <span className="group-hover:text-app transition-colors duration-200">All Rugs</span>
                    <span
                      aria-hidden="true"
                      className={`pointer-events-none absolute left-0 right-0 -bottom-0.5 h-[1.5px] origin-left transition-transform duration-300 ${
                        pathname === '/shop' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                      }`}
                      style={{ background: 'var(--primary)' }}
                    />
                  </Link>
                </li>
                <li>
                  <Link
                    className="relative inline-block py-1 group transition-colors duration-200"
                    style={{ color: 'var(--text-muted)' }}
                    href="/shop?c=cafe"
                  >
                    <span className="group-hover:text-app transition-colors duration-200">Custom &amp; Tufted</span>
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute left-0 right-0 -bottom-0.5 h-[1.5px] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                      style={{ background: 'var(--primary)' }}
                    />
                  </Link>
                </li>
                <li>
                  <Link
                    className="relative inline-block py-1 group transition-colors duration-200"
                    style={{ color: 'var(--text-muted)' }}
                    href="/shop?c=deskmate"
                  >
                    <span className="group-hover:text-app transition-colors duration-200">Luxury &amp; Area</span>
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute left-0 right-0 -bottom-0.5 h-[1.5px] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                      style={{ background: 'var(--primary)' }}
                    />
                  </Link>
                </li>
                <li>
                  <Link
                    className="relative inline-block py-1 group transition-colors duration-200"
                    style={{ color: pathname === '/bulk-orders' ? 'var(--text)' : 'var(--text-muted)' }}
                    href="/bulk-orders"
                  >
                    <span className="group-hover:text-app transition-colors duration-200">Wholesale &amp; Export</span>
                    <span
                      aria-hidden="true"
                      className={`pointer-events-none absolute left-0 right-0 -bottom-0.5 h-[1.5px] origin-left transition-transform duration-300 ${
                        pathname === '/bulk-orders' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                      }`}
                      style={{ background: 'var(--primary)' }}
                    />
                  </Link>
                </li>
                <li className="ml-1">
                  <Link
                    className="o-chip !h-8 !px-3 !text-[12px] transition font-semibold"
                    style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}
                    href="/paper-bags"
                  >
                    <ArrowLeftRight className="w-3 h-3 mr-1" aria-hidden="true" />
                    Paper Bags
                  </Link>
                </li>
              </ul>
            )}
          </nav>
        </div>

        {/* Mobile Slide-down Drawer */}
        {mobileMenuOpen && (
          <div
            className="md:hidden py-4 border-t border-app space-y-3"
            style={{ borderColor: 'var(--border)' }}
          >
            <div className="grid grid-cols-2 gap-2">
              <Link
                href="/paper-bags"
                className="o-card p-3 text-center font-bold text-sm"
                onClick={() => setMobileMenuOpen(false)}
              >
                Paper Bags
              </Link>
              <Link
                href="/shop"
                className="o-card p-3 text-center font-bold text-sm"
                onClick={() => setMobileMenuOpen(false)}
              >
                Rugs
              </Link>
            </div>
            <div className="flex flex-col space-y-2 text-sm pt-2">
              <Link href="/about" className="px-2 py-1.5 hover:underline" onClick={() => setMobileMenuOpen(false)}>About QADRI</Link>
              <Link href="/bulk-orders" className="px-2 py-1.5 hover:underline font-semibold" onClick={() => setMobileMenuOpen(false)}>Bulk Orders &amp; Exports</Link>
              <Link href="/b2b" className="px-2 py-1.5 hover:underline" onClick={() => setMobileMenuOpen(false)}>B2B Commercial</Link>
              <Link href="/paper-bags" className="px-2 py-1.5 hover:underline" onClick={() => setMobileMenuOpen(false)}>Paper Bags Collection</Link>
              <Link href="/shop" className="px-2 py-1.5 hover:underline" onClick={() => setMobileMenuOpen(false)}>Rugs Collection</Link>
              <Link href="/contact" className="px-2 py-1.5 hover:underline" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
