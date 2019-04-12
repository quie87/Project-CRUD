import React, { Component } from 'react'
import Header from './components/layout/header'
import Todos from './components/Todos/Todos'
import uuid from 'uuid'

import './App.css'

class App extends Component {
  state = {
    todos: [
      {
        id: uuid(),
        title: 'Get this to work',
        completed: false
      },
      {
        id: uuid(),
        title: 'Make dinner',
        completed: false
      },
      {
        id: uuid(),
        title: 'Go to sleep',
        completed: false
      },
    ]
  }

  toggleComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    }) })
  }
  
  deleteTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] })
  }

  render () {
    return (
      <div className='App'>
        <Header />
        <h1>Hello World!!</h1>
        <Todos todos={this.state.todos} toggleComplete={this.toggleComplete} deleteTodo={this.deleteTodo} />
      </div>
    )
  }
}

export default App
