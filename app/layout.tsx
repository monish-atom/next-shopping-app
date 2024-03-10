import Nav from '@/components/nav';
import type { Metadata } from 'next';
import './globals.css';
import Footer from '@/components/footer';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Next Vogue Hub',
  description: 'A simple app using Next.js',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${inter.className}`}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
