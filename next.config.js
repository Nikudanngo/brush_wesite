/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
};

module.exports = {
  nextConfig,
  images: {
    domains: ["firebasestorage.googleapis.com", "images.unsplash.com"],
  },
};
