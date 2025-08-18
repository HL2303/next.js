/** @type {import('next').NextConfig} */
module.exports = {
  browserDebugInfoInTerminal: false,
  productionBrowserSourceMaps: true,
  logging: {
    fetches: {},
  },
  experimental: {
    serverActions: { bodySizeLimit: '2mb' },
  },
}
