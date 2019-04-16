import React from 'react'

function Header () {
  return (
    <header style={headerStyle}>
      <h1>TodoList</h1>
      <ol className='menu'>
        <li><a href='/'>Sign up</a></li>
        <li><a href='/'>Logga in</a></li>
      </ol>
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
