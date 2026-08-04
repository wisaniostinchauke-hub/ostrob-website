# Ostrob Technology Solutions — Website

Marketing site for Ostrob Technology Solutions: websites, custom applications and
AI automation for South African businesses.

Built with Next.js 16 (App Router), React 19, Tailwind CSS v4, TypeScript and
Framer Motion.

---

## Quick start

```bash
npm install
npm run dev
```

Open http://localhost:3000

Other scripts:

```bash
npm run build   # production build
npm run start   # serve the production build locally
npm run lint    # eslint
```

---

## Editing business details

**All contact details live in one file: `lib/site.ts`.**

Change a value there and it updates everywhere at once — nav, footer, contact
block, page metadata, and the structured data Google reads.

```ts
export const site = {
  name: "Ostrob Technology Solutions",
  url: "https://www.ostrobengineering.co.za",  // ← set this to your live domain
  email: "info@ostrobengineering.co.za",
  phoneDisplay: "060 971 8637",
  phoneE164: "+27609718637",
  whatsappNumber: "27609718637",
  ...
};
```

**Before you deploy, set `site.url` to your real domain.** It controls canonical
URLs, the sitemap, and whether your social share image resolves.

### Where the rest of the content lives

| What | File |
|---|---|
| Headline and intro | `components/Hero.tsx` |
| Service descriptions | `components/Services.tsx` |
| Process steps | `components/Process.tsx` |
| Prices | `lib/pricing.ts` (feeds both the page and Offer schema) |
| Why-us points | `components/WhyUs.tsx` |
| Portfolio entries | `components/SelectedWork.tsx` |
| FAQ questions & answers | `lib/faqs.ts` (feeds both the page and FAQPage schema) |
| Form fields | `components/ContactForm.tsx` + `public/__forms.html` |
| Colours and fonts | `app/globals.css` (CSS custom properties at the top) |

---

## Deploying to Netlify

1. Push this folder to a GitHub repository.
2. In Netlify: **Add new site → Import an existing project** → pick the repo.
3. Netlify reads `netlify.toml` and fills the build settings in automatically
   (`npm run build`, Node 20, Next.js runtime plugin). Leave them as-is.
4. Click **Deploy**.

### Connecting your domain

Site configuration → Domain management → Add a domain. Point your registrar's
nameservers at Netlify, or add the DNS records Netlify shows you. HTTPS is issued
automatically once DNS resolves.

Then update `site.url` in `lib/site.ts` and redeploy.

---

## The contact form

The form posts to **Netlify Forms** — no backend, no API keys.

Submissions appear in your Netlify dashboard under **Forms → project-intake**.
To get emailed on each one: **Forms → Settings → Form notifications → Add
notification → Email notification**, and send it to `info@ostrobengineering.co.za`.

`public/__forms.html` is what makes this work. Netlify detects forms by scanning
static HTML at build time, which the App Router doesn't reliably produce, so that
file declares the fields. **Don't delete it** — submissions stop working without
it. If you add a field to the form, add it there too.

A honeypot field (`bot-field`) filters most spam automatically.

---

## Before launch — checklist

- [ ] Set `site.url` in `lib/site.ts` to the live domain
- [ ] Confirm the clients named in `components/SelectedWork.tsx` are happy to be
      listed publicly, and add live `href` links where sites are up
- [ ] Check prices in `lib/pricing.ts` are current
- [ ] Validate structured data at search.google.com/test/rich-results
- [ ] Confirm `/llms.txt` and `/robots.txt` load on the live domain
- [ ] Turn on form email notifications in Netlify
- [ ] Submit the form once on the live site to confirm it lands
- [ ] Add the site to Google Search Console and submit `/sitemap.xml`

---

## AEO — being visible to AI answer engines

Answer engines (ChatGPT, Perplexity, Google AI Overviews, Claude) don't rank pages;
they synthesise an answer and sometimes cite you. What's built in here:

**Question-and-answer content.** `lib/faqs.ts` holds nine questions phrased the way
people actually ask them ("how much does a website cost in South Africa"), each
answered in a self-contained opening sentence. Models lift first sentences far more
often than they read to the end of a paragraph, so answers lead with the answer.
Edit this file to add more — the FAQ section and the FAQPage markup both regenerate
from it automatically.

**Answers ship in the HTML.** The FAQ uses native `<details>`/`<summary>`, not a
React accordion. A JS accordion that conditionally renders its panel keeps the
answer out of the served HTML until someone clicks, and crawlers never click. This
way every answer is in the markup whether it's open or shut, works with JavaScript
off, and gets keyboard/screen-reader behaviour from the browser.

**One source of truth for facts.** Prices live only in `lib/pricing.ts` and feed
both the pricing cards and the `Offer` structured data. Contact details live only
in `lib/site.ts`. A price in your markup that contradicts the price on your page is
a reason for a model to trust neither.

**Structured data as a linked graph.** `app/layout.tsx` emits `ProfessionalService`
+ `WebSite` + `FAQPage` joined by `@id`, with real ZAR prices and a `dateModified`
freshness stamp.

**Explicit crawler rules.** `app/robots.ts` names the AI crawlers individually —
GPTBot, ClaudeBot, PerplexityBot, OAI-SearchBot and others — with a comment
explaining what each one does. Note that `Google-Extended` controls Gemini
*training only*; it does not affect normal Google indexing or AI Overviews.
Blocking a training bot doesn't make you more visible to that assistant, it makes
you less likely to be known by it.

**`/llms.txt`.** `app/llms.txt/route.ts` serves a plain-text summary of the
business, services, prices and FAQs, generated from the same source files so it
can't go stale. Honest caveat: this is a proposed convention, adoption isn't
universal, and no major provider has committed to honouring it. It costs one route
— a reasonable bet, not a guaranteed win, and never a substitute for good HTML.

### What this does not do

Most AEO advice is marketing work, not code: earning mentions on other sites,
building consensus about your brand across the web, video presence, tracking share
of voice. Roughly 28% of AI mentions include a link, so most of the value is brand
recall you can't measure in analytics. The code here makes you *readable and
citable*; getting *mentioned widely* is outreach, and no amount of markup replaces it.

---

## Notes

- **Framer Motion is pinned on purpose.** `motion-dom@12.43.0` was published
  without its TypeScript declaration file, even though its `package.json` points
  at one. Because `MotionProps extends MotionNodeOptions` (which lives in
  motion-dom), that missing file silently strips every animation prop from the
  types and `npm run build` fails with *"Property 'initial' does not exist"* on
  each `motion.*` element. `package.json` therefore pins
  `framer-motion: 12.42.2` and adds an `overrides` block forcing
  `motion-dom: 12.42.2`. Don't loosen either until upstream republishes — a caret
  range will pull 12.43.0 straight back in.
- **SEO:** page metadata and Open Graph tags are in `app/layout.tsx`, along with
  `ProfessionalService` JSON-LD structured data. `app/sitemap.ts` and
  `app/robots.ts` generate `/sitemap.xml` and `/robots.txt` at build time.
- **Social image:** `public/og.png` (1200×630). Replace it with your own artwork
  any time — keep the filename and dimensions.
- **Accessibility:** skip link, visible focus rings, labelled form fields with
  `aria-invalid` / `aria-describedby` error wiring, and `prefers-reduced-motion`
  is respected in `app/globals.css`.
- **Fonts** are self-hosted via `@fontsource`, so there's no external request to
  Google Fonts and no layout shift on load.
