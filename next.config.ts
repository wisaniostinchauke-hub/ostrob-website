import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    // Keeps your project root correctly assigned for Turbopack
    root: __dirname,
  },
  // Allows Next.js to route the form submission directly to Netlify
  async rewrites() {
    return [
      {
        source: "/__forms.html",
        destination: "/__forms.html",
      },
    ];
  },
};

export default nextConfig;
