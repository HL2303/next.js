/**
 * Filters out browser debug logs from CLI output
 * Browser logs are prefixed with [browser] when browserDebugInfoInTerminal is enabled
 * The [browser] prefix is wrapped with cyan ANSI color codes
 */
export function filterBrowserLogs(output: string): string {
  // Browser logs include cyan color codes around [browser]
  // The pattern matches lines that contain [browser] with or without ANSI codes
  // We check for [browser] anywhere in the line to handle both colored and stripped output
  return output
    .split('\n')
    .filter((line) => {
      // Check for [browser] with optional ANSI color codes
      // This handles both raw [browser] and cyan-colored [browser]
      return !line.includes('[browser]')
    })
    .join('\n')
}

/**
 * Helper to get CLI output without browser logs
 * Useful for tests that check CLI output patterns
 */
export function getServerOutput(output: string): string {
  return filterBrowserLogs(output)
}
