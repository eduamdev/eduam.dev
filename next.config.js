/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'eduam.dev',
      },
      {
        protocol: 'https',
        hostname: 'eduamdev.vercel.app',
      },
    ],
  },
};

module.exports = nextConfig;
