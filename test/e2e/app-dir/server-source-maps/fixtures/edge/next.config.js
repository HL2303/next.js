/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  browserDebugInfoInTerminal: false,
  experimental: {
    cpus: 1,
    enablePrerenderSourceMaps: true,
    serverSourceMaps: true,
  },
}

module.exports = nextConfig
