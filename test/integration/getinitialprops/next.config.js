module.exports = {
  browserDebugInfoInTerminal: false,
  async rewrites() {
    return [
      {
        source: '/blog/post/:pid',
        destination: '/blog/:pid',
      },
    ]
  },
}
