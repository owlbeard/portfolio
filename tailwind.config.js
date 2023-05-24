/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      height: {
        dvh: '100dvh',
        svh: '100svh',
      },
    },
  },
  plugins: [],
};
