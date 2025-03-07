/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
          primaryTitle: '#205781',
          primaryContent: '#4F959D',
          primarySubcontent: '#4F959D',
          primaryBase: '#5C7285',
          primaryAccent: '#A7B49E',
          primaryBg: '#F5EFE7',

        },
      },
    },
  
  plugins: [],

  }
