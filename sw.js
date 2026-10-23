// Math Arcade service worker (v12)
// Loads from the saved copy first, so it never needs the network to open.
// When online, it quietly checks GitHub for a newer version in the background.
const CACHE = 'math-arcade-v12';
const FILES = ['./', './index.html', './manifest.webmanifest',
  './icons/icon-192.png', './icons/icon-512.png', './icons/apple-touch-icon.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys()
    .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});

function refresh(request) {
  return fetch(request).then(res => {
    if (res.ok) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(request, copy)); }
    return res;
  });
}

self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith((async () => {
    let cached = await caches.match(e.request, { ignoreSearch: true });
    if (!cached && e.request.mode === 'navigate') cached = await caches.match('./index.html');
    const online = self.navigator.onLine;
    if (cached) {
      if (online) e.waitUntil(refresh(e.request).catch(() => {}));
      return cached;
    }
    if (!online) return new Response('', { status: 504 });
    return refresh(e.request);
  })());
});
