const { checkFactorCount, makeTriangleNumbers, highlyDivisible } = require('../incomplete/12-highly_divisible_triangular_number')

describe('makeTriangleNumbers', () => {
  it('returns an array', () => {
    const result = makeTriangleNumbers(50)
    expect(result).toEqual(expect.any(Array))
  })
  it('returns an array of numbers', () => {
    const result = makeTriangleNumbers(50)
    expect(result).toContainEqual(expect.any(Number))
  })
  it('returns an array of triangle numbers', () => {
    const result = makeTriangleNumbers(5)
    expect(result).toEqual(expect.arrayContaining([1, 3, 6, 10, 15]))
  })

})