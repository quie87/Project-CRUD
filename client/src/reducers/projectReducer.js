import { GET_PROJECTS, ADD_PROJECT, DELETE_PROJECT } from '../actions/types'

const initialState = {
  projects: []
}

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_PROJECTS:
      return {
        ...state,
        projects: action.payload
      }
    case ADD_PROJECT:
      return {
        ...state,
        projects: [action.payload, ...state.projects]
      }
    case DELETE_PROJECT:
      return {
        ...state,
        projects: state.projects.filter(project => project._id !== action.payload)
      }
    default:
      return state
  }
}
