import React, { Component } from 'react'
import { connect } from 'react-redux'

import Index from './LandingPage'
import ProjectPlanner from '../Projects/ProjectPlanner'

class Dashboard extends Component {
  render () {
    const { isAuthenticated } = this.props.auth
    return (
      <div className='container'>
        { isAuthenticated ? <ProjectPlanner /> : <Index />}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps, null)(Dashboard)
