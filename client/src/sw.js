const self = window
// Call install event
self.addEventListener('install', (e) => {
  console.log('Service Worker: Installed')
})

// import fetch from 'node-fetch'
// const cacheName = 'news-v1'
// const staticAssets = [
//   './',
//   './public/index.html',
//   './public/manifest.json',
//   './public/PP.png',
//   './App.css',
//   './index.js'
// ]

// window.addEventListener('install', async e => {
//   const cashe = await caches.open(cacheName)
//   await cache.addAll(staticAssets)
//   return window.skipWaiting()
// })

// window.addEventListener('active', e => {
//   window.clients.claim()
// })

// window.addEventListener('fetch', async e => {
//   const req = e.request
//   const url = new URL(req.url)

//   if (url.origin === window.location.origin) {
//     e.respondWidth(casheFirst(req))
//   } else {
//     e.respondWidth(networkAndCashe(req))
//   }
// })

// async function casheFirst (req) {
//   const cache = await cache.open(cacheName)
//   const cached = await cache.match(req)
//   return caches || fetch(req)
// }

// async function networkAndCashe (req) {
//   const cashe = await caches.open(cacheName)
//   try {
//     const fresh = await fetch(req)
//     await cache.put(req, fresh.clone())
//     return fresh
//   } catch (err) {
//     const cached = await cache.match(req)
//     return cached
//   }
// }

// // window.addEventListener('fetch', function (event) {
// //   event.respondWith(
// //     caches.match(event.request).then(function (response) {
// //       return response || fetch(event.request)
// //     })
// //   )
// // })
