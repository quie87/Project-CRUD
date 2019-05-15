import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class ProjectItem extends Component {
  render () {
    const { _id, name } = this.props.project

    return (
      <div>
        <li className='flex-container'>
          <button className='project-btn flex-1' onClick={this.props.getProjectTodos.bind(this, name)}> { name } </button>
          <button className='remove-btn flex-2' onClick={this.props.onDeleteProject.bind(this, _id, name)} ><i className='fa fa-trash' /></button>
        </li>
      </div>
    )
  }
}

ProjectItem.propTypes = {
  project: PropTypes.object.isRequired,
  onDeleteProject: PropTypes.func.isRequired
}

export default ProjectItem
