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

// npx tailwindcss -i ./input.css -o ./dist/output.css --watch
