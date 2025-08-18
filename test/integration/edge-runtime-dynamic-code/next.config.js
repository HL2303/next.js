module.exports = {
  browserDebugInfoInTerminal: false,
  webpack(config) {
    config.experiments = { ...config.experiments, asyncWebAssembly: true }
    return config
  },
}
