import React, { Component } from 'react'

class SignIn extends Component {
	state = {
		email: '',
		password: ''
	}

	handleChange = (e) => {
		this.setState({
			[e.target.id]: e.target.value
		})
	}

	handleSubmit = (e) => {
		e.preventDefault()

		console.log(this.state)
	}

  render () {
    return (
      <div className='container'>
				<form onSubmit={this.handleSubmit} >
					<h5>Sign In</h5>
					<div>
						<label>Email</label>
						<input onChange={this.handleChange} type='email' id='email' placeholder='Email...' required />
					</div>
					<div>
						<label>Password</label>
						<input onChange={this.handleChange} type='password' id='password' placeholder='Password...' required />
					</div>
					<button>Log in</button>
					</form>
			</div>
    )
  }
}

export default SignIn
