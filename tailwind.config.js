export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      ph: '475px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      fp: '1185px', //flexpoint
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        barbarianPurple: 'rgb(127, 2, 185)', // Corrected color definition
      },
      aspectRatio: {
        'card': '4/5',
      },
    },
  },
  plugins: [],
};