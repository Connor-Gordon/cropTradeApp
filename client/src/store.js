import { createStore, combineReducers } from 'redux'

import listingsReducer from './reducers/listingsReducer'
import usersReducer from './reducers/usersReducer'
import chatReducer from './reducers/chatReducer'
// import all reducers here

const rootReducer = combineReducers({
  listingsReducer,
  chatReducer,
  usersReducer
  // put reducers here
})

const store = createStore(rootReducer)

export default store