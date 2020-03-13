// function to make trianlge numbers and check each one against a limit
const makeTriangleNumbers = (factorLimit) => {
  let trianglesArr = [1]
  
  // cant get this to work
  for (let i = 1; trianglesArr.length < factorLimit; i += (i+1)) {
    trianglesArr.push(i + (i + 1))
  }
  return trianglesArr
}

// function to check the number of factors at any point
const checkFactorCount = () => {

}

const highlyDivisible = () => {
  
} 


module.exports = { makeTriangleNumbers, checkFactorCount, highlyDivisible }