const triplets = (targetNum) => {
  const allTheThrees = []
  const allTheFours = []
  const allTheFives = []

  for (let i = 3; i < targetNum; i++) {
    if (i % 3 === 0) allTheThrees.push(i)
  }

  for (let i = 4; i < targetNum; i++) {
    if (i % 4 === 0) allTheFours.push(i)
  }

  for (let i = 5; i < targetNum; i++) {
    if (i % 5 === 0) allTheFives.push(i)
  }

  let threesAnswer = 0
  let foursAnswer = 0
  let fivesAnswer = 0

  for (let threes = 0; threes < allTheThrees.length; threes++) {
    for (let fours = 0; fours < allTheFours.length; fours++) {
      for (let fives = 0; fives < allTheFives.length; fives++) {
        if (allTheThrees[threes] + allTheFours[fours] + allTheFives[fives] === targetNum 
            && (allTheThrees[threes] * allTheThrees[threes]) + (allTheFours[fours] * allTheFours[fours]) === (allTheFives[fives] * allTheFives[fives])) {
          threesAnswer = allTheThrees[threes]
          foursAnswer = allTheFours[fours]
          fivesAnswer = allTheFives[fives]
          break
        }
      }
    }
  }

  console.log(threesAnswer, foursAnswer, fivesAnswer)
  console.log(threesAnswer + foursAnswer + fivesAnswer)
  return threesAnswer * foursAnswer * fivesAnswer

} 

console.log(triplets(1000))