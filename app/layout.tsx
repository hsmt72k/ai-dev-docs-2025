import './global.css';
import { RootProvider } from 'fumadocs-ui/provider';
import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';
import { Noto_Sans_JP } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
});

const notoSansJp = Noto_Sans_JP({
  variable: '--font-noto-sans-jp',
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
  preload: false,
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="ja" className={`${notoSansJp.variable} ${inter.className} antialiased font-noto-sans-jp`} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
