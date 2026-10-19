'use client';

import React from 'react';
import Link from 'next/link';
import { ShoppingBag, ArrowRight, Clock, Box } from 'lucide-react';
import { Product } from '@/data/products';
import { useCart } from '@/context/CartContext';

function WhatsAppIcon({ size = 14 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        maxWidth: `${size}px`,
        maxHeight: `${size}px`,
        minWidth: `${size}px`,
        minHeight: `${size}px`,
        display: 'inline-block',
        verticalAlign: 'middle',
        flexShrink: 0,
      }}
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.711 1.457h.004c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.414z"/>
    </svg>
  );
}

interface ProductCardProps {
  product: Product;
  priority?: boolean;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const href = product.categoryType === 'frames' ? `/frames/product/${product.slug}` : `/product/${product.slug}`;

  const hasDiscount = product.compareAtPaise && product.compareAtPaise > product.pricePaise;

  const whatsappMessage = `Hi QADRI, I would like to inquire about "${product.name}". Please share details and a quotation.`;
  const whatsappUrl = `https://wa.me/919829062390?text=${encodeURIComponent(whatsappMessage)}`;

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
              Paper Bag
            </span>
          ) : (
            <span className="o-chip !text-[10px] !py-1 !px-2.5 bg-black/60 text-white backdrop-blur-md border-0 capitalize">
              {product.category === 'cafe' ? 'Custom & Tufted' : product.category === 'deskmate' ? 'Luxury & Area' : product.category === 'keychains' ? 'Commercial & B2B' : 'Handcrafted Rug'}
            </span>
          )}
          {product.isPreorder && (
            <span className="o-badge bg-[#ffd93d38] text-[#7a5c00] dark:text-[#ffd93d]">
              Made to order
            </span>
          )}
        </div>

        {/* Quick Add Overlay Button (Paper Bags with cart functionality) */}
        {product.categoryType === 'frames' && (
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
        )}
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
                {product.categoryType === 'shop'
                  ? `${(product.dimensionsMm.w / 1000).toFixed(1)}m × ${(product.dimensionsMm.h / 1000).toFixed(1)}m`
                  : `${product.dimensionsMm.w}×${product.dimensionsMm.h} mm`}
              </span>
            )}
            {product.categoryType === 'shop' ? (
              <span className="inline-flex items-center gap-1">
                <Clock className="w-3 h-3" />
                Artisan Hand-Tufted
              </span>
            ) : product.printMinutes > 0 ? (
              <span className="inline-flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {product.printMinutes} min
              </span>
            ) : null}
          </div>
        </div>

        {/* Price & CTAs - exactly matches oruky.com/frames placing */}
        <div className="pt-3.5 mt-3 border-t border-app space-y-2.5" style={{ borderColor: 'var(--border)' }}>
          <div className="flex items-center justify-between gap-2">
            <div>
              <div className="flex items-baseline gap-2">
                {product.categoryType === 'shop' || product.pricePaise === 0 ? (
                  <span className="font-bold text-base text-primary">
                    Request Quote
                  </span>
                ) : (
                  <>
                    <span className="font-bold text-base md:text-lg">
                      ₹{product.pricePaise / 100}
                    </span>
                    {hasDiscount && (
                      <span className="text-xs text-muted line-through">
                        ₹{product.compareAtPaise! / 100}
                      </span>
                    )}
                  </>
                )}
              </div>
              <span className="text-[10px] text-muted font-medium block">
                {product.categoryType === 'shop' ? 'B2B Wholesale Catalog' : 'Free Shipping'}
              </span>
            </div>

            {/* Customise CTA pill */}
            <Link
              href={href}
              className="o-btn-ghost !py-1.5 !px-3 !text-xs gap-1 font-semibold hover:border-primary hover:text-primary transition-colors shrink-0"
            >
              Customise <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

          {/* Contact Us WhatsApp CTA Pill */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="w-full inline-flex items-center justify-center gap-2 py-2 px-3 rounded-full text-xs font-semibold bg-[#25D366]/15 text-[#128C7E] dark:text-[#25D366] hover:bg-[#25D366]/25 transition-all border border-[#25D366]/30 hover:border-[#25D366]/50 cursor-pointer"
          >
            <WhatsAppIcon size={14} />
            <span>Contact Us</span>
          </a>
        </div>
      </div>
    </article>
  );
}
