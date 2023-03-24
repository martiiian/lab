function countingValleys(steps, path) {
  let countValleys = 0;
  let tempCounter = 0
  let isValley;

  for (let step of path) {
    if (step === 'U') {
      ++tempCounter
    }

    if (step === 'D') {
      --tempCounter
    }

    if (tempCounter != 0) {
      isValley = tempCounter < 0
    }

    if (tempCounter === 0 && isValley) {
      countValleys++
    }
  }

  return countValleys;
}

module.exports = { countingValleys }
