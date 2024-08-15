import { c as create_ssr_component, v as validate_component } from "./ssr.js";
import { P as Post } from "./post.js";
const metadata = { "date": "2024-7-22", "day": "Chest" };
const _2024_7_22 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Post, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign({}, $$props, metadata), {}, {
    default: () => {
      return `<p data-svelte-h="svelte-11wwfw0">Mega pumped up today. I noticed the smith machine was broken after putting on 135 and feeling a bunch of resistance on the bar. Switched over to incline db’s instead and felt pretty smooth with the 70’s. Basically just improvised my exercise selection based on equipment availability today and it went pretty good.</p> <p data-svelte-h="svelte-1wnhzf5">Trying to drink more water but I’m not at a good level yet. Hopped on creatine today and I’m a bit anxious about possible side effects. Hopefully it’ll be alright.</p> <p data-svelte-h="svelte-ps3hsh">To better days ahead…</p>`;
    }
  })}`;
});
export {
  _2024_7_22 as default,
  metadata
};
