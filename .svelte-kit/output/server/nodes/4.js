import * as universal from '../entries/pages/blog/_slug_/_page.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/blog/_slug_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/blog/[slug]/+page.js";
export const imports = ["_app/immutable/nodes/4.CskFz3WM.js","_app/immutable/chunks/preload-helper.D6kgxu3v.js","_app/immutable/chunks/scheduler.Bd0JhFKA.js","_app/immutable/chunks/index.XNoDbU4b.js"];
export const stylesheets = ["_app/immutable/assets/post.Dv6QSuPn.css"];
export const fonts = [];
