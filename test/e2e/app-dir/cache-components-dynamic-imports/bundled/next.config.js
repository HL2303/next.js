/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  browserDebugInfoInTerminal: false,
  experimental: {
    cacheComponents: true,
    prerenderEarlyExit: false,
  },
}

module.exports = nextConfig
