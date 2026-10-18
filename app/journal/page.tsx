import React from 'react';
import Link from 'next/link';
import { ArrowRight, BookOpen, Calendar, Clock } from 'lucide-react';

export const metadata = {
  title: 'The Oruky Journal · craft notes, drop diaries, studio updates · Oruky',
  description: 'Notes from the studio on design, additive manufacturing, materials, and drops.',
};

export default function JournalPage() {
  const articles = [
    {
      id: 'friday-drops',
      title: 'Inside the Friday Drops Club — how we plan a limited launch',
      date: 'May 2026',
      readTime: '4 min read',
      tag: 'Drop Diary',
      excerpt: 'Why we limit editions to 100–300 pieces, how queue times work on a small printer farm, and why closed editions never reprint once sealed.',
    },
    {
      id: 'bambu-lab-p2s',
      title: 'Why we chose the Bambu Lab P2S with AMS 2 Pro for the workshop',
      date: 'April 2026',
      readTime: '6 min read',
      tag: 'Studio Tech',
      excerpt: 'Evaluating CoreXY kinematic precision, on-device AI camera spaghetti detection, and multi-color filament feeding without manual purges.',
    },
    {
      id: 'kedarpath-relief',
      title: 'The story behind KedarPath — mapping 21km of holy Himalayan terrain',
      date: 'April 2026',
      readTime: '5 min read',
      tag: 'Design Case Study',
      excerpt: 'From SRTM digital elevation satellite matrices to 0.12mm micro-relief ridges. How we captured every contour of the sacred trek.',
    },
    {
      id: 'materials-humidity',
      title: 'Material testing: Carbon-Fibre PLA vs Matte PETG in Indian humidity',
      date: 'March 2026',
      readTime: '7 min read',
      tag: 'Materials',
      excerpt: 'Testing tensile stability across 45°C Delhi summers and 90% monsoon humidity in Pune. Why sealed dryboxes are essential for zero stringing.',
    },
  ];

  return (
    <div className="py-12 md:py-20 space-y-12">
      <header className="o-container pt-4 pb-8 max-w-3xl">
        <span className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] font-bold text-primary">
          <span className="block h-px w-7 bg-primary" />
          The Studio Log
        </span>
        <h1 className="o-display text-4xl md:text-6xl font-bold tracking-tight mt-4 leading-[1.05]">
          Notes from the studio.
        </h1>
        <p className="text-lg text-muted mt-4 leading-relaxed">
          Behind-the-scenes engineering notes, material tests, drop diaries, and design philosophies from our Pune &amp; Gurgaon workshops.
        </p>
      </header>

      <section className="o-container max-w-4xl">
        <div className="space-y-6">
          {articles.map((art) => (
            <article
              key={art.id}
              className="o-card p-6 md:p-8 hover:shadow-lift transition-all duration-300 group"
            >
              <div className="flex flex-wrap items-center gap-3 text-xs text-muted mb-3">
                <span className="o-badge bg-primary/10 text-primary">{art.tag}</span>
                <span className="inline-flex items-center gap-1">
                  <Calendar className="w-3 h-3" /> {art.date}
                </span>
                <span>•</span>
                <span className="inline-flex items-center gap-1">
                  <Clock className="w-3 h-3" /> {art.readTime}
                </span>
              </div>

              <h2 className="o-display text-2xl md:text-3xl font-bold group-hover:text-primary transition-colors">
                {art.title}
              </h2>
              <p className="text-sm text-muted mt-2 leading-relaxed">
                {art.excerpt}
              </p>

              <div className="pt-4 flex items-center gap-2 text-xs font-bold text-primary">
                Read Dispatch <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
