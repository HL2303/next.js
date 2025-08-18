/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  browserDebugInfoInTerminal: false,
  experimental: {
    devtoolSegmentExplorer: true,
    authInterrupts: true,
    globalNotFound: true,
  },
}

module.exports = nextConfig
