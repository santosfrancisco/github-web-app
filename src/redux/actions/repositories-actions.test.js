import thunk from 'redux-thunk'
import configureStore from 'redux-mock-store'

import * as constants from '../constants'
import * as repositoriesActions from './repositories'
import repositories from '../../mock/repositories'

import api from '../api'
const MockAdapter = require('axios-mock-adapter')

const middlewares = [thunk]
const mockStore = configureStore(middlewares)

describe('async repositories actions', () => {
  let mock

  beforeEach(() => {
    mock = new MockAdapter(api)
  })

  afterEach(() => {
    mock.restore()
  })
  it('should creates GET_REPOS_SUCCESS when fetching repositories has been done', () => {
    mock.onGet('/users/user/repos')
      .reply(200, repositories)
    const expectedActions = [
      { type: constants.GET_REPOS_REQUEST },
      { type: constants.GET_REPOS_SUCCESS, payload: repositories }
    ]
    const store = mockStore({ repositories: [] })

    return store.dispatch(repositoriesActions.getRepositories('user'))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions)
      })
  })
  it('shoud creates GET_REPOS_FAILURE when fetching repositories has fail', () => {
    mock.onGet('/users/user/repos').reply(500)
    const expectedActions = [
      { type: constants.GET_REPOS_REQUEST },
      { type: constants.GET_REPOS_FAILURE, payload: 'Request failed with status code 500' }
    ]
    const store = mockStore({ repositories: [] })

    return store.dispatch(repositoriesActions.getRepositories('user')).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
  it('shoud creates GET_REPOS_FAILURE when fetching repositories has fail with 404', () => {
    mock.onGet('/users/user/repos')
      .reply(404)
    const expectedActions = [
      { type: constants.GET_REPOS_REQUEST },
      { type: constants.GET_REPOS_FAILURE, payload: 'Usuário não encontrado.' }
    ]
    const store = mockStore({ repositories: [] })

    return store.dispatch(repositoriesActions.getRepositories('user')).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})
