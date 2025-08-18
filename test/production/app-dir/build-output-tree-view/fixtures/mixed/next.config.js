/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  browserDebugInfoInTerminal: false,
  experimental: {
    useCache: true,
    ppr: true,
  },
}

module.exports = nextConfig
