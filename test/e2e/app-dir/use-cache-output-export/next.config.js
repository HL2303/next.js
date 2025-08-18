/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  browserDebugInfoInTerminal: false,
  experimental: {
    useCache: true,
  },
  output: 'export',
}

module.exports = nextConfig
