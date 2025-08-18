/**
 * Filters out browser debug logs from CLI output
 * Browser logs are prefixed with [browser] when browserDebugInfoInTerminal is enabled
 */
export function filterBrowserLogs(output: string): string {
  // Handle edge case where output might start in the middle of a line
  // If the output doesn't start with a newline and contains [browser] at the start,
  // we should still filter it
  const lines = output.split('\n')

  return lines
    .filter((line, index) => {
      // For the first line, check if it contains [browser] anywhere
      // (in case we sliced in the middle of a line)
      if (index === 0 && output.length > 0 && !output.startsWith('\n')) {
        // If we're in the middle of a line, check if it's part of a browser log
        return !line.includes('[browser]')
      }
      // For complete lines, check if they start with [browser]
      return !line.startsWith('[browser]')
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
