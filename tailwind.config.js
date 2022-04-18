module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        text: {},
        bg: {},
        btn: {},
        border: {},
      },
      fontSize: {
        '5xl': '2.5rem',
        '6xl': '2.75rem',
        '7xl': '4.5rem',
        '8xl': '6.25rem',
      },
      fontFamily: {},
      lineHeight: {},
      letterSpacing: {},
      boxShadow: {
        sm: '0 5px 10px rgba(0, 0, 0, 0.12)',
        md: '0 8px 30px rgba(0, 0, 0, 0.12)',
        lg: '0 9px 50px rgba(0, 0, 0, 0.12)',
      },
      keyframes: {},
      animation: {},
      outline: {},
    },
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    fill: (theme) => ({
      red: theme('colors.red.500'),
      green: theme('colors.green.500'),
      blue: theme('colors.blue.500'),
    }),
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
