// postcss.config.cjs (or postcss.config.js)
module.exports = {
  plugins: {
    'tailwindcss': {},  // <-- MUST be 'tailwindcss'
    'autoprefixer': {}, // <-- Ensures broad browser compatibility
  },
};