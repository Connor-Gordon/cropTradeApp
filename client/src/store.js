import { createStore, combineReducers } from 'redux'

import listingsReducer from './reducers/listingsReducer'
import chatReducer from './reducers/chatReducer'
// import all reducers here

const rootReducer = combineReducers({
  listingsReducer,
  chatReducer
  // put reducers here
})

const store = createStore(rootReducer)

export default store