module.exports = {
  browserDebugInfoInTerminal: false,
  rewrites() {
    return [
      {
        source: '/some-catch-all/:path*',
        destination: '/',
      },
    ]
  },
  output: 'standalone',
}
