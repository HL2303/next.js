/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  browserDebugInfoInTerminal: false,
  experimental: {
    clientSegmentCache: true,
    validateRSCRequestHeaders: true,
  },
}

module.exports = nextConfig
