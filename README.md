# FC High Performance — Website

Production: https://fchighperformance.com

## Quickstart

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Stack

- **Next.js 16** (App Router) + TypeScript
- **Tailwind CSS 4** (CSS-first config in `src/app/globals.css`)
- **Fonts:** Oswald + Montserrat via `next/font`
- **Hosting:** Vercel
- **Forms / CRM:** GoHighLevel (iframe embed)

## Documentation

For owners and future maintainers: **see [HANDOFF.md](./HANDOFF.md)** — full account inventory, how to make common changes, DNS notes, known issues, and the "what's still TODO" punch list.

## File structure (short version)

```
src/
├── app/           Next.js App Router pages and routes
├── components/    UI components (one per file)
└── data/          Editable copy + config (programs, testimonials, hours, site info)

public/            Photos, logo, favicon, OG image
```

## How to make common edits

| Change | File |
|---|---|
| Phone, email, address, hours, social | `src/data/site.ts` + `src/data/hours.ts` |
| Program copy or schedule | `src/data/programs.ts` |
| Testimonials | `src/data/testimonials.ts` |
| FAQ | `src/data/faqs.ts` |
| Brand colors | `src/app/globals.css` (`@theme inline` block) |
| Replace a photo | Drop into `public/` with the same filename |
| Hero text, About bio | `src/components/Hero.tsx`, `src/components/About.tsx` |
| Form fields | **Inside GoHighLevel** (form is an iframe embed) |

## Deploy

Every push to `main` triggers a Vercel build. Live in ~90 seconds. SSL auto-renews via Let's Encrypt.
