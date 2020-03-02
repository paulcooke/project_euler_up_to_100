// this one takes a while to run!

const summation = (num) => {
  
  // re-use much of project euler problem 3
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

  let runningTotal = 2
  let counter = 3
  while (counter < num) {
    if (testForPrime(counter)) runningTotal += counter
    counter += 2
  }

  console.log(runningTotal)

  // let primesList = [0]
  // let counter = 1
  // while (primesList[primesList.length - 1] < num) {
  //   if (testForPrime(counter)) primesList.push(counter)
  //   counter++
  // }

  // console.log(primesList)
  // console.log(primesList.reduce((a, b) => a + b, 0))
  

}

console.log(summation(2000000))