import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
// import SignedInLinks from './SignedInLinks'
// import SignedOutLinks from './SignedOutLinks'
// import { Navbar as Navbars } from 'react-materialize'
import { logout } from '../../actions/authActions'

class Navbar extends Component {
  render () {
    const { isAuthenticated } = this.props.auth
    return (
    // <Navbars brand={<Link to='/'>Project Planner</Link>} alignLinks='right' className='Navbar #ff7043 deep-orange lighten-1' >
    //   { isAuthenticated ? <SignedInLinks /> : <SignedOutLinks />}
    // </Navbars>
      <div>
        <nav>
          <div className='nav-wrapper #ff7043 deep-orange lighten-1'>
            <a href='/' className='brand-logo'>Project Planner</a>
            <a href='#!' data-target='mobile-nav' className='sidenav-trigger'><i className='material-icons'>menu</i></a>
            {isAuthenticated
              ? <ul className='right hide-on-med-and-down'>
                <li><a href='/' onClick={this.props.logout}>Log out</a></li>
              </ul>
              : <ul className='right hide-on-med-and-down'>
                <li><a href='signUp'>SignUp</a></li>
                <li><a href='signIn'>SignIn</a></li>
              </ul>
            }
          </div>
        </nav>

        {isAuthenticated
          ? <ul className='sidenav' id='mobile-nav'>
            <li><a href='/' onClick={this.props.logout}>Log out</a></li>
          </ul>
          : <ul className='sidenav' id='mobile-nav'>
            <li><a href='signUp'>SignUp</a></li>
            <li><a href='signIn'>SignIn</a></li>
          </ul>
        }
      </div>

    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(
  mapStateToProps,
  { logout }
)(Navbar)
