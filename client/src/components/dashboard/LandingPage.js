import React, { Component } from 'react'
import SignUp from '../auth/SignUp'

class LandingPage extends Component {
  render () {
    return (
      <div className='row innerWrapper'>
        <div className='box-left col s12 m8 l6'>
          <div className='box1'>
            <h1>
				Keep It Simple, <br />
				Get Stuff Done
            </h1>
            <p>
				Get Stuff Done is what you need to plan, organize and to get the sweet satisfaction of
				checking all your stuff off once you´re done! From projects to shopping lists, Get Stuff done
				will make your life easier whenever and wherever you are. <br />
				All at the same place with an easy layout.
            </p>
          </div>
          <div className='box2'>
            <ul>
              <li>
                    Easy overview of your projects, lists and tasks
              </li>
              <li>
                    Whenever; online or offline
              </li>
              <li>
                    Wherever; on your desktop, tablet and phone
              </li>
              <li>
                    Easy access, just a push on an icon and you can start getting stuff done
              </li>
            </ul>
          </div>
        </div>
        <div className='box-right col s12 m4 l6'>
          <div className='box2 signup' >
            <SignUp />
          </div>
        </div>
      </div>
    )
  }
}

export default LandingPage
