/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http' | 'https',
        hostname: 'localhost' | 'piouraterie.vercel.app',
        port: '4000' | '',
        pathname: '/public/**',
      },
    ],
  },
}

module.exports = nextConfig
