import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getProjects, deleteProject } from '../../actions/projectActions'
import { getTodos } from '../../actions/todoActions'

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

  onDeleteClick = id => {
    this.props.deleteProject(id)
  }

  componentDidUpdate() {
    console.log(this.state)
  }

  getTodos = () => {
    const { user } = this.props.auth
    console.log('user: ' + user)

    this.setState({ showTodos: !this.state.showTodos })
    this.props.getTodos(user._id)
  }

  render () {
    const { projects } = this.props.project

    return (
      <div className='container'>
        <div className='miniContainer'>
        <h1>Projects</h1>
        <div>
          <AddProject />
          <Projects projects={projects} onDeleteClick={this.onDeleteClick} user={this.props.auth.user} getTodos={this.props.getTodos} />
          { this.state.showTodos ? <AddTodo />  : <div>No todos</div> }
        </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  project: state.project,
  auth: state.auth
})

export default connect(mapStateToProps, { getProjects, deleteProject, getTodos })(ProjectPlanner)
