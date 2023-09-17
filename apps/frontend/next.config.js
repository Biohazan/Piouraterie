/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
        // port: '4000',
        pathname: '**',
      },
    ],
  },
}

module.exports = nextConfig
