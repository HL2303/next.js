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
      // For complete lines (not the first line when sliced mid-line), check if they start with [browser]
      if (index > 0 || output.startsWith('\n')) {
        return !line.startsWith('[browser]')
      }

      // For the first line when we might have sliced mid-line
      if (index === 0 && output.length > 0 && !output.startsWith('\n')) {
        // If it contains [browser], it's definitely a browser log
        if (line.includes('[browser]')) return false

        // Check if this looks like a fragment of "[browser] ..." line
        // Browser logs typically have a specific format: "[browser] <log content>"
        // So if we see fragments like "rowser] <something>", it's likely a browser log
        // We'll be conservative and only filter obvious browser log fragments

        // Check for "rowser] " specifically (with space), as browser logs have space after ]
        if (/^rowser\] /.test(line)) return false
        if (/^owser\] /.test(line)) return false
        if (/^wser\] /.test(line)) return false
        if (/^ser\] /.test(line)) return false
        if (/^er\] /.test(line)) return false
        if (/^r\] /.test(line)) return false

        // Don't filter other lines that might legitimately start with these patterns
        return true
      }

      return true
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
