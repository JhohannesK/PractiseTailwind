module.exports = {
  content: ["./src/**/*.{html, js}"],
  theme: {
    extend: {
      fontFamily: {
        paul: ["'Supermercado One'", 'cursive'],
        roboto: ['Roboto', 'sans-serif']
      },
      animation: {
        blob: 'blob 6s infinite'
      },

      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)"
          },
          "30%": {
            transform: "translate(25px, -50px) scale(1.2)"
          },
          '60%': {
            transform: 'translate(90px, 90px) scale(0.8)'
          },
          '100%': {
            transform: 'translate(0px, 0px) scale(1)'
          }
        }
      }
    },
  },
  plugins: [],
}
