/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // "Rose Empowerment" Palette
        primary: {
          DEFAULT: '#C2185B', // Deep Rose Pink
          hover: '#AD1457',
          dark: '#880E4F',
          light: '#E85D91',
        },
        rose: {
          deep: '#C2185B',    // Deep Rose Pink (Primary)
          blush: '#E85D91',   // Blush Pink (Secondary)
          white: '#FFF8FA',   // Rose White (Light Page Background)
          soft: '#FCE4EC',    // Soft Pink (Card Background)
          border: '#F8BBD0',  // Soft Rose Border
          subtle: '#FFF0F5',  // Very Light Rose Accent
        },
        burgundy: {
          DEFAULT: '#831843', // Berry Burgundy (Dark Headings & Footer)
          dark: '#500724',
          light: '#9D174D',
          hover: '#701A3C',
        },
        gold: {
          warm: '#FFD166',    // Warm Gold (Helpline & CTAs)
          hover: '#F5C242',
          light: '#FFF6D6',
          dark: '#B38600',
        },
        charcoal: {
          DEFAULT: '#2D1520', // Deep Plum-Charcoal for high contrast readability
          muted: '#633B4E',   // Accessible Muted Rose-Slate
          light: '#8C5E73',   // Gentle Secondary Text
        }
      },
      fontFamily: {
        tamil: ['"Noto Sans Tamil"', 'system-ui', 'sans-serif'],
        tamilSerif: ['"Noto Serif Tamil"', 'Georgia', 'serif'],
        sans: ['Inter', '"Noto Sans Tamil"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(131, 24, 67, 0.08)',
        'card': '0 8px 30px rgba(131, 24, 67, 0.07)',
        'elevated': '0 20px 40px -15px rgba(131, 24, 67, 0.18)',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fadeIn': 'fadeIn 0.25s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(-4px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
