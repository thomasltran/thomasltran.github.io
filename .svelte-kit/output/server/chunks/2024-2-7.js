import { c as create_ssr_component, v as validate_component } from "./ssr.js";
import { P as Post } from "./post.js";
const metadata = { "date": "2024-2-7", "day": "Legs" };
const _2024_2_7 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Post, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign({}, $$props, metadata), {}, {
    default: () => {
      return `<p data-svelte-h="svelte-xf7std">Hit legs in the dorm gym. Quads when doing leg extensions look side. Right one still looks pretty different than left side because of the quad tear I got a couple years ago, but still looks pretty freaky. Tried my best to keep the intensity pretty high to compensate for the lack of optimal equipment.</p> <p data-svelte-h="svelte-2kg4ih">Getting cardio out of the way before classes again. I think as long as I maintain this sort of cardio scheduling for Mondays and Wednesdays, school shouldn’t take too much of a toll on my energy when working out. Just have to keep getting used to it, since doing this like an hour-ish after hitting legs makes it more difficult.</p> <p data-svelte-h="svelte-ps3hsh">To better days ahead…</p>`;
    }
  })}`;
});
export {
  _2024_2_7 as default,
  metadata
};
