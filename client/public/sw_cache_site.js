const cacheName = 'v2'

// Call install event
self.addEventListener('install', (e) => {
  console.log('Service Worker: Installed')
})

// Call activate event
self.addEventListener('activate', (e) => {
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
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return

  e.respondWith(
    fetch(e.request).then(res => {
      const resClone = res.clone()
      caches.open(cacheName)
        .then(cache => {
          // Add response to cache
          cache.put(e.request, resClone)
        })
      return res
    })
      .catch(() => caches.match(e.request).then(res => res || fetch(e.request)))
  )
})

// Below is a kodsnippet for "Cache first". It does not yet work as intended so therefor it is disabled at this point.

// self.addEventListener('fetch', event => {
//   console.log('service worker: fetching...')

//   // if (event.request.method !== 'GET') return
//   if (event.request.method !== 'GET') return

//   event.respondWith(
//     caches.open(cacheName)
//       .then(cache => {
//         return cache.match(event.request).then(cacheResponse => {
//           const fetchPromise = fetch(event.request).then(networkResponse => {
//             cache.put(event.request, networkResponse.clone())
//             return networkResponse
//           }).catch(() => console.log('You are offline, serving cached content, will update when you get connection'))
//           return cacheResponse || fetchPromise
//         })
//       }).catch(() => console.log('You are offline, serving cached content'))
//   )
// })
