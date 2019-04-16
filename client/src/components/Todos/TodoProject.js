import React, { Component } from 'react'
import Todos from './Todos'
import AddTodo from './AddTodo'
import axios from 'axios'


class TodoProject extends Component {
  state = {
    todos: []
  }

  componentDidMount () {
    axios.get('api/items')
    .then(res => this.setState({ todos: res.data}))
  }

  toggleComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if (todo._id === id) {
        todo.completed = !todo.completed
      }
      return todo
    }) })
  }

  deleteTodo = (id) => {
    axios.delete(`api/items/${id}`)
    .then(res => this.setState({ todos: [...this.state.todos.filter(todo => todo._id !== id)] }))
  }

  addTodo = (title) => {
    axios.post('api/items', {
      title: title,
      completed: false
    })
    .then(res => this.setState({ todos: [...this.state.todos, res.data] }) )
  }

  render () {
    return (
        <div className="container">
          <div className="miniContainer">
            <AddTodo addTodo={this.addTodo}/>
            <Todos todos={this.state.todos} toggleComplete={this.toggleComplete} deleteTodo={this.deleteTodo} />
          </div>
        </div>
    )
  }
}

export default TodoProject
