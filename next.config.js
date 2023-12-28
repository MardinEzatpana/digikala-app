/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          { hostname: "dkstatics-public.digikala.com" },
        ],
      },
}

module.exports = nextConfig
