import React from 'react';
import Link from 'next/link';
import { ArrowRight, BookOpen, Calendar, Clock } from 'lucide-react';

export const metadata = {
  title: 'The QADRI Journal · Craft Notes & Manufacturing Logs',
  description: 'Articles and guides on artisanal rug weaving, high-GSM kraft packaging, and international export logistics from QADRI.',
};

export default function JournalPage() {
  const articles = [
    {
      id: 'kraft-paper-gsm-guide',
      title: 'The B2B Guide to Paper Bag GSM: Choosing the Right Strength for Your Retail Brand',
      date: 'October 2026',
      readTime: '5 min read',
      tag: 'Packaging Engineering',
      excerpt: 'How to evaluate tensile tear resistance, burst factor, and load capacities between 120 GSM, 180 GSM, and 300 GSM virgin kraft stocks.',
    },
    {
      id: 'jaipur-hand-tufting-craft',
      title: 'Inside Our Jaipur Workshop: The Architecture of a Hand-Tufted Wool Rug',
      date: 'September 2026',
      readTime: '6 min read',
      tag: 'Artisan Craft',
      excerpt: 'From 100% pure New Zealand wool yarn spinning to canvas stretching, high-density tufting guns, and artisan relief shearing.',
    },
    {
      id: 'ocean-export-logistics',
      title: 'Exporting Indian Textiles & Packaging: Sea Freight (FCL/LCL) and Customs Compliance',
      date: 'August 2026',
      readTime: '7 min read',
      tag: 'Global Trade',
      excerpt: 'A comprehensive walkthrough of Certificate of Origin, HS Code classification, moisture-barrier wrapping, and container port logistics.',
    },
    {
      id: 'sustainable-water-based-inks',
      title: 'Why We Exclusively Use Water-Based Food-Safe Inks on Custom Utility Bags',
      date: 'July 2026',
      readTime: '4 min read',
      tag: 'Sustainability',
      excerpt: 'Balancing razor-sharp brand Pantone fidelity with 100% biodegradability and compostable retail standards.',
    },
  ];

  return (
    <div className="py-12 md:py-20 space-y-12">
      <header className="o-container pt-4 pb-8 max-w-3xl">
        <span className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] font-bold text-primary">
          <span className="block h-px w-7 bg-primary" />
          The Manufacturing Log
        </span>
        <h1 className="o-display text-4xl md:text-6xl font-bold tracking-tight mt-4 leading-[1.05]">
          The QADRI Journal.
        </h1>
        <p className="text-lg text-muted mt-4 leading-relaxed">
          Craft insights, material science guides, packaging engineering notes, and export logistics from our workshops in India.
        </p>
      </header>

      <section className="o-container max-w-3xl space-y-6">
        {articles.map((art) => (
          <article
            key={art.id}
            className="o-card p-6 md:p-8 space-y-4 transition-all duration-300 hover:shadow-lift"
          >
            <div className="flex flex-wrap items-center gap-3 text-xs text-muted">
              <span className="o-badge bg-primary/10 text-primary font-bold">
                {art.tag}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" /> {art.date}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" /> {art.readTime}
              </span>
            </div>

            <h2 className="o-display text-xl md:text-2xl font-bold hover:text-primary transition-colors">
              {art.title}
            </h2>

            <p className="text-sm text-muted leading-relaxed">
              {art.excerpt}
            </p>

            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:underline"
              >
                Inquire about custom orders <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
