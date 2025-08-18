/** @type {import('next').NextConfig} */
const nextConfig = {
  browserDebugInfoInTerminal: false,
  output: 'export',
  // distDir: '.next-custom',
  trailingSlash: true,
  generateBuildId() {
    return 'test-build-id'
  },
}

module.exports = nextConfig
