import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { Navbar } from 'react-materialize'

class Header extends Component {
  render () {
    const { isAuthenticated } = this.props.auth
    return (
      <Navbar brand={<NavLink to='/'>What to do?</NavLink>} alignLinks='right' className='Navbar'>
        { isAuthenticated ? <SignedInLinks /> : <SignedOutLinks />}
      </Navbar>
    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(
  mapStateToProps,
  null
)(Header)
