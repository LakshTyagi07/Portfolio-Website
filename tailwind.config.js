module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    fontFamily: {
      sans: ["Poppins"],
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
