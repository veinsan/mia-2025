/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#E86A1E",
        secondary: "#B94519",
        accent: "#F9B04E",
        dark: "#3A1E04",
        light: "#FFF3E0",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        heading: ["Righteous", "sans-serif"],
      },
    },
  },
  plugins: [],
};
