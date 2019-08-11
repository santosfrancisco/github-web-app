import {
  GET_REPOS_SUCCESS
} from '../constants'

export const repositories = (state = [], action) => {
  switch (action.type) {
    case GET_REPOS_SUCCESS:
      return action.payload
    default:
      return state
  }
}
