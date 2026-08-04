import { site } from "@/lib/site";
import { tiers } from "@/lib/pricing";
import { faqs } from "@/lib/faqs";

/**
 * /llms.txt — a proposed convention (llmstxt.org) for handing an answer engine a
 * clean, plain-text summary of a site instead of making it parse the rendered
 * page.
 *
 * Being honest about its status: adoption is not universal and no major provider
 * has committed to honouring it. It costs one route to serve and is generated
 * from the same source files as the page, so it can't go stale — a reasonable
 * bet, not a guaranteed win. Treat it as a supplement to good HTML, never a
 * substitute for it.
 */
export const dynamic = "force-static";

export function GET() {
  const priceLines = tiers
    .map((t) => `- ${t.name}: ${t.price} (${t.unit}) — ${t.desc}`)
    .join("\n");

  const faqLines = faqs
    .map((f) => `### ${f.question}\n\n${f.answer}`)
    .join("\n\n");

  const body = `# ${site.name}

> ${site.tagline}

${site.description}

## Contact

- Email: ${site.email}
- Phone: ${site.phoneDisplay}
- WhatsApp: ${site.phoneDisplay}
- Location: ${site.locality}, ${site.region}
- Serves: All of South Africa, remotely
- Website: ${site.url}

## Business hours

${site.hours.map((h) => `- ${h.day}: ${h.time}`).join("\n")}

## Services

- **Websites** — Custom marketing sites and online stores, built to load fast, work on a phone, and be found on Google. Includes SEO-ready structure, hosting, domains and email.
- **Applications** — Client and staff portals with authentication, booking and quoting systems, job-tracking tools, and dashboards connected to live business data.
- **Automation** — AI agents and workflows for lead capture and follow-up, document and quote generation, and integrations with WhatsApp, email and CRM systems.

## Pricing

All prices in South African Rand (ZAR), excluding VAT.

${priceLines}

## How we work

1. **Discover** — A working session on what the business actually needs.
2. **Draft** — Wireframes and a system design approved before any code is written.
3. **Build** — Development in the open, with a staging link to watch progress.
4. **Ship** — Launch on your domain with hosting, monitoring and a walkthrough.
5. **Automate** — Wiring in the automations that remove manual admin.

## What makes us different

- One team handles design, development and automation — no vendor handoffs.
- Every build is real, version-controlled code, not a locked page-builder. Clients own their code outright.
- Fixed, quoted-up-front pricing on websites and stores. No compulsory monthly fees.
- Based in Gauteng, working with clients across South Africa. Same working day replies.

## Frequently asked questions

${faqLines}

---

Last updated: ${new Date().toISOString().split("T")[0]}
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
