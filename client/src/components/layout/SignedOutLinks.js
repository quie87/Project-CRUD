import React from 'react'
import { NavLink } from 'react-router-dom'
import { NavItem } from 'react-materialize'

const SignedOutLinks = () => {
  return (
    // <ul className='right'>
    //   <li><NavLink to='/signUp'>Sign up</NavLink></li>
    //   <li><NavLink to='/signIn'>Log in</NavLink></li>
    // </ul>
    <ul className='right'>
      <NavItem href='signUp'>Sign up</NavItem>
      <NavItem href='signIn'>Sign in</NavItem>
    </ul>
  )
}

export default SignedOutLinks
