const sumDiffs = (num) => {
  //sum of squares
  const sumOfSquaresArr = []
  for (let i = 1; i <= num; i++) {
    sumOfSquaresArr.push(i*i)
  }
  const sumOfSquares = sumOfSquaresArr.reduce((a, b) => a + b, 0)
  //console.log(sumOfSquaresArr, sumOfSquares)

  const squareOfSumArr = []
  for (let j = 1; j <= num; j++) {
    squareOfSumArr.push(j)
  }
  const squareOfSum = squareOfSumArr.reduce((a, b) => a + b, 0) * squareOfSumArr.reduce((a, b) => a + b, 0)

  return squareOfSum - sumOfSquares
}

console.log(sumDiffs(100))