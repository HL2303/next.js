/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  browserDebugInfoInTerminal: false,
  experimental: {
    useCache: true,
    prerenderEarlyExit: false,
  },
}

module.exports = nextConfig
