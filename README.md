# Cursed Ink Society

Marketing website for **Cursed Ink Society**, a tattoo and piercing studio in Houma, LA.

Built with SvelteKit 2 (Svelte 5, runes mode), Tailwind CSS 4, and TypeScript.

- 📍 488 Corporate Dr, Suite 11 — Houma, LA 70360
- 📞 (985) 208-2334
- 🕐 Mon–Thu 1–9pm · Fri–Sat 1–10pm · Sun closed
- [Instagram](https://www.instagram.com/cursedinksociety) · [Facebook](https://www.facebook.com/Cursed-Ink-Society-61578184810084/) · [TikTok](https://www.tiktok.com/@cursedinksociety)

## Getting started

Requires Node 20+ and npm.

```sh
npm install
npm run dev          # http://localhost:5173
npm run dev -- --open
```

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the Vite dev server |
| `npm run build` | Production build |
| `npm run preview` | Serve the production build locally |
| `npm run check` | Type-check Svelte + TS (`svelte-check`) |
| `npm run check:watch` | Same, in watch mode |
| `npm run lint` | Prettier check + ESLint |
| `npm run format` | Format everything with Prettier |

## Project structure

```
src/
├── app.html                  # HTML shell
├── lib/
│   ├── assets/               # favicon, hero video, artist headshots
│   ├── components/
│   │   ├── Navbar.svelte     # nav + mobile hamburger menu
│   │   ├── Hero.svelte       # full-bleed hero w/ background video
│   │   ├── Marquee.svelte    # scrolling text banner
│   │   └── Footer.svelte     # shop info, hours, links
│   └── data/
│       └── artists.ts        # single source of truth for the artist roster
└── routes/
    ├── +layout.svelte        # Navbar + Footer wrapper
    ├── layout.css            # Tailwind theme tokens & base/component styles
    ├── +page.svelte          # Home: artists, piercings, contact
    ├── tattoos/              # (stub)
    ├── piercings/            # (stub)
    ├── aftercare/            # (stub)
    └── faq/                  # (stub)
```

## Design system

Theme tokens live in the `@theme` block of [`src/routes/layout.css`](src/routes/layout.css) — use these instead of hard-coded values:

**Colors**

| Token | Value | Use |
| --- | --- | --- |
| `background` | `#0b0b0b` | Page background |
| `primary` | `#f2f0ec` | Headings, buttons, emphasis |
| `secondary` | `#8b8884` | Default body text |
| `tertiary` | `#b8b5b0` | Paragraph copy on dark sections |

**Fonts** — `font-anton` (display headings), `font-space-mono` (labels, nav, UI), `font-archivo` (body).

**Component classes** — `.btn-primary`, `.btn-secondary`, `.small-border` (section divider).

`h2` is globally styled as Anton / 8xl / uppercase, so most section headings need no classes.

## Editing content

**Artists** — edit [`src/lib/data/artists.ts`](src/lib/data/artists.ts). Each entry:

```ts
{
  slug: 'artist',        // URL-safe id, also the #each key
  name: 'Artists',
  image: profileImage,  // imported from $lib/assets/images
  specialties: [],
  bio: '',
  role: 'role',     // 'Artist' | 'Apprentice' | 'Piercer'
  instagram: 'https://instagram.com/...'
}
```

`role` drives layout: the home page grid renders `Artist` and `Apprentice`, and the piercings section pulls the single `Piercer`. To add someone, drop their headshot in `src/lib/assets/images/`, import it at the top of the file, and append an entry.

**Shop info** (address, phone, hours, socials) is hard-coded in [`Footer.svelte`](src/lib/components/Footer.svelte).

## Status

The home page (hero, marquee, artists, piercings, contact) and mobile layout are done. `/tattoos`, `/piercings`, `/aftercare`, and `/faq` are heading-only stubs. Artist `bio` and `specialties` fields are populated as empty placeholders, and artist cards currently link to `/` rather than individual profiles.

## Deployment

The project uses `@sveltejs/adapter-auto`, which detects supported hosts (Vercel, Netlify, Cloudflare) at build time. For any other target, install and configure the matching [adapter](https://svelte.dev/docs/kit/adapters) in [`vite.config.ts`](vite.config.ts).
