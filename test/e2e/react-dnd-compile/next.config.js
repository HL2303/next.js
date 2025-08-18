/** @type {import('next').NextConfig} */
const nextConfig = {
  browserDebugInfoInTerminal: false,
  reactStrictMode: true,
  transpilePackages: ['@react-dnd/invariant'],
}

module.exports = nextConfig
