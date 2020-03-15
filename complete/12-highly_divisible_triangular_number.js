// function to make trianlge numbers and check each one against a limit
const makeTriangleNumbers = (factorLimit) => {
  let trianglesArr = [1]
  
  // use a while loop to generate the next number for checking
  let iterator = 2

  while (checkFactorCount(trianglesArr[trianglesArr.length - 1]) < factorLimit) {
    trianglesArr.push(trianglesArr[trianglesArr.length - 1] + iterator)
    iterator ++
  }
  // console.log(trianglesArr)
  return trianglesArr
}


// function to check the number of factors at any point
const checkFactorCount = (num) => {
  let factorCount = []
  for (let i = 0; i <= num; i++) {
    if (num % i === 0) factorCount.push(i)
  }
  // console.log('factor count:', factorCount)
  return factorCount.length
}

// comment in this line to run for the challenge - it takes a while to run...
// console.log(makeTriangleNumbers(500).reverse()[0])

module.exports = { makeTriangleNumbers, checkFactorCount }