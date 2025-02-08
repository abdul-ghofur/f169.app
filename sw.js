const CACHE_NAME = 'f169-cache-v1';
const ASSETS = [
  'index.html',
  'navbar.css',
  'article-taweiem.css',
  'style-footer.css',
  'hasil.css',
  'icon-192x192.png',
  'icon-512x512.png',
  'icon-92x92.png'
];

// Install Service Worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(ASSETS))
  );
});

// Fetch Resource dari Cache
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => response || fetch(event.request))
  );
});