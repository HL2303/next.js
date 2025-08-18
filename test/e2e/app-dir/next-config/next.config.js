// This should work
console.log(require('webpack').sources.RawSource)

/** @type {import('next').NextConfig} */
const nextConfig = {
  browserDebugInfoInTerminal: false,
  webpack(config) {
    return config
  },
}

module.exports = nextConfig
