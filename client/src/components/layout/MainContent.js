import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getProjects, deleteProject, isActive } from '../../actions/projectActions'
import { getTodos, deleteTodo, toggleTodo } from '../../actions/todoActions'
import PropTypes from 'prop-types'

import Projects from '../Projects/Projects'
import AddProject from '../Projects/AddProject'
import Todos from '../Todos/Todos'
import AddTodo from '../Todos/AddTodo'

/**
 * Contains the Main content for a logged in user. Shows the users projects/todos
 * Also contains methods needed to interact with them.
 */
class MainContent extends Component {
  state = {
		showTodos: false
  }

  componentDidMount () {
    const { user } = this.props.auth
		this.props.getProjects(user._id)
		this.props.getTodos(user._id)
	}

  onDeleteProject = (id, parentName) => {
		const { todos } = this.props.todo

		todos.filter(todo => todo.parentName === parentName )
			.map(todo => this.props.deleteTodo(todo._id))

    this.props.deleteProject(id)
  }

  onDeleteTodo = id => {
    this.props.deleteTodo(id)
  }

  showProjectTodos = (parentName) => {
		this.setState({ showTodos: true})
		this.props.isActive(parentName)
  }

  toggleComplete = (id) => {
    this.props.toggleTodo(id)
  }

  render () {
		const { projects, isActive } = this.props.project
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
                <Projects projects={projects} isActive={isActive} onDeleteProject={this.onDeleteProject}
                  showProjectTodos={this.showProjectTodos} />
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

MainContent.propTypes = {
  getProjects: PropTypes.func.isRequired,
  deleteProject: PropTypes.func.isRequired,
  getTodos: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  toggleTodo: PropTypes.func.isRequired,
	isActive: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  project: state.project,
  todo: state.todo,
  auth: state.auth
})

export default connect(mapStateToProps, { 
  getProjects, deleteProject, getTodos, deleteTodo, isActive, toggleTodo
})(MainContent)
