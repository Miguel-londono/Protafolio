/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}", // Archivos escaneados por Tailwind
  ],
  darkMode: 'class', // Activa el modo oscuro con la clase 'dark'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Onest Variable", ...defaultTheme.fontFamily.sans], // Extiende la fuente sans
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
  ],
};
