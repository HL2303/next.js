/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  browserDebugInfoInTerminal: false,
  experimental: {
    sri: {
      algorithm: 'sha256',
    },
  },
}

module.exports = nextConfig
