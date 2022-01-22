module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        rotate: {
          '100%': { transform: 'rotate(360deg)' }
        }
      },
      animation: {
        rotate: 'rotate 4s linear infinite'
      },
    },
  },
  plugins: [],
}