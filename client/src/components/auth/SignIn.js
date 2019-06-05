import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { login } from '../../actions/authActions'
import Notification from '../func_comp/Notifications'

class SignIn extends Component {
	state = {
		email: '',
		password: '',
		msg: null
	}

	componentDidUpdate(prevProps) {
		const { error, isAuthenticated } = this.props
		if (error !== prevProps.error) {
			//Check for register error
			if (error.id === 'LOGIN_FAIL') {
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

		const { email, password } = this.state

		const user = {
			email,
			password
		}

		this.props.login(user)
	}

  render () {
    return (
      <div className='innerWrapper'>
				<form onSubmit={this.handleSubmit} >
				<h4 className='signin'>Sign In</h4>
				{this.state.msg ? <Notification /> : null }
					<div>
						<label>Email</label>
						<input onChange={this.handleChange} type='email' name='email' id='email' placeholder='Email...' required />
					</div>
					<div>
						<label>Password</label>
						<input onChange={this.handleChange} type='password' name='password' id='password' placeholder='Password...' required />
					</div>
					<button className='standard-btn'>Sign in</button>					
					</form>
			</div>
    )
  }
}

SignIn.propTypes = {
	isAuthenticated: PropTypes.bool,
	login: PropTypes.func.isRequired,
	error: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
	isAuthenticated: state.auth.isAuthenticated,
	auth: state.auth,
	error: state.error
})

export default connect(
	mapStateToProps,
	{ login }
	)(SignIn)
