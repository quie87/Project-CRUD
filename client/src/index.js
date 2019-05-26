import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import { Provider } from 'react-redux'
import store from './store'
// import * as serviceWorker from './serviceWorker'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'))

// serviceWorker.register()

function register () {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker
        .register('./sw_cache_site.js')
        .then(reg => console.log('SW: register'))
        .catch(err => console.log(`SW: failed ${err}`))
    })
  }
}

register()
