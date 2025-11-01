/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#E87524", // oranye utama
        secondary: "#B94519", // oranye tua untuk shadow/tekanan
        accent: "#FFA94D", // oranye lembut untuk gradient/hover
        dark: "#4A1E0E", // coklat tua untuk background dark mode
        light: "#FFF0E0", // cream lembut untuk light mode
        neutral: "#2C2C2C", // teks/ikon netral
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        heading: ["Righteous", "sans-serif"],
        delius: ["Delius", "cursive"], // buat subheading Testimoni
      },
      boxShadow: {
        glow: "0 0 20px rgba(232, 117, 36, 0.5)", // efek glow oranye
        soft: "0 10px 30px rgba(0,0,0,0.08)", // buat card ringan
      },
      backgroundImage: {
        "hero-gradient": "linear-gradient(to bottom, var(--tw-gradient-stops))",
      },

      // 🔥 ANIMATIONS
      keyframes: {
        // Hero parallax fade-in smooth
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        // Tentang animasi saat scroll masuk
        fadeLeft: {
          "0%": { opacity: "0", transform: "translateX(-30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        fadeRight: {
          "0%": { opacity: "0", transform: "translateX(30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        // Testimoni marquee
        marqueeLeft: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        marqueeRight: {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
        // Sedikit efek zoom-in buat TopResto cards
        zoomIn: {
          "0%": { transform: "scale(0.95)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
      },

      animation: {
        "fade-up": "fadeUp 0.8s ease-out both",
        "fade-in": "fadeIn 1s ease-out both",
        "fade-left": "fadeLeft 0.8s ease-out both",
        "fade-right": "fadeRight 0.8s ease-out both",
        "scroll-left": "marqueeLeft 35s linear infinite",
        "scroll-right": "marqueeRight 40s linear infinite",
        "zoom-in": "zoomIn 0.6s ease-out both",
      },

      // responsive spacing khusus Hero/Tentang
      spacing: {
        "128": "32rem",
        "144": "36rem",
      },

      borderRadius: {
        "2xl": "1.25rem",
        "3xl": "1.75rem",
        "4xl": "2.5rem",
      },
    },
  },
  plugins: [],
};
