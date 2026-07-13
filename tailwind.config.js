/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Deep engineering dark palette — "midnight lab"
        night: {
          950: '#070B16', // page background
          900: '#0A0F1E',
          850: '#0E1526',
          800: '#121A2E', // surfaces / cards
          700: '#1B2540',
          600: '#28345A',
        },
        ink: {
          DEFAULT: '#E7EBF4',
          muted: '#8E97AB',
          faint: '#5A657D',
        },
        // Copper — the material of PCB traces. Primary accent.
        copper: {
          300: '#F2C078',
          400: '#E8A94F',
          500: '#D98E32',
          600: '#B7731F',
        },
        // Depth teal — a nod to underwater robotics. Used sparingly.
        depth: {
          300: '#7AE6D2',
          400: '#34D3B0',
          500: '#18B897',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 40px -12px rgba(217, 142, 50, 0.45)',
        card: '0 10px 40px -18px rgba(0,0,0,0.6)',
      },
      backgroundImage: {
        grid: 'linear-gradient(rgba(142,151,171,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(142,151,171,0.07) 1px, transparent 1px)',
      },
      keyframes: {
        'pulse-dot': {
          '0%, 100%': { opacity: '0.25' },
          '50%': { opacity: '1' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'pulse-dot': 'pulse-dot 2.4s ease-in-out infinite',
        marquee: 'marquee 30s linear infinite',
      },
    },
  },
  plugins: [],
}
