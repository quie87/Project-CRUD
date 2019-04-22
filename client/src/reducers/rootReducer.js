import { combineReducers } from 'redux'
import projectReducer from './projectReducer'
import todoReducer from './todoReducer'
import authReducer from './authReducer'
import errorReducer from './errorReducer'

// Add reducers here
export default combineReducers({
  project: projectReducer,
  todo: todoReducer,
  auth: authReducer,
  error: errorReducer
})
