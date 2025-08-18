// function requireRoot(s) {
//   return require(`pkg/${s}`)
// }
// function requireExact(s) {
//   return require(`pkg/exact-${s}`)
// }
// function requireWildcardSuffix(s) {
//   return require(`pkg/wildcard-suffix-${s}`)
// }
// function requireWildcard(s) {
//   return require(`pkg/wildcard-${s}`)
// }
function requireExactAConstantSuffix(s) {
  return require(`pkg/${s}exact-a`)
}

// it('should correctly handle dynamic requests into exports field (exact)', () => {
//   expect(requireExact('a').default).toBe('a')
//   expect(requireExact('b').default).toBe('b')
//   expect(requireExact('c').default).toBe('c')
// })

// it('should correctly handle dynamic requests into exports field (wildcard with suffix)', () => {
//   expect(requireStarSuffix('a').default).toBe('a')
//   expect(requireStarSuffix('b').default).toBe('b')
//   expect(requireStarSuffix('c').default).toBe('c')
// })

// it('should correctly handle dynamic requests into exports field (wildcard)', () => {
//   expect(requireStar('a').default).toBe('a')
//   expect(requireStar('b').default).toBe('b')
//   expect(requireStar('c').default).toBe('c')
// })

it('should correctly handle dynamic requests into exports field (empty dynamic prefix)', () => {
  expect(requireExactAConstantSuffix('').default).toBe('a')
})

// it('should correctly handle dynamic requests into exports field (mixed)', () => {
//   expect(requireRoot('foo-a').default).toBe('a')
//   expect(requireRoot('foo-b').default).toBe('b')
//   expect(requireRoot('foo-c').default).toBe('c')
//   expect(requireRoot('bar-a').default).toBe('a')
//   expect(requireRoot('bar-b').default).toBe('b')
//   expect(requireRoot('bar-c').default).toBe('c')
// })
