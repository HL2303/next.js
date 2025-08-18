/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  browserDebugInfoInTerminal: false,
  experimental: {
    cacheComponents: true,
    clientSegmentCache: true,
    staleTimes: {
      dynamic: 30,
    },
  },
}

module.exports = nextConfig
