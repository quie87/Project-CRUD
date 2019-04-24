import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getTodos, deleteTodo } from '../../actions/todoActions'

import Todos from './Todos'
import AddTodo from './AddTodo'

class TodoProject extends Component {
  componentDidMount () {
    this.props.getTodos()
  }

  onDeleteClick = id => {
    this.props.deleteTodo(id)
  }

  toggleComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if (todo._id === id) {
        todo.completed = !todo.completed
      }
      return todo
    }) })
  }

  render () {
    const { todos } = this.props.todo

    return (
      <div>
          <AddTodo />
          <Todos todos={todos} toggleComplete={this.toggleComplete} onDeleteClick={this.onDeleteClick} />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  todo: state.todo
})

export default connect(mapStateToProps, { getTodos, deleteTodo })(TodoProject)
// export default TodoProject
