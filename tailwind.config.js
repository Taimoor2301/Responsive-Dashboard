/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        p:"#E6618C",
        g:"#2AA451",
        i:"#6D5FB4"
      }
    },
  },
  plugins: [],
}