import type {Metadata} from 'next';
import { Inter, Newsreader } from 'next/font/google';
import './globals.css'; // Global styles

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const newsreader = Newsreader({
  subsets: ['latin'],
  style: ['italic'],
  variable: '--font-serif',
});

export const metadata: Metadata = {
  title: 'Confy - All-in-one Marketing Platform',
  description: 'Grow faster with our all-in-one marketing platform. High-end agency landing page.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} ${newsreader.variable}`}>
      <body className="font-sans antialiased" suppressHydrationWarning>{children}</body>
    </html>
  );
}
