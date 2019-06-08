import React, { Component } from 'react'
import { connect } from 'react-redux'
import TodoItem from './TodoItem'
import PropTypes from 'prop-types'

/**
 * Parent component to TodoItem. Renders all todos given from redux store
 */
class Todos extends Component {
  render () {
    const { projectName } = this.props.isActive

    let todosArr = this.props.todos.map(todo => todo.parentName === projectName
      ? (
        <TodoItem key={todo._id} todo={todo} toggleComplete={this.props.toggleComplete} onDeleteTodo={this.props.onDeleteTodo} />
      ) : null)

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

const mapStateToProps = (state) => ({
  isActive: state.project.isActive
})

export default connect(mapStateToProps, null)(Todos)
