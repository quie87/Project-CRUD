import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class ProjectItem extends Component {
  render () {
    const { _id, name } = this.props.project

    return (
      <div>
        <button className='project-btn' onClick={this.props.getProjectTodos.bind(this, name)}> { name } </button>
        <button className='remove-btn' onClick={this.props.onDeleteProject.bind(this, _id)} >x</button>
      </div>
    )
  }
}

ProjectItem.propTypes = {
  project: PropTypes.object.isRequired,
  onDeleteProject: PropTypes.func.isRequired
}

export default ProjectItem
