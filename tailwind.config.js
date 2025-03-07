/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryTitle: '#003092',
        primaryContent: '#4D55CC',
        primarySubcontent: '#7A73D1',
        primaryBase: '#7A73D1',
        primaryAccent: '#4D55CC',
        primaryBg: '#F1F0E9'
      },
    },
  },
  plugins: [],
}

