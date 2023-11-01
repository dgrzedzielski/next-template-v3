import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';
import { configDefaults, defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    exclude: [...configDefaults.exclude, '**/playwright/**'],
    setupFiles: [path.resolve(__dirname, './setup-tests.ts')],
    environment: 'jsdom',
    alias: {
      '@/': fileURLToPath(new URL('./src/', import.meta.url)),
    },
  },
});
