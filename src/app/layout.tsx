import type { Metadata } from 'next';
import './globals.css';

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
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
