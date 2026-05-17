import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://multinow-games.web.app',
  output: 'static',
  integrations: [sitemap()],
});
