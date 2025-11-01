const nativewind = require('nativewind/preset');

/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [nativewind],
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0f7ff',
          100: '#d6e8ff',
          200: '#b3d4ff',
          300: '#80b4ff',
          400: '#4c8eff',
          500: '#2561ff',
          600: '#1b4ae6',
          700: '#1538b4',
          800: '#102983',
          900: '#0c1d5c'
        }
      }
    }
  }
};
