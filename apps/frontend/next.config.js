/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'piouraterie-backend.vercel.app',
        // port: '4000' | '',
        pathname: '/public/**',
      },
    ],
  },
}

module.exports = nextConfig
