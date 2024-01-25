import { c as create_ssr_component, v as validate_component } from "./ssr.js";
import { P as Post } from "./post.js";
const metadata = { "date": "2024-1-9", "day": "Rest" };
const _2024_1_9 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Post, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign({}, $$props, metadata), {}, {
    default: () => {
      return `<p data-svelte-h="svelte-1kzq7u5">Much needed rest day. Been eating a lot more lately in an attempt to replenish my energy levels. Also still haven’t been able to fix my sleep schedule; it should be good today because I didn’t take any naps.</p> <p data-svelte-h="svelte-ps3hsh">To better days ahead…</p>`;
    }
  })}`;
});
export {
  _2024_1_9 as default,
  metadata
};
