const cacheName = "cache-v1";
const res = [
	"/",
	"/index.html",
	"/image.html",
	"/folder.html",
	"/capture.html",
	"/media/app/img/logo.png",
	"/manifest.json",
	"/css/Init.css",
	"/css/index.css",
	"/css/image.css",
	"/css/folder.css",
	"/css/capture.css",
	"/js/index.js",
	"/js/image.js",
	"/js/capture.js",
	"/js/folder.js",
	"/js/Settings.js",
	"/js/APIs/Camera.js",
	"/js/APIs/Storage.js",
	"/UI/css/Loader.css",
	"/UI/css/OptionBox.css",
	"/UI/js/Loader.js",
	"/UI/js/OptionBox.js"
];

self.addEventListener("install", ev => {
	ev.waitUntil(caches.open(cacheName).then((cache)=>{
		cache.addAll(res);
	}).catch(()=>{
	}));
});

self.addEventListener("fetch", ev => {
	ev.respondWith(caches.match(ev.request)
		.then((cachedRes)=>{
			return cachedRes || fetch(ev.request);
		}));
});
