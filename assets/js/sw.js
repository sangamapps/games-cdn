const staticCacheName = 'site-static-v3.0.0';
const assets = [
  /** JS files */
  '/assets/js/bundle/main.js',
  /** Image files */
  '/assets/images/ass.png',
  '/assets/images/CLUB.png',
  '/assets/images/DIAMOND.png',
  '/assets/images/favicon.png',
  '/assets/images/HEART.png',
  '/assets/images/joker.png',
  '/assets/images/othello.png',
  '/assets/images/SPADE.png',
  '/assets/images/uno.png',
  /** Audio files */
  '/assets/music/new-notify.mp3',
  '/assets/music/error-notify.mp3',
  '/assets/music/light-notify.mp3',
  '/assets/music/buzz-notify.mp3',
];
// install event
self.addEventListener('install', evt => {
  evt.waitUntil(
    caches.open(staticCacheName).then((cache) => {
      cache.addAll(assets);
    })
  );
});
// activate event
self.addEventListener('activate', evt => {
  evt.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(keys
        .filter(key => key !== staticCacheName)
        .map(key => caches.delete(key))
      );
    })
  );
});
// fetch event
self.addEventListener('fetch', evt => {
  evt.respondWith(
    caches.match(evt.request).then(cacheRes => {
      return cacheRes || fetch(evt.request);
    })
  );
});