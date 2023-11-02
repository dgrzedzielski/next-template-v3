import { test } from '@playwright/test';

test('renders content', async ({ page }) => {
  await page.goto('/');

  await page.waitForSelector(
    'text=This is NEXT 13 14 Template with configured Linting, Storybook, Tailwind, shadcn/ui',
  );
});
