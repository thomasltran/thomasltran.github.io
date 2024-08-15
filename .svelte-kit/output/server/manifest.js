export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".nojekyll","bench.jpg","current_book.jpg","email.svg","favicon.ico","favicon.png","github-mark.svg","image.png","linkedin.svg"]),
	mimeTypes: {".jpg":"image/jpeg",".svg":"image/svg+xml",".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.Zka5cgEm.js","app":"_app/immutable/entry/app.DgcRJnJu.js","imports":["_app/immutable/entry/start.Zka5cgEm.js","_app/immutable/chunks/entry.-Xvw8wnU.js","_app/immutable/chunks/scheduler.Bd0JhFKA.js","_app/immutable/entry/app.DgcRJnJu.js","_app/immutable/chunks/preload-helper.D6kgxu3v.js","_app/immutable/chunks/scheduler.Bd0JhFKA.js","_app/immutable/chunks/index.XNoDbU4b.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
