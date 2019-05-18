import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { Navbar } from 'react-materialize'
// import { logout } from '../../actions/authActions'

class Header extends Component {
  render () {
    const { isAuthenticated } = this.props.auth

    return (
      <Navbar brand={<Link to='/'>Project Planner</Link>} alignLinks='right' className='Navbar #ff7043 deep-orange lighten-1' >
        { isAuthenticated ? <SignedInLinks /> : <SignedOutLinks />}
      </Navbar>

    // <div>
    //   <nav>
    //     <div className='nav-wrapper #ff7043 deep-orange lighten-1'>
    //       <a href='/' className='brand-logo'>Project Planner</a>
    //       <a href='#!' data-target='nav-mobile' className='sidenav-trigger'><i className='material-icons'>menu</i></a>
    //       {isAuthenticated
    //         ? <ul className='right hide-on-med-and-down'>
    //           <li><a href='/' onClick={this.props.logout}>Log out</a></li>
    //         </ul>
    //         : <ul className='right hide-on-med-and-down'>
    //           <li><a href='signUp'>Sign up</a></li>
    //           <li><a href='signIn'>Sign in</a></li>
    //         </ul>
    //       }
    //     </div>
    //   </nav>

    //   {isAuthenticated
    //     ? <ul className='sidenav open' id='nav-mobile'>
    //       <li><a href='/' onClick={this.props.logout}>Log out</a></li>
    //     </ul>
    //     : <ul className='sidenav' id='mobile-nav'>
    //       <li><a href='signUp'>Sign up</a></li>
    //       <li><a href='signIn'>Sign in</a></li>
    //     </ul>
    //   }
    // </div>
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
