import type { Config } from 'tailwindcss';
const config: Config = {
  darkMode: 'class',
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#112950',
          'navy-light': '#1a3a6a',
          blue: '#009fe3',
          'blue-dark': '#0080b8',
          'blue-light': '#4db8e8',
          cyan: '#22d3ee',
        },
        dark: {
          bg: 'rgb(var(--surface-0) / <alpha-value>)',
          card: 'rgb(var(--surface-1) / <alpha-value>)',
          border: 'rgb(var(--line) / <alpha-value>)',
          surface: 'rgb(var(--surface-2) / <alpha-value>)',
        },
      },
      fontFamily: { heading: ['var(--font-heading)', 'sans-serif'], body: ['var(--font-body)', 'sans-serif'] },
      animation: {
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        float: 'float 6s ease-in-out infinite',
        glow: 'glow 4s ease-in-out infinite',
        'pulse-soft': 'pulseSoft 3s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: { '0%': { opacity: '0', transform: 'translateY(40px) perspective(800px) rotateX(3deg)' }, '100%': { opacity: '1', transform: 'none' } },
        float: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-14px)' } },
        glow: { '0%,100%': { boxShadow: '0 0 20px rgba(0,159,227,0.3)' }, '50%': { boxShadow: '0 0 40px rgba(0,159,227,0.6)' } },
        pulseSoft: { '0%,100%': { opacity: '0.6' }, '50%': { opacity: '1' } },
      },
    },
  },
  plugins: [],
};
export default config;
