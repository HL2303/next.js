module.exports = {
  browserDebugInfoInTerminal: false,
  webpack: (config) => {
    config.optimization.minimize = true
    return config
  },
}
