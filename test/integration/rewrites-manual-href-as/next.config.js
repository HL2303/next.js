module.exports = {
  browserDebugInfoInTerminal: false,
  rewrites() {
    return [
      {
        source: '/rewrite-me',
        destination: '/another',
      },
      {
        source: '/blog/:slugs*',
        destination: '/news/:slugs*',
      },
    ]
  },
}
