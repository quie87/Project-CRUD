import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getTodos, addTodo, deleteTodo } from '../../actions/todoActions'

import Todos from './Todos'
import AddTodo from './AddTodo'

class TodoProject extends Component {
  componentDidMount () {
    this.props.getTodos()
  }

  onAddTodo = (title) => {
    this.props.addTodo({
      title,
      completed: false
    })
  }

  onDeleteClick = (id) => {
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
      <div className='container'>
        <div className='miniContainer'>
          <AddTodo onAddTodo={this.onAddTodo} />
          <Todos todos={todos} toggleComplete={this.toggleComplete} onDeleteClick={this.onDeleteClick} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  todo: state.todo
})

export default connect(mapStateToProps, { getTodos, addTodo, deleteTodo })(TodoProject)
// export default TodoProject
