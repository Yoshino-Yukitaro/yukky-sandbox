import { defineConfig, passthroughImageService } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import cloudflare from "@astrojs/cloudflare";

import mdx from "@astrojs/mdx";

import react from "@astrojs/react";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), mdx(), react(), icon()],
  site: "https://yukky-sandbox.dev/",
  vite: {
    optimizeDeps: {
      exclude: ["fsevents"],
    },
  },
  adapter: cloudflare({ imageService: "compile" }),
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
