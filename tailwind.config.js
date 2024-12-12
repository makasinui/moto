/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'pink': '#FFEEFB',
        'silver': '#B7A7B3',
      }
    },
  },
  plugins: [],
}

