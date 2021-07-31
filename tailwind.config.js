module.exports = {
  mode: 'jit',
  purge: ['./components/**/*.tsx', './pages/**/*.tsx', './public/**/*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      animation: ['group-hover'],
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
