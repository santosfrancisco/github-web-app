import { gql } from '../api'
import * as constants from '../constants'

export const getRepositories = args => {
  const getRepos = `query ($user: String!, $first: Int, $last: Int $after: String, $before: String) {
    user(login: $user) {
      repositories(first: $first, last: $last, orderBy: {field: STARGAZERS, direction: DESC}, after: $after, before: $before) {
        totalCount
        nodes {
          name
          url
          shortDescriptionHTML
          stargazers {
            totalCount
          }
          nameWithOwner
        }
        pageInfo {
          hasNextPage
          hasPreviousPage
          startCursor
          endCursor
        }
      }
    }
  }`

  const variables = {
    ...args
  }

  return dispatch => {
    dispatch({ type: constants.GET_REPOS_REQUEST })
    return gql.post('', { query: getRepos, variables })
      .then(({ data: { data: { user }, errors } }) => {
        if (errors) throw new Error(errors[0].type)
        return dispatch({ type: constants.GET_REPOS_SUCCESS, payload: user.repositories })
      })
      .catch(error => dispatch({
        type: constants.GET_REPOS_FAILURE,
        payload: error.message === 'NOT_FOUND' ? 'Usuário não encontrado.' : error.message
      })
      )
  }
}
