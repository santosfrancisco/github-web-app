import api from '../api'
import * as constants from '../constants'

export const getCommits = (user, repo) => {
  return dispatch => {
    dispatch({ type: constants.GET_COMMITS_REQUEST })
    return api.get(`repos/${user}/${repo}/commits`)
      .then(({ data }) => dispatch({ type: constants.GET_COMMITS_SUCCESS, payload: data }))
      .catch(error => dispatch({ type: constants.GET_COMMITS_FAILURE, payload: error.message }))
  }
}
