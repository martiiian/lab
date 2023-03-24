const { jumpingOnClouds } = require('./jumping-on-the-clouds')

it('Must jump well', () => {
  expect(jumpingOnClouds([0, 1, 0, 0, 0, 1, 0])).toEqual(3)
})
