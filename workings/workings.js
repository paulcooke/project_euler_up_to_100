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

console.log(testForPrime(775121))