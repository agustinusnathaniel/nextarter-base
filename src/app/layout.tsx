import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import '~/lib/styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

const APP_NAME = 'nextarter-base';

export const metadata: Metadata = {
  title: APP_NAME,
  description: 'Next.js App with TypeScript setup',
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
  applicationName: APP_NAME,
  appleWebApp: {
    capable: true,
    title: APP_NAME,
    statusBarStyle: 'default',
  },
  formatDetection: {
    telephone: false,
  },
  themeColor: '#FFFFFF',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
