import * as universal from '../entries/pages/blog/_page.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/blog/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/blog/+page.js";
export const imports = ["_app/immutable/nodes/3.Co5XOTL9.js","_app/immutable/chunks/scheduler.Bd0JhFKA.js","_app/immutable/chunks/index.XNoDbU4b.js"];
export const stylesheets = ["_app/immutable/assets/3.BjZFX33C.css"];
export const fonts = [];
