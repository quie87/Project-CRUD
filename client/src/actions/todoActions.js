import { GET_TODOS, ADD_TODO, DELETE_TODO } from './types'
import { tokenConfig } from './authActions'
import { returnErrors } from './errorActions'
import axios from 'axios'

export const getTodos = id => (dispatch, getState) => {
  axios.get(`api/todos/${id}`, tokenConfig(getState))
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
    .post('api/todos', todo, tokenConfig(getState))
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
