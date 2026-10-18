'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Product } from '@/data/products';
import { useCart } from '@/context/CartContext';
import ProductCard from '@/components/ProductCard';
import {
  ShieldCheck,
  Truck,
  Sparkles,
  Clock,
  Box,
  Layers,
  Check,
  Star,
  ChevronRight,
  Plus,
  Minus,
  ShoppingBag,
  Zap,
} from 'lucide-react';

interface ProductDetailViewProps {
  product: Product;
  relatedProducts: Product[];
}

export default function ProductDetailView({ product, relatedProducts }: ProductDetailViewProps) {
  if (!product) return notFound();

  const { addToCart } = useCart();
  const [selectedImage, setSelectedImage] = useState(product.localImageUrl || product.imageUrl);
  const [selectedColorway, setSelectedColorway] = useState(product.colorways?.[0] || 'Default');
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  // Gallery array
  const allImages = [
    product.localImageUrl || product.imageUrl,
    ...(product.localGallery && product.localGallery.length > 0 ? product.localGallery : product.gallery || []),
  ].filter(Boolean);

  const hasDiscount = product.compareAtPaise && product.compareAtPaise > product.pricePaise;
  const savings = hasDiscount ? (product.compareAtPaise! - product.pricePaise) / 100 : 0;

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedColorway);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="py-8 md:py-14 space-y-16">
      {/* Breadcrumbs */}
      <div className="o-container">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-muted mb-6">
          <Link href="/" className="hover:underline">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link
            href={product.categoryType === 'frames' ? '/frames' : '/shop'}
            className="hover:underline capitalize"
          >
            {product.categoryType === 'frames' ? '3D Frames' : 'Collectibles'}
          </Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-text font-medium truncate">{product.name}</span>
        </nav>

        {/* Product Grid */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          {/* Left: Image Gallery */}
          <div className="space-y-4">
            <div className="o-card aspect-square overflow-hidden bg-surface-2 relative group">
              <img
                src={selectedImage}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {product.isPreorder && (
                <div className="absolute top-4 left-4 z-10">
                  <span className="o-badge bg-[#ffd93d38] text-[#7a5c00] dark:text-[#ffd93d]">
                    Made to order
                  </span>
                </div>
              )}
            </div>

            {/* Thumbnail selector */}
            {allImages.length > 1 && (
              <div className="flex gap-3 overflow-x-auto pb-2">
                {allImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(img)}
                    className={`relative w-20 h-20 rounded-xl overflow-hidden shrink-0 border-2 transition-all cursor-pointer ${
                      selectedImage === img ? 'border-primary ring-2 ring-primary/20' : 'border-transparent opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt={`${product.name} preview ${idx + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right: Product Actions & Specs */}
          <div className="space-y-6">
            <div>
              <span className="o-chip text-xs">
                {product.categoryType === 'frames' ? '3D journey frame' : `Collectible · ${product.category}`}
              </span>
              <h1 className="o-display text-3xl sm:text-4xl md:text-5xl font-bold mt-3 leading-tight">
                {product.name}
              </h1>
              <p className="o-hand text-xl md:text-2xl mt-1 text-primary">
                {product.tagline}
              </p>
            </div>

            {/* Price Box */}
            <div className="p-4 rounded-2xl bg-surface-2 space-y-1">
              <div className="flex items-baseline gap-3">
                <span className="font-bold text-3xl">₹{product.pricePaise / 100}</span>
                {hasDiscount && (
                  <>
                    <span className="text-base text-muted line-through">
                      ₹{product.compareAtPaise! / 100}
                    </span>
                    <span className="o-badge bg-mint/20 text-mint text-xs">
                      Save ₹{savings}
                    </span>
                  </>
                )}
              </div>
              <p className="text-xs text-muted">
                Taxes included. <b className="text-mint font-semibold">Free express delivery across India.</b>
              </p>
            </div>

            {/* Colorway selector */}
            {product.colorways && product.colorways.length > 0 && (
              <div className="space-y-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-muted">
                  Color / Finish: <b>{selectedColorway}</b>
                </span>
                <div className="flex flex-wrap gap-2">
                  {product.colorways.map((c) => (
                    <button
                      key={c}
                      onClick={() => setSelectedColorway(c)}
                      className={`o-chip !py-1.5 !px-3.5 text-xs font-bold cursor-pointer transition-all ${
                        selectedColorway === c ? 'bg-primary text-white' : 'hover:bg-surface-2'
                      }`}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity and Add to Cart */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3">
                {/* Quantity adjuster */}
                <div className="flex items-center border border-app rounded-full p-1 bg-surface-2" style={{ borderColor: 'var(--border)' }}>
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 rounded-full hover:bg-surface transition-colors cursor-pointer"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="px-4 text-sm font-bold tabular-nums">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 rounded-full hover:bg-surface transition-colors cursor-pointer"
                    aria-label="Increase quantity"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Add to Cart Button */}
                <button
                  onClick={handleAddToCart}
                  className="flex-1 o-btn-primary !py-3.5 gap-2 cursor-pointer"
                >
                  <ShoppingBag className="w-4 h-4" />
                  {added ? 'Added to Cart!' : `Add to Cart · ₹${(product.pricePaise * quantity) / 100}`}
                </button>
              </div>

              {/* Direct UPI Buy Button */}
              <button
                onClick={handleAddToCart}
                className="w-full o-btn-ghost !py-3 gap-2 cursor-pointer font-bold"
              >
                <Zap className="w-4 h-4 text-primary" /> Instant Checkout via UPI / Card
              </button>
            </div>

            {/* Trust Assurances */}
            <div className="grid grid-cols-2 gap-3 text-xs pt-2">
              <div className="flex items-center gap-2 text-muted">
                <Sparkles className="w-4 h-4 text-primary shrink-0" />
                <span>Numbered edition</span>
              </div>
              <div className="flex items-center gap-2 text-muted">
                <Truck className="w-4 h-4 text-primary shrink-0" />
                <span>Dispatches in 3–5 days</span>
              </div>
              <div className="flex items-center gap-2 text-muted">
                <ShieldCheck className="w-4 h-4 text-primary shrink-0" />
                <span>Transit damage reprint</span>
              </div>
              <div className="flex items-center gap-2 text-muted">
                <Layers className="w-4 h-4 text-primary shrink-0" />
                <span>Bambu Lab P2S precision</span>
              </div>
            </div>

            {/* Technical Specifications Card */}
            <div className="o-card p-5 space-y-4">
              <div className="text-[10px] font-bold uppercase tracking-wider text-muted">
                Technical Specifications
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs">
                {product.dimensionsMm && (
                  <div>
                    <span className="text-muted block text-[11px]">Dimensions</span>
                    <span className="font-semibold">{product.dimensionsMm.w} × {product.dimensionsMm.h} × {product.dimensionsMm.d} mm</span>
                  </div>
                )}
                {product.weightGrams > 0 && (
                  <div>
                    <span className="text-muted block text-[11px]">Weight</span>
                    <span className="font-semibold">{product.weightGrams} grams</span>
                  </div>
                )}
                {product.printMinutes > 0 && (
                  <div>
                    <span className="text-muted block text-[11px]">Print Time</span>
                    <span className="font-semibold">{product.printMinutes} mins (slow-cured)</span>
                  </div>
                )}
                <div>
                  <span className="text-muted block text-[11px]">Studio</span>
                  <span className="font-semibold">Pune &amp; Gurgaon</span>
                </div>
                <div>
                  <span className="text-muted block text-[11px]">Material</span>
                  <span className="font-semibold">Precision PLA+ Composite</span>
                </div>
                <div>
                  <span className="text-muted block text-[11px]">Certificate</span>
                  <span className="font-semibold">Numbered Authenticity</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Story & Details */}
        <div className="mt-16 grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-6">
            <div className="o-card p-6 md:p-8 space-y-4">
              <h2 className="o-display text-2xl font-bold">The Story</h2>
              <p className="text-muted text-sm md:text-base leading-relaxed whitespace-pre-line">
                {product.story}
              </p>
            </div>

            {product.function && (
              <div className="o-card p-6 md:p-8 space-y-3">
                <h3 className="o-display text-xl font-bold">Function &amp; Form</h3>
                <p className="text-muted text-sm md:text-base leading-relaxed">
                  {product.function}
                </p>
              </div>
            )}
          </div>

          <div className="space-y-6">
            <div className="o-card p-6 space-y-3">
              <h3 className="font-bold text-sm">Packaging &amp; Unboxing</h3>
              <p className="text-xs text-muted leading-relaxed">
                Shipped in shock-damped custom laser-cut foam, numbered metal certificate card, and serial wax-seal envelope.
              </p>
            </div>
            <div className="o-card p-6 space-y-3">
              <h3 className="font-bold text-sm">Reprint &amp; Returns Policy</h3>
              <p className="text-xs text-muted leading-relaxed">
                If your piece arrives with transit flaws, send us a photo within 7 days. We reprint and dispatch a replacement without hassle.
              </p>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-20 space-y-6">
            <h2 className="o-display text-2xl md:text-3xl font-bold">
              {product.categoryType === 'frames' ? 'More journeys' : 'Related collectibles'}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.slice(0, 4).map((rel) => (
                <ProductCard key={rel.id} product={rel} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
