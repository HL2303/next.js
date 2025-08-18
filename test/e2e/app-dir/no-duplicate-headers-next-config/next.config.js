/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  browserDebugInfoInTerminal: false,
  async headers() {
    return [
      {
        source: '/favicon.ico',
        headers: [
          {
            key: 'cache-control',
            value: 'max-age=1234',
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig
