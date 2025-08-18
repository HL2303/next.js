/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  browserDebugInfoInTerminal: false,
  output: 'export',
  experimental: {
    clientSegmentCache: true,
  },
}

module.exports = nextConfig
