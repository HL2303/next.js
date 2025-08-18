/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  browserDebugInfoInTerminal: false,
  images: {
    loaderFile: '/dummy-loader.ts',
  },
}

module.exports = nextConfig
