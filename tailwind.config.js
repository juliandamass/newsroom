const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#E4FBFF',
          vLight: '#34ffff',
          DEFAULT: '#008EAA',
          dark: '#275C67',
          vDark: '#003567',
        },
        secondary: {
          light: '#EDFFD7',
          vLight: '#64fd64',
          DEFAULT: '#8CC63F',
          dark: '#5E8D20',
          vDark: '#003501',
        },
        corange: {
          light: '#ffc338',
          DEFAULT: '#DD9F0F',
        },
        accent: defaultTheme.colors.gray[900],
        warn: defaultTheme.colors.red[500],
      },
      boxShadow: {
        primary: '0 4px 14px 0 rgba(0, 142, 170, 0.25)',
        secondary: '0 4px 14px 0 rgba(140, 198, 63, 0.25)',
        corange: '0 4px 14px 0 rgba(221, 159, 15, 0.25)',
        white: '0 4px 14px 0 rgba(255, 255, 255, 0.75)',
        gray: '0 4px 14px 0 rgba(230, 232, 236, 0.75)',
      },
      fontFamily: {
        display: ["'Poppins'", ...defaultTheme.fontFamily.sans],
        body: ["'Poppins'", ...defaultTheme.fontFamily.sans],
      },
      listStyleType: {
        'lower-alpha': 'lower-alpha',
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
