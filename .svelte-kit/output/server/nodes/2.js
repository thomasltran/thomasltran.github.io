

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.D77JfDLa.js","_app/immutable/chunks/scheduler.Bd0JhFKA.js","_app/immutable/chunks/index.XNoDbU4b.js","_app/immutable/chunks/spread.CgU5AtxT.js"];
export const stylesheets = ["_app/immutable/assets/2.DSmSGt81.css"];
export const fonts = [];
