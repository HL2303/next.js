module.exports = {
  browserDebugInfoInTerminal: false,
  trailingSlash: true,
  async rewrites() {
    return [{ source: '/country/', destination: '/' }]
  },
}
