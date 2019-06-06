import React, { Component } from 'react'
import ProjectItem from './ProjectItem'
import PropTypes from 'prop-types'

/**
 * Parent component to projekt items. Renders all projects given from redux store
 */
class Projects extends Component {
  render () {
    let projectArr = this.props.projects.map(project => (
      <ProjectItem key={project._id} project={project} isActive={this.props.isActive} onDeleteProject={this.props.onDeleteProject}
        getProjectTodos={this.props.getProjectTodos} />
    )).sort(function (a, b) { return Date.a - Date.b })

    return (
      projectArr
    )
  }
}

// PropTypes
Projects.propTypes = {
  projects: PropTypes.array.isRequired,
  onDeleteProject: PropTypes.func.isRequired,
  getProjectTodos: PropTypes.func.isRequired
}

export default Projects
