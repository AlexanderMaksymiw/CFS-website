/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "media",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Example: setup your master fonts
        sans: ["Roboto", "sans-serif"],
      },
      colors: {
        brand: {
          DEFAULT: "oklch(96.7% 0.003 264.542)", // amber-400 as brand color
          dark: "oklch(20.8% 0.042 265.755)",
        },
      },
    },
  },
  plugins: [],
};
