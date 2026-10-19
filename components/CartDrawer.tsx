'use client';

import React from 'react';
import Link from 'next/link';
import { X, Plus, Minus, Trash2, ShoppingBag, ShieldCheck, Truck } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function CartDrawer() {
  const { items, isCartOpen, setIsCartOpen, updateQuantity, removeFromCart, subtotalPaise, itemCount } = useCart();

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex justify-end">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
        onClick={() => setIsCartOpen(false)}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        className="relative z-10 w-full max-w-md h-full bg-surface border-l border-app shadow-2xl flex flex-col"
        style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-app" style={{ borderColor: 'var(--border)' }}>
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5" />
            <h2 className="o-display font-bold text-lg">Your Cart</h2>
            <span className="text-xs text-muted">({itemCount} {itemCount === 1 ? 'item' : 'items'})</span>
          </div>
          <button
            onClick={() => setIsCartOpen(false)}
            className="p-1 rounded-lg hover:bg-surface-2 transition-colors cursor-pointer"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Free Shipping Banner */}
        <div className="bg-surface-2 px-5 py-2.5 flex items-center gap-2 text-xs font-medium">
          <Truck className="w-4 h-4 text-primary shrink-0" />
          <span>Free express delivery across India on every order</span>
        </div>

        {/* Cart Items List */}
        <div className="flex-1 overflow-y-auto p-5 divide-y divide-[var(--border)]">
          {items.length === 0 ? (
            <div className="text-center py-16 space-y-4">
              <div className="w-16 h-16 rounded-full bg-surface-2 flex items-center justify-center mx-auto text-muted">
                <ShoppingBag className="w-8 h-8" />
              </div>
              <h3 className="o-display font-bold text-lg">Your cart is empty</h3>
              <p className="text-sm text-muted max-w-xs mx-auto">
                There&apos;s always something new running in the printer. Pick your favourite piece.
              </p>
              <div className="flex flex-col gap-2 pt-2">
                <Link
                  href="/frames"
                  onClick={() => setIsCartOpen(false)}
                  className="o-btn-primary"
                >
                  Browse 3D Frames
                </Link>
                <Link
                  href="/shop"
                  onClick={() => setIsCartOpen(false)}
                  className="o-btn-ghost"
                >
                  Browse Collectibles
                </Link>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div key={item.product.id} className="pt-4 first:pt-0 flex gap-4">
                  <img
                    src={item.product.localImageUrl || item.product.imageUrl}
                    alt={item.product.name}
                    className="w-20 h-20 rounded-xl object-cover bg-surface-2 shrink-0 border border-app"
                    style={{ borderColor: 'var(--border)' }}
                  />
                  <div className="flex-1 min-w-0 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <Link
                          href={item.product.categoryType === 'frames' ? `/paper-bags/product/${item.product.slug}` : `/product/${item.product.slug}`}
                          onClick={() => setIsCartOpen(false)}
                          className="font-bold text-sm hover:underline truncate"
                        >
                          {item.product.name}
                        </Link>
                        <button
                          onClick={() => removeFromCart(item.product.id)}
                          className="text-muted hover:text-danger transition-colors cursor-pointer p-0.5"
                          aria-label="Remove item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                      <p className="text-xs text-muted mt-0.5 truncate">{item.product.tagline}</p>
                      {item.selectedColorway && (
                        <p className="text-[11px] text-muted mt-0.5">Color: {item.selectedColorway}</p>
                      )}
                    </div>

                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center border border-app rounded-lg" style={{ borderColor: 'var(--border)' }}>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          className="px-2 py-1 hover:bg-surface-2 transition-colors cursor-pointer"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2.5 text-xs font-semibold tabular-nums">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="px-2 py-1 hover:bg-surface-2 transition-colors cursor-pointer"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <span className="font-bold text-sm">
                        ₹{(item.product.pricePaise * item.quantity) / 100}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer Summary */}
        {items.length > 0 && (
          <div className="p-5 border-t border-app space-y-3 bg-surface-2" style={{ borderColor: 'var(--border)' }}>
            <div className="space-y-1.5 text-sm">
              <div className="flex justify-between">
                <span className="text-muted">Subtotal</span>
                <span className="font-semibold">₹{subtotalPaise / 100}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted">Shipping</span>
                <span className="font-semibold text-mint">Free</span>
              </div>
              <div className="flex justify-between text-base font-bold pt-2 border-t border-app" style={{ borderColor: 'var(--border)' }}>
                <span>Total</span>
                <span>₹{subtotalPaise / 100}</span>
              </div>
            </div>

            <Link
              href="/cart"
              onClick={() => setIsCartOpen(false)}
              className="o-btn-primary w-full text-center justify-center py-3.5"
            >
              Checkout · ₹{subtotalPaise / 100}
            </Link>

            <div className="flex items-center justify-center gap-2 text-[11px] text-muted pt-1">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Safe payment via UPI, Cards, NetBanking</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
