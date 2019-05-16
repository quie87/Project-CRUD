const cacheName = 'v2'

// Call install event
self.addEventListener('install', (e) => {
  console.log('Service Worker: Installed')

  //   var urlsToPrefetch = [
  //     './static/pre_fetched.txt',
  //     './static/pre_fetched.html',
  //     'https://www.chromium.org/_/rsrc/1302286216006/config/customLogo.gif'
  //   ]

  // console.log('Handling install event. Resources to pre-fetch:', urlsToPrefetch)

  // event.waitUntil(
  //   caches.open(cacheName).then(cache => {
  //     cache.addAll(urlsToPrefetch.map(function (urlToPrefetch) {
  //       return new Request(urlToPrefetch, { mode: 'no-cors' })
  //     })).then(function () {
  //       console.log('All resources have been fetched and cached.')
  //     })
  //   }).catch(function (error) {
  //     console.error('Pre-fetching failed:', error)
  //   })
  // )
})

// Call activate event
self.addEventListener('activate', (e) => {
  console.log('Service Worker: Activated')

  // Remove unwanted caches
  e.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== cacheName) {
            console.log('Service worker: clear old cache')
            return caches.delete(cache)
          }
        })
      )
    })
  )
})

// Call fetch event
// self.addEventListener('fetch', e => {
//   console.log('service worker: fetching...')

//   e.respondWith(
//     fetch(e.request).then(res => {
//       const resClone = res.clone()
//       caches.open(cacheName)
//         .then(cache => {
//           // Add response to cache
//           cache.put(e.request, resClone)
//         })
//       return res
//     })
//       .catch(() => caches.match(e.request).then(res => res || fetch(e.request)))
//   )
// })

self.addEventListener('fetch', event => {
  console.log('service worker: fetching...')
  event.respondWith(
    caches.open(cacheName)
      .then(cache => {
        return cache.match(event.request).then(cacheResponse => {
          const fetchPromise = fetch(event.request).then(networkResponse => {
            cache.put(event.request, networkResponse.clone())
            return networkResponse
          })
          return cacheResponse || fetchPromise
        })
      }).catch(err => console.log('You are offline so therefor new content could not be fetched' + err))
  )
})
