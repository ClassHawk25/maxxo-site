/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#F6FCFC',
        foreground: '#03045E',
        muted: {
          DEFAULT: '#CAF0F8',
          foreground: 'rgba(3, 4, 94, 0.6)',
        },
        accent: {
          DEFAULT: '#01B5D8',
          secondary: '#90E0EF',
          foreground: '#FFFFFF',
        },
        card: {
          DEFAULT: '#FFFFFF',
          foreground: '#03045E',
        },
        border: '#CAF0F8',
      },
      fontFamily: {
        sans: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
        display: ['var(--font-jakarta)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'monospace'],
      },
      animation: {
        'float': 'float 5s ease-in-out infinite',
        'float-delayed': 'float-delayed 4s ease-in-out infinite 0.5s',
        'pulse-ring': 'pulse-ring 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'float-delayed': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        'pulse-ring': {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.4' },
          '50%': { transform: 'scale(1.1)', opacity: '0.2' },
        },
      },
    },
  },
  plugins: [],
};
