module.exports = {
  mode: "jit",
  content: ["./pages/**/*.{html,js,css,scss}", "./components/**/*.{html,js,css,scss}","./styles/**/*.{scss,css}"],
  theme: {
    extend: {
      screens: {
        "3xl": "2000px"
      }
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
}
