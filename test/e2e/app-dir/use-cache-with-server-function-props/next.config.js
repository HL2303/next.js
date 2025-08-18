/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  browserDebugInfoInTerminal: false,
  experimental: {
    ppr: true,
    useCache: true,
  },
}

module.exports = nextConfig
