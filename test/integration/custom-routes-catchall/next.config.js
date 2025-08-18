module.exports = {
  browserDebugInfoInTerminal: false,
  rewrites() {
    return [
      {
        source: '/docs/:path*',
        destination: '/:path*',
      },
    ]
  },
}
