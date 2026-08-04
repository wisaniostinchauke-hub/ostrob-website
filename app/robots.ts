import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

/**
 * Crawler rules.
 *
 * `*` already permits everything, but AI crawlers are listed explicitly for two
 * reasons: it documents the decision so nobody later assumes they were
 * overlooked, and it gives you one obvious place to revoke a single bot without
 * touching the blanket rule.
 *
 * Worth knowing which bot does what, because they are not interchangeable:
 *   GPTBot          — trains OpenAI models
 *   OAI-SearchBot   — indexes for ChatGPT search results
 *   ChatGPT-User    — fetches a page live when a user's prompt needs it
 *   ClaudeBot       — trains Anthropic models
 *   Claude-User     — live fetch for a Claude user's request
 *   PerplexityBot   — indexes for Perplexity answers
 *   Google-Extended — controls Gemini training ONLY. It does not affect normal
 *                     Google indexing and does not remove you from AI Overviews,
 *                     which run off the standard Googlebot crawl.
 *   CCBot           — Common Crawl, an input to many models' training sets
 *
 * Blocking a training bot does not make you more visible in that assistant — it
 * makes you less likely to be known by it. Allow them unless you have a specific
 * reason not to.
 */
export default function robots(): MetadataRoute.Robots {
  const aiCrawlers = [
    "GPTBot",
    "OAI-SearchBot",
    "ChatGPT-User",
    "ClaudeBot",
    "Claude-User",
    "Claude-SearchBot",
    "anthropic-ai",
    "PerplexityBot",
    "Perplexity-User",
    "Google-Extended",
    "Applebot",
    "Applebot-Extended",
    "Amazonbot",
    "Bytespider",
    "CCBot",
    "cohere-ai",
    "Meta-ExternalAgent",
    "DuckAssistBot",
  ];

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/__forms.html"],
      },
      {
        userAgent: aiCrawlers,
        allow: "/",
        disallow: ["/__forms.html"],
      },
    ],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
