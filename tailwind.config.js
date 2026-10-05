/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#F0F7FF',
          100: '#E0EFFF',
          200: '#B9DDFF',
          300: '#7CC0FF',
          400: '#389EFF',
          500: '#1E88E5', /* Club primary tech blue from logo */
          600: '#1565C0',
          700: '#0D47A1',
          accent: '#0284C7',
          glow: 'rgba(30, 136, 229, 0.15)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'brand-glow': '0 4px 20px -2px rgba(30, 136, 229, 0.15)',
      }
    },
  },
  plugins: [],
};
