const getThePrime = (num) => {

  // re-use prime checker from project euler problem 3
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

  let primesList = []
  let counter = 1
  while (primesList.length < num) {
    if (testForPrime(counter)) primesList.push(counter)
    counter++
  }

  return primesList[primesList.length - 1]

}

console.log(getThePrime(10001))

