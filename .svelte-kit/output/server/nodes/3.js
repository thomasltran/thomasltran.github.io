import * as universal from '../entries/pages/blog/_page.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/blog/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/blog/+page.js";
export const imports = ["_app/immutable/nodes/3.-GEqG7fD.js","_app/immutable/chunks/scheduler.PVTGYrHz.js","_app/immutable/chunks/index.tFzGzbmh.js"];
export const stylesheets = ["_app/immutable/assets/3.yGP8JhwG.css"];
export const fonts = [];
