import * as React from 'react';

import Link, { LinkProps } from 'next/link';

import { auth, UserButton } from '@clerk/nextjs';

import { ThemeSwitcher } from '@/app/_components/theme-switcher';
import { cn } from '@/styles/utils';

const AppNavLink = ({
  className,
  ...props
}: LinkProps & { className?: string; children: React.ReactNode }) => {
  return (
    <Link
      {...props}
      className={cn(
        'font-medium transition-colors hover:text-primary',
        className,
      )}
    />
  );
};

export const AppNavUserSection = async () => {
  const { userId } = auth();

  return (
    <div className="flex min-h-[32px] items-center">
      {userId ? (
        <UserButton afterSignOutUrl="/" />
      ) : (
        <ul className="flex items-center gap-8">
          <li>
            <AppNavLink
              href="/sign-in"
              className="font-regular text-primary underline-offset-8 hover:underline"
            >
              Sign In
            </AppNavLink>
          </li>
          <li>
            <AppNavLink
              href="/sign-up"
              className="font-regular text-primary underline-offset-8 hover:underline"
            >
              Sign Up
            </AppNavLink>
          </li>
        </ul>
      )}
    </div>
  );
};

export const AppNav = async () => {
  return (
    <header>
      <nav className="flex justify-between border-b border-border px-8 py-4">
        <ul className="flex items-center gap-8">
          <li>
            <AppNavLink href="/">Home</AppNavLink>
          </li>
          <li>
            <AppNavLink href="/dashboard">Dashboard</AppNavLink>
          </li>
        </ul>
        <div className="flex items-center gap-8">
          <AppNavUserSection />
          <ThemeSwitcher />
        </div>
      </nav>
    </header>
  );
};
