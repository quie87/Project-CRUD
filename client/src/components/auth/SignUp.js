import React, { Component } from 'react'
import { connect } from 'react-redux'
import { register } from '../../actions/authActions'
import { returnErrors } from '../../actions/errorActions';
import { REGISTER_FAIL } from '../../actions/types';
import PropTypes from 'prop-types'
import Notification from '../notifications/Notifications'

/**
 * Component that render a regisitration form
 */
class SignUp extends Component {
	state = {
		name: '',
		email: '',
		password: '',
		msg: null
	}

	componentDidUpdate(prevProps) {
		const { error, isAuthenticated } = this.props
		if (error !== prevProps.error) {
			//Check for register error
			if (error.status === 400) {
				this.setState({ msg: error.msg })
			} else {
				this.setState({ msg: null })
			}
		}
		if(isAuthenticated) {
			this.props.history.push('/')
		}
	}

	handleChange = e => {
		this.setState({ [e.target.id]: e.target.value })
	}

	handleSubmit = e => {
		e.preventDefault()

		const { name, email, password } = this.state

		// Create user object
		const newUser = {
			name,
			email,
			password
		}

		// Attemt to register
		let regExp = /^(?=.*\d).{8,20}$/

		if (!regExp.test(password)) {
			this.props.returnErrors('Password to weak: Enter a password 8 digits long and include at least one numeric digit.', 400, REGISTER_FAIL)
		} else {
			this.props.register(newUser)
		}
	}

  render () {
    return (
      <div className='innerWrapper'>
				<form onSubmit={this.handleSubmit} >
				<h4 className='signup'>Sign up</h4>
					{this.state.msg ? <Notification /> : null }
					<div>
						<label>Name</label>
						<input onChange={this.handleChange} type='text' name='name' id='name' placeholder='Name...' required/>
					</div>
					<div>
						<label>Email</label>
						<input onChange={this.handleChange} type='email' name='email' id='email' placeholder='Email...' required />
					</div>
					<div>
						<label>Password</label>
						<input onChange={this.handleChange} type='password' name='password' id='password' placeholder='Password...' required />
					</div>
					<button className='standard-btn'>Sign up</button>
					</form>
			</div>
    )
  }
}

SignUp.propTypes = {
  register: PropTypes.func.isRequired,
	returnErrors: PropTypes.func.isRequired,
	isAuthenticated: PropTypes.bool,
	error: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
	isAuthenticated: state.auth.isAuthenticated,
	error: state.error
})

export default connect(
	mapStateToProps,
	{ register, returnErrors }
	)(SignUp)
