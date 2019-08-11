import * as commitsReducers from './commits'
import * as constants from '../constants'
import commits from '../../mock/commits'

describe('commits reducer', () => {
  it('should return the initial state from commits', () => {
    expect(commitsReducers.commits(undefined, {})).toEqual([])
  })
  it('should return the commits', () => {
    expect(commitsReducers.commits(undefined, { type: constants.GET_COMMITS_SUCCESS, payload: commits }))
      .toEqual(commits)
  })
})
