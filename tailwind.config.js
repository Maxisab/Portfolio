/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'tablet': '640px',
      'laptop': '1024px',
      'desktop': '1280px',
      'desktop-l': '1800px'
    },
    extend: {
      backgroundImage: {
        'hero-border-d': "url('../public/images/Rectangle dark.svg')",
        'hero-border-l': "url('../public/images/Rectangle light.svg')",
      },
      colors: {
        'dark': '#323031',
        'light': '#50514F',
        'yellow': '#FFC857',
        'yellow-l': '#FFE066',
        'red': "#DB3A34",
        'red-l': '#F25F5C',
        'blue': '#084C61',
        'blue-l': '#247BA0',
        'green': '#177E89',
        'green-l': '#70C1B3',
      },
      fontFamily: {
        sourceCode: [' "Source Code Pro"', "sans-serif"]
      },
    },
  },
  plugins: [],
}

