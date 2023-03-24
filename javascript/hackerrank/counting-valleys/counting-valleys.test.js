const { countingValleys } = require('./counting-valleys')

it('Must count in right way', () => {
  expect(countingValleys(8, 'UDDDUDUU')).toBeTruthy()
})
