/** @type {import('tailwindcss').Config} */
module.exports = {
  content: 
     ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    screens: {
      sm: '640px',  
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    fontFamily: {
        'source-sans-pro': ['Source Sans Pro', 'sans-serif'],
      },
     devtool: 'source-map',
  },
  variants: {},
  plugins: [require("daisyui")],
}  