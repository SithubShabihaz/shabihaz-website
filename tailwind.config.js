/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['var(--font-poppins)', 'sans-serif'],
        rajdhani: ['var(--font-rajdhani)', 'sans-serif'],
      },
      // Infinite Auto-Scroll ke liye optimized marquee speeds (Divi Style)
      animation: {
        'marquee-up': 'marqueeUp 55s linear infinite',
        'marquee-down': 'marqueeDown 55s linear infinite',
      },
      // Smooth seamless loop bina jhatke (glitch) ke chalne ke liye translate3d keyframes
      // transform3d GPU hardware acceleration use karta hai jisse scroll lag-free hota hai
      keyframes: {
        marqueeUp: {
          '0%': { transform: 'translate3d(0, 0%, 0)' },
          '100%': { transform: 'translate3d(0, -50%, 0)' },
        },
        marqueeDown: {
          '0%': { transform: 'translate3d(0, -50%, 0)' },
          '100%': { transform: 'translate3d(0, 0%, 0)' },
        },
      },
    },
  },
  plugins: [
    // Custom plugin taake pure Divi 3D layout matrix ka structural view standard utilities ke sath maintain ho sake
    function ({ addUtilities }) {
      addUtilities({
        '.perspective-1200': {
          perspective: '1200px',
          'perspective-origin': 'center top',
        },
        '.transform-divi-3d': {
          transform: 'rotateX(18deg) rotateY(-12deg) rotateZ(4deg)',
          'transform-style': 'preserve-3d',
        },
      });
    },
  ],
};