import React from 'react';
import { notFound } from 'next/navigation';
import { COLLECTIBLES, getProductBySlug } from '@/data/products';
import ProductDetailView from '@/components/ProductDetailView';

export function generateStaticParams() {
  return COLLECTIBLES.map((product) => ({
    slug: product.slug,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug);
  if (!product) return { title: 'Product Not Found · QADRI' };

  return {
    title: `${product.name} — ${product.tagline} · QADRI`,
    description: product.tagline || product.story.slice(0, 160),
    openGraph: {
      title: `${product.name} — ${product.tagline} · QADRI`,
      description: product.tagline,
      images: [product.localImageUrl || product.imageUrl],
    },
  };
}

export default function CollectibleProductPage({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug);
  if (!product) notFound();

  const related = COLLECTIBLES.filter((c) => c.id !== product.id);

  return <ProductDetailView product={product} relatedProducts={related} />;
}
