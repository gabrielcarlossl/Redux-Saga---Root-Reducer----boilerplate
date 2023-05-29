import { combineReducers } from 'redux'
import Users from './user'

// ROOT REDUCER 

const rootReducer = combineReducers({
  //All reducers will be here

  users: Users,
})
export default rootReducer
