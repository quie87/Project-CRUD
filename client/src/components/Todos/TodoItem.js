import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class TodoItem extends Component {
	getStyle = () => {
		return {
			background: '#f4f4f4',
			padding: '10px',
			borderBottom: '1px #ccc dotted',
			textDecoration: this.props.todo.completed ?
			'line-through' : 'none'
		}
	}

	render () {
		// Deconstruction
		const { _id, title } = this.props.todo

    return (
      <div style={this.getStyle()}>
				<p>
					<input type="checkbox" onChange={this.props.toggleComplete.bind(this, _id)} />
					{ title }
					<button onClick={this.props.onDeleteClick.bind(this, _id)}>x</button>
				</p>
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
  onDeleteClick: PropTypes.func.isRequired
}

export default TodoItem
