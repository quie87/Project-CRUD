import { ADD_TODO, DELETE_TODO, TOGGLE_TODO, DELETE_TODOS, TODOS_LOADING, TODOS_LOADED } from '../actions/types'

const initialState = {
  todos: [],
  todosIsLoading: false
}

export default function (state = initialState, action) {
  switch (action.type) {
    case TODOS_LOADED:
      return {
        ...state,
        todos: action.payload,
        todosIsLoading: false
      }
    case TODOS_LOADING:
      return {
        ...state,
        todosIsLoading: true
      }
    case ADD_TODO:
      return {
        ...state,
        todos: [action.payload, ...state.todos]
      }
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo._id !== action.payload)
      }
    case DELETE_TODOS:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.parentName !== action.payload)
      }
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map(todo => todo._id === action.payload._id ? action.payload : todo)
      }

    default:
      return state
  }
}
