/** @type {import('next').NextConfig} */
module.exports = {
  browserDebugInfoInTerminal: false,
  experimental: {
    typedRoutes: true,
    parallelServerBuildTraces: true,
    webpackBuildWorker: true,
  },
}
