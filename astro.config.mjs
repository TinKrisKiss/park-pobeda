import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://tinkriskiss.github.io',
  base: '/park-pobeda/',
  output: 'static',
  trailingSlash: 'always',
  compressHTML: true,
});