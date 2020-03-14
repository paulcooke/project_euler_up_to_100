// function to make trianlge numbers and check each one against a limit
const makeTriangleNumbers = (factorLimit) => {
  let trianglesArr = [1]
  
  // trying a while loop
  let iterator = 2
  // ****** should be less than or equal to or factorLimit + 1?
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


console.log(makeTriangleNumbers(500).reverse()[0])

module.exports = { makeTriangleNumbers, checkFactorCount }