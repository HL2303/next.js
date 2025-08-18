/** @type {import('next').NextConfig} */
module.exports = {
  browserDebugInfoInTerminal: false,
  experimental: {
    testProxy: true,
  },
  rewrites() {
    return [
      {
        source: '/rewrite-1',
        destination: 'https://example.com',
      },
    ]
  },
}
