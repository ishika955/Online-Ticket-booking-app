/** @type {import('tailwindcss').Config} */
module.exports = {
  // CRITICAL: This path tells Tailwind where to find your React components
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", 
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}