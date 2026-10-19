import { redirect } from 'next/navigation';
import { FRAMES } from '@/data/products';

export function generateStaticParams() {
  return FRAMES.map((product) => ({
    slug: product.slug,
  }));
}

export default function FrameProductRedirectPage({ params }: { params: { slug: string } }) {
  redirect(`/paper-bags/product/${params.slug}`);
}
