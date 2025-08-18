/** @type {import('next').NextConfig} */
module.exports = {
  browserDebugInfoInTerminal: false,
  experimental: {
    // DO NOT turn this on, it disables the incremental cache! (see `disableForTestmode`)
    // testProxy: true,
  },
}
