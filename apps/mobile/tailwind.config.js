const { palette } = require("./src/constants/palette");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: palette.primary,
        secondary: palette.secondary,
        tertiary: palette.tertiary,
        neutral: palette.neutral,
      },
      boxShadow: {
        soft: '0 4px 6px rgba(0, 0, 0, 0.1)'
      }
    },
  },
  plugins: [],
};
