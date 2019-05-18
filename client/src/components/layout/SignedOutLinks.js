import React from 'react'
import { NavLink } from 'react-router-dom'
import { NavItem } from 'react-materialize'

const SignedOutLinks = () => {
  return (
    // <ul className='right'>
    //   <li><NavLink to='/signUp'>Sign up</NavLink></li>
    //   <li><NavLink to='/signIn'>Log in</NavLink></li>
    // </ul>
    <ul className='left'>
      <li><NavItem href='signUp'>Sign up</NavItem></li>
      <li><NavItem href='signIn'>Sign in</NavItem></li>
    </ul>
  )
}

export default SignedOutLinks
