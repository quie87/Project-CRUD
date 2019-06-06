import React, { Component } from 'react'
import TodoItem from './TodoItem'
import PropTypes from 'prop-types'

/**
 * Parent component to TodoItem. Renders all todos given from redux store
 */
class Todos extends Component {
  render () {
    let todosArr = this.props.todos.map(todo => (
      <TodoItem key={todo._id} todo={todo} toggleComplete={this.props.toggleComplete} onDeleteTodo={this.props.onDeleteTodo} />
    )).sort(function (a, b) { return Date.a - Date.b })

    return (
      todosArr
    )
  }
}

// PropTypes
Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  toggleComplete: PropTypes.func.isRequired,
  onDeleteTodo: PropTypes.func.isRequired
}

export default Todos
