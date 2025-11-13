// tailwind.config.cjs (or tailwind.config.js)
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // <--- The crucial line
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}