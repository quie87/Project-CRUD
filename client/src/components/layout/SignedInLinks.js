import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout } from '../../actions/authActions'
import PropTypes from 'prop-types'
import { NavItem } from 'react-materialize'

class Logout extends Component {
  render () {
    return (
      // <ul>
      //   <NavLink to='#' onClick={this.props.logout}>Log out</NavLink>
      // </ul>
      <ul>
        <NavItem href='/' onClick={this.props.logout}>Log out</NavItem>
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
