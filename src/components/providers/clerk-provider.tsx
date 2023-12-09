'use client';
import * as React from 'react';

import { useTheme } from 'next-themes';

import { ClerkProvider as BaseClerkProvider } from '@clerk/nextjs';
import { dark } from '@clerk/themes';

import { inputClassNames } from '@/components/ui/input';
import { darkTheme } from '@/styles/themes/dark';
import { lightTheme } from '@/styles/themes/light';
import { Theme } from '@/styles/themes/type';

const getPreferredSystemTheme = () => {
  if (typeof window === 'undefined') return;

  if (
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
  ) {
    return 'dark';
  }

  return 'light';
};

interface Props {
  children: React.ReactNode;
}

export const ClerkProvider = ({ children }: Props) => {
  const { resolvedTheme } = useTheme();

  const currentTheme =
    resolvedTheme === 'system' || !resolvedTheme
      ? getPreferredSystemTheme()
      : resolvedTheme;

  const theme: Theme = currentTheme === 'dark' ? darkTheme : lightTheme;

  return (
    <BaseClerkProvider
      appearance={{
        baseTheme: currentTheme === 'dark' ? dark : undefined,
        variables: {
          colorPrimary: `hsl(${theme.primary})`,
          colorText: `hsl(${theme.foreground})`,
          colorTextOnPrimaryBackground: `hsl(${theme['primary-foreground']})`,
          colorTextSecondary: `hsl(${theme['muted-foreground']})`,
          colorBackground: `hsl(${theme.card})`,
          colorDanger: `hsl(${theme.destructive})`,
          colorInputBackground: `hsl(${theme.input})`,
          colorInputText: `hsl(${theme.foreground})`,
        },
        elements: {
          card: 'bg-card',
          formFieldInput: inputClassNames,
        },
      }}
    >
      {children}
    </BaseClerkProvider>
  );
};
