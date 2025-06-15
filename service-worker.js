self.addEventListener('install', (e) => {
  console.log('Service Worker instalado');
  e.waitUntil(
    caches.open('mayorking-cache').then((cache) => {
      return cache.addAll([
        '/',
        '/index.html',
        '/css/style.css', // ajusta según tus archivos
        '/img/icon-192.png'
      ]);
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
