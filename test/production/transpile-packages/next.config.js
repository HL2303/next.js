/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  browserDebugInfoInTerminal: false,
  transpilePackages: ['@aws-sdk/client-s3'],
}

module.exports = nextConfig
