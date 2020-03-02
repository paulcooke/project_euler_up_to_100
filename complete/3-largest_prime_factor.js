const findPrime = (num) => {
  // get square route for max nunber to check
  const square = Math.sqrt(num)
  console.log(square)

  // make an array of the numbers to check, remove multiples of 2 to make it shorter and then reverse it as we will be looking for the biggest one
  const testNums = []
  for (let i = 0; i <= square; i++) {
    if (i % 2 !== 0) testNums.push(i)
  }
  testNums.reverse()

  // make a function to test for primes
  const testForPrime = (numberToTest) => {
    if (numberToTest === 1) {
      return false
    } else if (numberToTest === 2) {
      return true
    } else {
      for (let i = 2; i < numberToTest; i++) {
        if (numberToTest % i === 0) return false
      }
      return true
    }
  }
  console.log(testNums)
  
  // run a find to get the first number from testNums that is both prime and a factor of num  
  return testNums.find(x => {
    if (testForPrime(x) && num % x === 0) return x
  })
}


console.log(findPrime(600851475143))