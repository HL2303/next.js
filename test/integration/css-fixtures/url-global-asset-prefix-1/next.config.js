const config = require('../next.config.js')
module.exports = {
  browserDebugInfoInTerminal: false,
  ...config,
  assetPrefix: '/foo/',
}
