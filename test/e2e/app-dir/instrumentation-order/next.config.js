/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  browserDebugInfoInTerminal: false,
  experimental: {
    preloadEntriesOnStart: false,
  },
}

module.exports = nextConfig
