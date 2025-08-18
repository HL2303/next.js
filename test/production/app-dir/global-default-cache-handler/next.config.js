/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  browserDebugInfoInTerminal: false,
  output: 'standalone',
  experimental: {
    useCache: true,
  },
}

module.exports = nextConfig
