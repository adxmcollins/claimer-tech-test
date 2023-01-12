module.exports = {
  purge: [
    'src/*.tsx',
    'src/**/*.tsx'
  ],
  theme: {
    fontFamily: {
      'sans': '"Open Sans", "Helvetica", "Arial", "sans-serif"'
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1180px'
    },
    extend: {
      colors: {
        grey: {
          100: '#F7F7F7',
          200: '#E3E3E3',
          300: '#CCCCCC',
          400: '#C4C4C4',
          500: '#D9D9D9',
          600: '#828282',
          700: '#AEAEAE',
          800: '#646464',
          900: '#777777',
          1000: '#404040',
        },
        blue: {
          300: '#5697D0',
          600: '#428BCA'
        },
        red: {
          500: '#D23C3C'
        },
        green: {
          500: '#2CBF5E'
        }
      },
      fontSize: {
        'xl': '1.37rem',
        '5xl': '2.5rem'
      }
    },
  }
}
