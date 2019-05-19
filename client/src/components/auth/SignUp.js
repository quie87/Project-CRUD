import React, { Component } from 'react'
import { connect } from 'react-redux'
import { register } from '../../actions/authActions'
import { returnErrors } from '../../actions/errorActions';
import { REGISTER_FAIL } from '../../actions/types';
import PropTypes from 'prop-types'
import Notification from '../func_comp/Notifications'


class SignUp extends Component {
	state = {
		name: '',
		email: '',
		password: '',
		msg: null
	}

	componentDidUpdate(prevProps) {
		const { error } = this.props
		if (error !== prevProps.error) {
			//Check for register error
			if (error.id === 'REGISTER_FAIL') {
				this.setState({ msg: error.msg })
			} else {
				this.setState({ msg: null })
			}
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
		if (password.length < 8) {
			this.props.returnErrors('Pls enter a password longer then 8 characters', 400, REGISTER_FAIL)
		} else {
			this.props.register(newUser)
		}
	}

  render () {
    return (
      <div className='innerWrapper'>
				<h4 className='center'>Signup</h4>
				<form onSubmit={this.handleSubmit} >
					<Notification notification={this.state}/>
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
  returnErrors: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
	isAuthenticated: state.auth.isAuthenticated,
	error: state.error
})

export default connect(
	mapStateToProps,
	{ register, returnErrors }
	)(SignUp)
