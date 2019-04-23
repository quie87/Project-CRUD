import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout } from '../../actions/authActions'
import PropTypes from 'prop-types'

class Logout extends Component {
  static propTypes = {
    logout: PropTypes.func.isRequired
  }

  render () {
    return (
      <ul>
        <li><NavLink onClick={this.props.logout} to='/'>Log out</NavLink></li>
      </ul>
    )
  }
}

export default connect(
  null,
  { logout }
)(Logout)
