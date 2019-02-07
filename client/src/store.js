import { createStore, combineReducers } from 'redux'

import listingsReducer from './reducers/listingsReducer'
import usersReducer from './reducers/usersReducer'
// import all reducers here

const rootReducer = combineReducers({
  listingsReducer,
  usersReducer
  // put reducers here
})

const store = createStore(rootReducer)

export default store