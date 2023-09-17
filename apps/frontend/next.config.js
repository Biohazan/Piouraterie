/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost', 'piouraterie-backend.vercel.app', 'piouraterie.vercel.app'],
    // remotePatterns: [
    //   {
    //     protocol: 'https',
    //     hostname: 'https://piouraterie.vercel.app',
    //     // port: '4000' | '',
    //     pathname: '/public/**',
    //   },
    // ],
  },
}

module.exports = nextConfig
