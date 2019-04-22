import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import { loadUser } from './actions/authActions'

import Header from './components/layout/Header'
import Dashboard from './components/dashboard/Dashboard'
import ProjectPlanner from './components/Projects/ProjectPlanner'
import TodoProject from './components/Todos/TodoProject'
import Footer from './components/layout/Footer'
// import Main from './components/layout/Main'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import 'bootstrap/dist/css/bootstrap.min.css'

import './App.css'

class App extends Component {
  componentDidMount () {
    store.dispatch(loadUser())
  }

  render () {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className='App'>
            <div className='container'>
              <Header />
              <Footer />
            </div>
            <Switch>
              <Route exact path='/' component={Dashboard} />
              <Route path='/signin' component={SignIn} />
              <Route path='/signUp' component={SignUp} />
              <Route path='/todoproject' component={TodoProject} />
              <Route path='/projectplanner' component={ProjectPlanner} />
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App
