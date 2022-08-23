/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {},
    container: {
      padding: '.5rem',
      center: true,
    },
    screen: {
      sm: '640px',
      md: '768',
      lg: '992px',
      xl: '1200px'
    }
  },
  plugins: [],
}
