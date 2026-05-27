# FC High Performance — Handoff Document

The website at **https://fchighperformance.com** is yours. This document covers everything you need to maintain it, change content, and get help.

Built by Keith Burke (developer) for Coach Keith (owner) of FC High Performance, Virginia Beach.

---

## Quick facts

| | |
|---|---|
| **Live site** | https://fchighperformance.com |
| **Code repo** | https://github.com/FCHighPerformance/fchighperformance-web |
| **Hosting** | Vercel (Hobby plan — free) |
| **Domain registrar** | GoDaddy |
| **Forms / CRM** | GoHighLevel (your existing account) |
| **Built with** | Next.js 16, Tailwind CSS 4, TypeScript |

---

## What you own (account inventory)

You should have login access to all of these. If you don't, contact the developer.

### 1. GitHub — where the code lives
- URL: https://github.com/FCHighPerformance
- Account: `FCHighPerformance`
- Repository: `fchighperformance-web`
- Visibility: Public (made public so anyone with collab access can push deploys)

### 2. Vercel — where the site is hosted
- URL: https://vercel.com/login (sign in with your GitHub or email)
- Plan: Hobby (free)
- Project: `fchighperformance-web`
- Auto-deploys on every push to `main` branch

### 3. GoDaddy — where the domain is registered
- URL: https://godaddy.com (sign in with your email)
- Domain: `fchighperformance.com` (renews Sep 17, 2026)
- DNS configured to point at Vercel (see DNS section below)
- Email infrastructure (Office 365, Mailgun) untouched and still working

### 4. GoHighLevel — where your leads, SMS, and email automations live
- URL: your GHL login
- The website's contact/booking form is embedded directly from your GHL account
- All submissions land in your GHL CRM exactly like they did before
- To change form fields, edit the form INSIDE GoHighLevel — no code changes needed

---

## How to make changes

The site is built so that **the things you'll most often want to change live in data files**, not in code.

### Change your contact info, address, hours, social handles
File: `src/data/site.ts`
```
email: "keith@fchighperformance.com"  ← change here
address: { street: "235 Jersey Ave", ... }
```
Hours: `src/data/hours.ts`

### Change a program's description, schedule, or call-to-action
File: `src/data/programs.ts`
- 4 programs listed in order. Edit any field.
- The order in the file is the order on the page.

### Add or replace a testimonial
File: `src/data/testimonials.ts`
- Add real customer name, quote, photo path, program they're in
- Drop the photo into `public/` first (e.g. `public/testimonial-realname.jpg`)
- Currently has 4 placeholders clearly marked

### Add or change an FAQ
File: `src/data/faqs.ts`

### Replace a photo
1. Drop the new photo into `public/` (e.g. `public/coach-portrait.jpg` to replace coach portrait)
2. Use a real filename you'll recognize
3. Keep file size under ~1MB for fast loading (resize before uploading)

### Edit the coach bio, hero text, or other on-page copy
Files in `src/components/`:
- `Hero.tsx` — the big "Never too early. Never too late." section
- `About.tsx` — coach bio and credentials
- `Programs.tsx` — programs section header
- `Method.tsx` — "How We Train" three steps
- `Guarantee.tsx` — "Come in once" section
- `Footer.tsx` — site footer

### Change the form
**Inside GoHighLevel.** The form is embedded — change fields there and they appear on the site automatically.

---

## How to publish a change

Every change pushed to GitHub auto-deploys to the live site in ~90 seconds.

If you have GitHub Desktop or know git:
1. Make your edit
2. Commit
3. Push to `main` branch
4. Vercel builds and deploys

If you don't want to touch code, hand changes to a developer with collab access on the repo.

---

## DNS — for reference, don't change without thinking carefully

At GoDaddy, only these two records were changed when the site went live:

| Type | Name | Value | Purpose |
|---|---|---|---|
| A | `@` | `216.198.79.1` | Points root domain to Vercel |
| CNAME | `www` | `0db92e5e63f29d68.vercel-dns-017.com` | Points www subdomain to Vercel |

