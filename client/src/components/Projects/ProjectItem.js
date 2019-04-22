import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class ProjectItem extends Component {
	getStyle = () => {
		return {
			background: '#f4f4f4',
			padding: '10px',
			borderBottom: '1px #ccc dotted'
		}
	}

	render () {
		const { _id, name } = this.props.project

    return (
      <div style={this.getStyle()}>
				<p>
					{ name }
					<button onClick={this.props.onDeleteClick.bind(this, _id)} style={btnStyle}>x</button>
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

ProjectItem.propTypes = {
	project: PropTypes.object.isRequired,
  onDeleteClick: PropTypes.func.isRequired
}

export default ProjectItem
