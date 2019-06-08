import { ADD_TODO, DELETE_TODO, TODOS_LOADING, TODOS_LOADED } from './types'
import { tokenConfig } from './authActions'
import { returnErrors } from './errorActions'
import axios from 'axios'

export const getTodos = id => (dispatch, getState) => {
  dispatch({ type: TODOS_LOADING })

  axios.get(`api/todos/${id}`, tokenConfig(getState))
    .then(res => dispatch({
      type: TODOS_LOADED,
      payload: res.data
    }))
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    )
}

export const addTodo = todo => (dispatch, getState) => {
  axios
    .post('api/todos/create', todo, tokenConfig(getState))
    .then(res =>
      dispatch({
        type: ADD_TODO,
        payload: res.data
      }))
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    )
}

export const deleteTodo = id => (dispatch, getState) => {
  axios
    .delete(`api/todos/${id}`, tokenConfig(getState))
    .then(res =>
      dispatch({
        type: DELETE_TODO,
        payload: id
      }))
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    )
}

// export const deleteTodos = (name) => (dispatch, getState) => {
//   axios
//     .delete(`api/todos/all/${name}`, tokenConfig(getState))
//     .then(res =>
//       dispatch({
//         type: DELETE_TODOS,
//         payload: name
//       }))
//     .catch(err =>
//       dispatch(returnErrors(err.response.data, err.response.status))
//     )
// }

export const toggleTodo = id => (dispatch) => {
  axios
    .post(`api/todos/update/${id}`)
    .then(res =>
      dispatch({
        type: 'TOGGLE_TODO',
        payload: res.data
      }))
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    )
}
