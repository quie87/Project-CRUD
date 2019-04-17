import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedOutLinks = () => {
  return (
    <ul className='menu'>
      <li><NavLink to='/'>Log out</NavLink></li>
    </ul>
  )
}

export default SignedOutLinks
