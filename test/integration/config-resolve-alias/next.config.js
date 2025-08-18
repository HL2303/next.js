module.exports = {
  browserDebugInfoInTerminal: false,
  webpack(config) {
    config.resolve.alias = {}
    return config
  },
}
