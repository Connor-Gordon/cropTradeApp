import { createStore, combineReducers } from 'redux'

import listingsReducer from './reducers/listingsReducer'
import chatReducer from './reducers/chatReducer'
import otherReducer from './reducers/otherReducer'
// import all reducers here

const rootReducer = combineReducers({
  listingsReducer,
  chatReducer,
  otherReducer
  // put reducers here
})

const store = createStore(rootReducer)

export default store