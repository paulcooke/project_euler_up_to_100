const { highlyDivisible } = require('../incomplete/12-highly_divisible_triangular_number')

describe('highlyDivisible', () => {
  it('returns an array', () => {
    const result = highlyDivisible()
    expect(result).toEqual(expect.any(Array))
  })
  it('returns an array of numbers', () => {
    const result = highlyDivisible()
    expect(result).toContainEqual(expect.any(Number))
  })

})