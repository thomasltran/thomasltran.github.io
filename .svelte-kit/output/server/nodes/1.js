

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.bFSV0_4n.js","_app/immutable/chunks/scheduler.PVTGYrHz.js","_app/immutable/chunks/index.tFzGzbmh.js","_app/immutable/chunks/singletons.IXfM2aul.js"];
export const stylesheets = [];
export const fonts = [];
