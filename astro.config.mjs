import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import { siteConfig } from './src/config/site';

export default defineConfig({
  site: siteConfig.siteUrl,
  integrations: [tailwind(), sitemap()],
  output: 'static',
});

