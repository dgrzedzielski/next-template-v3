/* eslint-disable import/export */

import React, { ReactElement } from 'react';

import { render as baseRender, RenderOptions } from '@testing-library/react';

const AppProviders = ({ children }: { children: React.ReactNode }) => {
  // TODO: add needed providers
  return <>{children}</>;
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => baseRender(ui, { wrapper: AppProviders, ...options });
export * from '@testing-library/react';
export { customRender as render };
