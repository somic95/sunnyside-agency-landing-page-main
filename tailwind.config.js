/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xl': '1440px',
      'lg': '1024px',
      'md': '768px',
      '': '375px'
    },
    extend: {},
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}
