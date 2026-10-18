import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'About Oruky · the studio · Oruky',
  description: 'Oruky is a 3D-printing studio for enthusiast collectibles, operated by Adalwin Commerce LLP in Pune & Gurgaon.',
};

export default function AboutPage() {
  return (
    <div className="py-12 md:py-20">
      <section className="o-container max-w-3xl">
        <span className="o-chip">About the studio</span>

        <div className="mt-6">
          <img
            alt="Oruky"
            width={111}
            height={53}
            className="oruky-logo-light align-middle"
            style={{ height: 53, width: 'auto' }}
            src="/oruky-logo-light.svg"
          />
          <img
            alt=""
            aria-hidden={true}
            width={111}
            height={53}
            className="oruky-logo-dark align-middle"
            style={{ height: 53, width: 'auto' }}
            src="/oruky-logo-dark.svg"
          />
        </div>

        <h1 className="o-display text-4xl md:text-6xl font-bold mt-4 leading-tight">
          Made for the obsession.
        </h1>
        <p className="o-hand text-2xl mt-2 text-primary">
          — a rider-led studio out of Pune &amp; Gurgaon, founded April 2026
        </p>

        <div className="prose prose-lg mt-10 space-y-5 leading-relaxed text-muted">
          <p>
            Oruky is a rider-led 3D-printing studio for enthusiast collectibles, operated by{' '}
            <a
              href="https://adalwin.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--text)', fontWeight: 700 }}
            >
              Adalwin Commerce™ LLP
            </a>{' '}
            — part of{' '}
            <a
              href="https://adalwingroup.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--text)', fontWeight: 700 }}
            >
              Adalwin Group
            </a>{' '}
            — with workshops in <b>Pune</b> and <b>Gurgaon, India</b>. We lead with <b>The Café</b> — cafe-racer silhouettes, vintage-bike pieces, helmet display stands, and ride-club gift tags — because that’s the world the founder lives in. Sister tribes are <b>The Garage</b> (cars), <b>The Wall</b> (original-IP figures in the visual language of fandoms), and <b>Studio Classics</b>, the heritage line of original characters Oruky started with. For collectors who want something that doesn’t exist yet, we run <b>bespoke 1-of-1 commissions</b> on a four-week lead.
          </p>

          <p>
            The studio runs on a simple bet. Mass-produced collectibles — diecast, Funko-style figures, dealership freebies — are everywhere. Things you put on the garage shelf and actually look at every day are not. We make those things. One drop at a time, one edition at a time.
          </p>

          <p>
            Each piece is designed in-house, slow-printed on a <b>Bambu Lab P2S</b> with the AMS 2 Pro multi-material system (up to four colours per piece without manual swaps), checked continuously by an on-device AI camera, and hand-finished. We don’t hold stock — every piece is made to order. Editions are numbered as they leave the studio. Once an edition closes, it does not come back.
          </p>

          <p>
            We’re a small team. Sameer designs the pieces, runs the printers, and rides on weekends. The studio leads with The Café because that’s the audience the founder is part of — riders who recognise the era a silhouette came from, and want a piece of it on the shelf. We answer every DM and every email. We don’t pay influencers, we don’t discount, and we don’t ship a piece we’re not willing to put on our own shelves.
          </p>

          <p>
            If you ride a single, twin, or modern parallel; restore a coupe on weekends; or have a fandom you’d like to honour with something that isn’t at every airport gift shop — you’re who we’re making for.
          </p>

          <p className="o-hand text-2xl pt-4" style={{ color: 'var(--primary)' }}>
            Made for the obsession.
          </p>
        </div>
      </section>
    </div>
  );
}
