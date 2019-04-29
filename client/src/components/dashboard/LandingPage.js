import React, { Component } from 'react'

class LandingPage extends Component {
  render () {
    return (
      <div className='row'>
        <div className='col s12 m4 l4'>
          <div className='main-content'>
            <div className='main-headline'>
              <h1>
              What to do?
              </h1>
            </div>
            <div className='main-massage'>
              <p>
              That is a question I ask my self all the time. I know there is alot to do but what was it?
              Sometimes it´s hard to remember when there is alot on you´re plate and if you are like me, jugnling all
              those balls can be hard.
              </p>
            </div>
            <div className='main-final'>
              <p>Therefor I created this app. Register for free and start adding your project and stuff to do.
              That way you can get organized and atleast have one less thing to think about!
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default LandingPage
