/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    domains: [
      'localhost',
      'piouraterie-backend.vercel.app',
      'piouraterie.vercel.app',
    ],
    // remotePatterns: [
    //   {
    //     protocol: 'http',
    //     hostname: 'localhost',
    //     port: '4000',
    //     pathname: '/public/**',
    //   },
    // ],
  },
}

module.exports = nextConfig
