# SS Techno AC Care - Premium HVAC Website

This is a premium, multi-page, fully responsive and statically generated website for an AC repair and service business. It is built with **Astro** and **Tailwind CSS**, designed for maximum performance, excellent SEO, and a luxurious brand feel.

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Run locally:**
   ```bash
   npm run dev
   ```
   Open `http://localhost:4321` in your browser.
3. **Build for production:**
   ```bash
   npm run build
   ```

## Customization Guide

All the core business details are centralized in one file for easy editing. 

### Editing Business Details
Open `src/config/site.ts`. You can update:
- Business name and tagline
- Location, service areas, and address
- Contact information (phone, whatsapp, email)
- Statistics and brand list
- Services list (prices, descriptions, icons)

### Editing Content
- **Home, About, Contact:** Edit the respective `.astro` files in `src/pages/`.
- **Blog:** Add/remove starter articles in `src/pages/blog/index.astro`.
- **Services:** Service details are populated dynamically from `src/config/site.ts`. The layout can be edited in `src/pages/services/[id].astro`.

### Replacing Images
There are placeholder images included (via Unsplash) as comments in the codebase marked with `PLACEHOLDER:`.
1. Hero Image: `src/pages/index.astro`
2. Technician Working: `src/pages/index.astro`
3. Team at work: `src/pages/about.astro`

Simply replace the `<img src="...">` paths with your high-quality, branded imagery. It's recommended to place your webp/avif images in the `public/` directory (e.g., `public/hero.webp`) and reference them directly as `/hero.webp`.

### Replacing Real Testimonials
Open `src/pages/index.astro` and update the `testimonials` array at the top of the file with real customer reviews.

## Deployment

The site is configured for static output, meaning it can be hosted essentially anywhere for free.

- **Vercel:** Connect your GitHub repo, select "Astro" framework, and deploy.
- **Netlify:** Connect your GitHub repo, select "Astro" framework, and deploy.
- **Cloudflare Pages:** Connect your GitHub repo, select "Astro", set build command to `npm run build` and output dir to `dist`.

## Checklist before launch
- [ ] Personalize `src/config/site.ts` with real numbers and emails.
- [ ] Add your Google Maps embed URL to `src/config/site.ts` if needed (can be used in Contact page).
- [ ] Swap out placeholder Unsplash images with real photos of your team and work.
- [ ] Update the `testimonials` in `src/pages/index.astro` with real Google reviews.
- [ ] Ensure the WhatsApp number is correct so the Booking form works accurately.
- [ ] Connect a custom domain in your hosting provider (Vercel/Netlify).

## Design System Note
- **Colors:** Configured in `tailwind.config.mjs` (Navy, Frost, Accent, White).
- **Fonts:** "Fraunces" for headings, "Inter" for body. Google Fonts is loaded in `src/layouts/Layout.astro`.
- **Icons:** Powered by `lucide-astro`.
