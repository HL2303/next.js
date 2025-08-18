/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  browserDebugInfoInTerminal: false,
  experimental: {
    cssChunking: 'strict',
  },
}

module.exports = nextConfig
