import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedOutLinks = () => {
  return (
    <ul className='menu'>
      <li><NavLink to='/signUp'>Sign up</NavLink></li>
      <li><NavLink to='/signIn'>Log in</NavLink></li>
    </ul>
  )
}

export default SignedOutLinks
