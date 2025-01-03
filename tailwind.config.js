/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'light': '#323131',
        'light-dark': '#B4B4B4',
        'accent': '#2153e8',
        'accent-dark': '#E82521'
      },
      backgroundImage: {
        'to-right': 'radial-gradient(50% 100% at 50% 0%, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.025) 100%)',
        'orange': 'linear-gradient(257.48deg, #FD8806 25.37%, #DB3F2C 125.31%)',
        'linear-orange': 'linear-gradient(135deg, #E26009 0%, #FF8831 100%);'
      }
    },
  },
  plugins: [],
}

