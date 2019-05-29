import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers/rootReducer'

const initialState = {}
// array of middlewares
const middleware = [ thunk ]

// Creates store and make it possible to use the Redux devtools in the browser
const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    process.env.NODE_ENV !== 'production' && reduxDevTools
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  ))

export default store
