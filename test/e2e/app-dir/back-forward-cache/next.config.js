/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  browserDebugInfoInTerminal: false,
  experimental: {
    routerBFCache: true,
  },
}

module.exports = nextConfig
