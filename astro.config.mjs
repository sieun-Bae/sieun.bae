// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// When deploying to GitHub Pages without a custom domain, set:
//   site: 'https://sieun-bae.github.io'
//   base: '/sieun.bae'
// With a custom domain, remove `base` and set `site` to your domain.
export default defineConfig({
  site: 'https://sieun-bae.github.io',
  base: '/sieun.bae',
  vite: {
    plugins: [tailwindcss()]
  }
});