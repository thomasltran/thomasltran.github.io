import { c as create_ssr_component, v as validate_component } from "./ssr.js";
import { P as Post } from "./post.js";
const metadata = { "date": "2024-1-4", "day": "Rest" };
const _2024_1_4 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Post, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign({}, $$props, metadata), {}, {
    default: () => {
      return `<p data-svelte-h="svelte-3qb1w8">Something about breaks is that I have to take more rest days than I want to. It’s just the way my split is set up I guess.</p> <p data-svelte-h="svelte-ofmw35">Was also thinking about why my legs seem to be suffering in strength loss a lot lately. I think it’s probably because fat/mass is burning off around that area now. When I started cutting initially, it happened to my arms/upper body first, so maybe it transitioned to the lower parts now. I’ve heard that belly fat is pretty much the last area to go, so gotta keep pushing through for abs to show up.</p> <p data-svelte-h="svelte-ps3hsh">To better days ahead…</p>`;
    }
  })}`;
});
export {
  _2024_1_4 as default,
  metadata
};
