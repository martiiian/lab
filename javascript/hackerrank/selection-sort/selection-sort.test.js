const { selectionSort } = require('./selection-sort.js')

it('must correct well', () => {
  expect(selectionSort([2, 8, 5, 3, 9, 4, 1])).toEqual([1, 2, 3, 4, 5, 8, 9])
});
