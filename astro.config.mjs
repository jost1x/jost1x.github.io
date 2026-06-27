// @ts-check
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

import htmlBeautifier from "astro-html-beautifier";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [htmlBeautifier(), react(), sitemap()],
  site: "https://jost1x.github.io",
});
