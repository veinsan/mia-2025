/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/sections/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Primary brand colors dari extracted palette
        primary: {
          DEFAULT: '#E57621',
          hover: '#EC760D',
          dark: '#C13F14',
        },
        secondary: {
          DEFAULT: '#C13F14',
          light: '#E45D18',
        },
        accent: {
          DEFAULT: '#FCBB65',
          light: '#FFD699',
        },
        
        // Background system (light → dark via CSS vars)
        bg: {
          base: 'var(--bg-base)',
          soft: 'var(--bg-soft)',
          warm: 'var(--bg-warm)',
          gold: 'var(--bg-gold)',
        },
        
        // Text system (light → dark via CSS vars)
        text: {
          primary: 'var(--text-primary)',
          secondary: 'var(--text-secondary)',
          muted: 'var(--text-muted)',
        },
        
        // Border colors
        border: {
          light: 'var(--border-light)',
          DEFAULT: 'var(--border-default)',
        },
      },

      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        heading: ["Righteous", "sans-serif"],
        delius: ["Delius", "cursive"],
      },

      boxShadow: {
        glow: "0 0 20px rgba(229, 118, 33, 0.5)",
        'glow-sm': "0 0 10px rgba(229, 118, 33, 0.3)",
        soft: "0 10px 30px rgba(0, 0, 0, 0.08)",
        card: "0 4px 20px rgba(193, 63, 20, 0.1)",
      },

      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #E57621 0%, #EC760D 100%)',
        'gradient-warm': 'linear-gradient(180deg, var(--bg-base) 0%, var(--bg-soft) 50%, var(--bg-warm) 100%)',
      },

      animation: {
        "fade-up": "fadeUp 0.6s ease-out both",
        "fade-in": "fadeIn 0.8s ease-out both",
        "scale-in": "scaleIn 0.5s ease-out both",
      },

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
    },
  },
  plugins: [],
};