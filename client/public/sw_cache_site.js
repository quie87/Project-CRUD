const cacheName = 'v2'

// Call install event
self.addEventListener('install', (e) => {
  console.log('Service Worker: Installed')
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

self.addEventListener('fetch', event => {
  console.log('service worker: fetching...')

  // if (event.request.method !== 'GET') return
  if (event.request.method !== 'GET') {
    event.respondWith(
      caches.open(cacheName)
        .then(cache => {
          const fetchPromise = fetch(event.request).then(networkResponse => {
            cache.put(event.request, networkResponse.clone())
            return networkResponse
          }).catch(() => console.log('You are offline, can´t add or delete items at this point, try again when you get connection'))
          return fetchPromise
        })
    )
  }

  event.respondWith(
    caches.open(cacheName)
      .then(cache => {
        return cache.match(event.request).then(cacheResponse => {
          const fetchPromise = fetch(event.request).then(networkResponse => {
            cache.put(event.request, networkResponse.clone())
            return networkResponse
          }).catch(() => console.log('You are offline, serving cached content, will update when you get connection'))
          return cacheResponse || fetchPromise
        })
      }).catch(() => console.log('You are offline, serving cached content'))
  )
})
