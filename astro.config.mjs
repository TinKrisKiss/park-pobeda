import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://tinkriskiss.github.io',
  base: '/park-pobeda/',  // ← Должно точно совпадать с именем репозитория
  output: 'static',
  trailingSlash: 'always',  // ← Критически важно для GitHub Pages
  compressHTML: true,
});