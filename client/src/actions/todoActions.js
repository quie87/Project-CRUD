import { GET_TODOS, ADD_TODO, DELETE_TODO, DELETE_TODOS } from './types'
import { tokenConfig } from './authActions'
import { returnErrors } from './errorActions'
import axios from 'axios'

export const getTodos = parentName => (dispatch, getState) => {
  axios.get(`api/todos/${parentName}`, tokenConfig(getState))
    .then(res => dispatch({
      type: GET_TODOS,
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

export const deleteTodos = parentName => (dispatch, getState) => {
  axios
    .delete(`api/todos/${parentName}`, tokenConfig(getState))
    .then(res =>
      dispatch({
        type: DELETE_TODOS,
        payload: parentName
      }))
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    )
}

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
