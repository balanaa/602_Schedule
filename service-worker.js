const CACHE_NAME = "schedule-pwa-v1";
const FILES_TO_CACHE = [
   "/602_Schedule/",
    "/602_Schedule/index.html",
    "/602_Schedule/schedule.css",
    "/602_Schedule/clock.js",
    "/602_Schedule/bg.img",
    "/602_Schedule/favicon.png",
    "/602_Schedule/icon-192x192.png",
    "/602_Schedule/icon-512x512.png"
];

// Install Service Worker and cache files
self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(FILES_TO_CACHE);
        })
    );
});

// Serve files from cache when offline
self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});

// Remove old caches when updating
self.addEventListener("activate", (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cache) => {
                    if (cache !== CACHE_NAME) {
                        return caches.delete(cache);
                    }
                })
            );
        })
    );
});
