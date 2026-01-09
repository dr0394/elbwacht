/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'royal': {
          '50': '#f0f4ff',
          '100': '#e0e7ff',
          '200': '#c7d6fe',
          '300': '#a5b9fc',
          '400': '#8194f8',
          '500': '#5f6ff1',
          '600': '#4148e5',
          '700': '#2f35ca',
          '800': '#2930a3',
          '900': '#1a1f5c',
          '950': '#0f1235',
        },
      },
    },
  },
  plugins: [],
};
