/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  browserDebugInfoInTerminal: false,
  experimental: {
    cacheComponents: true,
    cacheHandlers: {
      default: require.resolve('./handler.js'),
      legacy: require.resolve('./legacy-handler.js'),
    },
  },
}

module.exports = nextConfig
