import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <div className='container'>
        <Link to='/'>What to do?</Link>
      </div>
    </nav>
  )
}

export default Navbar
