import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { login } from '../../actions/authActions'

class SignIn extends Component {
	state = {
		email: '',
		password: ''
	}

	static propTypes = {
		isAuthenticated: PropTypes.bool,
		login: PropTypes.func.isRequired
	}

	componentDidUpdate(prevProps) {
		const { error } = this.props
		if (error !== prevProps.error) {
			//Check for register error
			if (error.id === 'LOGIN_FAIL') {
				this.setState({ msg: error.msg.msg })
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

		const { email, password } = this.state

		const user = {
			email,
			password
		}

		// Attemt to login user
		this.props.login(user)
	}

  render () {
    return (
      <div className='container'>
				<form onSubmit={this.handleSubmit} >
					<h5>Sign In</h5>
					<div>
						<label>Email</label>
						<input onChange={this.handleChange} type='email' name='email' id='email' placeholder='Email...' required />
					</div>
					<div>
						<label>Password</label>
						<input onChange={this.handleChange} type='password' name='password' id='password' placeholder='Password...' required />
					</div>
					<button>Log in</button>
					</form>
			</div>
    )
  }
}

const mapStateToProps = state => ({
	isAuthenticated: state.auth.isAuthenticated,
	error: state.error
})

export default connect(
	mapStateToProps,
	{ login }
	)(SignIn)
