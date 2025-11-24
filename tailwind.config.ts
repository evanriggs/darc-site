import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Boring mode colors
        boring: {
          navy: '#1a365d',
          gray: '#718096',
          lightgray: '#e2e8f0',
          white: '#ffffff',
        },
        // DARC mode colors
        darc: {
          black: '#0a0a0a',
          red: '#ff0000',
          cyan: '#00ffff',
          green: '#00ff41',
          white: '#ffffff',
        },
      },
      fontFamily: {
        sans: ['Arial', 'sans-serif'],
        serif: ['Georgia', 'serif'],
        mono: ['"Courier New"', 'monospace'],
      },
      animation: {
        glitch: 'glitch 0.3s cubic-bezier(.25, .46, .45, .94) both infinite',
        scanline: 'scanline 8s linear infinite',
      },
      keyframes: {
        glitch: {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
