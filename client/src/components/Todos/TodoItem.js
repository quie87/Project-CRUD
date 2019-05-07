import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class TodoItem extends Component {
  render () {
    const { _id, title, completed } = this.props.todo

    return (
      <div>
        <li style={{ textDecoration: completed ? 'line-through' : 'none' }}>
          <label className='togglebox'>
            <input type='checkbox' onChange={this.props.toggleComplete.bind(this, _id)} />
            <span className='checkmark' />
          </label>
          { title }
          <button className='remove-btn' onClick={this.props.onDeleteTodo.bind(this, _id)}><i className='fa fa-trash' /></button>
        </li>
      </div>
    )
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  toggleComplete: PropTypes.func.isRequired,
  onDeleteTodo: PropTypes.func.isRequired
}

export default TodoItem
