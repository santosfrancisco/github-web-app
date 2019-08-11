import * as utilReducers from './util'
import * as constants from '../constants'

describe('util reducer', () => {
  describe('isLoading reducer', () => {
    it('should return the initial state from isLoading', () => {
      expect(utilReducers.isLoading(undefined, {})).toEqual(false)
    })
    it('should enable loading', () => {
      expect(utilReducers.isLoading(undefined, { type: constants.GET_REPOS_REQUEST }))
        .toEqual(true)
    })
    it('should disable loading on success', () => {
      expect(utilReducers.isLoading(undefined, { type: constants.GET_REPOS_SUCCESS }))
        .toEqual(false)
    })
    it('should disable loading on fail', () => {
      expect(utilReducers.isLoading(undefined, { type: constants.GET_REPOS_FAILURE }))
        .toEqual(false)
    })
  })
  describe('errorMessage reducer', () => {
    const errorMsg = 'Fetch failed'
    it('should return the initial state from errorMessage', () => {
      expect(utilReducers.errorMessage(undefined, {})).toEqual(null)
    })
    it('should have a error message', () => {
      expect(utilReducers.errorMessage(undefined, { type: constants.GET_REPOS_FAILURE, payload: errorMsg }))
        .toEqual(errorMsg)
    })
    it('should not have a error message on success', () => {
      expect(utilReducers.errorMessage(undefined, { type: constants.GET_REPOS_SUCCESS, payload: [1, 2] }))
        .toEqual(null)
    })
    it('should noot have a error message on request start', () => {
      expect(utilReducers.errorMessage(undefined, { type: constants.GET_REPOS_REQUEST }))
        .toEqual(null)
    })
  })
})
