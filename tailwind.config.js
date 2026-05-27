/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#E8F4F9',
          100: '#D1EAF3',
          200: '#A3D5E7',
          300: '#75C0DB',
          400: '#64B8E4',
          500: '#23C4D8',
          600: '#1BBAD0',
          700: '#2175B3',
          800: '#2165AC',
          900: '#214BAC',
        }
      }
    },
  },
  plugins: [],
};
