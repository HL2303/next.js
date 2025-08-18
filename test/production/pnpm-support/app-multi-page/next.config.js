const path = require('path')

module.exports = {
  browserDebugInfoInTerminal: false,
  output: 'standalone',
  experimental: {
    // pnpm virtual-store-dir is outside the app directory
    outputFileTracingRoot: path.resolve(__dirname, '../'),
  },
}
