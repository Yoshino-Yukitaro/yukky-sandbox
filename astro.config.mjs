import { defineConfig, passthroughImageService } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import cloudflare from "@astrojs/cloudflare";

import mdx from "@astrojs/mdx";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), mdx(), react()],
  site: "https://yukky-sandbox.dev/",
  vite: {
    optimizeDeps: {
      exclude: ["fsevents", "@cloudflare/pages-plugin-vercel-og"],
    },
  },
  output: "hybrid",
  adapter: cloudflare({ mode: "directory" }),
  build: {
    inlineStylesheets: "auto",
  },
  image: {
    service: passthroughImageService(),
  },
  prefetch: {
    defaultStrategy: "viewport",
    prefetchAll: false,
  },
});
