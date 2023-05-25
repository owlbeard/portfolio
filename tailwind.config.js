/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        responsive: 'repeat(auto-fit, minmax(15rem, 1fr))',
      },
      height: {
        dvh: '100dvh',
        svh: '100svh',
      },
    },
  },
  plugins: [],
};
