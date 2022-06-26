/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        "dark-purple": "#007BFF",
        "line-white": "rgba(255,255,255,0.17)",
      },
    }, 
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
