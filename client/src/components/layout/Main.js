import React, { Component } from 'react'
import { connect } from 'react-redux'

import Dashboard from './components/dashboard/Dashboard'
import TodoProject from './components/Todos/TodoProject'

class Main extends Component {
  render () {
    const isAuthenticated = this.props.auth
    const auth = isAuthenticated ? <TodoProject /> : <Dashboard />

    return (
      <div>
        { auth }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps, null)(Main)
