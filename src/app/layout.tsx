import * as React from 'react';

import { Inter } from 'next/font/google';

import { AppNav } from '@/components/layout/app-nav';
import { ClerkProvider } from '@/components/providers/clerk-provider';
import { ThemeProvider } from '@/components/providers/theme-provider';
import { cn } from '@/styles/utils';

import '../styles/globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <body className={cn('h-full font-sans', inter.variable)}>
        <ThemeProvider>
          <ClerkProvider>
            <div className="flex h-full flex-col">
              <AppNav />
              {children}
            </div>
          </ClerkProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
