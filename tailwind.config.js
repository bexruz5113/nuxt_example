module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      boxShadow: {
        pink: '0 3px 2px 0 rgba(120, 120, 120, 0.05)',
      },
      fontSize: {
        xs: '.75rem',
        sm: '.875rem',
        tiny: '.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3.5rem',
        '6xl': '4rem',
        '7xl': '5rem',
        '8xl': '7rem',
        '9xl': '7.2rem',
      },
      zIndex: {
        '-20': '-20',
        '-1': '-1',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
