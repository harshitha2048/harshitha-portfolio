/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        galaxy: {
          black: '#02030a',
          deepblue: '#0a0e2a',
          nebula: '#1a0b3d',
          violet: '#3d1a78',
          pink: '#ff4fa3',
          blue: '#3b82f6',
          cyan: '#22d3ee',
        },
      },
      animation: {
        twinkle: 'twinkle 4s ease-in-out infinite',
        'twinkle-slow': 'twinkle 7s ease-in-out infinite',
        float: 'float 8s ease-in-out infinite',
        'float-slow': 'float 14s ease-in-out infinite',
        'drift-x': 'drift-x 30s linear infinite',
        'drift-x-rev': 'drift-x-rev 40s linear infinite',
        'fade-up': 'fade-up 0.7s ease-out forwards',
        'pulse-glow': 'pulse-glow 3.5s ease-in-out infinite',
        'spin-slow': 'spin 18s linear infinite',
        'pulse-soft': 'pulse-soft 3s ease-in-out infinite',
      },
      keyframes: {
        twinkle: {
          '0%, 100%': { opacity: '0.2', transform: 'scale(0.85)' },
          '50%': { opacity: '1', transform: 'scale(1.15)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0) translateX(0)' },
          '50%': { transform: 'translateY(-18px) translateX(10px)' },
        },
        'drift-x': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-120%)' },
        },
        'drift-x-rev': {
          '0%': { transform: 'translateX(-120%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.45', transform: 'scale(1)' },
          '50%': { opacity: '0.75', transform: 'scale(1.08)' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
