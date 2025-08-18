module.exports = {
  browserDebugInfoInTerminal: false,
  async rewrites() {
    return [
      {
        source: '/alias-to-main-content',
        destination: '/main-content',
      },
    ]
  },
}
