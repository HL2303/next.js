/** @type {import("next").NextConfig} */
const nextConfig = {
  browserDebugInfoInTerminal: false,
  experimental: {
    prerenderEarlyExit: false,
  },
}

module.exports = nextConfig
