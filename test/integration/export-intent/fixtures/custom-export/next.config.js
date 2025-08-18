module.exports = {
  browserDebugInfoInTerminal: false,
  output: 'export',
  exportPathMap() {
    return { '/': { page: '/' } }
  },
}
