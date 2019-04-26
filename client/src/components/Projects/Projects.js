import React, { Component } from 'react'
import ProjectItem from './ProjectItem'
import PropTypes from 'prop-types'

class Projects extends Component {
  render () {
    return this.props.projects.map((project) => (
      <ProjectItem key={project._id} project={project} onDeleteProject={this.props.onDeleteProject}
        getProjectTodos={this.props.getProjectTodos} />
    ))
  }
}

// PropTypes
Projects.propTypes = {
  projects: PropTypes.array.isRequired,
  onDeleteProject: PropTypes.func.isRequired
}

export default Projects
