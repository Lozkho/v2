
```javascript
self.addEventListener('install', (event) => {
  console.log('Service Worker installing.');
  event.waitUntil(
    caches.open('lozkho-stereo-v1').then((cache) => {
      return cache.addAll([
        '/',
        '/index.html',
        '/manifest.json',
        '/css/style.css',
        '/css/dark-mode.css',
        '/js/main.js',
        '/js/audio-engine.js',
        '/js/jingle-engine.js',
        '/js/file-index.js',
        '/js/utils.js',
        '/js/file-picker.js',
        '/icons/logo.png',
        '/icons/icon-192x192.png',
        '/icons/icon-512x512.png'
      ]);
    })
  );
});
