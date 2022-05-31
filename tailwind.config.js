module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
      },
    },
    extend: {
      colors: {
        dark: '#212529',
        primary: '#5E3B76',
        secondary: '#6C757D',
      },
      fontSize: {
        40: '40px',
      },
      borderRadius: {
        30: '30px',
      },
      boxShadow: {
        'box': '0 2px 12px 0 rgba(0, 0, 0, 0.08)',
        'input': '0 4px 16px 0 rgba(184, 218, 255, 0.12)',
      }
    },
  },
  plugins: [
    {
      'tailwindcss': {},
      'autoprefixer': {},
    }
  ],
}
