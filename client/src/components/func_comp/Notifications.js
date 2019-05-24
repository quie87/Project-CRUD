import React from 'react'
import { Row, Col, CardPanel } from 'react-materialize'

const Notification = props => {
  return (
    <div>
      { props.notification.msg
        ? <Row>
          <Col s={12} m={12} l={12} className=' notifications'>
            <CardPanel className='notifications-warning'>
              <span className='white-text'>
                { props.notification.msg }
              </span>
            </CardPanel>
          </Col>
        </Row>
        : null
      }
    </div>
  )
}

export default Notification
