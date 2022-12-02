/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    loader: "akamai",
    path: "",
  },
  basePath: "/Portfolio",
  assetPrefix: "/Portfolio",
};

module.exports = nextConfig;
