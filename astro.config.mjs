import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import { defineConfig } from "astro/config";

import purgecss from "astro-purgecss";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), icon(), purgecss()],
  output: "static"
});