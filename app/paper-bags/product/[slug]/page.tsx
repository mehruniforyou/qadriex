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
  if (!product) return { title: 'Product Not Found · QADRI' };

  return {
    title: `${product.name} · Custom Utility Paper Bags · QADRI`,
    description: product.tagline || product.story.slice(0, 160),
    openGraph: {
      title: `${product.name} · Custom Utility Paper Bags · QADRI`,
      description: product.tagline,
      images: [product.localImageUrl || product.imageUrl],
    },
  };
}

export default function PaperBagProductPage({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug);
  if (!product) notFound();

  const related = FRAMES.filter((f) => f.id !== product.id);

  return <ProductDetailView product={product} relatedProducts={related} />;
}
