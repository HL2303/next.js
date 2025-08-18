module.exports = {
  browserDebugInfoInTerminal: false,
  experimental: {
    esmExternals: 'loose',
  },
  webpack(config, { isServer }) {
    config.resolve.alias = {
      ...config.resolve.alias,
      'preact/compat': 'react',
    }
    return config
  },
}
