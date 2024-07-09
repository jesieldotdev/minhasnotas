/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Poppins', 'sans-serif'],
      },
      colors:{
        'iphone-blue': '#0760fb',
        'iphone-blue-2': '#035bfb',
        'iphone-white': '#ebf2fe',
        'blue-sec': '#e2ebfa'
      }
    },
  },
  plugins: [],
}

