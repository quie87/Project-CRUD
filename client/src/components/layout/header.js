import React from 'react'
import { NavLink } from 'react-router-dom'
import SignedIn from './SignedInLinks'
import SignedOut from './SignedOutLinks'

function Header () {
  return (
    <header style={headerStyle}>
      <h1>
        <li><NavLink to='/'>TodoList</NavLink></li>
      </h1>
      <SignedIn />
      <SignedOut />
    </header>
  )
}

const headerStyle = {
  backgroundColor: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '10px'
}

export default Header
