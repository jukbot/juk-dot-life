"use strict";
window.dataLayer = window.dataLayer || [];

function gtag() {
  dataLayer.push(arguments);
}
gtag("js", new Date());
gtag("config", "UA-115454106-2");

if ("serviceWorker" in navigator && location.protocol === "https:") {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').then(function(registration) {
      // Registration was successful
      console.log('Service Worker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('Service Worker registration failed: ', err);
    });
  });
}
