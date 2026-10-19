import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/context/ThemeContext';
import { CartProvider } from '@/context/CartContext';
import LayoutShell from '@/components/LayoutShell';

export const metadata: Metadata = {
  metadataBase: new URL('https://qadriex.com'),
  title: 'QADRI — Custom Paper Bags & Bespoke Luxury Rugs, Made in India',
  description:
    'Two crafts, one standard. Custom branding utility paper bags and bespoke handcrafted luxury rugs for retail, corporate, and residential spaces. Crafted by QADRI.',
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
