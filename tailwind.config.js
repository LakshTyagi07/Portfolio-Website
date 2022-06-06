module.exports = {
  content: [
    './layouts/*.html'
  ],
  theme: { fontFamily: {
    'sans': ['Poppins'],
  },
    extend: {
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
