import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'brand-ink': '#0B0F14',
        'brand-paper': '#FAFAF8',
        'brand-mist': '#F1F3F2',
        'brand-accent': '#0F766E',
        'brand-accent-light': '#2DD4BF',
        'brand-line': '#E5E7EB',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      container: {
        center: true,
        padding: '1.5rem',
        screens: {
          '2xl': '1280px',
        },
      },
    },
  },
  plugins: [typography],
};

