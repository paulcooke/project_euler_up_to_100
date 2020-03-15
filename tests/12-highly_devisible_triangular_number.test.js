const { checkFactorCount, makeTriangleNumbers } = require('../complete/12-highly_divisible_triangular_number')

describe('makeTriangleNumbers', () => {
  it('returns an array', () => {
    const result = makeTriangleNumbers(5)
    expect(result).toEqual(expect.any(Array))
  })
  it('returns an array of numbers', () => {
    const result = makeTriangleNumbers(5)
    expect(result).toContainEqual(expect.any(Number))
  })
  it('returns an array of triangle numbers', () => {
    const result = makeTriangleNumbers(5)
    expect(result).toEqual(expect.arrayContaining([1, 3, 6, 10, 15]))
  })
})

describe('checkFactorCount', () => {
  it('returns a number', () => {
    const result = checkFactorCount(28)
    expect(result).toEqual(expect.any(Number))
  })
  it('corectly checks that 28 has more than 5 factors', () => {
    const result = checkFactorCount(28)
    expect(result).toBe(6) 
  })
})