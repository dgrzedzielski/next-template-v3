'use client';
import * as React from 'react';

import { ClerkProvider as BaseClerkProvider } from '@clerk/nextjs';
import { dark } from '@clerk/themes';

import { darkTheme } from '@/styles/themes/dark';
import { lightTheme } from '@/styles/themes/light';
import { Theme } from '@/styles/themes/type';
import { inputClassNames } from '@/ui/input';

export const ClerkProvider = ({ children }: { children: React.ReactNode }) => {
  const currentTheme = 'dark'; // TODO: make it dynamic for supporting light/dark mode

  const theme: Theme = currentTheme === 'dark' ? darkTheme : lightTheme;

  return (
    <BaseClerkProvider
      appearance={{
        baseTheme: dark,
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
          card: 'bg-card border-border',
          formFieldInput: inputClassNames,
        },
      }}
    >
      {children}
    </BaseClerkProvider>
  );
};
