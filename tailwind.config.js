/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust this path if your source files are elsewhere
  ],
  theme: {
    extend: {
      colors: {
        'orange': '#FF754C',
        'gray': '#1F212869',
        'violet': '#6C5DD3'
      },
      height: {
        '22': '88px'
      }
    },
  },
  plugins: [],
};