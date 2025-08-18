module.exports = {
  browserDebugInfoInTerminal: false,
  turbopack: {
    resolveAlias: {
      foo: './turbopack.js',
    },
  },
  experimental: {
    turbo: {
      resolveAlias: {
        foo: './turbo.js',
      },
    },
  },
}
