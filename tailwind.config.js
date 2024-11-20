/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Lato', 'sans-serif'], // Add Lato as the default sans-serif font
      },
      colors: {
        EcomLightGray: '#adadad',
        EcomDarkGray: '#383736',
        EcomBrown: '#30251e',
        EcomDark:'#0c0908'
      },
    },
  },
  plugins: [],
}
