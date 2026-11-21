import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Portfolio Developer',
  description: 'Personal portfolio website for a web developer.',
  keywords: ['portfolio', 'web developer', 'Next.js', 'React', 'Tailwind CSS'],
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
    apple: '/icon.svg',
  },
  openGraph: {
    title: 'Portfolio Developer',
    description: 'Modern portfolio for a web developer.',
    type: 'website',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning className={poppins.variable}>
      <body>{children}</body>
    </html>
  );
}
