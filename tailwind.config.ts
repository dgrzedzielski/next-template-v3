import animatePlugin from 'tailwindcss-animate';

import { shadcnPlugin } from './src/styles/shadcn-plugin';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  plugins: [shadcnPlugin, animatePlugin],
};
