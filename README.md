# SS TECHNO MULTI BRAND APPLIANCES REPAIR SERVICES

Official static website for **SS TECHNO MULTI BRAND APPLIANCES REPAIR SERVICES** in Kamareddy, Telangana, India. Built with **Astro 4**, **Tailwind CSS 3**, and **lucide-astro**.

## Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Start local dev server:**
   ```bash
   npm run dev
   ```
   Open `http://localhost:4321` in your browser.
3. **Build static site for production:**
   ```bash
   npm run build
   ```

## Editing Business Data (`src/config/site.ts`)

All business details, contact phones, proprietors, services, FAQs, gallery items, and SEO metadata live in `src/config/site.ts`. No business text is hardcoded in UI components.

### Client TODO / Placeholders Checklist
Update these fields in `src/config/site.ts` as the client provides them:
- **`siteUrl`**: Replace `"https://sstechno.example"` with the real production domain (also update `public/robots.txt`).
- **`location.address`**: Set the physical shop street address string (currently `null`, hidden in UI).
- **`location.mapUrl`**: Set the Google Maps share link (currently `null`; when set, "View on Google Maps" appears automatically on `/contact` and in LocalBusiness JSON-LD).
- **`location.areas`**: Add nearby towns/localities in Kamareddy district (currently `[]`, which renders a free-text Locality input in `BookingForm`).
- **`contact.email`**: Set the business email if provided (currently `null`, hidden in UI).
- **`brandsConfirmed` & `brands`**: Confirm the list of serviced appliance brands with the client and set `brandsConfirmed: true`.
- **`hours`**: Clarify which days of the week the `10:00 AM – 10:00 PM` working hours apply.
- **`reviews`**: Optionally populate `author` names if customers consent to having their names displayed.

## Adding Gallery Photos

1. Place optimized `.webp` or `.avif` photos in `public/gallery/` (for example, `public/gallery/ac-servicing.webp`).
2. In `src/config/site.ts`, update the `gallery` array entries with the file path in `src` (for example, `src: "/gallery/ac-servicing.webp"`).
3. Any item with `src: null` automatically displays a clean labelled placeholder card on `/gallery`.

## Replacing the Monogram Logo

1. Open `src/components/Logo.astro` and replace the inline `<svg>` monogram with the client's final SVG or image logo.
2. Update `public/favicon.svg` to match the final brand mark.

## Design System

- **Palette (`tailwind.config.mjs` & `src/styles/global.css`):**
  - `brand-ink`: `#0B0F14`
  - `brand-paper`: `#FAFAF8`
  - `brand-mist`: `#F1F3F2`
  - `brand-accent`: `#0F766E`
  - `brand-accent-light`: `#2DD4BF` (used on dark surfaces only)
  - `brand-line`: `#E5E7EB`
- **Typography:** `Plus Jakarta Sans` for headings (`font-display`) and `Inter` for body copy (`font-sans`).

## Deployment

The site outputs static HTML/CSS/JS to `dist/`.
- **Vercel:** Import the repository, select the **Astro** preset (`npm run build`, output `dist`), and deploy.
- **Netlify:** Import the repository, set build command to `npm run build` and publish directory to `dist`.
- **Cloudflare Pages:** Connect the repository, choose **Astro**, set build command to `npm run build` and build output directory to `dist`.

