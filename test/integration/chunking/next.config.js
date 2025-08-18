const BundleAnalyzerPlugin =
  require('webpack-bundle-analyzer').BundleAnalyzerPlugin
module.exports = {
  browserDebugInfoInTerminal: false,
  webpack(config) {
    config.plugins = config.plugins || []
    config.plugins.push(
      new BundleAnalyzerPlugin({
        analyzerMode: 'disabled',
        generateStatsFile: true,
      })
    )
    return config
  },
}
