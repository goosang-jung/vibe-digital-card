const CACHE='ch09-pwa-v0.1.1';
const CORE=[
  './','./index.html','./styles.css','./app.js','./manifest.webmanifest','./offline.html',
  './assets/icons/icon-192.png','./assets/icons/icon-512.png',
  './assets/pages/p01.png','./assets/pages/p02.png','./assets/pages/p03.png','./assets/pages/p04.png','./assets/pages/p05.png','./assets/pages/p06.png','./assets/pages/p07.png','./assets/pages/p08.png','./assets/pages/p09.png','./assets/pages/p10.png','./assets/pages/p11.png','./assets/pages/p12.png','./assets/pages/p13.png','./assets/pages/p14.png','./assets/pages/p15.png','./assets/pages/p15_qr.png','./assets/pages/p16a.png','./assets/pages/p16b.png','./assets/pages/p17a.png','./assets/pages/p17b.png','./assets/pages/p18.png','./assets/pages/normal_desktop.png','./assets/pages/normal_mobile.png'
];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting()));});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET') return;
  e.respondWith(caches.match(e.request).then(hit=>hit||fetch(e.request).then(res=>{const copy=res.clone(); caches.open(CACHE).then(c=>c.put(e.request,copy)); return res;}).catch(()=> e.request.mode==='navigate'?caches.match('./offline.html'):undefined)));
});
