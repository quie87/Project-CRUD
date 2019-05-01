import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import { Provider } from 'react-redux'
import store from './store'
import * as serviceWorker from './serviceWorker'
// import { setState } from './LocalStorage'

// store.subscribe(() => setState(store.getState()))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

// the react way
serviceWorker.register()

// test 2
// async function registerSW () {
//   if ('serviceWorker' in navigator) {
//     try {
//       await navigator.serviceWorker.register('./sw.js')
//       console.log('SW registration success')
//     } catch (e) {
//       console.log('SW registration failed')
//     }
//   }
// }

// if ('serviceWorker' in navigator) {
//   window.addEventListener('load', () => {
//     navigator.serviceWorker
//       .register('./sw.js')
//       .then(reg => console.log('SW: register'))
//       .catch(err => console.log(`SW: failed ${err}`))
//   })
// }

// registerSW()
