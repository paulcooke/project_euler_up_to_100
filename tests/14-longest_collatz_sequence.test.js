const { makeCollatzSequence, checkForHighest, solveProblem } = require('../complete/14-longest_collatz_sequence')

describe('checkForHighest', () => {
  it('returns a number', () => {
    const result = checkForHighest(3, 5)
    expect(result).toEqual(expect.any(Number))
  })
  it('returns the highest number when the current highest is bigger', () => {
    const result = checkForHighest(6, 2)
    expect(result).toBe(6)
  })
  it('returns the highest number when the current highest is smaller', () => {
    const result = checkForHighest(3, 15)
    expect(result).toBe(15)
  })
})

describe('makeCollatzSequence', () => {
  it('returns an array', () => {
    const result = makeCollatzSequence(13)
    expect(result).toEqual(expect.any(Array))
  })
  it('makes a collatz sequence starting from 13', () => {
    const result = makeCollatzSequence(13)
    expect(result).toEqual(expect.arrayContaining([13, 40, 20, 10, 5, 16, 8, 4, 2, 1]))
  })
})

describe('solveProblem', () => {
  it('returns a number when given a number', () => {
    const result = solveProblem(13)
    expect(result).toEqual(expect.any(Number))
  })
  it('checks the start number 9 and returns 20', () => {
    const result = solveProblem(9)
    expect(result).toBe(20)
  })
  it('finds the longest chain under 13 start number', () => {
    const result = solveProblem(12)
    expect(result).toBe(20)
  })
  
})