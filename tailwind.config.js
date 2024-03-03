/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      spacing: {
        '128': '50rem'
      },
      fontFamily: {
        'jockey': ["Jockey One", "sans-serif"],
        'jaldi': ["Jaldi", "sans-serif"],
        'italianno': ["Italianno", "cursive"],
      },
      colors: {
        'body': '#142641',
        'smoke': '#ECECEC',
        'golden': '#E49F09',
        'hover-smoke': '#BDB7B7'
      },
      screens: {
        'xs': '405px',
      }
    },
  },
  plugins: [],
};
