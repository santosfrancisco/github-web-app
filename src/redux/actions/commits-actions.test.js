import thunk from 'redux-thunk'
import configureStore from 'redux-mock-store'

import * as constants from '../constants'
import * as commitsActions from './commits'
import commits from '../../mock/commits'

import api from '../api'
const MockAdapter = require('axios-mock-adapter')

const middlewares = [thunk]
const mockStore = configureStore(middlewares)

describe('async commits actions', () => {
  let mock

  beforeEach(() => {
    mock = new MockAdapter(api)
  })

  afterEach(() => {
    mock.restore()
  })
  it('should creates GET_COMMITS_SUCCESS when fetching commits has been done', () => {
    mock.onGet('repos/user/repo/commits')
      .reply(200, commits)

    const expectedActions = [
      { type: constants.GET_COMMITS_REQUEST },
      { type: constants.GET_COMMITS_SUCCESS, payload: commits }
    ]
    const store = mockStore({ commits: [] })

    return store.dispatch(commitsActions.getCommits('user', 'repo')).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
  it('shoud creates GET_COMMITS_FAILURE when fetching commits has fail', () => {
    mock.onGet('repos/user/repo/commits')
      .reply(404)

    const expectedActions = [
      { type: constants.GET_COMMITS_REQUEST },
      { type: constants.GET_COMMITS_FAILURE, payload: 'Request failed with status code 404' }
    ]
    const store = mockStore({ commits: [] })

    return store.dispatch(commitsActions.getCommits()).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})
