/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        main: '#05202E',
        'blue-500': "#27A7E7",
        'yellow-500': "#FFAD28",
        dark:'#03161F',
        "dark-500":'#08364D',
        red:'#FF0000'
      },
      spacing:{
        '0.5':'2px',
        '3.5':'14px',
        '15':'60px',
        '25':'100px',
        '26':'104px',

      }
    },
  },
  plugins: [],
};