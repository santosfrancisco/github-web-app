import { gql } from '../api'
import * as constants from '../constants'

export const getCommits = (user, repo) => {
  const getCommits = `{ 
      repository(name: "${repo}", owner: "${user}") {
        ref(qualifiedName: "master") {
          target {
            ...on Commit {
              history(first: 10) {
                totalCount
                nodes {
                  oid
                  messageHeadline
                  url
                  author {
                    name
                  }
                  committedDate
                }
                pageInfo {
                  hasNextPage
                  hasPreviousPage
                }
              }
            }
          }
        }
      }
    }
  `
  return dispatch => {
    dispatch({ type: constants.GET_COMMITS_REQUEST })
    return gql.post('', { query: getCommits })
      .then(({ data: { data: { repository: { ref: { target: { history } } } } } }) => {
        return dispatch({ type: constants.GET_COMMITS_SUCCESS, payload: history })
      })
      .catch(error => dispatch({ type: constants.GET_COMMITS_FAILURE, payload: error.message }))
  }
}
