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
  ChevronRight,
  Plus,
  Minus,
  ShoppingBag,
  Zap,
  MessageSquare,
  Mail,
} from 'lucide-react';

function WhatsAppIcon({ size = 16 }: { size?: number }) {
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

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedColorway);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const whatsappInquiryUrl = `https://wa.me/919829062390?text=${encodeURIComponent(
    `Hello QADRI team, I would like to request a quote for "${product.name}" (SKU: ${product.slug}). Required quantity: ${quantity} units.`
  )}`;

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
            {product.categoryType === 'frames' ? 'Paper Bags' : 'Rugs'}
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
                {product.categoryType === 'frames'
                  ? 'Custom Utility & Retail Paper Bags'
                  : `Bespoke Handcrafted Rug · ${product.category === 'cafe' ? 'Custom & Tufted' : product.category === 'deskmate' ? 'Luxury & Area' : 'Commercial & B2B'}`}
              </span>
              <h1 className="o-display text-3xl sm:text-4xl md:text-5xl font-bold mt-3 leading-tight">
                {product.name}
              </h1>
              <p className="o-hand text-xl md:text-2xl mt-1 text-primary">
                {product.tagline}
              </p>
            </div>

            {/* Price Box */}
            {product.categoryType === 'shop' || product.pricePaise === 0 ? (
              <div className="p-5 rounded-2xl bg-surface-2 space-y-2 border border-app" style={{ borderColor: 'var(--border)' }}>
                <div className="flex items-center justify-between gap-3 flex-wrap">
                  <span className="font-bold text-2xl sm:text-3xl text-primary">Request Quote</span>
                  <span className="o-badge bg-primary/10 text-primary text-xs font-semibold">
                    B2B Wholesale Catalog
                  </span>
                </div>
                <p className="text-xs text-muted leading-relaxed">
                  Bespoke dimensions, custom pile depths, and volume tier pricing for architects, interior designers, and commercial projects.
                </p>
              </div>
            ) : (
              <div className="p-4 rounded-2xl bg-surface-2 space-y-1">
                <div className="flex items-baseline gap-3">
                  <span className="font-bold text-3xl sm:text-4xl">₹{product.pricePaise / 100}</span>
                  {hasDiscount && (
                    <span className="text-base text-muted line-through">
                      ₹{product.compareAtPaise! / 100}
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <span className="text-mint font-semibold">Free Pan-India Delivery</span>
                  <span className="text-muted">· Inclusive of all taxes</span>
                </div>
              </div>
            )}

            {/* Colorways */}
            {product.colorways && product.colorways.length > 0 && (
              <div className="space-y-2">
                <label className="text-xs font-semibold text-muted block">
                  Select Specification / Finish: <b className="text-text">{selectedColorway}</b>
                </label>
                <div className="flex flex-wrap gap-2">
                  {product.colorways.map((c) => (
                    <button
                      key={c}
                      onClick={() => setSelectedColorway(c)}
                      className={`o-chip !py-1.5 !px-3.5 text-xs cursor-pointer transition-all ${
                        selectedColorway === c
                          ? 'bg-primary text-white font-bold ring-2 ring-primary/30'
                          : 'hover:bg-surface-2'
                      }`}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* CTA Buttons */}
            {product.categoryType === 'shop' || product.pricePaise === 0 ? (
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3">
                  <div className="flex items-center border border-app rounded-full p-1 bg-surface-2" style={{ borderColor: 'var(--border)' }}>
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="p-2 rounded-full hover:bg-surface transition-colors cursor-pointer"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="px-4 text-sm font-bold tabular-nums">{quantity} units</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="p-2 rounded-full hover:bg-surface transition-colors cursor-pointer"
                      aria-label="Increase quantity"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <a
                    href={whatsappInquiryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 o-btn-primary !py-3.5 gap-2 cursor-pointer text-center justify-center font-bold bg-[#25D366] text-black hover:bg-[#20ba5a]"
                  >
                    <WhatsAppIcon size={18} /> Request Quote via WhatsApp
                  </a>
                </div>

                <a
                  href={`mailto:contact@qadriex.com?subject=${encodeURIComponent(`Quote Request: ${product.name} (${product.slug})`)}&body=${encodeURIComponent(`Hello QADRI Team,\n\nI am requesting a commercial quotation for:\n\nProduct: ${product.name}\nSKU: ${product.slug}\nUnits: ${quantity}\n\nPlease provide spec sheet, lead time, and B2B pricing.\n\nThank you!`)}`}
                  className="w-full o-btn-ghost !py-3 gap-2 cursor-pointer font-bold justify-center"
                >
                  <Mail className="w-4 h-4 text-primary" /> Request Email Specification &amp; Quote
                </a>
              </div>
            ) : (
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3">
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

                  <button
                    onClick={handleAddToCart}
                    className="flex-1 o-btn-primary !py-3.5 gap-2 cursor-pointer"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    {added ? 'Added to Cart!' : `Add to Cart · ₹${(product.pricePaise * quantity) / 100}`}
                  </button>
                </div>

                <a
                  href={whatsappInquiryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-full text-xs font-semibold bg-[#25D366]/15 text-[#128C7E] dark:text-[#25D366] hover:bg-[#25D366]/25 transition-all border border-[#25D366]/30 cursor-pointer"
                >
                  <WhatsAppIcon size={16} /> Contact Us on WhatsApp for Bulk Order
                </a>
              </div>
            )}

            {/* Trust Assurances */}
            <div className="grid grid-cols-2 gap-3 text-xs pt-2">
              <div className="flex items-center gap-2 text-muted">
                <Sparkles className="w-4 h-4 text-primary shrink-0" />
                <span>{product.categoryType === 'shop' ? 'Artisan Hand-Tufted' : 'High-GSM Virgin Kraft'}</span>
              </div>
              <div className="flex items-center gap-2 text-muted">
                <Truck className="w-4 h-4 text-primary shrink-0" />
                <span>{product.categoryType === 'shop' ? 'Pan-India & Global Freight' : 'Fast Pan-India Dispatch'}</span>
              </div>
              <div className="flex items-center gap-2 text-muted">
                <ShieldCheck className="w-4 h-4 text-primary shrink-0" />
                <span>{product.categoryType === 'shop' ? '100% Quality Assurance' : 'Transit Damage Guarantee'}</span>
              </div>
              <div className="flex items-center gap-2 text-muted">
                <Layers className="w-4 h-4 text-primary shrink-0" />
                <span>{product.categoryType === 'shop' ? 'Custom Dimensions Available' : 'Reinforced Twisted Handles'}</span>
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
                    <span className="font-semibold">
                      {product.categoryType === 'shop'
                        ? `${(product.dimensionsMm.w / 1000).toFixed(1)}m × ${(product.dimensionsMm.h / 1000).toFixed(1)}m (${product.dimensionsMm.d}mm pile)`
                        : `${product.dimensionsMm.w} × ${product.dimensionsMm.h} × ${product.dimensionsMm.d} mm`}
                    </span>
                  </div>
                )}
                {product.weightGrams > 0 && (
                  <div>
                    <span className="text-muted block text-[11px]">Weight</span>
                    <span className="font-semibold">
                      {product.weightGrams > 1000 ? `${(product.weightGrams / 1000).toFixed(1)} kg` : `${product.weightGrams} grams`}
                    </span>
                  </div>
                )}
                <div>
                  <span className="text-muted block text-[11px]">Craft Technique</span>
                  <span className="font-semibold">{product.categoryType === 'shop' ? 'Artisan Hand-Tufted & Carved' : 'Flexo & Precision Converting'}</span>
                </div>
                <div>
                  <span className="text-muted block text-[11px]">Workshop</span>
                  <span className="font-semibold">QADRI Facilities, India</span>
                </div>
                <div>
                  <span className="text-muted block text-[11px]">Material</span>
                  <span className="font-semibold">{product.categoryType === 'shop' ? 'Pure Wool & Cotton Base' : 'Heavy-Duty 150–350 GSM Kraft'}</span>
                </div>
                <div>
                  <span className="text-muted block text-[11px]">Assurance</span>
                  <span className="font-semibold">{product.categoryType === 'shop' ? 'Commercial Grade Durability' : 'Reinforced Load-Bearing Integrity'}</span>
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
              <h3 className="font-bold text-sm">Packaging &amp; Dispatch</h3>
              <p className="text-xs text-muted leading-relaxed">
                {product.categoryType === 'shop'
                  ? 'Delivered rolled in protective moisture-barrier film and heavy woven outer canvas wrap for secure transit.'
                  : 'Bundled in export-grade weatherproof corrugated cartons with reinforced strapping and moisture-barrier silica packs.'}
              </p>
            </div>
            <div className="o-card p-6 space-y-3">
              <h3 className="font-bold text-sm">Quality &amp; Damage Guarantee</h3>
              <p className="text-xs text-muted leading-relaxed">
                All consignments are insured in transit. If items arrive damaged or deviate from agreed proofs, contact contact@qadriex.com within 48 hours for immediate priority replacement.
              </p>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-20 space-y-6">
            <h2 className="o-display text-2xl md:text-3xl font-bold">
              {product.categoryType === 'frames' ? 'Related Paper Bags' : 'More Artisan Rugs'}
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
