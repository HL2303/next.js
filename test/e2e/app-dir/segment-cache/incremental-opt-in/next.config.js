/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  browserDebugInfoInTerminal: false,
  experimental: {
    ppr: 'incremental',
    clientSegmentCache: true,
  },
}

module.exports = nextConfig
