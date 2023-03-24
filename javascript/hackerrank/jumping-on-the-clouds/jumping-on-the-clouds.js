function jumpingOnClouds(c) {
  let jumpedIndex = 0
  let countJumps = 0

  for (const i in c) {
    const index = Number(i)
    if (index < jumpedIndex) continue

    if (c[index + 2] === 0) {
      jumpedIndex = index + 2
      countJumps++
      continue
    }

    if (c[index + 1] === 0) {
      jumpedIndex = index + 1
      countJumps++
    }
  }

  return countJumps === 0 ? 0 : countJumps
}

console.log(jumpingOnClouds([0,1,0,0,0,1,0]))

module.exports = { jumpingOnClouds }
