/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  browserDebugInfoInTerminal: false,
  experimental: {
    cacheComponents: true,
    enablePrerenderSourceMaps: false,
  },
}

module.exports = nextConfig
