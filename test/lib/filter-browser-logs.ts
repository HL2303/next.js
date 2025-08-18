/**
 * Filters out browser debug logs from CLI output
 * Browser logs are prefixed with [browser] and suffixed with [browser end] in test mode
 * The markers are wrapped with cyan ANSI color codes
 */
export function filterBrowserLogs(output: string): string {
  // In test mode, browser logs have [browser] prefix and [browser end] suffix
  // We need to filter out everything between these markers
  if (output.includes('[browser]') && output.includes('[browser end]')) {
    const lines = output.split('\n')
    const filteredLines: string[] = []
    let inBrowserLog = false

    for (const line of lines) {
      if (line.includes('[browser]')) {
        inBrowserLog = true
        continue
      }
      if (line.includes('[browser end]')) {
        inBrowserLog = false
        continue
      }
      if (!inBrowserLog) {
        filteredLines.push(line)
      }
    }

    return filteredLines.join('\n')
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
