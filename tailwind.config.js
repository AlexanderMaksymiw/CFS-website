/** @type {import('tailwindcss').Config} */
module.exports = {
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
          DEFAULT: "#facc15", // amber-400 as brand color
          dark: "#d97706",
        },
      },
    },
  },
  plugins: [],
};
