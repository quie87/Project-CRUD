import React from 'react'
import { NavItem } from 'react-materialize'

const SignedOutLinks = () => {
  return (
    <ul className='left'>
      <li><NavItem href='signUp'>Sign up</NavItem></li>
      <li><NavItem href='signIn'>Sign in</NavItem></li>
    </ul>
  )
}

export default SignedOutLinks
