/**
 * Filters out browser debug logs from CLI output
 * Browser logs are prefixed with [browser] when browserDebugInfoInTerminal is enabled
 */
export function filterBrowserLogs(output: string): string {
  // Simple approach: just filter lines that start with [browser]
  // If we're slicing in the middle of a line, we accept that we might
  // occasionally see partial browser log lines, but this is safer than
  // trying to detect fragments which can cause false positives
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
