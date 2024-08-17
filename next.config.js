/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
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
