import {
  GET_REPOS_SUCCESS
} from '../constants'

const initialState = {
  nodes: [],
  totalCount: 0,
  pageInfo: {}
}

export const repositories = (state = initialState, action) => {
  switch (action.type) {
    case GET_REPOS_SUCCESS:
      return action.payload
    default:
      return state
  }
}
