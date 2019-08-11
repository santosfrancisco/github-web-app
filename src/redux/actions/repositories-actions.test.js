import thunk from 'redux-thunk'
import configureStore from 'redux-mock-store'
import mockAxios from 'jest-mock-axios'

import * as constants from '../constants'
import * as repositoriesActions from './repositories'
import repositories from '../../mock/repositories'

const middlewares = [thunk]
const mockStore = configureStore(middlewares)

describe('async repositories actions', () => {
  describe('getPosts', () => {
    it('should creates GET_REPOS_SUCCESS when fetching repositories has been done', () => {
      mockAxios.get.mockImplementationOnce(() =>
        Promise.resolve({
          data: repositories
        })
      )

      const expectedActions = [
        { type: constants.GET_REPOS_REQUEST },
        { type: constants.GET_REPOS_SUCCESS, payload: repositories }
      ]
      const store = mockStore({ repositories: [] })

      return store.dispatch(repositoriesActions.getRepositories()).then(() => {
        expect(store.getActions()).toEqual(expectedActions)
      })
    })
    it('shoud creates GET_REPOS_FAILURE when fetching repositories has fail', () => {
      const errorMessage = 'Fetch failed'
      mockAxios.get.mockImplementationOnce(() =>
        Promise.reject(
          new Error(errorMessage)
        )
      )

      const expectedActions = [
        { type: constants.GET_REPOS_REQUEST },
        { type: constants.GET_REPOS_FAILURE, payload: errorMessage }
      ]
      const store = mockStore({ repositories: [] })

      return store.dispatch(repositoriesActions.getRepositories()).then(() => {
        expect(store.getActions()).toEqual(expectedActions)
      })
    })
  })
})
