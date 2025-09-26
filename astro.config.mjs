// @ts-check
import { defineConfig } from 'astro/config';
import path from 'path';

import vue from '@astrojs/vue';

// https://astro.build/config
export default defineConfig({
  vite: {
    resolve: {
      alias: {
        '@': path.resolve('./src'),
      },
    },
  },

  integrations: [vue()],
});