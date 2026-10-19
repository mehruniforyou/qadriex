'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Search, Sun, Moon, Heart, ShoppingBag, Menu, X, ArrowLeftRight } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';
import { useCart } from '@/context/CartContext';
import { PRODUCTS } from '@/data/products';

function NavLink({
  href,
  children,
  active,
}: {
  href: string;
  children: React.ReactNode;
  active?: boolean;
}) {
  return (
    <Link
      href={href}
      className="relative inline-block py-1 group transition-colors duration-200"
      style={{ color: active ? 'var(--text)' : 'var(--text-muted)' }}
    >
      <span className="group-hover:text-app transition-colors duration-200">{children}</span>
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute left-0 right-0 -bottom-0.5 h-[1.5px] origin-left transition-transform duration-300 ${
          active ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
        }`}
        style={{ background: 'var(--primary)' }}
      />
    </Link>
  );
}

function WorldSwitcher({
  isPaperBags,
  onClick,
  className = '',
}: {
  isPaperBags: boolean;
  onClick?: () => void;
  className?: string;
}) {
  const item = isPaperBags
    ? { href: '/shop', label: 'Rugs' }
    : { href: '/paper-bags', label: 'Paper Bags' };

  return (
    <Link
      href={item.href}
      onClick={onClick}
      className={`o-chip !h-8 !px-3 !text-[12px] transition font-semibold ${className}`}
      style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}
    >
      <ArrowLeftRight className="w-3 h-3 mr-1" aria-hidden="true" />
      {item.label}
    </Link>
  );
}

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

  // Exact scroll behavior cloned from oruky.com
  useEffect(() => {
    function handleScroll() {
      const headerEl = headerRef.current;
      if (!headerEl) return;
      const t = window.scrollY;
      const isScrolled = headerEl.classList.contains('is-scrolled');
      if (!isScrolled && t > 60) {
        headerEl.classList.add('is-scrolled');
      } else if (isScrolled && t < 16) {
        headerEl.classList.remove('is-scrolled');
      }
    }
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

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

  // Close search dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setSearchOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
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
        <div className="header-top-row">
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
          <form
            onSubmit={handleSearchSubmit}
            role="search"
            ref={searchRef}
            className="hidden md:block flex-1 max-w-xl mx-6 lg:mx-10 relative"
          >
            <div className="relative transition-shadow duration-200">
              <Search className="lucide lucide-search absolute left-4 top-1/2 -translate-y-1/2 text-muted pointer-events-none w-4 h-4" />
              <input
                type="search"
                placeholder="Search products, categories, pages…"
                className="o-input !rounded-full pl-11 pr-20 h-11 text-[15px]"
                role="combobox"
                aria-label="Search"
                aria-autocomplete="list"
                aria-expanded={searchOpen}
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
            </div>

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
                        href={p.categoryType === 'frames' || p.categoryType === 'paper-bags' ? `/paper-bags/product/${p.slug}` : `/product/${p.slug}`}
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
                          {p.pricePaise > 0 ? `₹${p.pricePaise / 100}` : 'Request Quote'}
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
                    No items found matching &quot;{searchQuery}&quot;
                  </div>
                )}
              </div>
            )}
          </form>

          {/* Right actions */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            {/* Day / Night Theme Button */}
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={`${theme} mode. Switch to ${theme === 'light' ? 'night' : 'day'} mode.`}
              className="o-chip !h-10 !px-4 hover:scale-105 transition-transform cursor-pointer"
            >
              {theme === 'light' ? (
                <Sun className="w-3.5 h-3.5" />
              ) : (
                <Moon className="w-3.5 h-3.5" />
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
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open menu"
              className="md:hidden o-chip !h-10 !w-10 !px-0 !py-0 grid place-items-center cursor-pointer"
            >
              <Menu className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Sub-Navigation Rail */}
        <div className="header-nav-outer">
          <nav aria-label="Primary" className="header-nav-rail hidden md:flex items-center justify-center">
            <ul className="flex items-center gap-7 lg:gap-9 text-[13px] font-semibold tracking-tight">
              {isPaperBags ? (
                <>
                  <li>
                    <NavLink
                      href="/paper-bags"
                      active={pathname === '/paper-bags' || pathname === '/frames'}
                    >
                      All Paper Bags
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      href="/bulk-orders"
                      active={pathname === '/bulk-orders'}
                    >
                      Bulk &amp; Custom
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      href="/b2b"
                      active={pathname === '/b2b'}
                    >
                      Export &amp; B2B
                    </NavLink>
                  </li>
                  <li className="ml-1">
                    <WorldSwitcher isPaperBags={true} />
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <NavLink
                      href="/shop"
                      active={pathname === '/shop'}
                    >
                      All Rugs
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      href="/shop?c=cafe"
                      active={pathname === '/shop' && false}
                    >
                      Custom &amp; Tufted
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      href="/shop?c=deskmate"
                      active={false}
                    >
                      Luxury &amp; Area
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      href="/bulk-orders"
                      active={pathname === '/bulk-orders'}
                    >
                      Wholesale &amp; Export
                    </NavLink>
                  </li>
                  <li className="ml-1">
                    <WorldSwitcher isPaperBags={false} />
                  </li>
                </>
              )}
            </ul>
          </nav>
        </div>

        {/* Mobile Slide-out Side Drawer (exact oruky structure) */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-[60] md:hidden">
            <div
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setMobileMenuOpen(false)}
              aria-hidden="true"
            />
            <div
              className="absolute top-0 right-0 h-full w-[88%] max-w-sm shadow-2xl flex flex-col"
              style={{ background: 'var(--bg)' }}
            >
              <div
                className="flex items-center justify-between p-4 border-b border-app"
                style={{ borderColor: 'var(--border)' }}
              >
                <span className="o-display font-semibold">Menu</span>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Close"
                  className="o-chip cursor-pointer"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Mobile Search */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (searchQuery.trim()) {
                    setMobileMenuOpen(false);
                    router.push(`/shop?q=${encodeURIComponent(searchQuery.trim())}`);
                  }
                }}
                className="p-4 border-b border-app"
                style={{ borderColor: 'var(--border)' }}
              >
                <div className="relative">
                  <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-muted" />
                  <input
                    type="search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="search…"
                    className="o-input pl-9 text-xs"
                  />
                </div>
              </form>

              {/* Mobile Navigation List */}
              <nav className="flex-1 overflow-y-auto p-4 space-y-6">
                <div>
                  <div className="text-[11px] uppercase tracking-widest font-bold text-muted mb-3">
                    {isPaperBags ? 'Paper Bags' : 'Luxury Rugs'}
                  </div>
                  <ul className="space-y-1.5 text-sm">
                    {isPaperBags ? (
                      <>
                        <li>
                          <Link
                            href="/paper-bags"
                            onClick={() => setMobileMenuOpen(false)}
                            className="block px-3 py-2.5 rounded-lg hover:bg-surface-2 transition font-medium"
                          >
                            All Paper Bags
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/bulk-orders"
                            onClick={() => setMobileMenuOpen(false)}
                            className="block px-3 py-2.5 rounded-lg hover:bg-surface-2 transition font-medium"
                          >
                            Bulk &amp; Custom Orders
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/b2b"
                            onClick={() => setMobileMenuOpen(false)}
                            className="block px-3 py-2.5 rounded-lg hover:bg-surface-2 transition font-medium"
                          >
                            Export &amp; B2B Packaging
                          </Link>
                        </li>
                      </>
                    ) : (
                      <>
                        <li>
                          <Link
                            href="/shop"
                            onClick={() => setMobileMenuOpen(false)}
                            className="block px-3 py-2.5 rounded-lg hover:bg-surface-2 transition font-medium"
                          >
                            All Rugs
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/shop?c=cafe"
                            onClick={() => setMobileMenuOpen(false)}
                            className="block px-3 py-2.5 rounded-lg hover:bg-surface-2 transition font-medium"
                          >
                            Custom &amp; Tufted
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/shop?c=deskmate"
                            onClick={() => setMobileMenuOpen(false)}
                            className="block px-3 py-2.5 rounded-lg hover:bg-surface-2 transition font-medium"
                          >
                            Luxury &amp; Area
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/bulk-orders"
                            onClick={() => setMobileMenuOpen(false)}
                            className="block px-3 py-2.5 rounded-lg hover:bg-surface-2 transition font-medium"
                          >
                            Wholesale &amp; Export
                          </Link>
                        </li>
                      </>
                    )}
                  </ul>
                </div>

                {/* World Switcher pill */}
                <div>
                  <WorldSwitcher
                    isPaperBags={isPaperBags}
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-full justify-center !h-10"
                  />
                </div>

                {/* Company Links */}
                <div>
                  <div className="text-[11px] uppercase tracking-widest font-bold text-muted mb-3">
                    Company &amp; Trade
                  </div>
                  <ul className="space-y-1.5 text-sm">
                    <li>
                      <Link
                        href="/about"
                        onClick={() => setMobileMenuOpen(false)}
                        className="block px-3 py-2.5 rounded-lg hover:bg-surface-2 transition font-medium"
                      >
                        About QADRI
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/bulk-orders"
                        onClick={() => setMobileMenuOpen(false)}
                        className="block px-3 py-2.5 rounded-lg hover:bg-surface-2 transition font-medium"
                      >
                        Bulk Orders &amp; Global Exports
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/b2b"
                        onClick={() => setMobileMenuOpen(false)}
                        className="block px-3 py-2.5 rounded-lg hover:bg-surface-2 transition font-medium"
                      >
                        B2B Manufacturing
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/contact"
                        onClick={() => setMobileMenuOpen(false)}
                        className="block px-3 py-2.5 rounded-lg hover:bg-surface-2 transition font-medium"
                      >
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
