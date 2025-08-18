module.exports = {
  browserDebugInfoInTerminal: false,
  output: 'export',
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
    }
  },
}
