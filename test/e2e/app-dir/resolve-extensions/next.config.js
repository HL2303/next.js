const extensions = ['', '.png', '.tsx', '.ts', '.jsx', '.js', '.json']

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  browserDebugInfoInTerminal: false,
  turbopack: {
    resolveExtensions: [...extensions],
  },
  webpack(config) {
    config.resolve.extensions = [...extensions]
    return config
  },
}

module.exports = nextConfig
