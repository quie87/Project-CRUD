import React, { Component } from 'react'

class SignUp extends Component {
	state = {
		name: '',
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
					<h5>Register</h5>
					<div>
						<label>Name</label>
						<input onChange={this.handleChange} type='Name' id='name' placeholder='Name...' required />
					</div>
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

export default SignUp
