import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout } from '../../actions/authActions'
import PropTypes from 'prop-types'

class Logout extends Component {
  render () {
    return (
      <NavLink to='#' onClick={this.props.logout}>Log out</NavLink>
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
