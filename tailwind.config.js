/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'royal': {
          '50': '#e8edf7',
          '100': '#d1daf0',
          '200': '#a3b5e0',
          '300': '#7590d1',
          '400': '#476bc1',
          '500': '#1946b2',
          '600': '#13397f',
          '700': '#0d152d',
          '800': '#0a1123',
          '900': '#070c1a',
          '950': '#040610',
        },
      },
    },
  },
  plugins: [],
};
