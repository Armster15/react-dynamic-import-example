const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
  mode: "jit",
  purge: {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx,mdx}"],
    options: {
      keyframes: true,
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        cyan: colors.cyan,
        rose: colors.rose,
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      screens: {
        "hover-hover": { raw: "(hover: hover)" },
        "hover-none": { raw: "(hover: none)" },
      },
    },
  },
};
