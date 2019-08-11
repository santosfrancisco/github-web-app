import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { reducer as toastr } from 'react-redux-toastr'
import { repositories } from './reducers/repositories'
import { commits } from './reducers/commits'

import { isLoading, errorMessage } from './reducers/util'

const rootReducer = combineReducers({
  repositories,
  commits,
  isLoading,
  errorMessage,
  toastr
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(thunk)
  )
)

export default store
