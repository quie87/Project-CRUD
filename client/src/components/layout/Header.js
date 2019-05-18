import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { Navbar } from 'react-materialize'
import M from 'materialize-css'

class Header extends Component {
  render () {
    const { isAuthenticated } = this.props.auth

    return (
      <Navbar brand={<Link to='/'>Project Planner</Link>} alignLinks='right' className='Navbar #ff7043 deep-orange lighten-1' >
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