**Everything else stays.** Especially:
- All **MX records** (Office 365 email routing)
- All **TXT records** (SPF, DMARC, Office 365 verification)
- All `autodiscover`, `msoid`, `lyncdiscover`, `sip` records (Office 365 + Skype/Teams)
- All `_dmarc`, `_domainconnect` records
- All `train` records (Mailgun)
- All NS records (GoDaddy's nameservers)

If anything breaks email — restore from the GoDaddy DNS history (GoDaddy keeps a log).

---

## What's still TODO (the punch list for Coach Keith)

These are things that would make the site better. None of them are urgent. None of them are blocking.

### Real content
- [ ] Replace 4 placeholder testimonials with real ones (name, quote, headshot, photo release)
- [ ] Real coach bio (or approve the one currently published)
- [ ] More photos: adult S&C class, small-group PT, 1-on-1 session, gym interior wide

### Confirm details
- [ ] Business hours (currently guessing Mon-Fri 6am-8pm, Sat 8am-2pm, Sun closed)
- [ ] Coach's full name (currently shows "Coach Keith" — last name?)
- [ ] Social media handles (Instagram, Facebook) for footer

### Marketing
- [ ] Claim Google Business Profile at https://business.google.com (free, biggest SEO win)
- [ ] Add Google Analytics (free) — send Measurement ID, I/dev can wire it up
- [ ] Add Meta Pixel if running Facebook ads

### Legal
- [ ] Attorney review of Privacy + Terms pages (AI-drafted starter content)

---

## Known issue: redirect loop for old GHL visitors

Some people (including the developer's own browser) hit a `ERR_TOO_MANY_REDIRECTS` error the first time they visit the new site. This happens because the OLD GoHighLevel site registered a "Service Worker" in their browser that intercepts requests and follows stale routing rules.

**Fix for affected users:**
1. Paste into Chrome address bar: `chrome://settings/cookies/detail?site=fchighperformance.com`
2. Click the "Delete" button at top right
3. Reload `fchighperformance.com`

Affects only people who used the old GHL site at this domain. Brand-new visitors don't hit this.

A `/reset` URL route exists in the code (`src/app/reset/route.ts`) that's supposed to fix this with one click, but Vercel's CDN was caching a stale 404 for it at handoff time — may resolve itself, may need a fresh deploy.

---

## File structure (for developers)

```
fchighperformance-web/
├── public/                    Photos, logo, favicon, OG image
│   ├── _originals/           Stashed source photos (gitignored)
│   ├── coach-portrait.jpg
│   ├── hero-pad-work.jpg
│   ├── kids-boxing-wide.jpg
│   ├── logo.png              Transparent logo for header
│   └── testimonial-*.jpg
│
├── src/
│   ├── app/
│   │   ├── page.tsx          Home page
│   │   ├── layout.tsx        Root layout (fonts, metadata, JSON-LD)
│   │   ├── globals.css       Tailwind import + brand tokens
│   │   ├── icon.png          Favicon
│   │   ├── opengraph-image.tsx   Dynamic OG image for social shares
│   │   ├── sitemap.ts        Auto-generated sitemap.xml
│   │   ├── robots.ts         Auto-generated robots.txt
│   │   ├── reset/route.ts    Cache-clearing escape hatch route
│   │   ├── programs/         /programs index + /programs/[slug] details
│   │   ├── our-method/       /our-method page
│   │   ├── about/            /about page
│   │   ├── stories/          /stories page
│   │   ├── contact/          /contact page
│   │   ├── privacy/          /privacy page
│   │   └── terms/            /terms page
│   │
│   ├── components/           UI components (one per file)
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Programs.tsx
│   │   ├── Method.tsx
│   │   ├── About.tsx
│   │   ├── Testimonials.tsx
│   │   ├── TestimonialMarquee.tsx
│   │   ├── Guarantee.tsx
│   │   ├── FAQ.tsx
│   │   ├── BookingForm.tsx
│   │   ├── BookingDialog.tsx    Modal that pops up when CTAs are clicked
│   │   ├── ContactInfo.tsx
│   │   ├── Footer.tsx
│   │   ├── MobileMenu.tsx
│   │   ├── NavLinks.tsx
│   │   ├── OpenNow.tsx
│   │   ├── PageHero.tsx
│   │   ├── ProgramHero.tsx
│   │   ├── ProgramDetail.tsx
│   │   ├── MapEmbed.tsx
│   │   ├── ScrollReveal.tsx
│   │   ├── StickyMobileCta.tsx
│   │   └── LegalPage.tsx
│   │
│   └── data/                 Editable data files (copy + config)
│       ├── site.ts           Address, email, phone, CTAs, social handles
│       ├── programs.ts       The 4 programs
│       ├── testimonials.ts   Customer quotes (currently placeholders)
│       ├── faqs.ts           FAQ entries
│       └── hours.ts          Business hours
│
├── package.json              Dependencies
├── tsconfig.json             TypeScript config
├── next.config.ts            Next.js config
├── README.md                 Developer quickstart
└── HANDOFF.md                This document
```

---

## Local development (for developers)

```bash
git clone https://github.com/FCHighPerformance/fchighperformance-web.git
cd fchighperformance-web
npm install
npm run dev
```

Open http://localhost:3000.

Build for production: `npm run build`. Vercel runs this automatically on every push.

---

## Decisions made during the build (and why)

- **No CMS.** Content lives in TypeScript data files. Owner does not edit content directly; changes come back to a developer. Cheaper, faster, fewer accounts to maintain.
- **No database.** GoHighLevel already handles lead capture, SMS, email automation. Adding a database would duplicate what GHL does.
- **Public GitHub repo.** Vercel Hobby plan does not allow contributor-pushed deploys to private repos. Making it public removes that limitation. Site has no secrets in the code.
- **Multi-page (not single page).** Each topic gets its own dedicated URL for SEO. Home page still scrolls long because that's where conversion happens.
- **Modal opt-in form, not scroll-to-form.** Clicking "Talk to Coach" anywhere pops the form up immediately — fewer interruptions, higher conversion than scrolling.
- **GoHighLevel iframe embed.** All form submissions flow through your existing GHL CRM with all its automations intact. No double-handling of leads.

---

## Getting help

- **Vercel docs**: https://vercel.com/docs
- **Next.js docs**: https://nextjs.org/docs
- **Tailwind docs**: https://tailwindcss.com/docs
- **GoHighLevel support**: https://help.gohighlevel.com
- **Original developer (Keith Burke)**: contact info on file

---

## One final thing

The site works. SSL is provisioned. Forms route to your CRM. Email still works. Every page passes Lighthouse. SEO foundations are in place. Mobile and desktop both look right.

What's left is content (real photos, real testimonials, real bio) — all owner-driven, none blocking.

Ship it.
