/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://api.grandtest.uz/api/:path*',
      },
    ];
  },
};

module.exports = nextConfig;
