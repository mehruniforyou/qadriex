# Oruky — 3D Frames & 3D-Printed Collectibles (Full Replica)

Deployed to Vercel via [https://github.com/mehruniforyou/qadriex](https://github.com/mehruniforyou/qadriex) (`main` branch) — Paper Bags & Rugs B2B.

## Tech Stack
- **Framework:** Next.js (App Router) + React + TypeScript
- **Styling:** Custom Tailwind tokens matching Oruky's exact CSS variables (`var(--bg)`, `var(--surface)`, `var(--primary)`, etc.)
- **Typography:** 15 localized Poppins WOFF2 fonts in `/public/fonts`
- **Assets:** Complete 81 high-res original product renders, frames, and brand marks in `/public/images`
- **Icons:** Lucide React

## Replicated Features & Pages
- **Portal Page (`/`):** Fullscreen dual-door interactive switcher between *Frames* and *Collectibles* with animated aurora and layer drift.
- **3D Journey Frames (`/frames`):** Complete frames catalog with category pills, craftsmanship guarantees, customer testimonials, and FAQs.
- **Bundle Builder (`/frames/bundles`):** Interactive set builder with live discount calculations (2 frames: 15% off, 3+ frames: 25% off).
- **Collectibles Shop (`/shop`):** Full collectibles catalog with filter tabs (*The Café*, *The Deskmates*, *Mini Vibes*) and sort options.
- **Product Pages:** Dynamic detail pages for all 10 frames and 13 collectibles with image galleries, specs cards, and story sections.
- **Brand & Community:** `/about`, `/universe` (The Tribes), `/b2b` (Brand drops & clubs), `/journal` (Studio dispatches), `/unboxing`, and `/printers` (Live Bambu Lab P2S telemetry dashboard).
- **On-Demand Printing:** `/custom-print` with STL/OBJ file dropzone and interactive slicer/material cost estimator.
- **Cart & Checkout:** Persistent `localStorage`-backed cart, slide-over drawer, promo code support, and order confirmation simulation.
- **Policy Pages:** Complete `/policies/shipping`, `/policies/returns` (with the Lifetime Reprint Guarantee), `/policies/privacy`, `/policies/terms`, and `/contact`.

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start
```
