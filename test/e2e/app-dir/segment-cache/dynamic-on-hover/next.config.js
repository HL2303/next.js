/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  browserDebugInfoInTerminal: false,
  experimental: {
    cacheComponents: true,
    clientSegmentCache: true,
    dynamicOnHover: true,
  },
}

module.exports = nextConfig
