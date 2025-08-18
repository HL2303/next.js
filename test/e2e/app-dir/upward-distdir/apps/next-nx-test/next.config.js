const path = require('path')

module.exports = {
  browserDebugInfoInTerminal: false,
  distDir: '../.next',
  turbopack: {
    root: path.join(__dirname, '../..'),
  },
}
