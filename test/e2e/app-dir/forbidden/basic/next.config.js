/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  browserDebugInfoInTerminal: false,
  experimental: {
    authInterrupts: true,
  },
}

module.exports = nextConfig
