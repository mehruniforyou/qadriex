import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/context/ThemeContext';
import { CartProvider } from '@/context/CartContext';
import LayoutShell from '@/components/LayoutShell';

export const metadata: Metadata = {
  metadataBase: new URL('https://oruky.com'),
  title: 'Oruky — 3D Frames & 3D-Printed Collectibles, Made in India · Oruky',
  description:
    'Two worlds, one studio. 3D-printed journey frames with real terrain relief — treks and racetracks as numbered wall pieces — and desk collectibles for riders, drivers and fans. Made in Pune & Gurgaon.',
  icons: {
    icon: '/icon.svg',
    apple: '/icon.svg',
  },
  manifest: '/manifest.webmanifest',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="poppins_2e4530c2-module__1Mn2RG__variable">
      <body suppressHydrationWarning style={{ background: 'var(--bg)', color: 'var(--text)' }}>
        <ThemeProvider>
          <CartProvider>
            <LayoutShell>{children}</LayoutShell>
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
