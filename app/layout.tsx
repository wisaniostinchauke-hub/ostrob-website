import type { Metadata } from "next";

import "@fontsource/space-grotesk/400.css";
import "@fontsource/space-grotesk/500.css";
import "@fontsource/space-grotesk/600.css";
import "@fontsource/space-grotesk/700.css";
import "@fontsource/ibm-plex-mono/400.css";
import "@fontsource/ibm-plex-mono/500.css";
import "@fontsource/ibm-plex-mono/600.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "./globals.css";

import { site } from "@/lib/site";
import { faqs } from "@/lib/faqs";
import { tiers, currency } from "@/lib/pricing";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Websites, Apps & AI Automation | South Africa`,
    template: `%s | ${site.name}`,
    
  },
  description: site.description,
  keywords: [
    "web design South Africa",
    "website development Gauteng",
    "custom web application developer",
    "AI automation South Africa",
    "e-commerce website Pretoria",
    site.name,
  ],
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: site.url,
    siteName: site.name,
    title: `${site.name} — Websites, Apps & AI Automation`,
    description: site.description,
    images: [{ url: "/og.png", width: 1200, height: 630, alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Websites, Apps & AI Automation`,
    description: site.description,
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  category: "technology",
};

/**
 * Structured data.
 *
 * Answer engines lean on markup to decide what a page is actually about, so this
 * ships three linked graph nodes rather than one blob:
 *
 *   Organization  — who we are, reused by @id from the other nodes
 *   WebSite       — the site itself, carrying the freshness signal
 *   FAQPage       — the question/answer pairs, generated from lib/faqs.ts
 *
 * The offer prices are generated from lib/pricing.ts, the same file the pricing
 * section renders from, so the numbers a machine reads and the numbers a human
 * reads cannot drift apart.
 */
const lastReviewed = new Date().toISOString().split("T")[0];

const organization = {
  "@type": "ProfessionalService",
  "@id": `${site.url}/#organization`,
  name: site.name,
  alternateName: site.shortName,
  url: site.url,
  email: site.email,
  telephone: site.phoneE164,
  description: site.description,
  slogan: site.tagline,
  image: `${site.url}/og.png`,
  logo: `${site.url}/icon-512.png`,
  priceRange: "R45 - R50000+",
  currenciesAccepted: currency,
  address: {
    "@type": "PostalAddress",
    addressLocality: site.locality,
    addressRegion: "Gauteng",
    addressCountry: site.country,
  },
  areaServed: { "@type": "Country", name: "South Africa" },
  knowsAbout: [
    "Web design",
    "Web development",
    "E-commerce development",
    "Custom web application development",
    "AI automation",
    "Business process automation",
    "Search engine optimisation",
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "17:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "13:00",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Digital Services",
    itemListElement: tiers.map((t) => ({
      "@type": "Offer",
      name: t.name,
      description: t.desc,
      ...(t.priceValue
        ? {
            priceSpecification: {
              "@type": "PriceSpecification",
              price: t.priceValue,
              priceCurrency: currency,
              valueAddedTaxIncluded: false,
              minPrice: t.priceValue,
            },
          }
        : { availability: "https://schema.org/InStock" }),
      itemOffered: { "@type": "Service", name: t.name, provider: { "@id": `${site.url}/#organization` } },
    })),
  },
};

const website = {
  "@type": "WebSite",
  "@id": `${site.url}/#website`,
  url: site.url,
  name: site.name,
  description: site.description,
  publisher: { "@id": `${site.url}/#organization` },
  inLanguage: "en-ZA",
  dateModified: lastReviewed,
};

const faqPage = {
  "@type": "FAQPage",
  "@id": `${site.url}/#faq`,
  isPartOf: { "@id": `${site.url}/#website` },
  dateModified: lastReviewed,
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [organization, website, faqPage],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-ZA">
      <body className="antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:bg-[var(--rust)] focus:px-4 focus:py-2 focus:text-sm focus:text-white"
        >
          Skip to main content
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
<meta name="google-site-verification" content="Np8jGLbIvJY1BSszN_Y_GkCEqJka95uLhnPNoGEbelY" />
}
