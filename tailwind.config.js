/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        zoomer: {
          neon: '#3cff7a',
          'neon-bright': '#8fffab',
          'neon-dim': '#12a85c',
          green: '#39ff6e',
          cyan: '#4ae8c4',
          dark: '#080b0e',
          card: '#0f1419',
          border: 'rgba(57, 255, 120, 0.1)',
        },
        wheel: {
          navy: '#1a2744',
          'navy-deep': '#121c32',
          blue: '#2a4a7a',
          gold: '#e8a020',
          'gold-deep': '#c47800',
          purple: '#6b3fa0',
          secret: '#1a6b5c',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Unbounded', 'Inter', 'sans-serif'],
      },
      borderRadius: {
        card: '28px',
        btn: '14px',
      },
      boxShadow: {
        card: '0 0 0 1px rgba(57, 255, 120, 0.1), 0 24px 48px rgba(0, 0, 0, 0.5)',
        neon: '0 4px 24px rgba(57, 255, 120, 0.32)',
        wheel: '0 0 60px rgba(57, 255, 120, 0.15), 0 20px 50px rgba(0, 0, 0, 0.6)',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        marquee: 'marquee linear infinite',
      },
    },
  },
  plugins: [],
}
