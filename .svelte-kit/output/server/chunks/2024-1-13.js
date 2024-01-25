import { c as create_ssr_component, v as validate_component } from "./ssr.js";
import { P as Post } from "./post.js";
const metadata = { "date": "2024-1-13", "day": "Legs" };
const _2024_1_13 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Post, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign({}, $$props, metadata), {}, {
    default: () => {
      return `<p data-svelte-h="svelte-18b5ks">Normal leg day. It’s still difficult for me to train to the level of failure I should be doing on legs compared to other muscle groups. Country music helping a bit with that, but at the end of the day just gotta get the job done.</p> <p data-svelte-h="svelte-ps3hsh">To better days ahead…</p>`;
    }
  })}`;
});
export {
  _2024_1_13 as default,
  metadata
};
