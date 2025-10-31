/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}", // kalau pakai Next.js app router
  ],
  darkMode: "class", // penting biar toggle dark/light di Nav.jsx jalan
  theme: {
    extend: {
      colors: {
        primary: "#E87524", // oranye utama (lebih konsisten & vibrant)
        secondary: "#B94519", // oranye tua untuk elemen shadow/highlight
        accent: "#FFA94D", // oranye lembut untuk hover/gradient
        dark: "#4A1E0E", // coklat gelap (background utama dark mode)
        light: "#FFF0E0", // cream lembut (background utama light mode)
        neutral: "#2C2C2C", // teks/ikon gelap netral
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        heading: ["Righteous", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 20px rgba(232, 117, 36, 0.5)",
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(to bottom, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
