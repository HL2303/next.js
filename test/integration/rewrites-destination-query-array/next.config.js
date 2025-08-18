module.exports = {
  browserDebugInfoInTerminal: false,
  rewrites() {
    return [
      {
        source: '/some-page',
        destination: '/?items=1&items=2',
      },
    ]
  },
}
