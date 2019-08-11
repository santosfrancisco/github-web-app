import api from '../api'

import * as constants from '../constants'

export const getRepositories = username => {
  return dispatch => {
    dispatch({ type: constants.GET_REPOS_REQUEST })
    return api.get(`users/${username}/repos`)
      .then(({ data }) => dispatch({ type: constants.GET_REPOS_SUCCESS, payload: data }))
      .catch(error => dispatch({ type: constants.GET_REPOS_FAILURE, payload: error.response.status === 404 ? 'Usuário não encontrado.' : error.message }))
  }
}
