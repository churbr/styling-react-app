/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // For google fonts, enclose them with double quotes
        title: ['"Pacifico"', 'cursive']
      }
    },
  },
  plugins: [],
}

