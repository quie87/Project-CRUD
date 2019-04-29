import React, { Component } from 'react'
import { connect } from 'react-redux'

import LandingPage from './LandingPage'
import ProjectPlanner from '../Projects/ProjectPlanner'

class Dashboard extends Component {
  render () {
    const { isAuthenticated } = this.props.auth
    const auth = isAuthenticated ? <ProjectPlanner /> : <LandingPage />
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

export default connect(mapStateToProps, null)(Dashboard)
