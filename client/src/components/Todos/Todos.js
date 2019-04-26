import React, { Component } from 'react'
import TodoItem from './TodoItem'
import PropTypes from 'prop-types'

class Todos extends Component {
  render () {
    return this.props.todos.map((todo) => (
      <TodoItem key={todo._id} todo={todo} toggleComplete={this.props.toggleComplete} onDeleteTodo={this.props.onDeleteTodo} />
    ))
  }
}

// PropTypes
Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  toggleComplete: PropTypes.func.isRequired,
  onDeleteTodo: PropTypes.func.isRequired
}

export default Todos
