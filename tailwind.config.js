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
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['"Bebas Neue"', 'sans-serif'],
      },
      colors: {
        primary: '#C9A84C',
        secondary: '#0E1410',
        accent: '#F5F5F0',
        "background-theme": '#121212',
        "background-secondary": '#0A0A0A',
        "background-hero": '#1A1A1A',
        "background-card": '#1E1E1E',
        "background-footer": '#111',
      },
    },
  },
  plugins: [
    require('@midudev/tailwind-animations'),
  ],
};
