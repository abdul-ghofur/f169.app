self.addEventListener("install", (event) => {
  console.log("Service Worker: Installed");
  event.waitUntil(
    caches.open("f169-cache").then((cache) => {
      return cache.addAll([
        "index.html",
        "index.html",
        "manifest.json",
        "logo_192x192.png",
        "logo_512x512.png",
        "logo_92x92.png",
      ]);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});