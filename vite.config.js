import { defineConfig } from 'vite';
import solid from 'vite-plugin-solid';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [solid(), tailwindcss()],
  base: './',
  server: { port: 5181, open: true },
  build: { outDir: 'dist', assetsInlineLimit: 0 },
});
