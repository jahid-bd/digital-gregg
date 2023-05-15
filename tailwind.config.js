/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        primary: [
          'Montserrat',
          'Helvetica Neue Light',
          'Helvetica Neue',
          'Helvetica, Arial',
        ],
      },
      colors: {
        primary: '#C10206',
        redblack: '#333333',
        secondary: '#222222',
        privacy: '#4b4b4b',
        secondaryGray: '#808080',
        lightGray: '#E2DBDB',
        darkGray: '#4A4A4A',
      },
      screens: {
        xs: { max: '400px' },
        slider: '560px',
        // sm: '480px',
        // md: '768px',
        // lg: '1224px',
        // xl: '1280px',
        // '2xl': '1536px',
        desktop: '1440px',
        '3xl': '1920px',
        '4xl': '2100px',
        maxmd: { max: '768px' },
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
};
