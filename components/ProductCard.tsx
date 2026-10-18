'use client';

import React from 'react';
import Link from 'next/link';
import { ShoppingBag, ArrowRight, Clock, Box } from 'lucide-react';
import { Product } from '@/data/products';
import { useCart } from '@/context/CartContext';

interface ProductCardProps {
  product: Product;
  priority?: boolean;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const href = product.categoryType === 'frames' ? `/frames/product/${product.slug}` : `/product/${product.slug}`;

  const hasDiscount = product.compareAtPaise && product.compareAtPaise > product.pricePaise;

  return (
    <article className="o-card flex flex-col overflow-hidden group hover:shadow-lift transition-all duration-300">
      {/* Image Container */}
      <Link href={href} className="relative aspect-square overflow-hidden bg-surface-2 block">
        <img
          src={product.localImageUrl || product.imageUrl}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />

        {/* Status / Category Badges */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10">
          {product.categoryType === 'frames' ? (
            <span className="o-chip !text-[10px] !py-1 !px-2.5 bg-black/60 text-white backdrop-blur-md border-0">
              3D Frame
            </span>
          ) : (
            <span className="o-chip !text-[10px] !py-1 !px-2.5 bg-black/60 text-white backdrop-blur-md border-0 capitalize">
              {product.category}
            </span>
          )}
          {product.isPreorder && (
            <span className="o-badge bg-[#ffd93d38] text-[#7a5c00] dark:text-[#ffd93d]">
              Made to order
            </span>
          )}
        </div>

        {/* Quick Add Overlay Button */}
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            addToCart(product);
          }}
          className="absolute bottom-3 right-3 p-2.5 rounded-full bg-surface text-text shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-200 hover:scale-110 cursor-pointer"
          aria-label={`Add ${product.name} to cart`}
          title="Quick add to cart"
        >
          <ShoppingBag className="w-4 h-4" />
        </button>
      </Link>

      {/* Product Content */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-start justify-between gap-2">
            <Link href={href} className="font-bold text-base md:text-lg hover:underline truncate">
              {product.name}
            </Link>
          </div>
          <p className="text-xs text-muted mt-1 line-clamp-2 leading-relaxed">
            {product.tagline}
          </p>

          {/* Specs / Features */}
          <div className="flex items-center gap-3 mt-3 text-[11px] text-muted">
            {product.dimensionsMm && (
              <span className="inline-flex items-center gap-1">
                <Box className="w-3 h-3" />
                {product.dimensionsMm.w}×{product.dimensionsMm.h} mm
              </span>
            )}
            {product.printMinutes > 0 && (
              <span className="inline-flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {product.printMinutes} min
              </span>
            )}
          </div>
        </div>

        {/* Price & CTA */}
        <div className="pt-4 mt-3 border-t border-app flex items-center justify-between" style={{ borderColor: 'var(--border)' }}>
          <div>
            <div className="flex items-baseline gap-2">
              <span className="font-bold text-base md:text-lg">
                ₹{product.pricePaise / 100}
              </span>
              {hasDiscount && (
                <span className="text-xs text-muted line-through">
                  ₹{product.compareAtPaise! / 100}
                </span>
              )}
            </div>
            <span className="text-[10px] text-mint font-semibold">Free Shipping</span>
          </div>

          <Link
            href={href}
            className="o-btn-ghost !py-1.5 !px-3 !text-xs gap-1"
          >
            View <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </div>
    </article>
  );
}
