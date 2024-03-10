import Nav from '@/components/nav';
import type { Metadata } from 'next';
import localfont from 'next/font/local';
import './globals.css';

const outfit = localfont({
  src: '/fonts/Outfit-Variable.ttf',
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
      <body className={`${outfit.className}`}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
