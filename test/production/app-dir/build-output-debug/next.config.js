/** @type {import('next').NextConfig} */
module.exports = {
  browserDebugInfoInTerminal: false,
  async redirects() {
    return [
      {
        source: '/redirects',
        destination: '/',
        permanent: true,
      },
    ]
  },
  async rewrites() {
    return [
      {
        source: '/rewrites',
        destination: '/',
      },
    ]
  },
  async headers() {
    return [
      {
        source: '/',
        headers: [
          {
            key: 'x-custom-headers',
            value: 'headers',
          },
        ],
      },
    ]
  },
}
