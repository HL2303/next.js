/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  browserDebugInfoInTerminal: false,
  compiler: {
    removeConsole: { exclude: ['error'] },
  },
}

module.exports = nextConfig
