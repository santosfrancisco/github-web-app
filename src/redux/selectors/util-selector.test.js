import * as utilSelectors from './util'

describe('util selectors', () => {
  it('should return the correct loading status', () => {
    expect(utilSelectors.getIsLoading({ isLoading: true })).toEqual(true)
    expect(utilSelectors.getIsLoading({ isLoading: false })).toEqual(false)
  })
})
