/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://dclaw-knowledge-backend:8139/:path*',
      },
    ];
  },
};

module.exports = nextConfig;
