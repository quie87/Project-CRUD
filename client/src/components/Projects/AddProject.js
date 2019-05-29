import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addProject } from '../../actions/projectActions'
import PropTypes from 'prop-types'
import { Modal } from 'react-materialize'

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
      <div>
        <div>
          <button href="#modal" className="modal-trigger standard-btn">
            Add New Project   
          </button>
          	<Modal id="modal">
            <form onSubmit={this.onSubmit}>
							<label>Name your project</label>
              <input type='text'
              className='name'
              placeholder='Add project..'
              value={this.state.name}
              onChange={this.onChange}
              />
            <div className='modal-footer'>
              <button href='#modal' type='submit' className='waves-effect waves-green btn-flat modal-close'>Add</button>
            </div>
            </form>
          </Modal>

          </div>
      </div>
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
