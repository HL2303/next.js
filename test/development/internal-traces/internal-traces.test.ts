import { FileRef, nextTestSetup } from 'e2e-utils'
import path from 'node:path'
import { filterBrowserLogs } from '../../lib/filter-browser-logs'

describe('internal traces', () => {
  const { next } = nextTestSetup({
    files: new FileRef(path.join(__dirname)),
  })

  it('should not write long internal traces to stdio', async () => {
    await next.render$('/traces')
    expect(filterBrowserLogs(next.cliOutput).length).toBeLessThan(
      256 * 1024 /* 256KiB of ascii */
    )
    expect(filterBrowserLogs(next.cliOutput)).not.toContain(
      'https://nextjs.org/docs/messages/large-page-data'
    )
  })
})
