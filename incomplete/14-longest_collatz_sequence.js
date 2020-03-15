const makeCollatzSequence = (startingNumber) => {
  const sequence = [startingNumber]
  let number = startingNumber
  while (number > 1) {
    if (number % 2 === 0) {
      number = number / 2
    } else {
      number = (number * 3) + 1
    }
    sequence.push(number)
  }
  // console.log(sequence)
  return sequence
}

const checkForHighest = (currentHighest, check) => {
  return currentHighest > check ? currentHighest : check
}

const solveProblem = (startNum) => {
  let biggestNum = 0
  // console.log(makeCollatzSequence(startNum))
  // console.log(biggestNum)
  let biggestStartingNum = 0 

  for (let i = startNum; i >= 1; i--) {
    // console.log(makeCollatzSequence(i))
    if (makeCollatzSequence(i).length > biggestNum) {
      biggestNum = makeCollatzSequence(i).length
      biggestStartingNum = i
    }


    // makeCollatzSequence(i).length > biggestNum 
    //   ? makeCollatzSequence(i).length
    //   : biggestNum
  }
  console.log(biggestStartingNum)
  return biggestNum
}

console.log(solveProblem(999999))

module.exports = { makeCollatzSequence, checkForHighest, solveProblem }