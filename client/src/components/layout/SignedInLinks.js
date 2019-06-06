import React, { Component } from 'react'
import { connect } from 'react-redux'
import { logout } from '../../actions/authActions'
import PropTypes from 'prop-types'
import { NavItem } from 'react-materialize'

/**
 * Renders specified link to user that is Logged in
 */
class Logout extends Component {
  render () {
    return (
      <ul className='left'>
        <li><NavItem href='/' onClick={this.props.logout}>Log out</NavItem></li>
      </ul>
    )
  }
}

Logout.propTypes = {
  logout: PropTypes.func.isRequired
}

export default connect(
  null,
  { logout }
)(Logout)
