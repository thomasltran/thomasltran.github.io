import * as universal from '../entries/pages/blog/_slug_/_page.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/blog/_slug_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/blog/[slug]/+page.js";
export const imports = ["_app/immutable/nodes/4.FTGDSNr0.js","_app/immutable/chunks/preload-helper.0HuHagjb.js","_app/immutable/chunks/scheduler.PVTGYrHz.js","_app/immutable/chunks/index.tFzGzbmh.js"];
export const stylesheets = ["_app/immutable/assets/post.7-kErj5z.css"];
export const fonts = [];
