/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'bg-banner': "url('src/assets/banner-bg2.png')"
      }
    },
  },
  plugins: [],
}

