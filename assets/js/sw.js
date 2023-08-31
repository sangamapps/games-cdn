const staticCacheName = 'site-static-v3.0.0';
const assets = [
  /** JS files */
  '/games/assets/js/bundle/main.js',
  /** Image files */
  '/games/assets/images/ass.png',
  '/games/assets/images/CLUB.png',
  '/games/assets/images/DIAMOND.png',
  '/games/assets/images/favicon.png',
  '/games/assets/images/HEART.png',
  '/games/assets/images/joker.png',
  '/games/assets/images/othello.png',
  '/games/assets/images/SPADE.png',
  '/games/assets/images/uno.png',
  /** Audio files */
  '/games/assets/music/new-notify.mp3',
  '/games/assets/music/error-notify.mp3',
  '/games/assets/music/light-notify.mp3',
  '/games/assets/music/buzz-notify.mp3',
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