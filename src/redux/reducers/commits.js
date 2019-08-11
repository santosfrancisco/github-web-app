import {
  GET_COMMITS_SUCCESS
} from '../constants'

export const commits = (state = [], action) => {
  switch (action.type) {
    case GET_COMMITS_SUCCESS:
      return action.payload
    default:
      return state
  }
}
