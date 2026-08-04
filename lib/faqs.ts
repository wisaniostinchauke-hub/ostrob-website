/**
 * FAQ content — the single source of truth for both the visible accordion and
 * the FAQPage structured data.
 *
 * These are written deliberately for extraction. Each answer opens with a
 * complete, self-contained sentence that answers the question outright, because
 * an answer engine lifts the first sentence far more often than it reads to the
 * end of a paragraph. Detail follows the answer; it never precedes it.
 *
 * The questions themselves are phrased the way people actually ask them, which
 * is also roughly how a model's fan-out sub-queries get phrased — "how much does
 * a website cost in South Africa" rather than "our pricing".
 */

export type Faq = { question: string; answer: string };

export const faqs: Faq[] = [
  {
    question: "How much does a website cost in South Africa?",
    answer:
      "A custom business website from Ostrob Technology Solutions starts at R2,500 excluding VAT as a once-off cost, and R2,950 with a year of hosting, domain setup and mailboxes included. Online stores start at R4,800. Custom applications and AI automation are quoted after a short discovery call, because the scope varies too much for a fixed figure to be honest. There are no compulsory monthly fees — ongoing hosting is optional and starts at R45 per month.",
  },
  {
    question: "How long does it take to build a website?",
    answer:
      "A standard business website takes about two to three weeks from the first discovery session to going live. Online stores usually take three to five weeks depending on how many products need loading. Custom applications and automation work run longer and are scheduled in stages after scoping. The single biggest factor is how quickly you can supply content — text, logos and photos — so we start collecting those on day one.",
  },
  {
    question: "Do I own my website and its code?",
    answer:
      "Yes — you own your website, its code, its domain and its content outright. Every build is real, version-controlled code rather than a locked page-builder subscription, so you can hand it to any developer, move it to any host, or take it in-house at any point. You are never renting your own site, and nothing is held hostage if you decide to work with someone else.",
  },
  {
    question: "What is the difference between a website and a web application?",
    answer:
      "A website presents information, while a web application lets people do work inside it. A marketing site or online store is a website: visitors read, browse and buy. A client portal, booking system, quoting tool or job tracker is an application: it has logins, user roles, a database, and business logic that changes what each person sees. Applications cost more and take longer because they are software, not pages.",
  },
  {
    question: "What is AI automation for a small business?",
    answer:
      "AI automation is software that handles repetitive admin your staff currently do by hand — generating quotes and documents, capturing and following up leads, answering routine enquiries, and moving information between the tools you already use. For a small South African business the practical wins are usually WhatsApp and email follow-up, automatic quote and invoice generation, and syncing enquiries into a CRM without anyone retyping them. It is built around your existing workflow rather than replacing it with an off-the-shelf bot.",
  },
  {
    question: "Do you work with businesses outside Gauteng?",
    answer:
      "Yes — Ostrob Technology Solutions works with clients across South Africa, not just Gauteng. Discovery sessions, progress reviews and handover walkthroughs all run remotely over video and WhatsApp, and you get a staging link to watch the build progress from anywhere. Being based in Gauteng only matters if you specifically want to meet in person.",
  },
  {
    question: "Can you redesign or fix an existing website?",
    answer:
      "Yes, we take on redesigns, rebuilds and rescue work on sites that already exist. Common jobs are sites that load slowly, do not work properly on a phone, cannot be updated without paying the original developer, or were built on a platform the owner no longer has access to. We start by auditing what is there, then tell you honestly whether it is cheaper to fix or to rebuild.",
  },
  {
    question: "Will my website show up on Google?",
    answer:
      "Every site is built with the technical foundations search engines and AI answer engines need: fast loading, mobile-first layout, clean heading structure, descriptive metadata and structured data markup. That gets you indexable and eligible to rank — it does not guarantee a position, and anyone promising a specific ranking is guessing. Ongoing local SEO work, Google Business Profile setup and content are what move you up over time, and we can quote for those separately.",
  },
  {
    question: "What do you need from me to get started?",
    answer:
      "To start we need your logo, your business details, and a rough idea of what the site must achieve. Photos, service descriptions and pricing help but can follow during the build — we will draft copy if you do not have it. The first step is a short discovery call to agree scope, after which you get a fixed quote before any work begins.",
  },
];
