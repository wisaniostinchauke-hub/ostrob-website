/**
 * Single source of truth for business details.
 *
 * Every phone number, email address and company name on the site reads from
 * here. Change a value once and it updates in the nav, footer, contact block,
 * metadata and structured data at the same time.
 */

export const site = {
  name: "Ostrob Technology Solutions",
  shortName: "Ostrob",
  wordmark: "OSTROB",
  wordmarkSub: "Technology Solutions",

  /** Update this to your live domain before deploying. */
  url: "https://ostrobtechnology.netlify.app",

  email: "info@ostrobengineering.co.za",
  phoneDisplay: "060 971 8637",
  phoneE164: "+27609718637",
  whatsappNumber: "27609718637",

  region: "Gauteng, South Africa",
  locality: "Pretoria",
  country: "ZA",

  tagline: "Websites, applications and AI automation, engineered as one build.",
  description:
    "Ostrob Technology Solutions designs and builds production websites, custom applications and AI automation systems for South African businesses. Specified, coded and deployed by one team.",

  hours: [
    { day: "Monday – Friday", time: "08:00 – 17:00" },
    { day: "Saturday", time: "09:00 – 13:00" },
    { day: "Sunday & Public Holidays", time: "Closed" },
  ],
} as const;

export const whatsappLink = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(
  "Hi Ostrob Technology Solutions, I'd like to discuss a project."
)}`;

export const telLink = `tel:${site.phoneE164}`;
export const mailtoLink = `mailto:${site.email}`;

export const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#pricing", label: "Pricing" },
  { href: "#work", label: "Why Us" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
] as const;
