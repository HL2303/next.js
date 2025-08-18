/** @type {import('next').NextConfig} */
const config = {
  browserDebugInfoInTerminal: false,
  experimental: {
    outputFileTracingExcludes: {
      '*': ['anyvaluewillcauseit'],
    },
  },
}

module.exports = config
