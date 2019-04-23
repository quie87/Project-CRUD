import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { loadUser } from './actions/authActions'

import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Dashboard from './components/dashboard/Dashboard'
import ProjectPlanner from './components/Projects/ProjectPlanner'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import 'bootstrap/dist/css/bootstrap.min.css'

import './App.css'

class App extends Component {
  componentDidMount () {
    // store.dispatch(loadUser())
    this.props.dispatch(loadUser())
  }

  render () {
    return (
      <BrowserRouter>
        <div className='App'>
          <div className='container'>
            <Header />
            <Switch>
              <Route exact path='/' component={Dashboard} />
              <Route path='/signin' component={SignIn} />
              <Route path='/signUp' component={SignUp} />
            </Switch>
            <Footer />
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
