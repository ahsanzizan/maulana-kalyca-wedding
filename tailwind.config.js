/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./src/**/*.{html,js,css}"],
  theme: {
    extend: {
      colors: {
        main: "#FFF6F6",
        secondary: "#FFDFDF",
      },
    },
  },
  plugins: [],
};
