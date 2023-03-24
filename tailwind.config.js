/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm':'700px',
        'md': '1256px',
        'lg':'1440px'
      },
    },
  },
  plugins: [],
}
