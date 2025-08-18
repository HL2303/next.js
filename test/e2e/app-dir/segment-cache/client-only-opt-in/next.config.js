/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  browserDebugInfoInTerminal: false,
  experimental: {
    ppr: 'incremental',
    clientSegmentCache: 'client-only',
  },
}

module.exports = nextConfig
