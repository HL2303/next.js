/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  browserDebugInfoInTerminal: false,
  experimental: {
    cacheComponents: true,
    cacheHandlers: {}, // overwrite the default config
    prerenderEarlyExit: false,
  },
}

module.exports = nextConfig
