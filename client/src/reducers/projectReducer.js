import { GET_PROJECTS, ADD_PROJECT, DELETE_PROJECT, ACTIVE_PROJECT } from '../actions/types'

const initialState = {
  projects: [],
  isActive: {
    projectName: '',
    active: false
  }
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
        projects: [...state.projects, action.payload]
      }
    case DELETE_PROJECT:
      return {
        ...state,
        projects: state.projects.filter(project => project._id !== action.payload)
      }
    case ACTIVE_PROJECT:
      return {
        ...state,
        isActive: {
          projectName: action.payload,
          active: true
        }
      }
    default:
      return state
  }
}
