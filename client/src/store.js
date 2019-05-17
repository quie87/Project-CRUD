import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers/rootReducer'

const initialState = {}
let reduxDev = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// array of middlewares
const middleware = [ thunk ]

// Creates store and make it possible to use the Redux devtools in the browser

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    process.env.NODE_ENV !== 'production' && reduxDev
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  ))

export default store
