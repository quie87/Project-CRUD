import React from 'react'
import { NavItem } from 'react-materialize'

/**
 * Renders specified links to user that is not Logged in
 */
const SignedOutLinks = () => {
  return (
    <ul className='left'>
      <li><NavItem href='signUp'>Sign up</NavItem></li>
      <li><NavItem href='signIn'>Sign in</NavItem></li>
    </ul>
  )
}

export default SignedOutLinks
