# FC High Performance — Website

The marketing site for [fchighperformance.com](https://fchighperformance.com).

## Stack

- **Framework:** Next.js 16 (App Router) + TypeScript
- **Styling:** Tailwind CSS 4 (CSS-first config in `src/app/globals.css`)
- **Fonts:** Oswald (display) + Montserrat (body) via `next/font`
- **Hosting:** Vercel
- **Forms / CRM:** GoHighLevel (form embedded via iframe; all leads/SMS/email automation runs in GHL — no code-side handling)

## Local development

```bash
npm install
npm run dev
```

Then open <http://localhost:3000>.

## Project structure

```
src/
  app/
    layout.tsx       Root layout — loads fonts + metadata
    page.tsx         The single landing page — imports each section
    globals.css      Tailwind import + FC brand tokens (@theme block)
  components/
    Header.tsx       Sticky nav with logo + CTA
    Hero.tsx         Dark hero with headline + primary CTA
    Programs.tsx     4-card grid (Kids Boxing / S&C / Small Group / 1-on-1)
    About.tsx        Coach intro + portrait placeholder
    Testimonials.tsx 3-quote grid
    BookingForm.tsx  Embedded GoHighLevel form iframe
    Footer.tsx       Contact info + hours
  data/
    site.ts          Site-wide constants (phone, email, GHL form ID)
    programs.ts      Program list — edit here to change cards
    testimonials.ts  Quote list — edit here to swap testimonials
public/
  logo.webp          FC High Performance logo
```

## How to make common edits

| Change | Where to edit |
|---|---|
| Phone number, email, address, hours | `src/data/site.ts` |
| Program copy, pricing, CTAs | `src/data/programs.ts` |
| Testimonials | `src/data/testimonials.ts` |
| Brand colors | `src/app/globals.css` (`@theme inline` block) |
| Fonts | `src/app/layout.tsx` (next/font imports) |
| Hero headline / About bio | `src/components/Hero.tsx`, `src/components/About.tsx` |
| Form fields (name, phone, etc.) | **Inside GoHighLevel** — the form is embedded as an iframe |

## Brand palette

| Token | Hex | Use |
|---|---|---|
| `brand-dark` | `#232323` | Headers, dark sections, primary text on white |
| `brand-amber` | `#F6AD55` | Primary CTAs, accent highlights |
| `brand-slate` | `#607179` | Secondary text |
| `brand-cream` | `#FAFAFA` | Alternating section backgrounds |

## Deployment

Pushes to `main` auto-deploy to Vercel under the FC High Performance account.

## Handoff notes

See `HANDOFF.md` (TODO — to be written before launch) for account inventory,
DNS configuration, and credentials.
