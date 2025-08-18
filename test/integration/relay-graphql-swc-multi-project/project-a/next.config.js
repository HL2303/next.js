const relay = require('../relay.config')

module.exports = {
  browserDebugInfoInTerminal: false,
  compiler: {
    relay: {
      src: './pages',
      artifactDirectory: './__generated__',
      language: relay.projects['project-b'].language,
    },
    externalDir: true,
  },
}
