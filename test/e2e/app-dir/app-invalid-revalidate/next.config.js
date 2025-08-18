/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  browserDebugInfoInTerminal: false,
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {
    prerenderEarlyExit: false,
  },
}

module.exports = nextConfig
