import React, { Component } from 'react'
import ProjectItem from './ProjectItem'
import PropTypes from 'prop-types'

class Projects extends Component {
  render () {
    return this.props.projects.map((project) => (
      <ProjectItem key={project._id} project={project} onDeleteClick={this.props.onDeleteClick} getTodos={this.props.getTodos} />
    ))
  }
}

// PropTypes
Projects.propTypes = {
  projects: PropTypes.array.isRequired,
  onDeleteClick: PropTypes.func.isRequired
}

export default Projects
