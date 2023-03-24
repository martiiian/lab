function equalize(arr) {
  const obj = {}

  for (const item of arr) {
    if (!obj[item]) obj[item] = 0

    obj[item]++
  }

  const sortedObject = Object.entries(obj).sort((a, b) => b[1] - a[1])
  const majority = sortedObject[0][0]

  return sortedObject.slice(1).reduce((sum, [_, i]) => sum += i, 0)
}

module.exports = { equalize }

