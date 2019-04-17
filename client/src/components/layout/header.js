import React from 'react'
import SignedIn from './SignedInLinks'
import SignedOut from './SignedOutLinks'

function Header () {
  return (
    <header style={headerStyle}>
      <h1>TodoList</h1>
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
