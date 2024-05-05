import { inter } from '@/app/ui/fonts';

import '@/app/ui/global.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | Wine Cellar Dashboard',
    default: 'Wine Cellar Dashboard',
  },
  description: 'The official Wine Cellar Dashboard.',
  metadataBase: new URL(
    'https://en.wikipedia.org/wiki/Pinard_(wine)#/media/File:Saint_Pinard.jpg',
  ),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
