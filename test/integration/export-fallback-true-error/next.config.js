module.exports = {
  browserDebugInfoInTerminal: false,
  output: 'export',
  exportPathMap() {
    return {
      '/first': { page: '/[slug]' },
    }
  },
}
