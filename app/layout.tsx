import type { Metadata } from 'next';
import { Syne, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  weight: ['400', '500', '600', '700', '800']
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  weight: ['400', '500', '600', '700']
});

export const metadata: Metadata = {
  title: 'Plywood Stores | Authorized Dealer for Century, Greenply, Merino',
  description: 'Building Trust with Quality Interiors. Authorized dealers for Plywood, Laminates, MDF, Hardware from top brands in India.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${syne.variable} ${jakarta.variable} font-body antialiased`}>
        <Header />
        <main className="pt-[120px]">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
