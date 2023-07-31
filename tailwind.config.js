/** @type {import('tailwindcss').Config} */

// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "add-icon": "url('/src/assets/images/add-icon.svg')",
        "sun-icon": "url('/src/assets/images/sun.svg')",
        "moon-icon": "url('/src/assets/images/moon.svg')",
      },
      colors: {
        primary: "#6324C6",
        "feedback-warning": "#FFB800",
        "gray-dark-2": "#4C5667",
        "gray-gray": "#A7B0BE",
      },
      fontFamily: {
        sans: ["Mulish", ...defaultTheme.fontFamily.sans],
      },
      lineHeight: {
        normal: "normal",
      },
    },
  },
  plugins: [],
};
