/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'brand-navy': '#0A0A0A', // Pure sharp black/slate
        'brand-white': '#FFFFFF', // Pure white
        'brand-frost': '#F5F5F7', // Apple-style off white
        'brand-accent': '#B89B5E', // Muted metallic brass/gold
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
        }
      }
    },
  },
  plugins: [],
}
