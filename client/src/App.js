import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { loadUser } from './actions/authActions'

import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import './App.css'

class App extends Component {
  componentDidMount () {
    this.props.dispatch(loadUser())
  }

  render () {
    return (
      <BrowserRouter>
        <div className='App'>
          <div className='container'>
            <Navbar />
            <Switch>
              <Route exact path='/' component={Dashboard} />
              <Route path='/signin' component={SignIn} />
              <Route path='/signUp' component={SignUp} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    )
  }
}

const mapStateToProps = state => ({
  store: state,
  auth: state.auth
})

export default connect(mapStateToProps, null)(App)
