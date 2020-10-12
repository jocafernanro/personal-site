module.exports = {
  purge: [],
  theme: {
    extend: {
      fontSize: {
        '7xl': '5rem',
        '8xl': '7rem',
      },
    },
    colors: {
      primary: '#333745',
      secondary: {
        default: '#B2B2B2',
        light: '#ECECEC',
        lighter: '#FBFBFB',
      },
      white: '#FFFFFF',
    },
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
    translate: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
  },
  plugins: [],
}
