/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  browserDebugInfoInTerminal: false,
  logging: {
    incomingRequests: {
      ignore: [/^\/hello/, /^\/non-existent/, /^\/_next\/static\//],
    },
  },
}

module.exports = nextConfig
