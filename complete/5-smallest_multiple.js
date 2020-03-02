const smallestMultiple = (num) => {
  const testArr = []
  for (let i = 1; i <= num; i++) {
    testArr.push(i)
  }
  // console.log(testArr)
  let success = false
  let testValue = num + 1

  while (!success) {
    if (testArr.every(test => testValue % test === 0)) {
      success = true
      return testValue
    } else {
      testValue++
    }
  }
  
  // let count = 0
  // let testNum = num
  // while (count < num)
  
}

console.log(smallestMultiple(20))