import { combineReducers } from 'redux'
import todoReducer from './todoReducer'

// Add reducers here
export default combineReducers({
  todo: todoReducer
})
