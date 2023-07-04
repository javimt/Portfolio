/** @type {import('tailwindcss').Config} */
export const purge = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  options: {
    safelist: [],
  },
};
export const darkMode = false;
export const theme = {
  extend: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px', // Pantallas extra grandes como monitores grandes
    },
  },
};
export const variants = {
  extend: {},
};
export const plugins = [];

