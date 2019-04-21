import { GET_TODOS, ADD_TODO, DELETE_TODO } from './types'
import axios from 'axios'

export const getTodos = () => dispatch => {
  axios.get('api/items')
    .then(res => dispatch({
      type: GET_TODOS,
      payload: res.data
    }))
}

export const addTodo = todo => {
  return {
    type: ADD_TODO,
    payload: todo
  }
}
// export const addTodo = (todo) => dispatch => {
//   axios.post('api/items', {
//     title: todo.title
//   })
//     .then(res => dispatch({
//       type: ADD_TODO,
//       payload: res.data
//     }))
// }

export const deleteTodo = (id) => {
  // axios.delete(`api/items/${id}`, {
  //   headers: {
  //     auth: 'token'
  //   }
  // })
  //   .then(res => dispatch({
  //     type: DELETE_TODO,
  //     payload: res.data
  //   }))

  return {
    type: DELETE_TODO,
    payload: id
  }
}
