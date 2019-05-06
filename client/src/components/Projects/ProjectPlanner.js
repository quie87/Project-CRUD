import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getProjects, deleteProject, isActive } from '../../actions/projectActions'
import { getTodos, deleteTodo, toggleTodo } from '../../actions/todoActions'
import { Modal, Button } from 'react-materialize'

import Projects from './Projects'
import AddProject from './AddProject'
import Todos from '../Todos/Todos'
import AddTodo from '../Todos/AddTodo'

class ProjectPlanner extends Component {
  state = {
    showTodos: false,
    todos: {}
  }

  componentDidMount () {
    const { user } = this.props.auth

    this.props.getProjects(user._id)
    this.props.getTodos(user._id)
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
    this.props.toggleTodo(id)
  }

  render () {
    const { projects } = this.props.project
    const { todos } = this.props.todo

    return (
      // Left side
      <div className='row'>
        <div className="col s12 m6 l4">
          <div className='projects'>
            <h3>Projects</h3>
            <div>
              <AddProject />
              <ul className='projectlist'>
                <Projects projects={projects} onDeleteProject={this.onDeleteProject}
                  user={this.props.auth.user} getProjectTodos={this.getProjectTodos} />
              </ul>
            </div>  
          </div>
        </div>

       {/* Right side */}

        <div className="col s12 m6 l8">
          <div className='todo'>
          <h3 className='center'>Your Todos</h3>
          { this.state.showTodos ?
            <div>
              <AddTodo />
              <ul className='todolist'>
                <Todos todos={todos} key={todos._id} toggleComplete={this.toggleComplete} onDeleteTodo={this.onDeleteTodo} />
              </ul>
            </div>
              :
            <div>
              <h5><center>Select a project to add new todos to it <br/> Or add a new project</center></h5>
            </div> }
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

export default connect(mapStateToProps, { 
  getProjects, deleteProject, getTodos, deleteTodo, isActive, toggleTodo
})(ProjectPlanner)
