import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedInLinks = () => {
  return (
    <ul className='menu'>
      <li><NavLink to='/'>Sign up</NavLink></li>
      <li><NavLink to='/'>Log in</NavLink></li>
    </ul>
  )
}

export default SignedInLinks
