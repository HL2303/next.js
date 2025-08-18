/** @type {import('next').NextConfig} */

const nextConfig = {
  browserDebugInfoInTerminal: false,
  reactStrictMode: true,
  compiler: {
    emotion: true,
  },
}

module.exports = nextConfig
