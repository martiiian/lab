const { minimumBribes } = require('./new-year-chaos');

it('must work well with multiple bribes', () => {
  expect(minimumBribes([2, 1, 5, 3, 4])).toEqual(3)
});

it('must work well with Too Chaos', () => {
  expect(minimumBribes([2, 5, 1, 3, 4])).toEqual('Too chaotic')
});

it('test case too chaos 2', () => {
  expect(minimumBribes([5,1,2,3,7,8,6,4])).toEqual('Too chaotic')
});

it('test case 2', () => {
  expect(minimumBribes([1,2,5,3,7,8,6,4])).toEqual(7)
});


