import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ['./src/**/*.{ts,tsx,js,jsx,astro}', './pages/**/*.{ts,tsx,js,jsx,astro}'],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      tokens: {
        colors: {
          paper: { value: "#1B4194" },
          pen: { value: "#1B0E0B" },
          accent: { value: "#FFFFFF" },
        },
        fonts: {
          inter: { value: "'Inter Variable', sans-serif" },
          boska: { value: "Boska-Variable, sans-serif" },
        },
        fontSizes: {
          sm: { value: "clamp(0.7502rem, 0.7234rem + 0.134vw, 0.844rem)" },
          base: { value: "clamp(1rem, 0.9643rem + 0.1786vw, 1.125rem)" },
          md: { value: "clamp(1.5625rem, 1.4378rem + 0.6236vw, 1.999rem)" },
          lg: { value: "clamp(1.9531rem, 1.1497rem + 4.0174vw, 4.7653rem)"}
        },
        spacing: {
          contentArea: { value: "min(100%, 90rem)" },
        }
      }
    },
  },

  // The output directory for your css system
  outdir: "styled-system",
});
