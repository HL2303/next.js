/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  browserDebugInfoInTerminal: false,
  experimental: {
    useCache: true,
  },
  logging: {
    fetches: {
      hmrRefreshes: true,
    },
  },
}

module.exports = nextConfig
