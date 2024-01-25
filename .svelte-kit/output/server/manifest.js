export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".nojekyll","bench.jpg","current_book.jpg","email.svg","favicon.png","github-mark.svg","image.png","linkedin.svg"]),
	mimeTypes: {".jpg":"image/jpeg",".svg":"image/svg+xml",".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.SJjwGJ1j.js","app":"_app/immutable/entry/app.LBSjFd5o.js","imports":["_app/immutable/entry/start.SJjwGJ1j.js","_app/immutable/chunks/scheduler.PVTGYrHz.js","_app/immutable/chunks/singletons.IXfM2aul.js","_app/immutable/entry/app.LBSjFd5o.js","_app/immutable/chunks/preload-helper.0HuHagjb.js","_app/immutable/chunks/scheduler.PVTGYrHz.js","_app/immutable/chunks/index.tFzGzbmh.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
