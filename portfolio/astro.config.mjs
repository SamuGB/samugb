import { defineConfig } from 'astro/config';
// Import /serverless for a Serverless SSR site
import vercel from '@astrojs/vercel/serverless';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  output: 'server',
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
    maxDuration: 8,
  }),
});