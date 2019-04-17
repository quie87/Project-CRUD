import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedInLinks = () => {
  return (
    <ul className='menu'>
      <li><NavLink to='/'>Log out</NavLink></li>
    </ul>
  )
}

export default SignedInLinks
