/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'royal': {
          '50': '#e6f0ff',
          '100': '#cce0ff',
          '200': '#99c2ff',
          '300': '#66a3ff',
          '400': '#3385ff',
          '500': '#0066ff',
          '600': '#0d1a33',
          '700': '#060a16',
          '800': '#040710',
          '900': '#03050b',
          '950': '#010203',
        },
      },
    },
  },
  plugins: [],
};
