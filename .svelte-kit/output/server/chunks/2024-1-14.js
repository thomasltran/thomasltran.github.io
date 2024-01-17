import { c as create_ssr_component, v as validate_component } from "./ssr.js";
import { P as Post } from "./post.js";
const metadata = { "date": "2024-1-14", "day": "Rest" };
const _2024_1_14 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Post, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign({}, $$props, metadata), {}, {
    default: () => {
      return `<p data-svelte-h="svelte-wlnp0h">Back on campus. Just doing some cardio today and getting ready to eat chicken for the next two months or so. Probably gonna maintain weight until February 14th then cut to 140 and hopefully the six pack appears then.</p> <p data-svelte-h="svelte-ps3hsh">To better days ahead…</p>`;
    }
  })}`;
});
export {
  _2024_1_14 as default,
  metadata
};
