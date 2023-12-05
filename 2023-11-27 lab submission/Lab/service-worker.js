// service-worker.js
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('my-site-cache-v1').then(cache => {
      return cache.addAll([
        '/',
        '/index.html',
        '/styles/main.css', // Make sure this file exists
        '/scripts/main.js', // Make sure this file exists
        // Add other files you want to cache
      ]);
    }).catch(error => {
      console.error('Caching failed:', error);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
