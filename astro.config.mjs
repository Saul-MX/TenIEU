// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://saul-mx.github.io',
  base: '/TenIEU',
  vite: {
    plugins: [tailwindcss()]
  }
});