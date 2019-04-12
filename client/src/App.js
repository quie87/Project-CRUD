import React, { Component } from 'react'
import Header from './components/layout/Header'
import Todos from './components/Todos/Todos'
import AddTodo from './components/Todos/AddTodo'
import axios from 'axios'

import './App.css'

class App extends Component {
  state = {
    todos: []
  }

  componentDidMount () {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
    .then(res => this.setState({ todos: res.data}))
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
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(res => this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] }))
  }

  addTodo = (title) => {
    axios.post('https://jsonplaceholder.typicode.com/todos', {
      title,
      completed: false
    })
    .then(res => this.setState({ todos: [...this.state.todos, res.data] }) )
  }

  render () {
    return (
      <div className='App'>
        <div className="container">
          <Header />
          <AddTodo addTodo={this.addTodo}/>
          <Todos todos={this.state.todos} toggleComplete={this.toggleComplete} deleteTodo={this.deleteTodo} />
        </div>
      </div>
    )
  }
}

export default App
