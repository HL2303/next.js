/** @type {import("next").NextConfig} */
module.exports = {
  browserDebugInfoInTerminal: false,
  reactStrictMode: true,
  compiler: {
    emotion: {
      importMap: {
        'import-map-test': {
          styledCss: {
            canonicalImport: ['@emotion/react', 'css'],
          },
        },
      },
    },
  },
}
