// 🔥 Importar Firebase en modo compat (necesario en service worker)
importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-messaging-compat.js');

// 🔥 Configuración Firebase
firebase.initializeApp({
  apiKey: "AIzaSyDdDhrzE-nRlY-i83DFH1GyjlAgrWcDOuQ",
  authDomain: "student-control-push.firebaseapp.com",
  projectId: "student-control-push",
  messagingSenderId: "125205496337",
  appId: "1:125205496337:web:bc0f3c4466ae7d57bb67b0"
});

// 🔥 Inicializar messaging
const messaging = firebase.messaging();

// 🔥 Notificaciones en segundo plano
messaging.onBackgroundMessage(function(payload) {
  console.log("Mensaje en segundo plano:", payload);

  self.registration.showNotification(payload.notification.title, {
    body: payload.notification.body,
    icon: "/icon-192.png"
  });
});


// 🔹 Mantener instalación
self.addEventListener("install", event => {
  console.log("Service Worker instalado");
});

// 🔹 Mantener fetch
self.addEventListener("fetch", event => {
  event.respondWith(fetch(event.request));
});
