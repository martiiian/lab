const { repeatedString } = require('./repeated-string')

it('must be count ok', () => {
  expect(repeatedString('aba', 10)).toEqual(7);
})
