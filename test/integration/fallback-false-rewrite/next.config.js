module.exports = {
  browserDebugInfoInTerminal: false,
  rewrites() {
    return {
      fallback: [
        {
          source: '/:path*',
          destination: '/another',
        },
      ],
    }
  },
}
