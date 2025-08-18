/**
 * @type {import('next').NextConfig}
 */
const config = {
  browserDebugInfoInTerminal: false,
}

if (process.env.BASE_PATH) {
  config.basePath = process.env.BASE_PATH
}

module.exports = config
