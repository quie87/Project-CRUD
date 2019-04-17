import React, { Component } from 'react'
import Header from './components/layout/Header'
import TodoProject from './components/Todos/TodoProject'
// import Navbar from './components/layout/Navbar'

import './App.css'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <div className='container'>
          <Header />
          <TodoProject />
        </div>
      </div>
    )
  }
}

export default App
