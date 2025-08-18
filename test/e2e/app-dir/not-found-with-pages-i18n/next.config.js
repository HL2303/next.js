/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  browserDebugInfoInTerminal: false,
  i18n: {
    locales: ['en-GB', 'en'],
    defaultLocale: 'en',
    localeDetection: false,
  },
}

module.exports = nextConfig
