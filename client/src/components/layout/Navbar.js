import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { Navbar as Navbars } from 'react-materialize'

class Navbar extends Component {
  render () {
    const { isAuthenticated } = this.props.auth
    return (
      <Navbars brand={<Link to='/'>Project Planner</Link>} alignLinks='right' className='Navbar #ff7043 deep-orange lighten-1' >
        { isAuthenticated ? <SignedInLinks /> : <SignedOutLinks />}
      </Navbars>
      // <Navbars brand={<Link to='/'>Project Planner</Link>} alignLinks='right' className='Navbar #ff7043 deep-orange lighten-1'>
      //   <Link to='/signUp'>signUp</Link>
      //   <Link to='/signIn'>signIp</Link>
      // </Navbars>
    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(
  mapStateToProps,
  null
)(Navbar)
