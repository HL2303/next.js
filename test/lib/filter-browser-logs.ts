/**
 * Filters out browser debug logs from CLI output
 * Browser logs are prefixed with [browser] when browserDebugInfoInTerminal is enabled
 */
export function filterBrowserLogs(output: string): string {
  return output
    .split('\n')
    .filter((line) => !line.startsWith('[browser]'))
    .join('\n')
}

/**
 * Helper to get CLI output without browser logs
 * Useful for tests that check CLI output patterns
 */
export function getServerOutput(output: string): string {
  return filterBrowserLogs(output)
}
