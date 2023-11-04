import * as React from 'react';

import { Inter } from 'next/font/google';

import { cn } from '@/styles/utils';

import { AppNav } from './_components/app-nav';
import { ClerkProvider } from './_components/clerk-provider';

import '../styles/globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html data-theme="dark" lang="en" className="h-full">
        <body className={cn('h-full font-sans', inter.variable)}>
          <div className="flex h-full flex-col">
            <AppNav />
            {children}
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
