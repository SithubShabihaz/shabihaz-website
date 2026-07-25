const CACHE_NAME = "shabihaz-cache-v1";

const urlsToCache = [
  "/",
  "/manifest.json"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        return response || fetch(event.request);
      })
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((cache) => {
          if(cache !== CACHE_NAME){
            return caches.delete(cache);
          }
        })
      )
    )
  );
});

// ==========================================
// BACKGROUND PUSH & BADGE IMPLEMENTATION
// ==========================================

// Jab app band ho aur server se naya data aane par push notification trigger ho
self.addEventListener("push", (event) => {
  let data = { 
    title: "New Notification", 
    body: "Aapko aik naya message ya booking mili hai.", 
    badgeCount: 1,
    url: "/admin"
  };
  
  if (event.data) {
    try {
      data = event.data.json();
    } catch (e) {
      data.body = event.data.text();
    }
  }

  const options = {
    body: data.body,
    icon: "/icon.png", // Apne app ke logo ka path yahan dein agar zaroorat ho
    badge: "/icon.png",
    data: { url: data.url }
  };

  event.waitUntil(
    Promise.all([
      // 1. System notification show karega
      self.registration.showNotification(data.title, options),
      
      // 2. App icon par red badge update karega (supported browsers mein)
      ('setAppBadge' in navigator) ? navigator.setAppBadge(data.badgeCount) : Promise.resolve()
    ])
  );
});

// Jab user notification par click kare, toh app khul jaye
self.addEventListener("notificationclick", (event) => {
  event.notification.close();
  const targetUrl = event.notification.data?.url || "/admin";

  event.waitUntil(
    clients.matchAll({ type: "window", includeUncontrolled: true }).then((windowClients) => {
      // Agar app ka koi tab pehle se khula hai toh usay focus kar lein
      for (let client of windowClients) {
        if (client.url.includes(targetUrl) && 'focus' in client) {
          return client.focus();
        }
      }
      // Agar tab band hai toh naya window/tab khol dein
      if (clients.openWindow) {
        return clients.openWindow(targetUrl);
      }
    })
  );
});
