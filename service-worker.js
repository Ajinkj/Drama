// service-worker.js
self.addEventListener('install', function(event) {
    event.waitUntil(
      caches.open('drama-sounds-cache').then(function(cache) {
        return cache.addAll([
          './',
          'index.html',
          'background1.mp3',
          'background2.mp3',
          'tune1.mp3',
          'tune2.mp3',
          'special1.mp3',
          'special2.mp3'
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request).then(function(response) {
        return response || fetch(event.request);
      })
    );
  });