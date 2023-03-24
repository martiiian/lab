function repeatedString(s, n) {
  let countOfAInSrc = 0
  for (const letter of s) {
    if (letter === 'a') countOfAInSrc++;
  }

  let countOfOccurrences = Math.floor(n / s.length)
  let remainsOfSymbols = n % s.length

  countOfAInSrc *= countOfOccurrences

  for (let i = 0; i < remainsOfSymbols; i++) {
    if (s[i] === 'a') countOfAInSrc++;
  }

  return countOfAInSrc
}

module.exports = { repeatedString }
