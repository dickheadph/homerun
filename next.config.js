/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'realestate-gold.vercel.app',
      'images.unsplash.com',
      'plus.unsplash.com',
      'res.cloudinary.com',
    ],
  },
};

module.exports = nextConfig;
