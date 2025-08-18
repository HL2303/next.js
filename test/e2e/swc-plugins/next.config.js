/** @type {import('next').NextConfig} */
module.exports = {
  browserDebugInfoInTerminal: false,
  experimental: {
    swcPlugins: [
      [
        '@swc/plugin-react-remove-properties',
        {
          properties: ['^data-custom-attribute$'],
        },
      ],
    ],
  },
}
