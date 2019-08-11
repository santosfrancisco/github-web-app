import thunk from 'redux-thunk'
import configureStore from 'redux-mock-store'
import mockAxios from 'jest-mock-axios'

import * as constants from '../constants'
import * as commitsActions from './commits'
import commits from '../../mock/commits'

const middlewares = [thunk]
const mockStore = configureStore(middlewares)

describe('async commits actions', () => {
  describe('getPosts', () => {
    it('should creates GET_COMMITS_SUCCESS when fetching commits has been done', () => {
      mockAxios.get.mockImplementationOnce(() =>
        Promise.resolve({
          data: commits
        })
      )

      const expectedActions = [
        { type: constants.GET_COMMITS_REQUEST },
        { type: constants.GET_COMMITS_SUCCESS, payload: commits }
      ]
      const store = mockStore({ commits: [] })

      return store.dispatch(commitsActions.getCommits()).then(() => {
        expect(store.getActions()).toEqual(expectedActions)
      })
    })
    it('shoud creates GET_COMMITS_FAILURE when fetching commits has fail', () => {
      const errorMessage = 'Fetch failed'
      mockAxios.get.mockImplementationOnce(() =>
        Promise.reject(
          new Error(errorMessage)
        )
      )

      const expectedActions = [
        { type: constants.GET_COMMITS_REQUEST },
        { type: constants.GET_COMMITS_FAILURE, payload: errorMessage }
      ]
      const store = mockStore({ commits: [] })

      return store.dispatch(commitsActions.getCommits()).then(() => {
        expect(store.getActions()).toEqual(expectedActions)
      })
    })
  })
})
