const { convertAndSum } = require('../complete/13 - large_sum')

describe('convertAndSum', () => {
  it('returns a number when passed an array of strings', () => {
    const result = convertAndSum(['4567', '456890'])
    expect(result).toEqual(expect.any(Number))
  })
})


