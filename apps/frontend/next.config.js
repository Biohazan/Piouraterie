/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    domains: ['localhost','piouraterie-backend.vercel.app', 'piouraterie.vercel.app'],
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
