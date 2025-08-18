module.exports = (phase, { defaultConfig }) => {
  return {
    browserDebugInfoInTerminal: false,
    phase,
    defaultConfig,
    customConfig: true,
  }
}
