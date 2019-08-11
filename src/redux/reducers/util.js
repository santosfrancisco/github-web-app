export const isLoading = (state = false, action) => {
  const { type } = action
  const matches = /(.*)_(REQUEST|SUCCESS|FAILURE)/.exec(type)
  if (!matches) return state

  const [,, requestState] = matches

  switch (requestState) {
    case 'REQUEST':
      return true
    case 'SUCCESS':
    case 'FAILURE':
      return false
    default:
      return state
  }
}

export const errorMessage = (state = null, action) => {
  const { type } = action
  const matches = /(.*)_(REQUEST|SUCCESS|FAILURE)/.exec(type)
  if (!matches) return state

  const [,, requestState] = matches

  switch (requestState) {
    case 'FAILURE':
      return action.payload
    case 'SUCCESS':
    case 'REQUEST':
      return null
    default:
      return state
  }
}
