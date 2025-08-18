module.exports = {
  browserDebugInfoInTerminal: false,
  webpack: (config) => {
    config.devtool = 'cheap-module-source-map'
    return config
  },
}
