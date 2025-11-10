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
        // Primary colors (adaptive)
        primary: {
          DEFAULT: '#E57621',
          hover: '#EC760D',
          active: '#C13F14',
          dark: '#C13F14',
        },
        secondary: {
          DEFAULT: '#C13F14',
          hover: '#710002',
          light: '#E45D18',
        },
        accent: {
          DEFAULT: '#FCBB65',
          hover: '#EE760D',
          light: '#FFD699',
        },
        
        // Background colors
        bg: {
          base: '#FFFFFF',
          soft: '#FFF8F0',
          warm: '#FFEDD9',
          gold: '#FEE6C8',
        },
        
        // Text colors
        text: {
          primary: '#1A0A03',
          secondary: '#4A1E0E',
          muted: '#8B4513',
          accent: '#E57621',
        },
        
        // Border colors
        border: {
          light: '#F5E5D3',
          DEFAULT: '#E8D4BE',
          dark: '#C13F14',
        },
        
        // Status colors
        status: {
          warning: '#EC590C',
          success: '#4A7C59',
          error: '#710002',
        },

        // Dark mode overrides (handled via CSS variables)
        dark: {
          primary: '#FCBB65',
          secondary: '#E57621',
          accent: '#FFD699',
          bg: {
            base: '#0A0503',
            soft: '#1A1210',
            warm: '#2A1F1A',
            gold: '#3A2F28',
          },
          text: {
            primary: '#FFF8F0',
            secondary: '#FFE5CC',
            muted: '#D4B896',
          },
          border: {
            light: '#2A1F1A',
            DEFAULT: '#3A2F28',
          },
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
        'glow-lg': "0 0 30px rgba(229, 118, 33, 0.6)",
        soft: "0 10px 30px rgba(0, 0, 0, 0.08)",
        'soft-lg': "0 20px 40px rgba(0, 0, 0, 0.12)",
        card: "0 4px 20px rgba(193, 63, 20, 0.1)",
        'card-hover': "0 8px 30px rgba(193, 63, 20, 0.15)",
      },

      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #E57621 0%, #EC760D 100%)',
        'gradient-secondary': 'linear-gradient(135deg, #C13F14 0%, #710002 100%)',
        'gradient-accent': 'linear-gradient(135deg, #FCBB65 0%, #EE760D 100%)',
        'gradient-warm': 'linear-gradient(180deg, #FFF8F0 0%, #FFEDD9 50%, #FEE6C8 100%)',
        'gradient-dark': 'linear-gradient(180deg, #0A0503 0%, #1A1210 50%, #2A1F1A 100%)',
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
        fadeLeft: {
          "0%": { opacity: "0", transform: "translateX(-30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        fadeRight: {
          "0%": { opacity: "0", transform: "translateX(30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        slideDown: {
          "0%": { opacity: "0", transform: "translateY(-10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-1000px 0" },
          "100%": { backgroundPosition: "1000px 0" },
        },
        pulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
      },

      animation: {
        "fade-up": "fadeUp 0.6s ease-out both",
        "fade-in": "fadeIn 0.8s ease-out both",
        "fade-left": "fadeLeft 0.6s ease-out both",
        "fade-right": "fadeRight 0.6s ease-out both",
        "scale-in": "scaleIn 0.5s ease-out both",
        "slide-down": "slideDown 0.4s ease-out both",
        "shimmer": "shimmer 2s infinite linear",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },

      spacing: {
        "18": "4.5rem",
        "88": "22rem",
        "112": "28rem",
        "128": "32rem",
        "144": "36rem",
      },

      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },

      fontSize: {
        "2xs": "0.625rem",
      },

      maxWidth: {
        "8xl": "88rem",
        "9xl": "96rem",
      },

      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },

      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
      },

      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};