import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Header from './components/layout/Header'
import Dashboard from './components/dashboard/Dashboard'
import TodoProject from './components/Todos/TodoProject'
import Footer from './components/layout/Footer'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
// import 'bootstrap/dist/css/bootstrap.min.css'

import './App.css'

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div className='App'>
          <div className='container'>
            <Header />
            <Switch>
              <Route exact path='/' component={Dashboard} />
              <Route path='/todoproject' component={TodoProject} />
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

export default App
