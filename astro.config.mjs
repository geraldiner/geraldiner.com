// @ts-check

import mdx from '@astrojs/mdx';
import rehypeExternalLinks from 'rehype-external-links';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://geraldiner.com',
  integrations: [mdx(), sitemap()],
  markdown: {
    rehypePlugins: [
      [
        rehypeExternalLinks,
        {
          content: { type: 'text', value: ' ↗' },
          properties: { class: 'underline hover:underline-offset-4' },
          target: '_blank',
        },
      ],
    ],
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
