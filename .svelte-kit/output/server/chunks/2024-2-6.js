import { c as create_ssr_component, v as validate_component } from "./ssr.js";
import { P as Post } from "./post.js";
const metadata = { "date": "2024-2-6", "day": "Arms" };
const _2024_2_6 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Post, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign({}, $$props, metadata), {}, {
    default: () => {
      return `<p data-svelte-h="svelte-1e4o4hj">Solid arm pump. Same things with tempo and form. Food options a little scarce this week compared to last but making do.</p> <p data-svelte-h="svelte-1fuc7yp">Probably hitting legs in the dorm gym again tomorrow to save time before class for cardio. Much more convenient and not too much of a loss compared to going to McComas.</p> <p data-svelte-h="svelte-ps3hsh">To better days ahead…</p>`;
    }
  })}`;
});
export {
  _2024_2_6 as default,
  metadata
};
