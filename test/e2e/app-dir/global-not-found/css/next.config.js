/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  browserDebugInfoInTerminal: false,
  experimental: {
    globalNotFound: true,
  },
}

module.exports = nextConfig
