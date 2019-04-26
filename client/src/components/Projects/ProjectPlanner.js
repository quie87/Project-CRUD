import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getProjects, deleteProject, isActive } from '../../actions/projectActions'
import { getTodos, deleteTodo } from '../../actions/todoActions'

import Projects from './Projects'
import AddProject from './AddProject'
import Todos from '../Todos/Todos'
import AddTodo from '../Todos/AddTodo'

class ProjectPlanner extends Component {
  state = {
    showTodos: false
  }

  componentDidMount () {
    const { user } = this.props.auth

    this.props.getProjects(user._id)
  }

  onDeleteProject = id => {
    this.props.deleteProject(id)
  }

  onDeleteTodo = id => {
    this.props.deleteTodo(id)
  }

  getProjectTodos = (parentName) => {
    this.setState({ showTodos: true})
    this.props.isActive(parentName)
    this.props.getTodos(parentName)
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
    const { projects } = this.props.project
    const { todos } = this.props.todo

    return (
      <div className='container'>
        <div className='row'>
          <div className="col s12 m4 l4">
            <h3 className='center'>Projects</h3>
            <div>
              <AddProject />
              <Projects projects={projects} onDeleteProject={this.onDeleteProject}
                user={this.props.auth.user} getProjectTodos={this.getProjectTodos} />
            </div>
          </div>
          <div className="col s12 m8 l8">
            <div className='todo'>
            <h3 className='center'>Your Todos</h3>
            { this.state.showTodos ?
              <div>
                <AddTodo />
                <Todos todos={todos} toggleComplete={this.toggleComplete} onDeleteTodo={this.onDeleteTodo} />
              </div>
               :
              <div>
                <h5><center>Select a project to add new todos to it <br/> Or add a new project</center></h5>
              </div> }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  project: state.project,
  todo: state.todo,
  auth: state.auth
})

export default connect(mapStateToProps, { getProjects, deleteProject, getTodos, deleteTodo, isActive })(ProjectPlanner)
