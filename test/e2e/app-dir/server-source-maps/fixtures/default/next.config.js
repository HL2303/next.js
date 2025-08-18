/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  browserDebugInfoInTerminal: false,
  experimental: {
    cpus: 1,
    cacheComponents: true,
    serverSourceMaps: true,
  },
  serverExternalPackages: ['external-pkg'],
}

module.exports = nextConfig
