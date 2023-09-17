/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost:4000', 'piouraterie.vercel.app']
    // remotePatterns: [
    //   {
    //     protocol: '**',
    //     hostname: '**',
    //     port: '*',
    //     pathname: '/public/**',
    //   },
    // ],
  },
}

module.exports = nextConfig
