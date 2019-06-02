import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getProjects, deleteProject, isActive } from '../../actions/projectActions'
import { getTodos, deleteTodo, toggleTodo, deleteTodos } from '../../actions/todoActions'
import { loadUser } from '../../actions/authActions'
import PropTypes from 'prop-types'

import Projects from '../Projects/Projects'
import AddProject from '../Projects/AddProject'
import Todos from '../Todos/Todos'
import AddTodo from '../Todos/AddTodo'

class Main extends Component {
  state = {
    showTodos: false
  }

  componentDidMount () {
    const { user } = this.props.auth
    this.props.getProjects(user._id)
  }
  
  onDeleteProject = (id, name) => {
    this.props.deleteTodos(name)
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
          <div className='projects center'>
            <h3>Projects</h3>
            <div>
              <AddProject />
              <ul className='projectlist'>
                <Projects projects={projects} onDeleteProject={this.onDeleteProject}
                  getProjectTodos={this.getProjectTodos} />
              </ul>
            </div>  
          </div>
        </div>

       {/* Right side */}

        <div className="col s12 m6 l8">
          <div className='todo'>
          <h3 className='center'>Your Tasks</h3>
          { this.state.showTodos ?
            <div>
              <AddTodo />
              <ul className='todolist'>
                <Todos todos={todos} key={todos._id} toggleComplete={this.toggleComplete} onDeleteTodo={this.onDeleteTodo} />
              </ul>
            </div>
              :
            <div className='center' >
              <h5>Select a project to add new task to it <br /> 
              Or add a new project
              </h5>
            </div> 
          }
          </div>
        </div>
      </div>
    )
  }
}

Main.propTypes = {
  getProjects: PropTypes.func.isRequired,
  deleteProject: PropTypes.func.isRequired,
  getTodos: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  isActive: PropTypes.func.isRequired,
  toggleTodo: PropTypes.func.isRequired,
  loadUser: PropTypes.func.isRequired,
  deleteTodos: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  project: state.project,
  todo: state.todo,
  auth: state.auth
})

export default connect(mapStateToProps, { 
  getProjects, deleteProject, getTodos, deleteTodo, isActive, toggleTodo, loadUser, deleteTodos
})(Main)
