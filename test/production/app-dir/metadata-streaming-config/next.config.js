/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  browserDebugInfoInTerminal: false,
  experimental: {
    ppr: 'incremental',
  },
}

module.exports = nextConfig
