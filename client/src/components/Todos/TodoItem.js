import React, { Component } from 'react'
import PropTypes from 'prop-types'

/**
 * Childcomponent to Todos. Decides how to present a singel todoitem
 */
export class TodoItem extends Component {
  render () {
    const { _id, title, completed } = this.props.todo

    return (
      <div>
        <li className='flex-container' style={{ textDecoration: completed ? 'line-through' : 'none' }}>
          <label>
            <input className='flex-2 togglebox'
              id={_id}
              type='checkbox'
              checked={completed}
              onChange={this.props.toggleComplete.bind(this, _id)}
            />
            <span className='checkmark' />
          </label>
          <span className='flex-1'> { title } </span>
          <button className='remove-btn flex-3' onClick={this.props.onDeleteTodo.bind(this, _id)}><i className='fa fa-trash' /></button>
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
