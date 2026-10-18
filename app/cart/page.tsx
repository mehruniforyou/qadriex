'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { Plus, Minus, Trash2, ShoppingBag, Truck, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';

export default function CartPage() {
  const { items, updateQuantity, removeFromCart, clearCart, subtotalPaise, itemCount } = useCart();
  const [coupon, setCoupon] = useState('');
  const [appliedDiscount, setAppliedDiscount] = useState(0);
  const [couponError, setCouponError] = useState('');
  const [orderSuccess, setOrderSuccess] = useState<string | null>(null);

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (coupon.trim().toUpperCase() === 'ORUKY10') {
      setAppliedDiscount(10);
      setCouponError('');
    } else {
      setCouponError('Invalid coupon code. Try ORUKY10 for 10% off.');
    }
  };

  const discountAmount = Math.round((subtotalPaise * appliedDiscount) / 100);
  const totalPaise = subtotalPaise - discountAmount;

  const handleCheckout = () => {
    const generatedId = `ORK-${Math.floor(10000000 + Math.random() * 90000000)}`;
    setOrderSuccess(generatedId);
    clearCart();
  };

  if (orderSuccess) {
    return (
      <div className="py-20 o-container max-w-lg text-center space-y-6">
        <div className="size-20 rounded-full bg-mint/20 text-mint flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h1 className="o-display text-3xl font-bold">Order Confirmed!</h1>
        <p className="text-sm text-muted">
          Your order <span className="font-mono font-bold text-text">{orderSuccess}</span> has entered our studio print queue. We have sent tracking and confirmation details to your email.
        </p>
        <div className="p-5 rounded-2xl bg-surface-2 text-xs text-muted text-left space-y-2">
          <div className="flex justify-between">
            <span>Status:</span>
            <span className="text-mint font-semibold">Queued on Bambu Lab P2S</span>
          </div>
          <div className="flex justify-between">
            <span>Estimated Dispatch:</span>
            <span className="font-semibold text-text">3–4 business days</span>
          </div>
          <div className="flex justify-between">
            <span>Shipping:</span>
            <span className="font-semibold text-text">Free BlueDart / Delhivery Express</span>
          </div>
        </div>
        <div className="pt-4">
          <Link href="/frames" className="o-btn-primary">
            Explore More Pieces
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="py-12 md:py-20 space-y-12">
      <header className="o-container max-w-5xl">
        <h1 className="o-display text-3xl sm:text-4xl md:text-5xl font-bold">Your Cart</h1>
        <p className="text-sm text-muted mt-1">
          Review your Oruky collectibles and check out. Made to order — 12–15 days for delivery.
        </p>
      </header>

      <section className="o-container max-w-5xl">
        {items.length === 0 ? (
          <div className="o-card p-12 text-center max-w-md mx-auto space-y-4">
            <div className="w-16 h-16 rounded-full bg-surface-2 flex items-center justify-center mx-auto text-muted">
              <ShoppingBag className="w-8 h-8" />
            </div>
            <h2 className="o-display font-bold text-xl">Your cart is empty</h2>
            <p className="text-xs text-muted max-w-xs mx-auto leading-relaxed">
              There&apos;s always something new running in the printer. Pick your favourite piece.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
              <Link href="/frames" className="o-btn-primary">
                Browse 3D Frames
              </Link>
              <Link href="/shop" className="o-btn-ghost">
                Browse Collectibles
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-10 items-start">
            {/* Items List */}
            <div className="lg:col-span-2 space-y-4">
              <div className="o-card divide-y divide-[var(--border)] overflow-hidden">
                {items.map((item) => (
                  <div key={item.product.id} className="p-5 sm:p-6 flex gap-4 sm:gap-6">
                    <img
                      src={item.product.localImageUrl || item.product.imageUrl}
                      alt={item.product.name}
                      className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl object-cover bg-surface-2 shrink-0 border border-app"
                      style={{ borderColor: 'var(--border)' }}
                    />
                    <div className="flex-1 min-w-0 flex flex-col justify-between">
                      <div>
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <Link
                              href={item.product.categoryType === 'frames' ? `/frames/product/${item.product.slug}` : `/product/${item.product.slug}`}
                              className="font-bold text-base sm:text-lg hover:underline truncate block"
                            >
                              {item.product.name}
                            </Link>
                            <p className="text-xs text-muted mt-0.5">{item.product.tagline}</p>
                          </div>
                          <button
                            onClick={() => removeFromCart(item.product.id)}
                            className="text-muted hover:text-danger p-1 cursor-pointer transition-colors"
                            aria-label="Remove item"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>

                        {item.selectedColorway && (
                          <span className="o-badge text-[10px] bg-surface-2 text-muted mt-2 inline-block">
                            Finish: {item.selectedColorway}
                          </span>
                        )}
                      </div>

                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center border border-app rounded-lg" style={{ borderColor: 'var(--border)' }}>
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                            className="p-1.5 hover:bg-surface-2 transition-colors cursor-pointer"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="px-3 text-xs font-semibold tabular-nums">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                            className="p-1.5 hover:bg-surface-2 transition-colors cursor-pointer"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        <span className="font-bold text-base sm:text-lg">
                          ₹{(item.product.pricePaise * item.quantity) / 100}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Order Summary Column */}
            <div className="space-y-6">
              <div className="o-card p-6 space-y-4">
                <h2 className="o-display font-bold text-lg">Order Summary</h2>

                <div className="space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span className="text-muted">Subtotal ({itemCount} items)</span>
                    <span className="font-semibold">₹{subtotalPaise / 100}</span>
                  </div>

                  {appliedDiscount > 0 && (
                    <div className="flex justify-between text-mint">
                      <span>Promo Discount ({appliedDiscount}%)</span>
                      <span className="font-semibold">-₹{discountAmount / 100}</span>
                    </div>
                  )}

                  <div className="flex justify-between">
                    <span className="text-muted">Shipping</span>
                    <span className="font-semibold text-mint">Free Express</span>
                  </div>

                  <div className="flex justify-between text-base font-bold pt-3 border-t border-app" style={{ borderColor: 'var(--border)' }}>
                    <span>Total</span>
                    <span>₹{totalPaise / 100}</span>
                  </div>
                </div>

                {/* Promo Code Form */}
                <form onSubmit={handleApplyCoupon} className="pt-2">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Promo code (e.g. ORUKY10)"
                      value={coupon}
                      onChange={(e) => setCoupon(e.target.value)}
                      className="o-input !py-2 text-xs uppercase font-mono"
                    />
                    <button type="submit" className="o-btn-ghost !py-2 !px-4 text-xs font-bold cursor-pointer">
                      Apply
                    </button>
                  </div>
                  {couponError && <p className="text-[11px] text-danger mt-1">{couponError}</p>}
                  {appliedDiscount > 0 && <p className="text-[11px] text-mint mt-1">✓ 10% discount applied!</p>}
                </form>

                <button
                  onClick={handleCheckout}
                  className="o-btn-primary w-full justify-center py-3.5 text-sm gap-2 cursor-pointer"
                >
                  Place Order · ₹{totalPaise / 100} <ArrowRight className="w-4 h-4" />
                </button>

                <div className="flex items-center justify-center gap-2 text-[11px] text-muted pt-2">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Secure 256-bit SSL encrypted checkout</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
