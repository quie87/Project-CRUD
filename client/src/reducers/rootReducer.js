import { combineReducers } from 'redux'
import todoReducer from './todoReducer'
import authReducer from './authReducer'
import errorReducer from './errorReducer'

// Add reducers here
export default combineReducers({
  todo: todoReducer,
  auth: authReducer,
  error: errorReducer
})
