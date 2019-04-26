import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class TodoItem extends Component {
  render () {
    const { _id, title } = this.props.todo

    return (
      <div>
        <li>
          <input type='checkbox' onChange={this.props.toggleComplete.bind(this, _id)} />
          { title }
          <button onClick={this.props.onDeleteTodo.bind(this, _id)} style={btnStyle}>x</button>
        </li>
      </div>
    )
  }
}

const btnStyle = {
  background: '#ff0000',
  color: '#fff',
  border: 'none',
  padding: '5px 10px',
  borderRadius: '70%',
  cursor: 'pointer',
  float: 'right'
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  toggleComplete: PropTypes.func.isRequired,
  onDeleteTodo: PropTypes.func.isRequired
}

export default TodoItem
