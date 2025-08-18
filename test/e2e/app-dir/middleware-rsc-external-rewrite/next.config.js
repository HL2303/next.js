/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  browserDebugInfoInTerminal: false,
  experimental: {
    logging: {
      level: 'verbose',
    },
  },
}

module.exports = nextConfig
