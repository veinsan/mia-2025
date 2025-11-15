/** @type {import('tailwindcss').Config} */

/*
  Konfigurasi utama TailwindCSS untuk project Gelap Nyawang.
  File ini mengatur sistem warna, font, shadow, animasi, dan breakpoint
  supaya konsisten di seluruh UI.
*/
module.exports = {
  // --------------------------------------------------------------------
  // File yang akan discan Tailwind untuk menghapus class yang tidak dipakai
  // --------------------------------------------------------------------
  content: [
    "./src/app/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/sections/**/*.{js,jsx,ts,tsx}",
  ],

  // Mengaktifkan mode dark berdasarkan class ".dark"
  darkMode: "class",

  theme: {
    extend: {
      // --------------------------------------------------------------
      // Sistem Warna (Palet utama + token semantic untuk background & teks)
      // --------------------------------------------------------------
      colors: {
        // Warna utama (brand colors)
        primary: {
          DEFAULT: '#E57621',   // warna utama GN
          hover: '#EC760D',     // dipakai saat hover CTA
          dark: '#C13F14',      // opsi tone lebih gelap
        },
        secondary: {
          DEFAULT: '#C13F14',
          light: '#E45D18',
        },
        accent: {
          DEFAULT: '#FCBB65',
          light: '#FFD699',
        },
        
        // Sistem warna background berdasarkan CSS variables
        bg: {
          base: 'var(--bg-base)',
          soft: 'var(--bg-soft)',
          warm: 'var(--bg-warm)',
          gold: 'var(--bg-gold)',
        },
        
        // Sistem warna teks
        text: {
          primary: 'var(--text-primary)',
          secondary: 'var(--text-secondary)',
          muted: 'var(--text-muted)',
        },
        
        // Warna border
        border: {
          light: 'var(--border-light)',
          DEFAULT: 'var(--border-default)',
        },
      },

      // --------------------------------------------------------------
      // Font Family (Branding typography)
      // --------------------------------------------------------------
      fontFamily: {
        sans: ["Poppins", "sans-serif"],   // font utama
        heading: ["Righteous", "sans-serif"], // heading khas untuk brand
        delius: ["Delius", "cursive"],     // aksen / dekoratif
      },

      // --------------------------------------------------------------
      // Shadow untuk card, glow brand, dan elemen UI lain
      // --------------------------------------------------------------
      boxShadow: {
        glow: "0 0 20px rgba(229, 118, 33, 0.5)",
        'glow-sm': "0 0 10px rgba(229, 118, 33, 0.3)",
        soft: "0 10px 30px rgba(0, 0, 0, 0.08)",
        card: "0 4px 20px rgba(193, 63, 20, 0.1)",
      },

      // --------------------------------------------------------------
      // Custom background gradients
      // --------------------------------------------------------------
      backgroundImage: {
        'gradient-primary':
          'linear-gradient(135deg, #E57621 0%, #EC760D 100%)',
        'gradient-warm':
          'linear-gradient(180deg, var(--bg-base) 0%, var(--bg-soft) 50%, var(--bg-warm) 100%)',
      },

      // --------------------------------------------------------------
      // Animations ready-to-use di komponen
      // fade-up, fade-in, dan scale-in
      // --------------------------------------------------------------
      animation: {
        "fade-up": "fadeUp 0.6s ease-out both",
        "fade-in": "fadeIn 0.8s ease-out both",
        "scale-in": "scaleIn 0.5s ease-out both",
      },

      // --------------------------------------------------------------
      // Keyframes animasi untuk efek masuk halus
      // --------------------------------------------------------------
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },

      // --------------------------------------------------------------
      // Timing function custom untuk efek bouncing yang halus
      // --------------------------------------------------------------
      transitionTimingFunction: {
        'bounce-smooth': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },

      // --------------------------------------------------------------
      // Breakpoint tambahan untuk device kecil
      // --------------------------------------------------------------
      screens: {
        'xs': '475px',
      },
      
    },
  },

  // Tidak ada plugin tambahan (bisa ditambah nanti)
  plugins: [],
};