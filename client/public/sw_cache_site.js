const cacheName = 'v1'

// const urlsToPrefetch = [
//   '/api/auth/user',
//   '/static/css/main.9798b67c.chunk.css',
//   '/static/js/main.72205561.chunk.js'
// ]
// Call install event
self.addEventListener('install', (e) => {
  console.log('Service Worker: Installed')

  // e.waitUntil(
  //   caches
  //     .open(cacheName)
  //     .then(cache => {
  //       console.log('Service worker caching files')
  //       cache.add(urlsToPrefetch)
  //     })
  //     .then(() => self.skipWaiting())
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

// self.addEventListener('fetch', event => {
//   console.log('service worker: fetching...')

//   if (event.request.method !== 'GET') return

//   event.respondWith(
//     caches.open(cacheName)
//       .then(cache => {
//         return cache.match(event.request).then(cacheResponse => {
//           const fetchPromise = fetch(event.request).then(networkResponse => {
//             cache.put(event.request, networkResponse.clone())
//             return networkResponse
//           })
//           return cacheResponse || fetchPromise
//         })
//       }).catch(() => console.log('You are offline, serving cached content'))
//   )
// })

self.addEventListener('fetch', event => {
  // Let the browser do its default thing
  // for non-GET requests.
  if (event.request.method !== 'GET') return

  // Prevent the default, and handle the request ourselves.
  event.respondWith(async function () {
    // Try to get the response from a cache.
    const cache = await caches.open(cacheName)
    const cachedResponse = await cache.match(event.request)

    if (cachedResponse) {
      // If we found a match in the cache, return it, but also
      // update the entry in the cache in the background.
      event.waitUntil(cache.add(event.request))
      return cachedResponse
    }

    // If we didn't find a match in the cache, use the network.
    return fetch(event.request)
  }())
})
