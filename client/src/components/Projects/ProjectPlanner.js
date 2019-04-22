import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getProjects, deleteProject } from '../../actions/projectActions'

import Projects from './Projects'
import AddProject from './AddProject'

class ProjectPlanner extends Component {
  componentDidMount () {
    this.props.getProjects()
  }

  onDeleteClick = id => {
    this.props.deleteProject(id)
  }

  render () {
    const { projects } = this.props.project

    return (
      <div className='container'>
        <div className='miniContainer'>
        <h1>Hej</h1>
          {/* <AddProject />
          <Projects /> */}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  project: state.project
})

export default connect(mapStateToProps, { getProjects, deleteProject })(ProjectPlanner)
