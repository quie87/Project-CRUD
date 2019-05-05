import React, { Component } from 'react'
import { connect } from 'react-redux'
import { register } from '../../actions/authActions'


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

		const { name, email, password } = this.state

		// Create user object
		const newUser = {
			name,
			email,
			password
		}

		// Attemt to register
		this.props.register(newUser)
	}

  render () {
    return (
      <div className='innerWrapper'>
				<form onSubmit={this.handleSubmit} >
					<h5>Signup</h5>
					<div>
						<label>Name</label>
						<input onChange={this.handleChange} type='text' name='name' id='name' placeholder='Name...' />
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

const mapStateToProps = state => ({
	isAuthenticated: state.auth.isAuthenticated,
	error: state.error
})

export default connect(
	mapStateToProps,
	{ register }
	)(SignUp)
