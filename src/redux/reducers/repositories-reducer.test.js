import * as repositoriesReducers from './repositories'
import * as constants from '../constants'
import repositories from '../../mock/repositories'

describe('repositories reducer', () => {
  it('should return the initial state from repositories', () => {
    expect(repositoriesReducers.repositories(undefined, {})).toEqual([])
  })
  it('should return the repositories', () => {
    expect(repositoriesReducers.repositories(undefined, { type: constants.GET_REPOS_SUCCESS, payload: repositories }))
      .toEqual(repositories)
  })
})
