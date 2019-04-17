import React from 'react'

function Footer () {
  return (
    <footer style={headerStyle} className='footer'>
      <p>Copyright &copy; KtrWebDevelopment 2019</p>
    </footer>
  )
}

const headerStyle = {
  backgroundColor: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '10px'
}

export default Footer
