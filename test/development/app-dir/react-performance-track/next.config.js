/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  browserDebugInfoInTerminal: false,
  // Some flag to enable react@experimental
  experimental: { taint: true },
}

module.exports = nextConfig
