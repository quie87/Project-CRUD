import React, { Component } from 'react'
import SignUp from '../auth/SignUp'
import computer from '../../images/computer.png'

class LandingPage extends Component {
  render () {
    return (
      <div className='row innerWrapper'>
        <div >
          <img src={computer} alt='phone' className='landing-img col s12 m8 l6' />
        </div>
        <div className='signup col s12 m4 l6' >
          <SignUp />
        </div>

        <div className='col s12 m12 l12 center'>
          <div className='main'>
            <h1>
              Keep it simple, don't forget
            </h1>
          </div>
          <div className='boxes'>
            <div className='box1 col s12 m6 l6'>
              <p>
                Project planner is now available to help you plan and structure your projects and tasks.
                Make your life easier by having all your planning in one reliable place that is allways available. <br />

                No more frustration over slow or no internet connection.
                Project planner makes it possible for you to keep navigating thrue your projects, even when offline!
              </p>
            </div>
            <div className='box2 col s12 m6 l6'>
              <ul>
                <li>
                    Easy overview of your projects and tasks
                </li>
                <li>
                    Can be used on desktops, tablets and phones
                </li>
                <li>
                    You can navigate thrue your projects, even when offline!
                </li>
                <li>
                    Possible to shortcut icon on your phone or tablet
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default LandingPage
