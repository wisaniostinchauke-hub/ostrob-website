/**
 * Pricing tiers — the single source of truth.
 *
 * Imported by `components/Pricing.tsx` (what visitors read) AND by
 * `app/layout.tsx` (the Offer structured data machines read). Keeping one copy
 * means the page and the schema can never drift apart, which matters: answer
 * engines weight consensus, and a price in your markup that contradicts the
 * price on your page is a reason to trust neither.
 */

export type Tier = {
  id: string;
  name: string;
  price: string;
  /** Numeric value for structured data. Omit for "price on application". */
  priceValue?: number;
  unit: string;
  desc: string;
  featured: boolean;
};

export const currency = "ZAR";

export const tiers: Tier[] = [
  {
    id: "WEB-01",
    name: "Website",
    price: "From R2,500",
    priceValue: 2500,
    unit: "+ VAT, once-off",
    desc: "A custom-designed marketing site, built to convert and easy to update yourself.",
    featured: false,
  },
  {
    id: "WEB-02",
    name: "Website + Hosting",
    price: "From R2,950",
    priceValue: 2950,
    unit: "+ VAT, incl. 1 year hosting & email",
    desc: "Everything in Website, plus hosting, domain setup, and mailboxes for a full year.",
    featured: true,
  },
  {
    id: "WEB-03",
    name: "E-commerce",
    price: "From R4,800",
    priceValue: 4800,
    unit: "+ VAT, once-off",
    desc: "An online store with unlimited products, payments, and order management.",
    featured: false,
  },
  {
    id: "APP-01",
    name: "Custom Application",
    price: "Price on application",
    unit: "scoped after discovery",
    desc: "Client portals, booking systems, dashboards — built to your workflow, not a template's.",
    featured: false,
  },
  {
    id: "AI-01",
    name: "AI Automation",
    price: "Price on application",
    unit: "scoped after discovery",
    desc: "Lead follow-up, document generation, and agents wired into your existing tools.",
    featured: false,
  },
  {
    id: "SUP-01",
    name: "Hosting & Domains",
    price: "From R45",
    priceValue: 45,
    unit: "+ VAT, per month",
    desc: "Ongoing hosting, domain renewal, mailboxes and monitoring for sites already live.",
    featured: false,
  },
];
