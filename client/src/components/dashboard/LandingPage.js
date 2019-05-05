import React, { Component } from 'react'
import SignUp from '../auth/SignUp'
import computer from '../../images/computer.png'

class LandingPage extends Component {
  render () {
    return (
      <div className='row'>
        <div >
          <img src={computer} alt='phone' className='landing-img col s12 m6 l8' />
        </div>
        <div className='signup col s12 m6 l4' >
          <SignUp />
        </div>

        <div className='col s12 m12 l12 center'>
          <div className='main'>
            <h1>
              Why join us?
            </h1>
          </div>
          <div className='col s12 m6 l6'>
            <p>
              That is a question I ask my self all the time. I know there is alot to do but what was it?
              Sometimes it´s hard to remember when there is alot on you´re plate and if you are like me, jugnling all
              those balls can be hard.
            </p>
          </div>
          <div className='col s12 m6 l6'>
            <p>Therefor I created this app. Register for free and start adding your project and stuff to do.
              That way you can get organized and atleast have one less thing to think about!
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default LandingPage
