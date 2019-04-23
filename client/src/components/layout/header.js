import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'

class Header extends Component {
  render () {
    const { isAuthenticated } = this.props.auth
    return (
      <header style={headerStyle}>
        <h3>
          <li><NavLink to='/'>What to do?</NavLink></li>
        </h3>
        { isAuthenticated ? <SignedInLinks /> : <SignedOutLinks />}
      </header>
    )
  }
}

const headerStyle = {
  backgroundColor: '#333',
  color: '#fff',
  padding: '10px'
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(
  mapStateToProps,
  null
)(Header)
