

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.1WHuYAGr.js","_app/immutable/chunks/scheduler.PVTGYrHz.js","_app/immutable/chunks/index.tFzGzbmh.js","_app/immutable/chunks/singletons.xG7JwLbV.js"];
export const stylesheets = [];
export const fonts = [];
