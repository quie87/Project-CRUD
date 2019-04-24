import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getProjects, deleteProject } from '../../actions/projectActions'
import { getTodos } from '../../actions/todoActions'

import Projects from './Projects'
import AddProject from './AddProject'
import TodoProject from '../Todos/TodoProject'

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
        <div className='row'>
          <div className="col s12 m4 l4">
            <h3 className='center'>Projects</h3>
            <div>
              <AddProject />
              <Projects projects={projects} onDeleteClick={this.onDeleteClick} user={this.props.auth.user} getTodos={this.props.getTodos} />
            </div>
          </div>
          <div className="col s12 m8 l8">
            <div className='todo'>
            <h3 className='center'>Your Todos</h3>
             <TodoProject />
            {/* { this.state.showTodos ? <TodoProject />  : <div>No todos</div> } */}
            </div>
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
