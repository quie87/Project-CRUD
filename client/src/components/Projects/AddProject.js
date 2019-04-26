import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addProject } from '../../actions/projectActions'
import PropTypes from 'prop-types'

export class AddProject extends Component {
	state = {
		name: ''
  }

	onSubmit = (e) => {
    e.preventDefault()

    const newProject = {
			name: this.state.name,
			userId: this.props.auth.user._id
    }

    this.props.addProject(newProject)

		this.setState({ name: '' })
	}

	onChange = (e) => this.setState({ name: e.target.value })

  render () {
    return (
      <form onSubmit={this.onSubmit} style={{ display: 'flex' }}>
        <input type='text'
          className='name'
          style={{ flex: '10', padding: '5px' }}
					placeholder='Add project ...'
					value={this.state.name}
					onChange={this.onChange}
        />
        <input
          type='submit'
          value='Add New Project'
          className='btn'
					style={{ flex: 2 }}
        />
      </form>
    )
  }
}

// PropTypes
AddProject.propTypes = {
  addProject: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
	project: state.project,
	auth: state.auth
})

export default connect(mapStateToProps, { addProject })(AddProject)
