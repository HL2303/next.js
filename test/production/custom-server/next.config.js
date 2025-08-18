/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  browserDebugInfoInTerminal: false,
  experimental: {
    useCache: true,
    cacheHandlers: {
      default: require.resolve('./cache-handler.js'),
    },
  },
}

module.exports = nextConfig
