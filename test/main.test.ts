import {expect, test} from 'bun:test'

const {default: agents} = await import('#src/main.ts')

test('should run', () => {
  const result = agents()
  expect(result).toBe('agents') // TODO Test actual functionality
})
