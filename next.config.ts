import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;
// next.config.js
const path = require('path')

module.exports = {
  turbopack: {
    // This tells Turbopack to strictly look inside your project folder
    root: __dirname, 
  },
}
