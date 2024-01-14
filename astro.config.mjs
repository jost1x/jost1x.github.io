import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import { defineConfig } from "astro/config";

import htmlBeautifier from "astro-html-beautifier";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), icon(), htmlBeautifier()],
  output: "static",
  build: {
    format: "file",
  },
});
