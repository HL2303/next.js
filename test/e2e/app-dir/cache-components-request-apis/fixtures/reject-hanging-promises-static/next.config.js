/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  browserDebugInfoInTerminal: false,
  experimental: {
    cacheComponents: true,
    serverMinification: true,
  },
}

module.exports = nextConfig
