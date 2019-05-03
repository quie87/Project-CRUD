import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import { Provider } from 'react-redux'
import store from './store'
// import register from './sw_register'
// import * as sw from './sw_cache_site'
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

// funkar typ
// function register () {
//   if ('serviceWorker' in navigator) {
//     window.addEventListener('load', () => {
//       navigator.serviceWorker
//         .register('./sw_cache_site.js')
//         // .register('./sw.js')
//         .then(reg => console.log('SW: register'))
//         .catch(err => console.log(`SW: failed ${err}`))
//     })
//   }
// }

// register()
