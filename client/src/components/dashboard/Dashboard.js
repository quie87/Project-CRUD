import React, { Component } from 'react'
import { connect } from 'react-redux'

import LandingPage from '../layout/LandingPage'
import MainContent from '../layout/MainContent'

class Dashboard extends Component {
  render () {
    const { isAuthenticated } = this.props.auth
    const auth = isAuthenticated ? <MainContent /> : <LandingPage />
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
