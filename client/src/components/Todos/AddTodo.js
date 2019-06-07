import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../../actions/todoActions'
import PropTypes from 'prop-types'
import { isActive } from '../../actions/projectActions';

/**
 * Component that handles functionallity to add todos. Renders a form to add todoitem
 */
export class AddTodo extends Component {
	state = {
    title: ''
  }

	onSubmit = (e) => {
    e.preventDefault()

    const { user } = this.props.auth
    const { isActive } = this.props.project

    const newItem = {
      title: this.state.title,
      parentName: isActive.projectName,
      userId: user._id
    }

    this.setState({ title: '' })

    this.props.addTodo(newItem)
	}

	onChange = (e) => this.setState({ title: e.target.value })

  render () {
    return (
      <form onSubmit={this.onSubmit} style={{ display: 'flex' }}>
        <input type='text'
          className='title'
          style={{ flex: 7, padding: '5px' }}
					placeholder='Add Task ...'
					value={this.state.title}
					onChange={this.onChange}
        />
        <input
          type='submit'
          value='Add'
          className='standard-btn'
					style={{ flex: 3 }}
        />
      </form>
    )
  }
}

// PropTypes
AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired,
  isActive: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  todo: state.todos,
  project: state.project,
  auth: state.auth
})

export default connect(mapStateToProps, { addTodo, isActive })(AddTodo)
