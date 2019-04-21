import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../../actions/todoActions'
import PropTypes from 'prop-types'

export class AddTodo extends Component {
	state = {
		title: ''
  }

	onSubmit = (e) => {
    e.preventDefault()

    const newItem = {
      title: this.state.title
    }

    this.props.addTodo(newItem)

		this.setState({ title: '' })
	}

	onChange = (e) => this.setState({ title: e.target.value })

  render () {
    return (
      <form onSubmit={this.onSubmit} style={{ display: 'flex' }}>
        <input type='text'
          className='title'
          style={{ flex: '10', padding: '5px' }}
					placeholder='Add Todo ...'
					value={this.state.title}
					onChange={this.onChange}
        />
        <input
          type='submit'
          value='submit'
          className='btn'
					style={{ flex: 1 }}
        />
      </form>
    )
  }
}

// PropTypes
AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  todo: state.todos
})

export default connect(mapStateToProps, { addTodo })(AddTodo)
