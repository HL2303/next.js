/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  browserDebugInfoInTerminal: false,
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/foo',
          destination: '/en/foo',
        },
        {
          source: '/photos',
          destination: '/en/photos',
        },
      ],
    }
  },
}

module.exports = nextConfig
