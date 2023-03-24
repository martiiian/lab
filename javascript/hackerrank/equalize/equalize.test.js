const { equalize } = require('./equalize.js');

it('must correctly work', () => {
   expect(equalize([3, 3, 2, 1, 3])).toEqual(2)
})

