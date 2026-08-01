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
      keyframes: {
        // Spin Animations
        'spin-slow': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        'spin-slower': {
          from: { transform: 'rotate(360deg)' },
          to: { transform: 'rotate(0deg)' },
        },
        'spin-slowest': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        // Fade Animations
        fadeDown: {
          from: { opacity: '0', transform: 'translateY(-30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        // Gradient & Glow Animations
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '0.6' },
        },
        pulseSlow: {
          '0%, 100%': { opacity: '0.7' },
          '50%': { opacity: '1' },
        },
        // Float & Scroll
        floatParticle: {
          '0%, 100%': { transform: 'translateY(0px) translateX(0px)', opacity: '0' },
          '50%': { transform: 'translateY(-30px) translateX(15px)', opacity: '0.5' },
        },
        scroll: {
          '0%': { transform: 'translateY(0)', opacity: '1' },
          '100%': { transform: 'translateY(8px)', opacity: '0' },
        },
        // Bounce & Ping (Overriding Default Tailwind)
        bounceCustom: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pingCustom: {
          '75%, 100%': { transform: 'scale(2)', opacity: '0' },
        }
      },
      animation: {
        'spin-slow': 'spin-slow 20s linear infinite',
        'spin-slower': 'spin-slower 25s linear infinite',
        'spin-slowest': 'spin-slowest 30s linear infinite',
        'fade-down': 'fadeDown 0.6s ease-out forwards',
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-up-delay': 'fadeUp 0.6s ease-out 0.2s forwards',
        'fade-up-delay-2': 'fadeUp 0.6s ease-out 0.4s forwards',
        'fade-up-delay-3': 'fadeUp 0.6s ease-out 0.6s forwards',
        'fade-up-delay-4': 'fadeUp 0.6s ease-out 0.8s forwards',
        'gradient': 'gradient 3s ease infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'pulse-slow': 'pulseSlow 2s ease-in-out infinite',
        'float-particle': 'floatParticle linear infinite', // duration specify nahi tha CSS main, default to standard if needed
        'scroll': 'scroll 1.5s ease-in-out infinite',
        'bounce-custom': 'bounceCustom 2s ease-in-out infinite',
        'ping-custom': 'pingCustom 1s cubic-bezier(0, 0, 0.2, 1) infinite',
      }
    },
  },
  plugins: [],
};
