/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  browserDebugInfoInTerminal: false,
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/redirect/source',
        destination: '/redirect/dest',
        permanent: true,
      },
    ]
  },
  async rewrites() {
    return [
      {
        source: '/rewrite/source',
        destination: '/rewrite/dest',
      },
    ]
  },
}

module.exports = nextConfig
