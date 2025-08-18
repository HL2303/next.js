/**
 * Filters out browser debug logs from CLI output
 * Browser logs are prefixed with [browser] when browserDebugInfoInTerminal is enabled
 * The [browser] prefix is wrapped with cyan ANSI color codes
 * In test mode, we add a marker to help identify browser log boundaries
 */
export function filterBrowserLogs(output: string): string {
  // Set a unique marker for browser logs in test mode
  // This helps us reliably identify and filter multiline browser logs
  if (!process.env.__NEXT_TEST_BROWSER_LOG_MARKER) {
    process.env.__NEXT_TEST_BROWSER_LOG_MARKER = '<<<BROWSER_LOG>>>'
  }

  const marker = process.env.__NEXT_TEST_BROWSER_LOG_MARKER

  // If we have a marker, use it to filter more reliably
  if (marker && output.includes(marker)) {
    return output
      .split('\n')
      .filter((line) => !line.includes(marker))
      .join('\n')
  }

  // Fallback: filter lines containing [browser]
  // This handles both raw [browser] and cyan-colored [browser]
  return output
    .split('\n')
    .filter((line) => !line.includes('[browser]'))
    .join('\n')
}

/**
 * Helper to get CLI output without browser logs
 * Useful for tests that check CLI output patterns
 */
export function getServerOutput(output: string): string {
  return filterBrowserLogs(output)
}
