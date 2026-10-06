/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // static HTML for cPanel shared hosting (HostPinnacle)
  trailingSlash: true,
  images: { unoptimized: true },
  poweredByHeader: false,
  reactStrictMode: true,
};

module.exports = nextConfig;
