import { defineConfig } from 'astro/config';

// https://astro.build/config
import react from "@astrojs/react";

// https://astro.build/config
import preact from "@astrojs/preact";

export default defineConfig({
  integrations: [preact(), react()]
});