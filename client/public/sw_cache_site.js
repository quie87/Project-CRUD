const cacheName = 'v1'

const urlsToPrefetch = [
  '/build',
  '/static/*',
  '/ajax/libs/*'
]
// Call install event
self.addEventListener('install', (e) => {
  console.log('Service Worker: Installed')

  e.waitUntil(
    caches
      .open(cacheName)
      .then(cache => {
        console.log('Service worker caching files')
        cache.add(urlsToPrefetch)
      })
      .then(() => self.skipWaiting())
  )
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

  if (event.request.method !== 'GET') return

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
      }).catch(() => console.log('You are offline, serving cached content'))
  )
})
