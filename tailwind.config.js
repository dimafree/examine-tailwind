module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: {
        // DEFAULT: '1rem',
        // sm: '2rem',
        // lg: '4rem',
        // xl: '5rem',
      },
    },
    extend: {
      colors: {
        // primary: '#2B2B2B',
      },
    },
  },
  plugins: [
    {
      'tailwindcss': {},
      'autoprefixer': {},
    }
  ],
}
