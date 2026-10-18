import React from 'react';
import { notFound } from 'next/navigation';
import { FRAMES, getProductBySlug } from '@/data/products';
import ProductDetailView from '@/components/ProductDetailView';

export function generateStaticParams() {
  return FRAMES.map((product) => ({
    slug: product.slug,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug);
  if (!product) return { title: 'Piece Not Found · Oruky' };

  return {
    title: `${product.name} — 3D-Printed Journey Frame · Oruky`,
    description: product.tagline || product.story.slice(0, 160),
    openGraph: {
      title: `${product.name} — 3D-Printed Journey Frame · Oruky`,
      description: product.tagline,
      images: [product.localImageUrl || product.imageUrl],
    },
  };
}

export default function FrameProductPage({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug);
  if (!product) notFound();

  const related = FRAMES.filter((f) => f.id !== product.id);

  return <ProductDetailView product={product} relatedProducts={related} />;
}
