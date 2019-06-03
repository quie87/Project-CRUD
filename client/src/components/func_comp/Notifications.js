import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Row, Col, CardPanel } from 'react-materialize'
import PropTypes from 'prop-types'

class Notification extends Component {
  render () {
    const { error } = this.props

    return (
      <div>
        { error.msg
          ? <Row>
            <Col s={12} m={12} l={12} className=' notifications'>
              <CardPanel className='notifications-warning'>
                <span className='white-text'>
                  { error.msg }
                </span>
              </CardPanel>
            </Col>
          </Row>
          : null
        }
      </div>
    )
  }
}

Notification.propTypes = {
  error: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  error: state.error
})

export default connect(
  mapStateToProps,
  null
)(Notification)
