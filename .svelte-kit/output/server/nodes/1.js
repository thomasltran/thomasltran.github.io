

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.D236hbs6.js","_app/immutable/chunks/scheduler.Bd0JhFKA.js","_app/immutable/chunks/index.XNoDbU4b.js","_app/immutable/chunks/entry.-Xvw8wnU.js"];
export const stylesheets = [];
export const fonts = [];
