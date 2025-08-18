/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  browserDebugInfoInTerminal: false,
  env: {
    FROM_NEXT_CONFIG: 'FROM_NEXT_CONFIG',
  },
  experimental: {
    typedEnv: true,
  },
}

module.exports = nextConfig
