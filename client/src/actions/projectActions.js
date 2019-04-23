import { GET_PROJECTS, ADD_PROJECT, DELETE_PROJECT } from './types'
import { tokenConfig } from './authActions'
import { returnErrors } from './errorActions'
import axios from 'axios'

export const getProjects = (id) => dispatch => {
  axios.get('api/projects', id)
    .then(res => dispatch({
      type: GET_PROJECTS,
      payload: res.data
    }))
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    )
}

export const addProject = project => (dispatch, getState) => {
  axios
    .post('api/projects', project, tokenConfig(getState))
    .then(res =>
      dispatch({
        type: ADD_PROJECT,
        payload: res.data
      }))
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    )
}

export const deleteProject = id => (dispatch, getState) => {
  axios
    .delete(`api/projects/${id}`, tokenConfig(getState))
    .then(res =>
      dispatch({
        type: DELETE_PROJECT,
        payload: id
      }))
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    )
}
