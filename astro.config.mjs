import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,ts,jsx,tsx}"]
});