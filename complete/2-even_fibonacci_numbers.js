const evenFibs = (bigNumber) => {
  let startSeq = [0, 1]
  while (startSeq[startSeq.length - 1] <= bigNumber) {
    startSeq.push(startSeq[startSeq.length - 1] + startSeq[startSeq.length - 2])
  }
  startSeq.pop()
  console.log(startSeq.filter(x => x % 2 === 0).reduce((a, b) => a + b))
}

console.log(evenFibs(4000000))