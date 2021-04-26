import { bibaFunction } from '../index'

describe('bibaFunction', () => {
  it('must return "hello"', () => {
    const param: string = 'something'

    const result = bibaFunction(param)

    expect(result).toEqual(param);
  })
})
