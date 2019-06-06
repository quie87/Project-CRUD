import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

/**
 * Childcomponent to Projects
 */
class ProjectItem extends Component {
  render () {
    const { _id, name } = this.props.project
    const { isActive } = this.props

    let ifIsActive = Boolean

    if (isActive.projectName === name) {
      ifIsActive = true
    } else {
      ifIsActive = false
    }

    return (
      <div>
        { ifIsActive
          ? <li className='flex-container'>
            <button className='project-btn flex-1' style={style} onClick={this.props.getProjectTodos.bind(this, name)}> { name } </button>
            <button className='remove-btn flex-2' onClick={this.props.onDeleteProject.bind(this, _id, name)} ><i className='fa fa-trash' /></button>
          </li>
          : <li className='flex-container'>
            <button className='project-btn flex-1' onClick={this.props.getProjectTodos.bind(this, name)}> { name } </button>
            <button className='remove-btn flex-2' onClick={this.props.onDeleteProject.bind(this, _id, name)} ><i className='fa fa-trash' /></button>
          </li>
        }
      </div>
    )
  }
}

const style = {
  borderLeft: '1em solid rgb(255,112,67)',
  borderRadius: '20px'
}

ProjectItem.propTypes = {
  project: PropTypes.object.isRequired,
  onDeleteProject: PropTypes.func.isRequired,
  getProjectTodos: PropTypes.func.isRequired,
  isActive: PropTypes.object
}

export default connect(null, null)(ProjectItem)
