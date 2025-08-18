/**
 * Filters out browser debug logs from CLI output
 * Browser logs are prefixed with [browser] when browserDebugInfoInTerminal is enabled
 */
export function filterBrowserLogs(output: string): string {
  // Handle edge case where output might start in the middle of a line
  // If the output doesn't start with a newline, we might be in the middle of a line
  const lines = output.split('\n')

  return lines
    .filter((line, index) => {
      // For the first line, if we didn't start with a newline, we might be mid-line
      if (index === 0 && output.length > 0 && !output.startsWith('\n')) {
        // Check if this could be part of a browser log line
        // A browser log line would have been "[browser] ..." but we might have sliced it
        // So we check for common patterns that indicate it's part of a browser log

        // If it contains [browser], it's definitely a browser log
        if (line.includes('[browser]')) return false

        // If it looks like a fragment of a browser log (e.g., "rowser] ...", "wser] ...", etc.)
        // We check if it starts with patterns that could be the tail of "[browser]"
        const browserFragments = [
          'rowser]',
          'owser]',
          'wser]',
          'ser]',
          'er]',
          'r]',
          ']',
        ]
        for (const fragment of browserFragments) {
          if (line.startsWith(fragment)) return false
        }

        return true
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
