/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  browserDebugInfoInTerminal: false,
  experimental: {
    ppr: true,
    prerenderEarlyExit: false,
  },
}

module.exports = nextConfig
