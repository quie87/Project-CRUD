import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout } from '../../actions/authActions'

class Logout extends Component {
  render () {
    return (
      <ul className='menu'>
        <li><NavLink onClick={this.props.logout} to='/'>Log out</NavLink></li>
      </ul>
    )
  }
}

export default connect(
  null,
  { logout }
)(Logout)
