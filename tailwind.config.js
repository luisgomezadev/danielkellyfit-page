/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx,vue}',
    './*.astro',
    './components/**/*.{astro,vue,js,ts}',
    './pages/**/*.{astro,vue,js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#94e901',
        secondary: '#0E1410',
      },
    },
  },
  plugins: [],
};
