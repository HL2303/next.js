module.exports = {
  browserDebugInfoInTerminal: false,
  rewrites() {
    return [
      {
        source: '/:hello*',
        destination: '/:hello',
      },
    ]
  },
}
